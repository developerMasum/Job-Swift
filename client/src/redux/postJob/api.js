import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost = createAsyncThunk(
  "getAllPost",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(" https://server-wheat-beta.vercel.app/all-post");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
