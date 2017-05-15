import { modes } from '../shared/modes';

export const SET_VOICE_MESSAGE = 'SET_VOICE_MESSAGE';
export * from './voice';

export const SET_MODE = 'SET_MODE';
export * from './mode';

export const NAVIGATE = 'NAVIGATE';
export * from './navigation';

export const SET_SHOW_BLACKOUT = 'SET_SHOW_BLACKOUT';
export const ADD_SHOW_VOICE = 'ADD_SHOW_VOICE';
export const EDIT_SHOW_VOICE = 'EDIT_SHOW_VOICE';
export const REMOVE_SHOW_VOICE = 'REMOVE_SHOW_VOICE';
export const ADD_SHOW_SLIDE = 'ADD_SHOW_SLIDE';
export const EDIT_SHOW_SLIDE = 'EDIT_SHOW_SLIDE';
export const EDIT_SHOW_SLIDE_ORDER = 'EDIT_SHOW_SLIDE_ORDER';
export const REMOVE_SHOW_SLIDE = 'REMOVE_SHOW_SLIDE';
export const ADD_SHOW_LOOP = 'ADD_SHOW_LOOP';
export const EDIT_SHOW_LOOP = 'EDIT_SHOW_LOOP';
export const REMOVE_SHOW_LOOP = 'REMOVE_SHOW_LOOP';
export * from './show';

export const SET_SLIDE = 'SET_SLIDE';
export * from './slide';

// Misc actions
export const SETUP_VOICE = 'SETUP_VOICE';
export function setupVoice(voice) {
  return { type: SETUP_VOICE, voice };
}

// ---
// Meta props used by middleware
// ---

export const _modeMapping = {
  SET_VOICE_MESSAGE: modes.VOICE,
  SET_SLIDE: modes.SLIDE,
};

export const _socketEvents = [
  SET_SLIDE,
  SET_VOICE_MESSAGE,
  SET_MODE,
  SET_SHOW_BLACKOUT,
  ADD_SHOW_VOICE,
  EDIT_SHOW_VOICE,
  REMOVE_SHOW_VOICE,
  ADD_SHOW_SLIDE,
  EDIT_SHOW_SLIDE,
  EDIT_SHOW_SLIDE_ORDER,
  REMOVE_SHOW_SLIDE,
  ADD_SHOW_LOOP,
  EDIT_SHOW_LOOP,
  REMOVE_SHOW_LOOP,
];