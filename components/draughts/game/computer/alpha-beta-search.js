import { quiescenceSearch } from './quiescence-search';
import { GameStates } from '@draughts/core';

const getShuffledArray = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

export function alphaBetaMove(board, depth) {
  let recordE = Number.NEGATIVE_INFINITY;
  let recordMove = null;

  for (const move of getShuffledArray(board.moves)) {
    const nextBoard = board.doMove(move);
    const e = -alphaBetaSearch(
      nextBoard,
      depth - 1,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
    if (e >= recordE) {
      recordE = e;
      recordMove = move;
    }
  }

  return recordMove;
}

export function alphaBetaSearch(board, depth, alpha, beta) {
  if (depth === 0 || board.state !== GameStates.PLAYING)
    return quiescenceSearch(board, alpha, beta);

  for (const move of board.moves) {
    const nextBoard = board.doMove(move);
    const e = -alphaBetaSearch(nextBoard, depth - 1, -beta, -alpha);
    if (e >= beta) return beta;
    alpha = Math.max(e, alpha);
  }

  return alpha;
}
