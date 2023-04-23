import { createSlice } from '@reduxjs/toolkit';

const joinUsSlice = createSlice({
  name: 'joinUs',
  initialState: { isSubscribed: false, isDisabled: false },
  reducers: {
    setIsSubscribed: (state, action) => {
      state.isSubscribed = action.payload;
    },
    setIsDisabled: (state, action) => {
      state.isDisabled = action.payload;
    },
  },
});

export const { setIsSubscribed, setIsDisabled } = joinUsSlice.actions;

export default joinUsSlice.reducer;
