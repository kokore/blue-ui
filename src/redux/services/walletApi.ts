import { IWalletPayload } from "../slices/walletSlice";
import { api } from "./api";
import { IAuthBaseResponse } from "./productApi";

export const walletServiceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWallet: build.query<IAuthBaseResponse<IWalletPayload>, Partial<any>>({
      query: () => ({ url: `/api/v1/wallet`, method: "GET" }),
    }),
  }),
});

export const { useGetWalletQuery } = walletServiceApi;
