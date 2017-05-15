import React from 'react';
import { connect } from 'react-redux';
import { setVoiceMessage} from '../../actions';
import '../styles/Voice.scss';

const mapStateToProps = (state) => ({
  path: state.navigation.path,
  preview: state.voice.preview,
  voices: state.show.voices,
});

const mapDispatchToProps = {
  setVoiceMessage,
};

const Voice = ({ setVoiceMessage, path, preview, voices }) => {
  if (path !== 'voice') return null;
  
  const handleDisplayChange = display => setVoiceMessage(preview.message, display, false);
  const setPreviewMessage = msg => setVoiceMessage(msg, preview.display, false);
  const setLiveMessage = () => setVoiceMessage(preview.message, preview.display, true);

  const keyHandler = (e) => {
    // TODO: Shift + Enter
    if (e.key !== 'Enter') return;
    setLiveMessage();
  };

  const activeDisplay = preview.display ? preview.display.name : '';

  return (
    <div className="voice">
      <h1>Voice</h1>
      <div>
        <input
          type="text" value={preview.message}
          onChange={e => setPreviewMessage(e.target.value)}
          onKeyPress={keyHandler}
        />
      </div>
      <div>
        {voices.map((voice, index) => (
          <div
            className={`voice__display ${activeDisplay === voice.name ? '-highlighted' : ''}`}
            onClick={() => handleDisplayChange(voice)}
            key={index}
          >
            <img src={voice.background} />
            <p>{ voice.name }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Voice);
