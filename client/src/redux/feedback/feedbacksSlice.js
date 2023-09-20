import { createSlice } from "@reduxjs/toolkit";


import { createFeedback, getFeedback } from "./feedbackAPI";

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState: {
    jobs: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(createFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks.push(action.payload);
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks = action.payload;
      })
      .addCase(getFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { createFeedback, getFeedback };
export default feedbacksSlice.reducer;
