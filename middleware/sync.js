import { SYNC } from '../actions';

function getFiles(slides) {
  for (const { background } of slides) new Image(background);
}

export const sync = store => next => action => {
  if (action.type === SYNC) getFiles(store.getState().show.slides);
  return next(action);
};
