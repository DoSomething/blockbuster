import React from 'react';
import { connect } from 'react-redux';
import { modes } from '../../shared/modes';
import '../styles/Screen.scss';

// Helper function to scale the text font size based on length
function scaleFontSize(fontSize, text='') {
  const shrinkFontToDecimal = 1 + ((text.length / 70) / 10);
  return (Number(fontSize.replace(/px/, '')) / shrinkFontToDecimal) + 'px';
}

const VoiceText = ({ text, style }) => ( <h1 className="screen__text" style={style}>{ text }</h1> );

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
      if (slide) style.backgroundImage = `url("${slide.background}")`;
      break;

    case modes.VOICE:
      const voice = getShowProps(props.message, show);
      let contentStyle = {}

      if (voice.display) {
        const { background, fontFamily, fontColor, fontSize } = voice.display;

        style.backgroundImage = `url("${voice.display.background}")`;
        style.fontFamily = fontFamily;
        style.color = fontColor;

        contentStyle.fontSize = scaleFontSize(fontSize, voice.message);
      }

      content = ( <VoiceText text={voice.message} style={contentStyle} /> );
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
