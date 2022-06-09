import { HStack, VStack, Text, keyframes } from '@chakra-ui/react';
import { useDraughtsPlayerToMove } from './board/hooks/use-draughts-player-to-move';
import { useDraughtsGame } from './game/DraughtsGameContext';
import { useDraughtsSettings } from './settings/DraughtsSettingsContext';
import { Players } from '@draughts/core';

const glowKeyframe = keyframes`
  from {
    background-color: rgba(144, 238, 144, 0.3)
  }
  to {
    background-color: rgba(144, 238, 144, 0.6)
  }
`;

const glowAnimation = `${glowKeyframe} 1s ease 0s infinite alternate`;

function formatTimer({ seconds, minutes }) {
  const formatSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${formatSeconds}`;
}

export function DraughtsGameInfoView() {
  const { userPlayer } = useDraughtsSettings();
  const { whiteTimer, blackTimer } = useDraughtsGame();
  const whiteToMove = useDraughtsPlayerToMove(Players.WHITE);
  const blackToMove = useDraughtsPlayerToMove(Players.BLACK);

  return (
    <VStack justify="space-between">
      <HStack
        align="center"
        justify="space-between"
        gap={3}
        px={2}
        borderRadius="0.2em"
        animation={whiteToMove ? glowAnimation : undefined}
      >
        <Text fontSize="sm">
          white {userPlayer === Players.WHITE ? '(you)' : '(computer)'}
        </Text>
        <time>{formatTimer(whiteTimer)}</time>
      </HStack>
      <HStack
        align="center"
        justify="space-between"
        gap={3}
        px={2}
        borderRadius="0.2em"
        animation={blackToMove ? glowAnimation : undefined}
      >
        <Text fontSize="sm">
          black {userPlayer === Players.BLACK ? '(you)' : '(cpu)'}
        </Text>
        <time>{formatTimer(blackTimer)}</time>
      </HStack>
    </VStack>
  );
}
