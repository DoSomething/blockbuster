import initialState from '../shared/initialState';
import { SET_VOICE_MESSAGE } from '../actions';

export function voice(state = {}, action) {
  if (!action) return initialState.voice;

  switch (action.type) {
    case SET_VOICE_MESSAGE:
      const key = action.isLive ? 'live' : 'preview';

      return {
        ...state,
        [key]: {
          message: action.message,
          display: action.display,
        }
      }

    default:
      return state;
  }
}
