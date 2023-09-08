import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllPost = createAsyncThunk(
      "getAllPost",
      async (_, { rejectWithValue }) => {
        try {
          const response = await axios.get("http://localhost:5000/all-post");
          // console.log(response.data);
          return response.data; 
        } catch (error) {
       
          return rejectWithValue(error.response.data);
        }
      }
    );

