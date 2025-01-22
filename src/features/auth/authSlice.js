import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  profile: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.accessToken = action.payload.access_token
        console.log('status', state.isAuthenticated)
        console.log('access token',state.accessToken)
      })
      .addCase(login.pending, (state, action) => {
        state.isAuthenticated = false
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false
      });
  },
});

export default authSlice.reducer
