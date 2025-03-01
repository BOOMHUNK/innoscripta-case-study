import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import preferencesSlice from "./preferencesSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    preferences: preferencesSlice,
  },
});
// Type definitions for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
