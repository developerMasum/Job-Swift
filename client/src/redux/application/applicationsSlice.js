import { createSlice } from "@reduxjs/toolkit";
import { createApplicationPost, getAllApplications } from "./api";



const applicationSlice = createSlice({
      name: "applications",
      initialState: {
            applications: [],
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
                  state.applications.push(action.payload);
                })
                .addCase(createApplicationPost.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error = action.error.message;
                })
                .addCase(getAllApplications.pending, (state) => {
                  state.isLoading = true;
                })
                .addCase(getAllApplications.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.applications = action.payload;
                })
                .addCase(getAllApplications.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error =  action.error.message;
                })
                

          }
})

export  { createApplicationPost,getAllApplications } 
export default applicationSlice.reducer;