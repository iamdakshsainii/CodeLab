import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuth: false,
  userData: null,
  isLoading: true, // Track if auth check is in progress
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.userData = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userData = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;

// ✅ Correct checkAuth thunk using the right backend URL
export const checkAuth = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`https://codelab-wvno.onrender.com/user/current-user`, {
      withCredentials: true,
    });

    if (response.data.success) {
      dispatch(login(response.data.user));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    dispatch(logout());
  } finally {
    dispatch(setLoading(false));
  }
};
