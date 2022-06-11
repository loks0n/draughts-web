import { ComputerDifficulty } from '../../settings/constants/computer-difficulty';
import { alphaBetaMove } from '@draughts/computer';
import { Board } from '@draughts/core';

const getRandomMove = (board) => {
  return board.moves.at(Math.floor(Math.random() * board.moves.length));
};

const getComputerMove = (board, difficulty) => {
  if (difficulty === ComputerDifficulty.MEDIUM) {
    return alphaBetaMove(board, 3);
  }
  if (difficulty === ComputerDifficulty.HARD) {
    return alphaBetaMove(board, 6);
  }
  return getRandomMove(board);
};

const getComputerTimeout = (board) => {
  return 200 + board.moves.length * Math.floor(Math.random() * 200);
};

addEventListener('message', (event) => {
  const startTime = Date.now();

  const board = new Board(
    event.data.board.position,
    event.data.board.playerToMove,
    event.data.board.firstMove
  );
  const move = getComputerMove(board, event.data.computerDifficulty);

  const endTime = Date.now();
  const elapsedTime = startTime - endTime;
  const waitTime = Math.max(0, getComputerTimeout(board) - elapsedTime);

  setTimeout(() => {
    postMessage(move);
  }, waitTime);
});
