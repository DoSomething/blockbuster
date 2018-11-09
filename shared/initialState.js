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
    time: 60,
    interval: null,
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
      seconds: 60,
      time: 60,
      fontSrc: '',
      fontSize: '122px',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontColor: '#111',
    },
    blackout: '#111',
  }
};
