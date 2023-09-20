import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Correct the argument passed to the createAsyncThunk function
export const createSetStage = createAsyncThunk(
  "createSetStage",
  async ({ id, data }, { rejectWithValue }) => {
    // Destructure id and data from the argument
    try {
      const response = await axios.patch(
        ` https://server-hazel-nine.vercel.app/applicant/stage/${id}`,
        data
      );
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);
