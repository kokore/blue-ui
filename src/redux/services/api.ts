import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001",
});

export const api = createApi({
  reducerPath: "blueApi",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
