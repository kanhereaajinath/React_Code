import { counterSlice } from "./Slice"; // Use curly braces to import named exports
import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    count: counterSlice.reducer
  }
});
