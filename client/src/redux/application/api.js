import { createAsyncThunk } from "@reduxjs/toolkit";

export const createApplicationPost = createAsyncThunk(
      "createApplicationPost",
      async (data, { rejectWithValue }) => {
        try {
          const response = await axios.post("http://localhost:5000/application-post", data);
          console.log(response.data);
          return response.data; 
        } catch (error) {
         
          return rejectWithValue(error.response.data);
        }
      }
    );