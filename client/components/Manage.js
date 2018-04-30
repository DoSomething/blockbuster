import React from 'react';
import { connect } from 'react-redux';
import {
  setShowBlackout,
  addShowVoice,
  editShowVoice,
  removeShowVoice,
  addShowSlide,
  editShowSlide,
  editShowSlideOrder,
  removeShowSlide,
  addShowLoop,
  editShowLoop,
  removeShowLoop,
} from '../../actions';
import '../styles/Manage.scss';

const mapStateToProps = (state) => ({
  path: state.navigation.path,
  show: state.show,
});

const mapDispatchToProps = {
  setShowBlackout,
  addShowVoice,
  editShowVoice,
  removeShowVoice,
  addShowSlide,
  editShowSlide,
  editShowSlideOrder,
  removeShowSlide,
  addShowLoop,
  editShowLoop,
  removeShowLoop,
};

class VoiceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.makeStateFromProps(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.makeStateFromProps(nextProps));
  }

  makeStateFromProps(props) {
    return {
      name: props.data ? props.data.name : '',
      background: props.data ? props.data.background : '',
      fontSrc: props.data ? props.data.fontSrc : '',
      fontFamily: props.data ? props.data.fontFamily : '',
      fontColor: props.data ? props.data.fontColor : '',
      fontSize: props.data ? props.data.fontSize : '',
    };
  }

  onChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value,
    });
  }

  onSubmit() {
    const { index, action } = this.props;
    index ? action(this.state, index) : action(this.state);
  }

  render() {
    const { name, background, fontSrc,
      fontFamily, fontColor, fontSize } = this.state;
    const { remove } = this.props;

    return (
      <div className="manage__form-item">
        <div>
          { background ? <img src={background} /> : null }
        </div>
        <div>
          <label>voice name
            <input name="name" type="text" value={name} onChange={this.onChange} />
          </label>
          <label>background url
            <input name="background" type="text" value={background} onChange={this.onChange} />
          </label>
          <label>font source
            <input name="fontSrc" type="text" value={fontSrc} onChange={this.onChange} />
          </label>
          <label>font family
            <input name="fontFamily" type="text" value={fontFamily} onChange={this.onChange} />
          </label>
          <label>font color
            <input name="fontColor" type="text" value={fontColor} onChange={this.onChange} />
          </label>
          <label>font size
            <input name="fontSize" type="text" value={fontSize} onChange={this.onChange} />
          </label>
          <button onClick={this.onSubmit}>submit</button>
          { remove ? <button onClick={remove}>remove</button> : null }
        </div>
      </div>
    );
  }
}

class SlideForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.makeStateFromProps(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.makeStateFromProps(nextProps));
  }

  makeStateFromProps(props) {
    return {
      name: props.data ? props.data.name : '',
      background: props.data ? props.data.background : '',
      loop: props.data ? props.data.loop : 'none',
    };
  }

  onChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value,
    });
  }

  onSubmit() {
    const { index, action } = this.props;
    index ? action(this.state, index) : action(this.state);
  }

  render() {
    const { name, background, loop } = this.state;
    const { loops, index, slides, changeOrder, remove } = this.props;

    return (
      <div className="manage__form-item">
        <div>
          { background ? <img src={background} /> : null }
        </div>
        <div>
          <label>slide name
            <input name="name" type="text" value={name} onChange={this.onChange} />
          </label>
          <label>background url
            <input name="background" type="text" value={background} onChange={this.onChange} />
          </label>
          <label>loop
            <select name="loop" value={loop} onChange={this.onChange}>
              <option key="default" value="none">none</option>
              {loops.map((lp, i) => <option key={i} value={i}>{ lp.name }</option>)}
            </select>
          </label>
          <button onClick={this.onSubmit}>submit</button>
          { changeOrder ? (
            <label>order
              <select name="order" value={index} onChange={e => changeOrder(e.target.value)}>
                {slides.map((s, i) => <option key={i} value={i}>{ i }</option>)}
              </select>
            </label>
          ) : null }
          { remove ? <button onClick={remove}>remove</button> : null }
        </div>
      </div>
    );
  }
};

class LoopForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.makeStateFromProps(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.makeStateFromProps(nextProps));
  }

  makeStateFromProps(props) {
    return {
      name: props.data ? props.data.name : '',
      slides: props.data ? props.data.slides : [],
    };
  }

  onChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      [key]: value,
    });
  }

  onSubmit() {
    const { index, action } = this.props;
    index ? action(this.state, index) : action(this.state);
  }

  render() {
    const { name } = this.state;
    const { index, remove } = this.props;

    return (
      <div className="manage__form-item">
        <div>
           {null }
        </div>
        <div>
          <label>loop name
            <input name="name" type="text" value={name} onChange={this.onChange} />
          </label>
          <button onClick={this.onSubmit}>submit</button>
          { remove ? <button onClick={remove}>remove</button> : null }
        </div>
      </div>
    );
  }
};

const Manage = (props) => {
  const { path, show, setShowBlackout, addShowVoice, editShowVoice,
     editShowSlideOrder, removeShowVoice, addShowSlide, editShowSlide,
     removeShowSlide, addShowLoop, editShowLoop, removeShowLoop } = props;

  if (path !== 'manage') return null;
  const { slides, voices, loops } = show;

  return (
    <div className="manage">
      <h1>Manage</h1>
      <div className="manage__form">
        <h3>Voices</h3>
      </div>
      <div className="manage__form">
        <VoiceForm action={addShowVoice} />
      </div>
      <div className="manage__form">
        {voices.map((voice, index) => (
          <VoiceForm
            key={index}
            action={(voice) => editShowVoice(voice, index)}
            remove={() => removeShowVoice(index)}
            data={voice}
          />
        ))}
      </div>
      <div className="manage__form">
        <h3>Slides</h3>
      </div>
      <div className="manage__form">
        <SlideForm action={addShowSlide} loops={loops} />
      </div>
      <div className="manage__form">
        {slides.map((slide, index) => (
          <SlideForm
            key={index}
            action={(slide) => editShowSlide(slide, index)}
            remove={() => removeShowSlide(index)}
            loops={loops}
            data={slide}
            index={index}
            slides={slides}
            changeOrder={newIndex => editShowSlideOrder(index, newIndex)}
          />
        ))}
      </div>
       <div className="manage__form">
        <h3>Loops</h3>
      </div>
      <div className="manage__form">
        <LoopForm action={addShowLoop} slides={slides} />
      </div>
      <div className="manage__form">
        {loops.map((loop, index) => (
          <LoopForm
            key={index}
            action={(loop) => editShowLoop(loop, index)}
            remove={() => removeShowLoop(index)}
            data={loop}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
