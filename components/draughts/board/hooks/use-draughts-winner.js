import { useMemo } from 'react';
import { Players, Statuses } from '../constants';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';

export function useDraughtsWinner() {
  const { board } = useDraughtsBoard();
  const { userPlayer } = useDraughtsSettings();

  const winner = useMemo(() => {
    if (board.status === Statuses.WHITE_WON) return Players.WHITE;
    if (board.status === Statuses.BLACK_WON) return Players.BLACK;
    return Players.NONE;
  }, [board.status]);

  return { userWon: winner === userPlayer, winner };
}
