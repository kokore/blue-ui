import { IWalletPayload } from "../slices/walletSlice";
import { api } from "./api";
import { IAuthBaseResponse } from "./productApi";

interface IUpdateWalletRequest {
  id: string;
  coins: any;
  banknotes: any;
}

export const walletServiceApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWallet: build.query<IAuthBaseResponse<IWalletPayload>, Partial<any>>({
      query: () => ({ url: `/api/v1/wallet`, method: "GET" }),
    }),
    updateWallet: build.mutation<
      IAuthBaseResponse<IWalletPayload>,
      Partial<any>
    >({
      query: (body: IUpdateWalletRequest) => ({
        url: `/api/v1/wallet/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useGetWalletQuery, useUpdateWalletMutation } = walletServiceApi;
