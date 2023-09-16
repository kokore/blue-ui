import { IProductPayload } from "../slices/productSlice";
import { api } from "./api";

export interface IAuthBaseResponse<T> {
  code: number;
  message: string;
  data: T;
  statusCode: number;
}

export const productServiceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IAuthBaseResponse<IProductPayload>, Partial<any>>({
      query: () => ({ url: `/api/v1/product`, method: "GET" }),
    }),
  }),
});

export const { useGetProductsQuery } = productServiceApi;
