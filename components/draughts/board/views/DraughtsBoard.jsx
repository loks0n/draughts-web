import { useMemo } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Grid, GridItem } from '@chakra-ui/react';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';
import { DraughtsCell } from './DraughtsCell';
import { DraughtsGameOverModal } from './DraughtsGameOverModal';
import { Players } from '@draughts/core';

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

export function DraughtsBoard() {
  const { board } = useDraughtsBoard();
  const { userPlayer } = useDraughtsSettings();

  const backend = useMemo(() => {
    if (typeof window === 'undefined') return HTML5Backend;
    return isTouchDevice() ? TouchBackend : HTML5Backend;
  }, []);

  const rows = useMemo(() => {
    const entries = board.position.map((row, rowIndex) => ({
      row,
      rowIndex,
    }));
    if (userPlayer === Players.WHITE) {
      return entries;
    }
    return entries.reverse();
  }, [userPlayer, board.position]);

  return (
    <DndProvider backend={backend}>
      <DraughtsGameOverModal />
      <Grid
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(8, 1fr)"
        w="100%"
        h="100%"
        style={{ aspectRatio: 1 }}
      >
        {rows.map(({ row, rowIndex }) =>
          row.map((piece, colIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <GridItem key={`${rowIndex}:${colIndex}:${piece}`}>
              <DraughtsCell
                piece={piece}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            </GridItem>
          ))
        )}
      </Grid>
    </DndProvider>
  );
}
