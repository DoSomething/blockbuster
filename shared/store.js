import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reduce } from '../reducers';
import { mode } from '../middleware/mode';
import { io } from '../middleware/io';
import { font } from '../middleware/font';
import { sync } from '../middleware/sync';
import { countdown } from '../middleware/countdown';

export function makeStore (level, initialState, socket, serverMiddleware) {
  let middleware = [mode];

  if (level === 'server') {
    middleware = [...middleware, ...serverMiddleware];
  }

  if (level === 'client') {
    middleware.push(io.with(socket));
    middleware.push(font);
    middleware.push(logger);
    middleware.push(sync);
    middleware.push(countdown);
  }

  return createStore(reduce(), initialState, applyMiddleware(...middleware))
}
