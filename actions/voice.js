import {
  SET_VOICE_MESSAGE, EDIT_SHOW_VOICE, SETUP_VOICE,
  ADD_SHOW_VOICE, REMOVE_SHOW_VOICE,
} from './';

export function setupVoice(voice) {
  return { type: SETUP_VOICE, voice };
}

export function setVoiceMessage(message, display, isLive) {
  return { type: SET_VOICE_MESSAGE, message, display, isLive };
}

export function addShowVoice(voice) {
  return { type: ADD_SHOW_VOICE, voice };
}

export function editShowVoice(voice, index) {
  return { type: EDIT_SHOW_VOICE, voice, index };
}

export function removeShowVoice(index) {
  return { type: REMOVE_SHOW_VOICE, index };
}
