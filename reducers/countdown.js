import initialState from '../shared/initialState';
import { SET_COUNTDOWN, TICK_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN, START_COUNTDOWN } from '../actions';

export function countdown(state = {}, action) {
  if (!action) return initialState.countdown;

  switch (action.type) {
    case SET_COUNTDOWN:
      return {
        ...state,
        on: false,
        time: action.time === 0 ? 0 : (action.time || state.time),
      };

    case START_COUNTDOWN:
      return {
        ...state,
        on: true,
      }

    case TICK_COUNTDOWN:
      return {
        ...state,
        time: state.time - 1,
      }

    case STOP_COUNTDOWN:
      return {
        ...state,
        on: false,
      }

    case RESET_COUNTDOWN:
      return {
        ...state,
        on: false,
        time: action.time,
      }

    default:
      return state;
  }
}
