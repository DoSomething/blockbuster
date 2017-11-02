import { combineReducers } from 'redux';
import { voice } from './voice';
import { mode } from './mode';
import { navigation } from './navigation';
import { show } from './show';
import { slide } from './slide';
import { tweet } from './tweet';

export function reduce(reducers) {
  return combineReducers({
    voice,
    mode,
    navigation,
    show,
    slide,
    tweet,
  });
}
