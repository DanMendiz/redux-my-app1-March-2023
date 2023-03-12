import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import lampReducer from '../features/lamp/lampSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lamp: lampReducer,
  },
});
