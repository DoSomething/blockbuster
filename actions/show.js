import {
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
} from './';

export function setShowBlackout(blackout) {
  return { type: SET_SHOW_BLACKOUT, blackout };
}

export function addShowLoop(loop) {
  return { type: ADD_SHOW_LOOP, loop };
}

export function editShowLoop(loop, index) {
  return { type: EDIT_SHOW_LOOP, loop, index };
}

export function removeShowLoop(index) {
  return { type: REMOVE_SHOW_LOOP, index };
}
