import { createSlice } from "@reduxjs/toolkit";
import { getAllCandidates } from "./candidatesOperation"; // Import the async thunk

const candidatesSlice = createSlice({
  name: "candidates",
  initialState: {
    candidates: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCandidates.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(getAllCandidates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.candidates = action.payload; // Update candidates with fetched data
      })
      .addCase(getAllCandidates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default candidatesSlice.reducer;
