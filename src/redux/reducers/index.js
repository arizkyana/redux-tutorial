import { combineReducers } from 'redux';

import home from './home/slices'; // slice / reducer -> stasiun
import todos from './todo/slices';
import confirmation from './confirmation/slices';

// PT. KAI
const rootReducers = combineReducers({
  home,
  todos,
  confirmation,
});

export default rootReducers;
