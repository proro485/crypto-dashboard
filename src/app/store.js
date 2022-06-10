import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../features/cryptoApi/cryptoApi';

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
