import {
  cellIsEmpty,
  queenPiece,
  eachCell,
  pieceIsPlayer,
  pieceIsQueen,
  shouldQueen,
  clonePosition,
  filterToLongestCaptures,
  cellWithinBounds,
} from './utilities';
import { Players, Pieces, GameStates } from '@draughts/core';

export class Board {
  constructor(position, playerToMove, firstMove = true) {
    this.position = position;
    this.playerToMove = playerToMove;
    this.firstMove = firstMove;

    this.direction = this.playerToMove === Players.WHITE ? -1 : 1;
    this.moves = this._computeMoves();
    this.state = this._computeState();
  }

  _computeState() {
    if (this.moves.length > 0) {
      return GameStates.PLAYING;
    }

    let blackPieces = 0;
    let whitePieces = 0;

    for (const { piece } of eachCell(this.position)) {
      if (pieceIsPlayer(piece, Players.WHITE)) {
        whitePieces = whitePieces + 1;
      } else if (pieceIsPlayer(piece, Players.BLACK)) {
        blackPieces = blackPieces + 1;
      }
    }

    this.playerToMove = Players.NONE;

    if (blackPieces === 0) {
      return GameStates.WHITE_WON;
    }

    if (whitePieces === 0) {
      return GameStates.BLACK_WON;
    }

    return GameStates.DRAW;
  }

  _computeMoves() {
    const starts = this._getStarts();
    const captures = this._getCaptures(starts);
    if (captures.length > 0) return captures;
    return this._getMoves(starts);
  }

  _getStarts() {
    const starts = [];
    for (const { cell, piece } of eachCell(this.position)) {
      if (pieceIsPlayer(piece, this.playerToMove)) {
        starts.push(cell);
      }
    }
    return starts;
  }

  _getCaptures(starts) {
    let captures = [];
    for (const start of starts) {
      captures = [
        ...captures,
        ...this._getNextCaptures(this.position, {
          captures: [],
          path: [start],
        }),
      ];
    }
    return filterToLongestCaptures(captures);
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  _getNextCaptures(initialPosition, move) {
    const captures = [];
    const start = move.path.at(-1);
    const piece = initialPosition[start.row][start.col];
    const possibleDRow = pieceIsQueen(piece) ? [-1, 1] : [1];

    for (const dRow of possibleDRow) {
      for (const dCol of [-1, 1]) {
        const middle = {
          col: start.col + dCol * this.direction,
          row: start.row + dRow * this.direction,
        };
        const end = {
          col: middle.col + dCol * this.direction,
          row: middle.row + dRow * this.direction,
        };

        if (!cellWithinBounds(end) || !cellIsEmpty(initialPosition, end))
          continue;

        const middlePiece = initialPosition[middle.row][middle.col];
        if (
          pieceIsPlayer(middlePiece, Players.NONE) ||
          pieceIsPlayer(middlePiece, this.playerToMove)
        )
          continue;

        const queened = shouldQueen(end, piece);
        const searchPosition = clonePosition(initialPosition);

        searchPosition[start.row][start.col] = Pieces.NONE;
        searchPosition[middle.row][middle.col] = Pieces.NONE;
        searchPosition[end.row][end.col] = queened ? queenPiece(piece) : piece;

        const nextMove = {
          captures: [...move.captures, middle],
          path: [...move.path, end],
        };

        captures.push(nextMove);
        if (!queened)
          captures.push(...this._getNextCaptures(searchPosition, nextMove));
      }
    }

    return filterToLongestCaptures(captures);
  }

  _getMoves(starts) {
    const moves = [];

    for (const start of starts) {
      const piece = this.position[start.row][start.col];
      const possibleDeltaRow = pieceIsQueen(piece) ? [-1, 1] : [1];
      for (const deltaRow of possibleDeltaRow) {
        for (const deltaCol of [-1, 1]) {
          const end = {
            col: start.col + deltaCol * this.direction,
            row: start.row + deltaRow * this.direction,
          };
          if (cellWithinBounds(end) && cellIsEmpty(this.position, end)) {
            moves.push({ captures: [], path: [start, end] });
          }
        }
      }
    }

    return moves;
  }

  doMove({ path, captures }) {
    const start = path.at(0);
    const startPiece = this.position[start.row][start.col];
    const end = path.at(-1);

    const endPiece = shouldQueen(end, startPiece)
      ? queenPiece(startPiece)
      : startPiece;

    const newPosition = clonePosition(this.position);
    newPosition[path.at(0).row][path.at(0).col] = Pieces.NONE;
    newPosition[end.row][end.col] = endPiece;

    for (const capture of captures) {
      newPosition[capture.row][capture.col] = Pieces.NONE;
    }

    const newPlayerToMove =
      this.playerToMove === Players.WHITE ? Players.BLACK : Players.WHITE;

    return new Board(newPosition, newPlayerToMove, false);
  }
}
