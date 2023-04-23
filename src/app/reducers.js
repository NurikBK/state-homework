import { combineReducers } from 'redux';
import communityReducer from './communitySlice';


const rootReducer = combineReducers({
  community: communityReducer,
});

export default rootReducer;
