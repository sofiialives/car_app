import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://65cced9add519126b83fd327.mockapi.io/cars/cars";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `?page=${data.page}&limit=12&search=${data.query}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
