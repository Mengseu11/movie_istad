import { createSlice } from "@reduxjs/toolkit";
import { fetchPopular } from "./popularAction";

const initialState = {
  data: {},
  status: "",
  error: {},
};

export const popularSlice = createSlice({
  name: "popular",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.data = action.payload; /* payload from api */
      })
      .addCase(fetchPopular.pending, (state, action) => {
        state.status = "PENDING";
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.status = "ERROR";
        state.error = action.error;
      });
  },
});
export default popularSlice.reducer