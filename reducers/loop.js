import initialState from '../shared/initialState';
import { SET_LOOP } from '../actions';

export function loop(state = {}, action) {
  if (!action) return initialState.loop;

  switch (action.type) {
    case SET_LOOP:
      return {
        ...state,
        live: action.isLive ? action.loop : state.live,
        preview: !action.isLive ? action.loop : state.preview,
      };

    default:
      return state;
  }
}
