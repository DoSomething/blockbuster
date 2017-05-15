import './_init';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { events } from '../shared/events';
import { makeStore } from '../shared/store';

import App from './components/App';

const socket = io.connect(location.host);

socket.on(events.INITIAL_STATE, (data) => {
  const store = makeStore('client', data, socket);

  socket.on(events.ACTION, (action) => {
    store.dispatch(action);
  });

  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('jsx-root'));
});
