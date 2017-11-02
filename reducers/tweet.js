import initialState from '../shared/initialState';
import { SET_TWEET } from '../actions';

export function tweet(state = {}, action) {
  if (!action) return initialState.tweet;

  switch (action.type) {
    case SET_TWEET:
      return {
        ...state,
        live: action.isLive ? action.tweetId : state.live,
        preview: !action.isLive ? action.tweetId : state.preview,
      };

    default:
      return state;
  }
}
