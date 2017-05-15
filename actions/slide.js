import { SET_SLIDE } from './';

export function setSlide(slide, isLive) {
  return { type: SET_SLIDE, slide, isLive };
}
