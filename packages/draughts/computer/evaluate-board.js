import {
  eachCell,
  pieceIsPlayer,
  pieceIsQueen,
  BOARD_SIZE,
  Players,
  GameStates,
} from '@draughts/core';

const winnerMap = {
  [GameStates.WHITE_WON]: Players.WHITE,
  [GameStates.BLACK_WON]: Players.BLACK,
};

export function evaluateBoard(board) {
  if (board.state === GameStates.DRAW) {
    return 0;
  }
  if (board.state !== GameStates.PLAYING) {
    const winner = winnerMap[board.state];
    return board.playerToMove === winner
      ? Number.POSITIVE_INFINITY
      : Number.NEGATIVE_INFINITY;
  }
  if (isEndgame(board)) {
    return evaluateEndgamePosition(board);
  }
  return evaluateRegularPosition(board);
}

function isEndgame(board) {
  for (const { piece } of eachCell(board.position)) {
    if (!pieceIsPlayer(piece, Players.NONE) && !pieceIsQueen(piece)) {
      return false;
    }
  }
  return true;
}

function evaluateEndgamePosition(board) {
  let playerPieces = 0;
  let opponentPieces = 0;
  let distances = 0;
  for (const { cell, piece } of eachCell(board.position)) {
    if (pieceIsPlayer(piece, board.playerToMove)) {
      playerPieces += 1;
      distances += calculateDistances(board, cell);
    } else if (!pieceIsPlayer(piece, Players.NONE)) {
      opponentPieces += 1;
    }
  }
  if (playerPieces >= opponentPieces) {
    return -distances;
  }
  return distances;
}

function evaluateRegularPosition(board) {
  let e = 0;
  for (const { cell, piece } of eachCell(board.position)) {
    const pieceEvaluation = evaluatePiece(cell, piece);
    if (pieceIsPlayer(piece, board.playerToMove)) {
      e += pieceEvaluation;
    } else if (!pieceIsPlayer(piece, Players.NONE)) {
      e -= pieceEvaluation;
    }
  }
  return e;
}

function evaluatePiece(cell, piece) {
  let e = 20;
  if (pieceIsQueen(piece)) {
    e += 40;
  } else if (pieceIsPlayer(piece, Players.WHITE)) {
    e += BOARD_SIZE - 1 - cell.row;
  } else if (pieceIsPlayer(piece, Players.BLACK)) {
    e += cell.row;
  }
  return e;
}

function calculateDistances(board, baseCell) {
  let distances = 0;
  for (const { cell, piece } of eachCell(board.position)) {
    if (
      !pieceIsPlayer(piece, board.playerToMove) &&
      !pieceIsPlayer(piece, Players.NONE)
    ) {
      distances += euclideanDistance(baseCell, cell);
    }
  }
  return distances;
}

function euclideanDistance(a, b) {
  const rowSquare = Math.pow(a.row - b.row, 2);
  const colSquare = Math.pow(a.col - b.col, 2);
  const distanceFloat = Math.sqrt(rowSquare + colSquare);
  return Math.ceil(distanceFloat);
}
