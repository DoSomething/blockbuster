import React from 'react';
import { connect } from 'react-redux';
import { setLoop } from '../../actions';
import { modes } from '../../shared/modes';
import SlideShow from './SlideShow';
import '../styles/Slides.scss';

const mapStateToProps = (state) => ({
  path: state.navigation.path,
  loops: state.show.loops,
  slides: state.show.slides,
  preview: state.loop.preview,
  live: state.loop.live,
  mode: state.mode.preview,
});

const mapDispatchToProps = {
  setLoop,
};

const Loops = ({ path, slides, setLoop, preview, mode, live, loops }) => {
  if (path !== 'loops') return null;

  const setLoopPreview = (loop) => setLoop(loop, false);
  const setLoopLive = () => setLoop(preview, true);

  const handleClick = (loop) => {
    if (loop === preview && mode === modes.LOOP) setLoopLive();
    else setLoopPreview(loop);
  };

  return (
    <div className="slides">
      <h1>Loops</h1>
      <div>
        {loops.map(({ name, speed }, index) => {
          const loopSlides = slides.filter(slide => parseInt(slide.loop, 10) === index);
          return (
              <div
              key={index}
              className={
                `slides__item ${index === preview ? '-highlighted' : ''} ${index === live ? '-highlighted-live' : ''}`
              }
              onClick={() => handleClick(index)}
            >
              <SlideShow slides={loopSlides} speed={speed} />
              <span>{ name }</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Loops);
