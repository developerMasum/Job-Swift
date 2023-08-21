import { createSlice } from "@reduxjs/toolkit";

import { getAllPost } from "./api";

const postSlice = createSlice({
      name: "posts",
      initialState: {
            jobs: [],
            isLoading: false,
            error: null,
          },
          reducers:{},

          extraReducers:(builder)=>{
            builder
            .addCase(getAllPost.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(getAllPost.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.jobs = action.payload;
                })
                .addCase(getAllPost.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error =  action.error.message;
                })
                

          }
})

export  { getAllPost } 
export default postSlice.reducer;