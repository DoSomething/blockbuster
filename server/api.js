import { initialState } from '../shared/initialState';
const db = require('monk')(process.env.MONGO_URI);
const store = db.get('store');

const MASTER_KEY = 'puppetsloth';
let id = '';

module.exports = {
  get: async () => {
    return store.findOne({ key: MASTER_KEY });
  },

  insert: async (state) => {
    state._id = id;
    state.key = MASTER_KEY;
    state.navigation = initialState.navigation;

    return store.findOneAndUpdate({ key: MASTER_KEY }, state);
  },

  init: async () => {
    let result = await module.exports.get();

    if (!result) {
      const state = initialState;
      state.key = MASTER_KEY;

      result = await store.insert(state);
    }

    id = result._id;
    delete result._id;
    delete result.key;

    return result;
  },
};
