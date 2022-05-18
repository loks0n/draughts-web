import PropTypes from 'prop-types';
import {
  DraughtsSettingsProvider,
  DraughtsSettingsProviderProps,
} from './settings/DraughtsSettingsContext';
import {
  DraughtsBoardProvider,
  DraughtsBoardProviderProps,
} from './board/DraughtsBoardContext';
import { DraughtsGameProvider } from './game/DraughtsGameContext';

export function DraughtsProvider(props) {
  return (
    <DraughtsSettingsProvider {...props.settings}>
      <DraughtsBoardProvider {...props.board}>
        <DraughtsGameProvider>{props.children}</DraughtsGameProvider>
      </DraughtsBoardProvider>
    </DraughtsSettingsProvider>
  );
}

DraughtsProvider.propTypes = {
  board: PropTypes.shape(DraughtsBoardProviderProps),
  children: PropTypes.node.isRequired,
  settings: PropTypes.shape(DraughtsSettingsProviderProps),
};
