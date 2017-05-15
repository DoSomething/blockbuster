import { _socketEvents } from '../actions';
import { events } from '../shared/events';

const middleware = (socket) => {
  return store => next => action => {
    // If this action should be propagated & was created by this client,
    if (_socketEvents.includes(action.type) && !action._peerEvent) {
      // Dispatch the action to the server
      socket.emit(events.DISPATCH, action);
    }

    return next(action);
  };
};

export const io = middleware();
io.with = middleware;
