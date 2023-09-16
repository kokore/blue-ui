import { IProductPayload } from "../slices/productSlice";
import { IWalletPayload } from "../slices/walletSlice";
import { api } from "./api";

export interface IAuthBaseResponse<T> {
  code: number;
  message: string;
  data: T;
  statusCode: number;
}

interface IPurchaseRequest {
  productId: string;
  quantity: number;
}

interface IPurchasePayload {
  products: IProductPayload;
  wallet: IWalletPayload;
}

export const productServiceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IAuthBaseResponse<IProductPayload>, Partial<any>>({
      query: () => ({ url: `/api/v1/product`, method: "GET" }),
    }),
    purchaseRequest: build.mutation<
      IAuthBaseResponse<IPurchasePayload>,
      Partial<any>
    >({
      query: (body: IPurchaseRequest) => ({
        url: `/api/v1/purchase`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, usePurchaseRequestMutation } =
  productServiceApi;
