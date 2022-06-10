import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../features/cryptoApi/cryptoApi';
import { newsApi } from '../features/newsApi/newsApi';

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),
});
