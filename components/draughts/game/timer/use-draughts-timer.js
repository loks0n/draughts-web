import { useState, useEffect, useMemo } from 'react';
import { useDraughtsBoard } from '../../board/DraughtsBoardContext';
import { GameStates } from '@draughts/core';

const TIMER_TICK = 100;
const INITIAL_TIME = 5 * 60 * 1000;

export function useDraughtsTimer(player) {
  const { board } = useDraughtsBoard();
  const [timer, setTimer] = useState(INITIAL_TIME);

  useEffect(() => {
    if (board.state !== GameStates.PLAYING) return;
    if (board.firstMove) return;
    if (board.playerToMove !== player) return;

    const interval = setInterval(() => {
      setTimer((timer) => {
        const updatedTime = timer - TIMER_TICK;
        return updatedTime >= 0 ? updatedTime : 0;
      });
    }, TIMER_TICK);

    return () => {
      clearInterval(interval);
      setTimer((timer) => timer + 1000);
    };
  }, [player, board, setTimer]);

  const timerInfo = useMemo(() => {
    const totalSeconds = Math.floor(timer / 1000);
    return {
      complete: timer === 0,
      millis: timer % 1000,
      minutes: Math.floor(totalSeconds / 60),
      seconds: totalSeconds % 60,
    };
  }, [timer]);

  const resetTimer = () => setTimer(INITIAL_TIME);

  return [timerInfo, resetTimer];
}
