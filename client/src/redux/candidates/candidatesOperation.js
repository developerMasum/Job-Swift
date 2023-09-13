import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCandidates = createAsyncThunk(
  "getAllCandidates",
  async (email, { rejectWithValue }) => {
    // Pass sortOrder as an argument
    try {
      const response = await axios.get(
        `http://localhost:5000/all-candidate/${email}`
      );
      // console.log(response.data);
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);
