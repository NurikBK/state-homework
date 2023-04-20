import { createSlice } from '@reduxjs/toolkit';

export const communitySlice = createSlice({
  name: 'community',
  initialState: {
    communityData: [],
    isHidden: false,
  },
  reducers: {
    toggleIsHidden: (state) => {
      state.isHidden = !state.isHidden;
    },
  },
});

export const { toggleIsHidden } = communitySlice.actions;

export default communitySlice.reducer;
