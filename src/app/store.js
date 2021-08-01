import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appsReducer from './reducers/apps.reducer';
import backgroundReducer from './reducers/background.reducer';

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    apps: appsReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});
