import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: "",
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCars.rejected, handleRejected),
});

export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
