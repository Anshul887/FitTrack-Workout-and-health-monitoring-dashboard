import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import workoutReducer from '../features/workouts/workoutSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    workouts: workoutReducer,
    theme: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
