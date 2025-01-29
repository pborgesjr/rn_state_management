import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {MOCK_URL} from '../utils/constants';
import {CartItem} from './types';

export const itemsApiSlice = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({baseUrl: MOCK_URL}),
  endpoints: builder => ({
    getItems: builder.query<CartItem[], {}>({
      query: () => '',
    }),
  }),
});

export const {useGetItemsQuery} = itemsApiSlice;
