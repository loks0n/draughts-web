import { evaluateBoard } from './evaluate-board';

export function quiescenceSearch(board, alpha, beta) {
  const baseE = evaluateBoard(board);

  if (baseE >= beta) return beta;
  alpha = Math.max(baseE, alpha);

  for (const move of board.moves) {
    if (move.captures.length <= 0) continue;

    const nextBoard = board.doMove(move);
    const e = -quiescenceSearch(nextBoard, -beta, -alpha);

    if (e >= beta) return beta;
    alpha = Math.max(e, alpha);
  }

  return alpha;
}
