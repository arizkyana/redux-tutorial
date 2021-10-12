import { combineReducers } from 'redux';

import home from './home/slices';
import todos from './todo/slices';

const rootReducers = combineReducers({
  home,
  todos,
});

export default rootReducers;
