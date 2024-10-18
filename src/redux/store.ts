import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    ui: uiReducer
  }
});

// Infer types for TypeScript usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
