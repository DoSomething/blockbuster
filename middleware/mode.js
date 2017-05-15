import { _modeMapping, setMode } from '../actions';

export const mode = store => next => action => {
  // If there is a mode mapped to this action
  if (Object.keys(_modeMapping).indexOf(action.type) !== -1) {
    // Get the mode & dispatch a new action to change it
    const mode = _modeMapping[action.type];
    const { isLive } = action;
    store.dispatch(setMode(mode, isLive));
  }

  return next(action);
};
