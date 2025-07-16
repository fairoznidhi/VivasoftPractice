import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface UserState {
  loading: boolean;
  user: LoginResponse | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

export const loginUser = createAsyncThunk<LoginResponse, UserCredentials>(
  'user/loginUser',
  async (userCredentials) => {
    const response = await axios.post<LoginResponse>(
      'https://fakestoreapi.com/auth/login',
      userCredentials
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        if (action.error.message === 'Request failed with status code 401') {
          state.error = 'Access Denied! Invalid Credentials';
        } else {
          state.error = action.error.message || "Login Failed";
        }
      });
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.user;
export default userSlice.reducer;
