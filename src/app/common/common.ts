import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  isConnected: boolean;
  isInternetReachable: boolean;
};

const initialState: InitialState = {
  isConnected: false,
  isInternetReachable: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setNetworkInfo: (state, action) => {
      state.isConnected = action.payload.isConnected;
      state.isInternetReachable = action.payload.isInternetReachable;
    },
  },
});

export const commonReducer = commonSlice.reducer;
export const commonActions = commonSlice.actions;
