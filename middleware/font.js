import { ADD_SHOW_VOICE, EDIT_SHOW_VOICE, SETUP_VOICE } from '../actions';

// @see http://jsfiddle.net/amir_ch/x63jF/
function addFont(fontSrc, fontFamily) {
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

    const dots = fontSrc.split('.');
    const format = dots[dots.length - 1].replace('.', '');
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
      @font-face {
        font-family: ${fontFamily};
        src: url('${fontSrc}') format(${format});
      }
    `));
    head.appendChild(style);
  }
}

export const font = store => next => action => {
  if (action.type === ADD_SHOW_VOICE || action.type === EDIT_SHOW_VOICE || action.type === SETUP_VOICE) {
    if (action.voice.fontSrc) addFont(action.voice.fontSrc, action.voice.fontFamily);
  }

  return next(action);
};
