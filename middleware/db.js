const api = require('../server/api');

export const db = store => next => action => {
  const result = next(action);
  api.insert(store.getState());

  return result;
};
