import initialState from '../shared/initialState';
import {  START_COUNTDOWN, STOP_COUNTDOWN, RESET_COUNTDOWN } from '../actions';

export function countdown(state = {}, action) {
  if (!action) return initialState.countdown;

  switch (action.type) {
    case START_COUNTDOWN:
      return {
        ...state,
        on: true,
        reset: false,
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
        reset: true,
      }

    default:
      return state;
  }
}
