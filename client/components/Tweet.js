import React from 'react';
import { connect } from 'react-redux';
import { setTweet } from '../../actions';
import { modes } from '../../shared/modes';

import '../styles/Tweet.scss';

const mapStateToProps = (state) => ({
  path: state.navigation.path,
  slides: state.show.slides,
  preview: state.tweet.preview,
  live: state.tweet.live,
  mode: state.mode.preview,
});

const mapDispatchToProps = {
  setTweet,
};

const Tweet = ({ path, setTweet, preview, mode, live }) => {
  if (path !== 'tweet') return null;

  const setTweeetPreview = (tweet) => setTweet(tweet, false);
  const setTweetLive = () => setTweet(preview, true);

  const handleClick = (tweet) => {
    if (tweet === preview && mode === modes.SLIDE) setTweetLive();
    else setTweeetPreview(tweet);
  };

  const keyHandler = (e) => {
    if (e.key !== 'Enter') return;
    setTweetLive();
  };

  return (
    <div className="slides">
      <h1>Tweet</h1>
      <input
        type="text" value={preview}
        onChange={e => setTweeetPreview(e.target.value)}
        onKeyPress={keyHandler}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
