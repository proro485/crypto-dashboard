import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_HOST,
};

const createRequest = (url) => ({ url: url, headers: headers });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCrypto: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoQuery } = cryptoApi;
