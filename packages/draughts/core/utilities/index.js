import { BOARD_SIZE, Pieces, Players } from '@draughts/core';

const isQueenMap = {
  [Pieces.NONE]: false,
  [Pieces.BLACK]: false,
  [Pieces.WHITE]: false,
  [Pieces.BLACK_QUEEN]: true,
  [Pieces.WHITE_QUEEN]: true,
};

export const pieceIsQueen = (piece) => isQueenMap[piece];

const isPlayerMap = {
  [Players.NONE]: new Set([Pieces.NONE]),
  [Players.WHITE]: new Set([Pieces.WHITE, Pieces.WHITE_QUEEN]),
  [Players.BLACK]: new Set([Pieces.BLACK, Pieces.BLACK_QUEEN]),
};

export const pieceIsPlayer = (piece, player) => {
  return isPlayerMap[player].has(piece);
};

export const cellWithinBounds = ({ row, col }) =>
  row < BOARD_SIZE && row >= 0 && col < BOARD_SIZE && col >= 0;

export const cellIsEmpty = (position, { row, col }) =>
  position[row][col] === Pieces.NONE;

export function* eachCell(position) {
  for (const [row, rowArray] of position.entries()) {
    for (const [col, piece] of rowArray.entries()) {
      yield { cell: { col, row }, piece };
    }
  }
}

const crownQueenMap = {
  [Pieces.BLACK]: Pieces.BLACK_QUEEN,
  [Pieces.WHITE]: Pieces.WHITE_QUEEN,
  [Pieces.BLACK_QUEEN]: Pieces.BLACK_QUEEN,
  [Pieces.WHITE_QUEEN]: Pieces.WHITE_QUEEN,
};

export const queenPiece = (piece) => crownQueenMap[piece];

export const shouldQueen = (cell, piece) => {
  if (pieceIsQueen(piece)) return false;
  return (
    (pieceIsPlayer(piece, Players.WHITE) && cell.row === 0) ||
    (pieceIsPlayer(piece, Players.BLACK) && cell.row === BOARD_SIZE - 1)
  );
};

export const filterToLongestCaptures = (moves) => {
  let longestCaptures = [];
  let recordLength = 0;
  for (const move of moves) {
    if (move.captures.length > recordLength) {
      longestCaptures = [move];
      recordLength = move.captures.length;
    } else if (move.captures.length === recordLength) {
      longestCaptures.push(move);
    }
  }
  return longestCaptures;
};

export const clonePosition = (position) => [...position.map((row) => [...row])];

export const compareCells = (cellOne, cellTwo) => {
  if (!cellOne || !cellTwo) return false;
  return cellOne.row === cellTwo.row && cellOne.col === cellTwo.col;
};

const formatPlayerMap = {
  [Players.NONE]: 'none',
  [Players.WHITE]: 'white',
  [Players.BLACK]: 'black',
};

export const formatPlayer = (player) => formatPlayerMap[player];
