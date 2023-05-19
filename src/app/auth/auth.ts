import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
  isLoading: false;
  error: null;
};

const initialState = {
  accessToken: '',
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
