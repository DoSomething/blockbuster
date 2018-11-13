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
  loop: {
    live: '',
    preview: '',
  },
  countdown: {
    on: false,
    reset: false,
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
    countdown: {
      background: 'https://s3.amazonaws.com/gala-2018/VOG.png',
      time: 5,
      fontSize: '122px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontColor: '#111',
    },
    tweets: [],
    blackout: '#111',
  }
};
