import React from 'react';
import { connect } from 'react-redux';

import '../styles/Screen.scss';

class SlideShow extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      slide: 0,
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
      this.setState({slide});
    }, slideShowSpeed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const slide = this.props.slides[this.state.slide];

    if (!slide) {
      return null;
    }

    const src = slide.background;

    return (
      <img src={src}/>
    );
  }
}

export default SlideShow;
