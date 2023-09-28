import { configureStore } from "@reduxjs/toolkit";
import {
  counterReducer,
  setInitialCount,
  increment,
  decrement,
  setValueToAdd,
  addValueToCount,
} from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export {
  store,
  setInitialCount,
  increment,
  decrement,
  setValueToAdd,
  addValueToCount,
};
