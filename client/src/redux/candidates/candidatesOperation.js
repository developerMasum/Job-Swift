// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getAllCandidates = createAsyncThunk(
//   "getAllCandidates",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://sojib-job-swift.vercel.app/all-applications?sortOrder=${sortOrder}`
//       );
//       console.log(response.data);
//       return response.data; // Return the data received from the server if needed
//     } catch (error) {
//       // Return the error payload using rejectWithValue
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCandidates = createAsyncThunk(
  "getAllCandidates",
  async (sortOrder, { rejectWithValue }) => {
    // Pass sortOrder as an argument
    try {
      const response = await axios.get(
        `https://sojib-job-swift.vercel.app/all-applications?sortOrder=${sortOrder}`
      );
      console.log(response.data);
      return response.data; // Return the data received from the server if needed
    } catch (error) {
      // Return the error payload using rejectWithValue
      return rejectWithValue(error.response.data);
    }
  }
);
