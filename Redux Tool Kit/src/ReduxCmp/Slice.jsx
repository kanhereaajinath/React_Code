import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount(state) {
      state.count = state.count + 1;
    },
    decrementCount(state) {
      state.count = state.count - 1; // Corrected the typo: changed "+1" to "-1"
    },
    resetCount(state) {
      state.count = 0;
    }
  }
});

export default counterSlice;
export const counterSliceAction = counterSlice.actions;
