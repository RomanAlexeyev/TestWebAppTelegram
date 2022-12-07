import { configureStore } from "@reduxjs/toolkit";

import stepsReducer from "./slices/stepSlice";

export const store = configureStore({
    reducer: {
      steps: stepsReducer,
    },
  })