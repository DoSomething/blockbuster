import {
  SET_SLIDE, ADD_SHOW_SLIDE, EDIT_SHOW_SLIDE,
  EDIT_SHOW_SLIDE_ORDER, REMOVE_SHOW_SLIDE,
} from './';

export function setSlide(slide, isLive) {
  return { type: SET_SLIDE, slide, isLive };
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
