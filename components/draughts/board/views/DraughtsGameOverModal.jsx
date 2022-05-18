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
import { Players, Statuses } from '../constants';
import { useDraughtsWinner } from '../hooks/use-draughts-winner';
import { formatPlayer } from '../utilities';
import { useDraughtsGame } from '../../game/DraughtsGameContext';
import { useDraughtsSettings } from '../../settings/DraughtsSettingsContext';

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
    if (board.status === Statuses.PLAYING) return;
    onOpen();
    return onClose;
  }, [board.status, onOpen, onClose]);

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
