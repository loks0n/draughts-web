import { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Board, Pieces, Players } from '@draughts/core';

export const DraughtsBoardContext = createContext();

export const useDraughtsBoard = () => useContext(DraughtsBoardContext);

export function DraughtsBoardProvider(props) {
  const [lastMove, setLastMove] = useState(null);
  const [board, setBoard] = useState(
    new Board(props.position, props.playerToMove)
  );

  const doMove = useCallback((move) => {
    setBoard((board) => {
      return board.doMove(move);
    });
    setLastMove(move.path.at(-1));
  }, []);

  const resetBoard = useCallback(() => {
    setBoard(new Board(props.position, props.playerToMove));
    setLastMove(null);
  }, [props.position, props.playerToMove]);

  return (
    <DraughtsBoardContext.Provider
      value={{
        board,
        doMove,
        lastMove,
        resetBoard,
      }}
    >
      {props.children}
    </DraughtsBoardContext.Provider>
  );
}

export const DraughtsBoardProviderProps = {
  playerToMove: PropTypes.oneOf(Object.values(Players)),
  position: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(Object.values(Pieces)))
  ).isRequired,
};

DraughtsBoardProvider.propTypes = {
  children: PropTypes.node.isRequired,
  ...DraughtsBoardProviderProps,
};
