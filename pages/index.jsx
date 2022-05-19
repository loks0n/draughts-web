import Head from 'next/head';
import { Divider, Heading, HStack, VStack } from '@chakra-ui/react';
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
import { DraughtsRulesContent } from '../components/content/DraughtsRulesContent';

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
        <VStack spacing={6}>
          <DraughtsBoard />
          <HStack>
            <DraughtsMenuView />
            <DraughtsGameInfoView />
          </HStack>
          <Divider />
          <Heading size="sm">Rules of Draughts</Heading>
          <DraughtsRulesContent />
        </VStack>
      </DraughtsProvider>
    </MainLayout>
  );
}
