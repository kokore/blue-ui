import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IWalletPayload {
  id: string;
  coins: WalletCoinState;
  banknotes: WalletBanknotesState;
  total: number;
}

interface WalletCoinState {
  [key: string]: number;
}

interface WalletBanknotesState {
  [key: string]: number;
}

const initialState = {
  id: "",
  coins: {},
  banknotes: {},
  total: 0,
} as {
  id: string;
  coins: WalletCoinState;
  banknotes: WalletBanknotesState;
  total: number;
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletResponse(state, action: PayloadAction<IWalletPayload>) {
      state.id = action.payload.id;
      state.coins = action.payload.coins;
      state.banknotes = action.payload.banknotes;
      state.total = action.payload.total;
    },
  },
});

export const selectWalletCoins = (state: RootState) => state.wallet.coins;
export const selectWalletBanknotes = (state: RootState) =>
  state.wallet.banknotes;
export const selectWalletTotal = (state: RootState) => state.wallet.total;

export const { setWalletResponse } = walletSlice.actions;
export default walletSlice.reducer;
