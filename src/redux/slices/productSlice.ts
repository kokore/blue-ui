import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductPayload {
  products: Product[];
}

const initialState = {
  product: [],
} as any;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductResponse(state, action: PayloadAction<IProductPayload>) {
      state.product = action.payload.products;
    },
  },
});

export const selectProducts = (state: RootState) => state.product.product;
export const { setProductResponse } = productSlice.actions;
export default productSlice.reducer;
