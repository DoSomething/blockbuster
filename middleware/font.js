import { ADD_SHOW_VOICE, EDIT_SHOW_VOICE } from '../actions';

// @see http://jsfiddle.net/amir_ch/x63jF/
function addFont(fontSrc) {
  const fontID = `font-${fontSrc}`;

  if (!document.getElementById(fontID)) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = fontID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = fontSrc;
    link.media = 'all';
    head.appendChild(link);
  }
}

export const font = store => next => action => {
  if (action.type === ADD_SHOW_VOICE || action.type === EDIT_SHOW_VOICE) {
    if (action.voice.fontSrc) addFont(action.voice.fontSrc);
  }

  return next(action);
};
