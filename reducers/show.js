import initialState from '../shared/initialState';
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
} from '../actions';

export function show(state = {}, action) {
  if (!action) return initialState.show;
  let slides = [];

  switch (action.type) {
    case SET_SHOW_BLACKOUT:
      return {
        ...state,
        blackout: action.blackout,
      }

    case ADD_SHOW_VOICE:
      return {
        ...state,
        voices: [...state.voices, action.voice],
      }

    case EDIT_SHOW_VOICE:
      const voices = [...state.voices];
      voices[action.index] = action.voice;
      return {
        ...state,
        voices,
      }

    case REMOVE_SHOW_VOICE:
      return {
        ...state,
        voices: [
          ...state.voices.slice(0, action.index),
          ...state.voices.slice(action.index + 1),
        ]
      }

    case ADD_SHOW_SLIDE:
      return {
        ...state,
        slides: [...state.slides, action.slide],
      }

    case EDIT_SHOW_SLIDE:
      slides = [...state.slides];
      slides[action.index] = action.slide;
      return {
        ...state,
        slides,
      }

    case EDIT_SHOW_SLIDE_ORDER:
      slides = [...state.slides];
      slides.splice(action.newIndex, 0, slides.splice(action.oldIndex, 1)[0]);
      return {
        ...state,
        slides,
      }

    case REMOVE_SHOW_SLIDE:
      return {
        ...state,
        slides: [
          ...state.slides.slice(0, action.index),
          ...state.slides.slice(action.index + 1),
        ]
      }

    case ADD_SHOW_LOOP:
      return {
        ...state,
        loops: [...state.loops, action.loop],
      }

    case EDIT_SHOW_LOOP:
      const loops = [...state.loops];
      loops[action.index] = action.loop;
      return {
        ...state,
        loops,
      }

    case REMOVE_SHOW_LOOP:
      return {
        ...state,
        loops: [
          ...state.loops.slice(0, action.index),
          ...state.loops.slice(action.index + 1),
        ],
        slides: state.slides.map((slide, index) => {
          if (parseInt(slide.loop, 10) === index) {
            slide.loop = "";
          }
          return slide
        }),
      }

    default:
      return state;
  }
}
