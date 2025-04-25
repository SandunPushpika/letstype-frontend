import { configureStore } from '@reduxjs/toolkit';
import pageStateReducer from './slices/PageStateSlice';

export const store = configureStore({
  reducer: {
    sideNavigation: pageStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch