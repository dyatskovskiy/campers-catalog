import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const initialState = {
  campersList: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campersList = action.payload;
        state.isLoading = false;
        state.errorr = null;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const campersReducer = campersSlice.reducer;
