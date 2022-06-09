import { useEffect } from 'react';
import {
  Modal,
  Button,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { useDraughtsBoard } from '../DraughtsBoardContext';
import { useDraughtsWinner } from '../hooks/use-draughts-winner';
import { useDraughtsGame } from '../../game/DraughtsGameContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';
import { formatPlayer, Players, GameStates } from '@draughts/core';

function capitalizeFirstLetter(string) {
  return string.at(0).toUpperCase() + string.slice(1);
}

function formatGameOverMessage(winner) {
  if (winner === Players.NONE) return 'The game was a draw.';
  const winnerFormatted = capitalizeFirstLetter(formatPlayer(winner));
  return `${winnerFormatted} won the game.`;
}

export function DraughtsGameOverModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { restartGame } = useDraughtsGame();
  const { board } = useDraughtsBoard();
  const { settingsModal } = useDraughtsSettings();
  const { userWon, winner } = useDraughtsWinner();

  useEffect(() => {
    if (board.state === GameStates.PLAYING) return;
    onOpen();
    return onClose;
  }, [board.state, onOpen, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {userWon ? 'Wooo! You won. 🎉' : 'Better luck next time... 💪'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{formatGameOverMessage(winner)}</Text>
          <Divider marginY={5} />
          <Text>
            Why not a different computer difficulty, or a new time control?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            mr={3}
            colorScheme="blue"
            onClick={() => {
              onClose();
              settingsModal.onOpen();
            }}
          >
            game settings
          </Button>
          <Button
            onClick={() => {
              restartGame();
              onClose();
            }}
          >
            play again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
