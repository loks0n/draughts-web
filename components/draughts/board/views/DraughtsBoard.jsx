import { useMemo } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Grid, GridItem } from '@chakra-ui/react';
import { Players } from '../constants';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';
import { DraughtsCell } from './DraughtsCell';
import { DraughtsGameOverModal } from './DraughtsGameOverModal';

export function DraughtsBoard() {
  const { board } = useDraughtsBoard();
  const { userPlayer } = useDraughtsSettings();

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
    <DndProvider backend={HTML5Backend}>
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
