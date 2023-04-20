import { configureStore } from '@reduxjs/toolkit';
import communityReducer from '../features/community/communitySlice';

export default configureStore({
  reducer: {
    community: communityReducer,
  },
});
