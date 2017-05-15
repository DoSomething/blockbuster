export const initialState = {
  mode: {
    live: 'blackout',
    preview: 'blackout',
  },
  navigation: {
    path: 'voice'
  },
  voice: {
    live: {
      message: '',
      display: null,
    },
    preview: {
      message: '',
      display: null,
    },
  },
  slide: {
    live: '',
    preview: '',
  },
  show: {
    slides: [],
    loops: [],
    voices: [
      {
        name: 'default',
        background: '',
        fontSrc: '',
        fontSize: '122px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontColor: '#111',
      },
    ],
    blackout: '#111',
  }
};
