import initialState from '../shared/initialState';
import { NAVIGATE } from '../actions';

export function navigation(state = {}, action) {
  if (!action) return initialState.navigation;

  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        path: action.path,
      };

    default:
      return state;
  }
}
