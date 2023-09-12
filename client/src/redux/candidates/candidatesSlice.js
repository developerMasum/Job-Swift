import { createSlice } from "@reduxjs/toolkit";
import { getAllCandidates, getAllCandidatesById } from "./candidatesOperation"; // Import the async thunk

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
      })
      .addCase(getAllCandidatesById.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(getAllCandidatesById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.candidates = action.payload; // Update candidates with fetched data
      })
      .addCase(getAllCandidatesById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export  { getAllCandidates,getAllCandidatesById };
export default candidatesSlice.reducer;
