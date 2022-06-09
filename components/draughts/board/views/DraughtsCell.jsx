import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { Box, Square } from '@chakra-ui/react';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { DraughtsPiece } from './DraughtsPiece';
import { compareCells, Pieces } from '@draughts/core';

DraughtsCell.propTypes = {
  colIndex: PropTypes.number.isRequired,
  piece: PropTypes.oneOf(Object.values(Pieces)).isRequired,
  rowIndex: PropTypes.number.isRequired,
};

export function DraughtsCell(props) {
  const { board, doMove, lastMove } = useDraughtsBoard();
  const isDark = (props.rowIndex + props.colIndex) % 2 === 0;
  const currentCell = { col: props.colIndex, row: props.rowIndex };
  const isLastMove = compareCells(currentCell, lastMove);

  const validMovePredicate = (start) => (move) => {
    const startMove = move.path.at(0);
    const endMove = move.path.at(-1);
    return compareCells(startMove, start) && compareCells(endMove, currentCell);
  };

  const [{ isOver, canDrop }, dropReference] = useDrop(
    () => ({
      accept: 'piece',
      canDrop: (start) => board.moves.some(validMovePredicate(start)),
      collect: (monitor) => ({
        canDrop: !!monitor.canDrop(),
        isOver: !!monitor.isOver(),
      }),
      drop: (start) => {
        doMove(board.moves.find(validMovePredicate(start)));
      },
    }),
    [board.moves, doMove]
  );

  let bg = 'gray.300';
  if (canDrop) {
    bg = 'lightblue';
  } else if ((canDrop && isOver) || isLastMove) {
    bg = 'lightgreen';
  } else if (isDark) {
    bg = 'gray.500';
  }

  return (
    <Square
      ref={dropReference}
      pos="relative"
      h="100%"
      p="0.2em"
      bg={bg}
      userSelect="none"
    >
      <Box
        pos="absolute"
        top="0.1rem"
        right="0.1rem"
        fontSize="0.4rem"
        opacity={0.4}
        userSelect="none"
      >
        {props.rowIndex}, {props.colIndex}
      </Box>
      {props.piece !== Pieces.NONE && (
        <DraughtsPiece
          piece={props.piece}
          rowIndex={props.rowIndex}
          colIndex={props.colIndex}
        />
      )}
    </Square>
  );
}
