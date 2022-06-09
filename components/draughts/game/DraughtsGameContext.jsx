import { createContext, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDraughtsBoard } from '../board/DraughtsBoardContext';
import { useDraughtsTimer } from './timer/use-draughts-timer';
import { useDraughtsComputer } from './computer/use-draughts-computer';
import { Players } from '@draughts/core';

export const DraughtsGameContext = createContext();

export const useDraughtsGame = () => useContext(DraughtsGameContext);

export function DraughtsGameProvider(props) {
  const { resetBoard } = useDraughtsBoard();

  const [whiteTimer, resetWhiteTimer] = useDraughtsTimer(Players.WHITE);
  const [blackTimer, resetBlackTimer] = useDraughtsTimer(Players.BLACK);

  useDraughtsComputer();

  const restartGame = useCallback(() => {
    resetBoard();
    resetWhiteTimer();
    resetBlackTimer();
  }, [resetBoard, resetWhiteTimer, resetBlackTimer]);

  return (
    <DraughtsGameContext.Provider
      value={{ blackTimer, restartGame, whiteTimer }}
    >
      {props.children}
    </DraughtsGameContext.Provider>
  );
}

DraughtsGameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
