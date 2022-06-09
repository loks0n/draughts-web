import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useDisclosure } from '@chakra-ui/react';
import { ComputerDifficulty } from './constants/computer-difficulty';
import { Players } from '@draughts/core';

export const DraughtsSettingsContext = createContext();

export const useDraughtsSettings = () => useContext(DraughtsSettingsContext);

export function DraughtsSettingsProvider(props) {
  const settingsModal = useDisclosure();

  const [userPlayer, setUserPlayer] = useState(props.userPlayer);
  const [computerDifficulty, setComputerDifficulty] = useState(
    props.computerDifficulty
  );

  const updateSettings = (newSettings) => {
    setUserPlayer(newSettings.userPlayer);
    setComputerDifficulty(newSettings.computerDifficulty);
  };

  return (
    <DraughtsSettingsContext.Provider
      value={{ computerDifficulty, settingsModal, updateSettings, userPlayer }}
    >
      {props.children}
    </DraughtsSettingsContext.Provider>
  );
}

export const DraughtsSettingsProviderProps = {
  computerDifficulty: PropTypes.oneOf(Object.values(ComputerDifficulty)),
  userPlayer: PropTypes.oneOf(Object.values(Players)),
};

DraughtsSettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  ...DraughtsSettingsProviderProps,
};
