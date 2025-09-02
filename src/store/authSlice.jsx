import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getTokenExpiryTime } from "../utils/tokenUtils";

export const loginWithNameAndEmail = createAsyncThunk(
  "auth/loginWithNameAndEmail",
  async ({ firstName, email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/user/login",
        { email }
      );

      return {
        token: response.data.access_token,
        email: response.data.email,
        userId: response.data.user_id,
        username: response.data.username,
        firstName,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.detail || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    email: null,
    userId: null,
    username: null,
    firstName: null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.token = null;
      state.email = null;
      state.userId = null;
      state.username = null;
      state.firstName = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithNameAndEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithNameAndEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.email = action.payload.email;
        state.userId = action.payload.userId;
        state.username = action.payload.username;
        state.firstName = action.payload.firstName;

        const expiryTime = getTokenExpiryTime(action.payload.token);

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user_id", action.payload.userId);

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user_id", action.payload.userId);
        localStorage.setItem("token_expiry", expiryTime);
      })
      .addCase(loginWithNameAndEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
