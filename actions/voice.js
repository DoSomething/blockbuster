import { SET_VOICE_MESSAGE } from './';

export function setVoiceMessage(message, display, isLive) {
  return { type: SET_VOICE_MESSAGE, message, display, isLive };
}
