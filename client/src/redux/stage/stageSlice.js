import { createSlice } from "@reduxjs/toolkit";
import { createSetStage } from "./api";



const applicationSlice = createSlice({
      name: "stage",
      initialState: {
            stage: [],
            isLoading: false,
            isToast: false,
            error: null,
          },
          reducers:{},

          extraReducers:(builder)=>{
            builder
            .addCase(createSetStage.pending, (state) => {
                  state.isLoading = true;
                  state.isToast = false;
                })
                .addCase(createSetStage.fulfilled, (state, action) => {
                  state.isLoading = false;
                  state.isToast = true;
                  state.stage.push(action.payload);
                })
                .addCase(createSetStage.rejected, (state, action) => {
                  state.isLoading = false;
                  state.error = action.error.message;
                })
               
                

          }
})

export  { createSetStage } 
export default applicationSlice.reducer;