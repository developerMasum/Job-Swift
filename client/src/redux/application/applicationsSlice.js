import { createSlice } from "@reduxjs/toolkit";
import { createApplicationPost } from "./api";



const applicationSlice = createSlice({
      name: "application",
      initialState: {
            application: [],
            isLoading: false,
            error: null,
          },
          reducers:{},

          extraReducers:(builder)=>{
            builder
            .addCase(createApplicationPost.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(createApplicationPost.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.jobs.push(action.payload);
                })
                .addCase(createApplicationPost.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error = action.error.message;
                })
                

          }
})

export  { createApplicationPost } 
export default applicationSlice.reducer;