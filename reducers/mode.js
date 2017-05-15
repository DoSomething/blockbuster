import initialState from '../shared/initialState';
import { SET_MODE } from '../actions';

export function mode(state = {}, action) {
  if (!action) return initialState.mode;

  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        live: action.isLive ? action.mode : state.live,
        preview: !action.isLive ? action.mode : state.preview,
      };

    default:
      return state;
  }
}
