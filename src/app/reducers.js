import { combineReducers } from 'redux';
import communityReducer from '../features/community/communitySlice';

const rootReducer = combineReducers({
  community: communityReducer,
});

export default rootReducer;
