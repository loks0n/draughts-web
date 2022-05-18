export const Players = {
  BLACK: 'b',
  NONE: '',
  WHITE: 'w',
};

export const Statuses = {
  BLACK_WON: 'b',
  DRAW: 'd',
  PLAYING: 'p',
  WHITE_WON: 'w',
};

export const Pieces = {
  BLACK: 'b',
  BLACK_QUEEN: 'bq',
  NONE: '',
  WHITE: 'w',
  WHITE_QUEEN: 'wq',
};

export const BOARD_SIZE = 8;

export const INITIAL_POSITION = [
  [
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
  ],
  [
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
  ],
  [
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
    Pieces.NONE,
    Pieces.BLACK,
  ],
  [
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
  ],
  [
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
    Pieces.NONE,
  ],

  [
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
  ],

  [
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
  ],
  [
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
    Pieces.WHITE,
    Pieces.NONE,
  ],
];
