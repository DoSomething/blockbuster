import { SET_MODE } from './';

export function setMode(mode, isLive) {
  return { type: SET_MODE, mode, isLive };
}
