import { useEffect, useRef } from 'react';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';
import { Statuses } from '../../board/constants';
import { useDraughtsBoard } from '../../board/DraughtsBoardContext';

export function useDraughtsComputer() {
  const { board, doMove } = useDraughtsBoard();
  const { userPlayer, computerDifficulty } = useDraughtsSettings();

  const workerRef = useRef();
  useEffect(() => {
    if (board.status !== Statuses.PLAYING) return;
    if (board.playerToMove === userPlayer) return;

    workerRef.current = new Worker(new URL('worker.js', import.meta.url));

    const handleWorkerMessage = (event) => {
      doMove(event.data);
    };

    workerRef.current.addEventListener('message', handleWorkerMessage);
    workerRef.current.postMessage({ board, computerDifficulty });

    return () => {
      workerRef.current.removeEventListener('message', handleWorkerMessage);
      workerRef.current.terminate();
    };
  }, [board, userPlayer, computerDifficulty, doMove]);

  return null;
}
