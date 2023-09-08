import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const email = data.email;
    try {
      const response = await axios.put(
        `https://sojib-job-swift.vercel.app/user/${email}`,
        data
      );
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://sojib-job-swift.vercel.app/users"
      );
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);

// post a job
export const createJobPost = createAsyncThunk(
  "createJobPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://sojib-job-swift.vercel.app/job_post",
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
