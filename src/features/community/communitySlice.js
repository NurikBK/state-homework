import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCommunityData = createAsyncThunk(
  'community/fetchData',
  async () => {
    const res = await fetch('http://localhost:3000/community', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Unable to fetch community data');
    }

    const data = await res.json();
    return data;
  }
);

const communitySlice = createSlice({
  name: 'community',
  initialState: { isHidden: true, data: [], status: 'idle', error: null },
  reducers: {
    setIsHidden: (state, action) => {
      state.isHidden = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunityData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommunityData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCommunityData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setIsHidden } = communitySlice.actions;

export default communitySlice.reducer;
