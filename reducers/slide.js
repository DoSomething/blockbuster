import initialState from '../shared/initialState';
import { SET_SLIDE } from '../actions';

export function slide(state = {}, action) {
  if (!action) return initialState.slide;

  switch (action.type) {
    case SET_SLIDE:
      return {
        ...state,
        live: action.isLive ? action.slide : state.live,
        preview: !action.isLive ? action.slide : state.preview,
      };

    default:
      return state;
  }
}
