import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productSlice from "./slices/productSlice";
import { api } from "./services/api";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import walletSlice from "./slices/walletSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    wallet: walletSlice,
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([api.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
