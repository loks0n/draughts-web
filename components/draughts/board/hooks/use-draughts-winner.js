import { useMemo } from 'react';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';
import { Players, GameStates } from '@draughts/core';

export function useDraughtsWinner() {
  const { board } = useDraughtsBoard();
  const { userPlayer } = useDraughtsSettings();

  const winner = useMemo(() => {
    if (board.state === GameStates.WHITE_WON) return Players.WHITE;
    if (board.state === GameStates.BLACK_WON) return Players.BLACK;
    return Players.NONE;
  }, [board.state]);

  return { userWon: winner === userPlayer, winner };
}
