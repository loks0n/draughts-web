import React, { useState } from 'react';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  HStack,
  Select,
  Divider,
} from '@chakra-ui/react';
import { Players } from '../../board/constants';
import { useDraughtsGame } from '../../game/DraughtsGameContext';
import { useDraughtsSettings } from '../DraughtsSettingsContext';
import { ComputerDifficulty } from '../constants/computer-difficulty';

export function DraughtsSettingsModal() {
  const { restartGame } = useDraughtsGame();
  const {
    userPlayer,
    updateSettings,
    computerDifficulty,
    settingsModal: { isOpen, onClose },
  } = useDraughtsSettings();

  const [computerDifficultySelection, setComputerDifficultySelection] =
    useState(computerDifficulty);
  const [userPlayerSelection, setUserPlayerSelection] = useState(userPlayer);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl as="fieldset">
            <FormLabel as="legend">Select colour</FormLabel>
            <RadioGroup
              onChange={setUserPlayerSelection}
              value={userPlayerSelection}
            >
              <HStack>
                <Radio value={`${Players.WHITE}`}>white</Radio>
                <Radio value={`${Players.BLACK}`}>black</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Divider marginY={5} />
          <FormControl>
            <FormLabel htmlFor="computerDifficulty">
              Computer difficulty
            </FormLabel>
            <Select
              id="computerDifficulty"
              onChange={(event) => {
                setComputerDifficultySelection(event.target.value);
              }}
              value={computerDifficultySelection}
            >
              <option value={ComputerDifficulty.EASY}>easy</option>
              <option value={ComputerDifficulty.MEDIUM}>medium</option>
              <option value={ComputerDifficulty.HARD}>hard</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} colorScheme="blue" onClick={onClose}>
            back to game
          </Button>
          <Button
            onClick={() => {
              restartGame();
              updateSettings({
                computerDifficulty: computerDifficultySelection,
                userPlayer: userPlayerSelection,
              });
              onClose();
            }}
          >
            start new game
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
