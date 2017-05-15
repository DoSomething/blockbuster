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

export function addShowVoice(voice) {
  return { type: ADD_SHOW_VOICE, voice };
}

export function editShowVoice(voice, index) {
  return { type: EDIT_SHOW_VOICE, voice, index };
}

export function removeShowVoice(index) {
  return { type: REMOVE_SHOW_VOICE, index };
}

export function addShowSlide(slide) {
  return { type: ADD_SHOW_SLIDE, slide };
}

export function editShowSlide(slide, index) {
  return { type: EDIT_SHOW_SLIDE, slide, index };
}

export function editShowSlideOrder(oldIndex, newIndex) {
  return { type: EDIT_SHOW_SLIDE_ORDER, oldIndex, newIndex };
}

export function removeShowSlide(index) {
  return { type: REMOVE_SHOW_SLIDE, index };
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
