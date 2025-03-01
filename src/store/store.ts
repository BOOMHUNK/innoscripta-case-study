import { configureStore, combineReducers } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import preferencesSlice from "./preferencesSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

// Create a persist config for the preferences slice
const preferencesPersistConfig = {
  key: "preferences",
  storage,
};

// Wrap the preferences reducer with persistReducer
const persistedPreferencesReducer = persistReducer(preferencesPersistConfig, preferencesSlice);

// Combine reducers—persisted preferences and non-persisted filters
const rootReducer = combineReducers({
  filters: filtersReducer,
  preferences: persistedPreferencesReducer,
});

// Configure the store with the combined reducer
export const store = configureStore({
  reducer: rootReducer,
});

// Create a persistor linked to the store
export const persistor = persistStore(store);

// Type definitions for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
