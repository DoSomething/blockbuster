import { SET_TWEET } from './';

export function setTweet(tweetId, isLive) {
  return { type: SET_TWEET, tweetId, isLive };
}
