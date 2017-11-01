import { SET_VOICE_MESSAGE, SETUP_VOICE } from './';

export function setupVoice(voice) {
  return { type: SETUP_VOICE, voice };
}

export function setVoiceMessage(message, display, isLive) {
  return { type: SET_VOICE_MESSAGE, message, display, isLive };
}
