import React from 'react';
import { connect } from 'react-redux';
import { modes } from '../../shared/modes';
import '../styles/Screen.scss';

const VoiceText = ({ text }) => ( <h1 className="screen__text">{ text }</h1> );

const mapStateToProps = (state) => ({
  mode: state.mode,
  message: state.voice,
  slide: state.slide,
  slides: state.show.slides,
});

const mapDispatchToProps = (dispatch) => ({ /* ... */ });

function getShowProps(props, show) {
  return props[show];
}

const Screen = (props) => {
  const { size, show, slides } = props;

  const mode = getShowProps(props.mode, show);

  const style = {};
  let content = null;

  switch (mode) {
    case modes.BLACKOUT:
      style.background = '#111';
      break;

    case modes.SLIDE:
      const slideIndex = getShowProps(props.slide, show);
      const slide = slides[slideIndex];
      if (slide) style.backgroundImage = `url(${slide.background})`;
      break;

    case modes.VOICE:
      const voice = getShowProps(props.message, show);
      content = ( <VoiceText text={voice.message} /> );

      if (voice.display) {
        const { background, fontFamily, fontColor, fontSize } = voice.display;

        style.backgroundImage = `url(${voice.display.background})`;
        style.fontSize = fontSize;
        style.fontFamily = fontFamily;
        style.color = fontColor;
      }
      break;
  }

  return (
    <div className={`screen -${size} -${show}`} style={style}>
      { content }
    </div>
  );
};

Screen.defaultProps = {
  size: 'reduced',
  show: 'live',
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
