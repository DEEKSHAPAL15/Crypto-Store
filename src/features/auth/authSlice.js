import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userExist || null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coins = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.user = action.payload;
      })
      .addCase(LogOutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "",
        state.user  = null;
      });
    },
});

export default authSlice.reducer;

// Thunk For Login User
export const loginUser = createAsyncThunk("AUTH/LOGIN", async (formdata) => {
  try {
    return await authService.login(formdata);
  } catch (error) {
    console.log(error);
  }
});

// Thunk For Logout User

export const LogOutUser = createAsyncThunk("AUTH/LOGOUT", async ()=> {
  localStorage.removeItem("user");
});
