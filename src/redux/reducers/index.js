import { combineReducers } from 'redux';

import home from './home/slices';

const rootReducers = combineReducers({
  home,
});

export default rootReducers;
