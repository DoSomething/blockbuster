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
    this.interval = setInterval(() => {
      let slide = this.state.slide+1;
      if (slide >= this.props.slides.length) {
        slide = 0;
      }
      this.setState({slide});
    }, 5000)
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
