import { SET_LOOP } from './';

export function setLoop(loop, isLive) {
  return { type: SET_LOOP, loop, isLive };
}
