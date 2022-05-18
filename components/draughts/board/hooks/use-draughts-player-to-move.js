import { useDraughtsBoard } from '../DraughtsBoardContext';

export function useDraughtsPlayerToMove(player) {
  const { board } = useDraughtsBoard();
  return player === board.playerToMove;
}
