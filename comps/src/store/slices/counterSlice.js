import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    valueToAdd: 0,
  },
  reducers: {
    setInitialCount(state, action) {
      state.count = action.payload;
    },
    increment(state) {
      ++state.count;
    },
    decrement(state) {
      --state.count;
    },
    setValueToAdd(state, action) {
      state.valueToAdd = action.payload;
    },
    addValueToCount(state) {
      state.count += state.valueToAdd;
    },
  },
});

export const {
  setInitialCount,
  increment,
  decrement,
  setValueToAdd,
  addValueToCount,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
