import Promise from 'promise-polyfill';

// To add to window
if (! window.Promise) {
  window.Promise = Promise;
}

import './main.scss';
