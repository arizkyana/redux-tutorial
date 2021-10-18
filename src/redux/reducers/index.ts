import { combineReducers } from 'redux';

import confirmation from './confirmation/slices';

// PT. KAI
const rootReducers = combineReducers({
  confirmation,
});

export default rootReducers;
