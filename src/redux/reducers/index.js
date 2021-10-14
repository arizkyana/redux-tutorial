import { combineReducers } from 'redux';

import home from './home/slices';
import todos from './todo/slices';
import confirmation from './confirmation/slices';

const rootReducers = combineReducers({
  home,
  todos,
  confirmation,
});

export default rootReducers;
