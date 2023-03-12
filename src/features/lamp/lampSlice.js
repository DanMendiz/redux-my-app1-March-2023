import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  on: false,
};

export const lampSlice = createSlice({
  name: 'lamp',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    turnOn: (state) => {
      state.on = true;
    },
    turnOff: (state) => {
      state.on = false;
    },
  },
});

export const { turnOff, turnOn } = lampSlice.actions;

export const selectLampState = (state) => state.lamp.on;

export default lampSlice.reducer;
