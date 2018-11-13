import React from 'react';
import { connect } from 'react-redux';
import { TwitterTweetEmbed } from 'react-twitter-embed';

import '../styles/Screen.scss';

class SlideShow extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      slide: 0,
      showTweet: true,
    }
  }

  componentDidMount() {
    const speed = this.props.speed;
    const slideShowSpeed = (speed && speed > 0 ? speed : 5) * 1000;
    this.interval = setInterval(() => {
      let slide = this.state.slide+1;
      if (slide >= this.props.slides.length) {
        slide = 0;
      }
      this.setState({slide, showTweet: false });
      this.timeout = setTimeout(() => this.setState({showTweet: true}), 300);
    }, slideShowSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  render() {
    const slide = this.props.slides[this.state.slide];

    if (!slide) {
      return null;
    }

    switch(this.props.mode) {
      case 'tweet':
        return (
          <div className="twitter-feed">
            { this.state.showTweet ? (
              <TwitterTweetEmbed
                tweetId={slide.id}
              />
            ) : null }
          </div>
        );

      default:
        const src = slide.background;
        return (
          <img src={src}/>
        );
    }

  }
}

export default SlideShow;
