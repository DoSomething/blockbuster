import React from 'react';
import { connect } from 'react-redux';
import { setSlide } from '../../actions';
import { modes } from '../../shared/modes';
import '../styles/Slides.scss';

const mapStateToProps = (state) => ({
  path: state.navigation.path,
  slides: state.show.slides,
  preview: state.slide.preview,
  live: state.slide.live,
  mode: state.mode.preview,
});

const mapDispatchToProps = {
  setSlide,
};

const Slides = ({ path, slides, setSlide, preview, mode, live }) => {
  if (path !== 'slides') return null;

  const setSlidePreview = (slide) => setSlide(slide, false);
  const setSlideLive = () => setSlide(preview, true);

  const handleClick = (slide) => {
    if (slide === preview && mode === modes.SLIDE) setSlideLive();
    else setSlidePreview(slide);
  };

  return (
    <div className="slides">
      <h1>Slides</h1>
      <div>
        {slides.map(({ name, background }, index) => (
          <div
            key={index}
            className={
              `slides__item ${index === preview ? '-highlighted' : ''} ${index === live ? '-highlighted-live' : ''}`
            }
          >
            <img src={background} onClick={() => handleClick(index)} />
            <span>{ name }</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Slides);
