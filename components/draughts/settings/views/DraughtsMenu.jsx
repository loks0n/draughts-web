import { SettingsIcon, RepeatIcon } from '@chakra-ui/icons';
import { Button, VStack } from '@chakra-ui/react';
import { useDraughtsGame } from '../../game/DraughtsGameContext';
import { useDraughtsSettings } from '../DraughtsSettingsContext';
import { DraughtsSettingsModal } from './DraughtsSettingsModal';

export function DraughtsMenuView() {
  const { restartGame } = useDraughtsGame();
  const { settingsModal } = useDraughtsSettings();

  return (
    <VStack>
      <DraughtsSettingsModal />
      <Button
        onClick={() => settingsModal.onOpen()}
        rightIcon={<SettingsIcon />}
        size="xs"
      >
        open settings
      </Button>
      <Button
        onClick={() => restartGame()}
        rightIcon={<RepeatIcon />}
        size="xs"
      >
        restart game
      </Button>
    </VStack>
  );
}
