import Head from 'next/head';
import { HStack, VStack } from '@chakra-ui/react';
import { DraughtsMenuView } from '../components/draughts/settings/views/DraughtsMenu';
import { DraughtsProvider } from '../components/draughts/DraughtsContext';
import {
  INITIAL_POSITION,
  Players,
} from '../components/draughts/board/constants';
import { DraughtsBoard } from '../components/draughts/board/views/DraughtsBoard';
import { DraughtsGameInfoView } from '../components/draughts/DraughtsGameInfo';
import { ComputerDifficulty } from '../components/draughts/settings/constants/computer-difficulty';
import { MainLayout } from '../components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>draughts.org - play draughts and checkers online free</title>
      </Head>
      <DraughtsProvider
        settings={{
          computerDifficulty: ComputerDifficulty.MEDIUM,
          userPlayer: Players.WHITE,
        }}
        board={{ playerToMove: Players.WHITE, position: INITIAL_POSITION }}
      >
        <VStack>
          <DraughtsBoard />
          <HStack>
            <DraughtsMenuView />
            <DraughtsGameInfoView />
          </HStack>
        </VStack>
      </DraughtsProvider>
    </MainLayout>
  );
}
