import { useDrag } from 'react-dnd';
import { Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';
import { DraughtsCrown } from './DraughtsCrown';
import {
  compareCells,
  pieceIsPlayer,
  pieceIsQueen,
  Pieces,
  Players,
} from '@draughts/core';

export function DraughtsPiece(props) {
  const { board } = useDraughtsBoard();
  const { userPlayer } = useDraughtsSettings();

  const isWhite = pieceIsPlayer(props.piece, Players.WHITE);
  const activePlayer =
    pieceIsPlayer(props.piece, userPlayer) &&
    pieceIsPlayer(props.piece, board.playerToMove);

  const currentCell = { col: props.colIndex, row: props.rowIndex };

  const canDrag =
    activePlayer &&
    board.moves.some((move) => compareCells(move.path.at(0), currentCell));

  const [, dragRef] = useDrag(
    () => ({
      canDrag: () => canDrag,
      isDragging: (monitor) => compareCells(monitor.getItem(), currentCell),
      item: currentCell,
      type: 'piece',
    }),
    [board, canDrag, currentCell]
  );

  return (
    <Center
      ref={dragRef}
      zIndex="1"
      w="100%"
      h="100%"
      opacity={canDrag ? 1 : 0.8}
      borderWidth="0.2em"
      borderStyle="solid"
      borderColor={isWhite ? 'gray.400' : 'gray.600'}
      borderRadius="50%"
      bgColor={isWhite ? 'yellow.50' : 'gray.900'}
    >
      {pieceIsQueen(props.piece) && (
        <DraughtsCrown w="70%" h="70%" opacity="0.6" userSelect="none" />
      )}
    </Center>
  );
}

DraughtsPiece.propTypes = {
  colIndex: PropTypes.number,
  piece: PropTypes.oneOf(Object.values(Pieces)).isRequired,
  rowIndex: PropTypes.number,
};
