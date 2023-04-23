import { combineReducers } from 'redux';
import communityReducer from '../features/community/communitySlice';
import joinUsReducer from '../features/joinUs/joinUsSlice';

const rootReducer = combineReducers({
  community: communityReducer,
  joinUs: joinUsReducer,
});

export default rootReducer;
