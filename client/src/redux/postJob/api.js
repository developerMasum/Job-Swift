import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all post
export const getAllPost = createAsyncThunk(
      "getAllPost",
      async (_, { rejectWithValue }) => {
        try {
          const response = await axios.get("http://localhost:5000/all-post");
          console.log(response.data);
          return response.data; // Return the data received from the server if needed
        } catch (error) {
          // Return the error payload using rejectWithValue
          return rejectWithValue(error.response.data);
        }
      }
    );
    console.log("hello");
    