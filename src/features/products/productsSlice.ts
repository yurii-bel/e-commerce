import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  quantity: number;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const apiURL = "https://dummyjson.com/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiURL,
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useFetchProductsQuery } = apiSlice;
