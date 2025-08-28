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

// ✅ Optimized checkAuth thunk - only makes request if there's likely authentication
export const checkAuth = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    // Check for stored token
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');

    // Check for auth-related cookies (common names)
    const hasAuthCookie = document.cookie.split(';').some(cookie => {
      const cookieName = cookie.trim().split('=')[0].toLowerCase();
      return cookieName.includes('auth') ||
             cookieName.includes('session') ||
             cookieName.includes('token') ||
             cookieName.includes('jwt');
    });

    // Only make the API call if we have some indication of authentication
    if (!storedToken && !hasAuthCookie) {
      // No authentication indicators found, skip API call
      dispatch(logout());
      return;
    }

    const config = {
      withCredentials: true,
      // Add authorization header if we have a token
      ...(storedToken && {
        headers: {
          'Authorization': `Bearer ${storedToken}`
        }
      })
    };

    const response = await axios.get(
      `https://codelab-wvno.onrender.com/user/current-user`,
      config
    );

    if (response.data.success) {
      dispatch(login(response.data.user));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    // Only log non-401 errors since 401 is expected for unauthenticated users
    if (error.response?.status !== 401) {
      console.error('Auth check failed:', error.message);
    }

    // Clear any stored auth data on 401
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      // Clear any other auth-related data you might have stored
    }

    dispatch(logout());
  } finally {
    dispatch(setLoading(false));
  }
};
