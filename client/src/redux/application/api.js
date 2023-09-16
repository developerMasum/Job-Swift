import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createApplicationPost = createAsyncThunk(
  "createApplicationPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        " https://server-wheat-beta.vercel.app/application-post",
        data
      );
      // console.log(response.data);
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);

// get all application
export const getAllApplications = createAsyncThunk(
  "getAllApplications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        " https://server-wheat-beta.vercel.app/all-applications"
      );
      console.log(response.data);
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);
console.log("hello");
