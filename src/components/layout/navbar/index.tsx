"use client";

import { useGetWalletQuery } from "@/redux/services/walletApi";
import {
  selectWalletBanknotes,
  selectWalletCoins,
  selectWalletTotal,
  setWalletResponse,
} from "@/redux/slices/walletSlice";
import { useTypedSelector } from "@/redux/store";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const { SITE_NAME } = process.env;

export default function Navbar() {
  const dispatch = useDispatch();
  const walletCoinState = useTypedSelector(selectWalletCoins);
  const walletBanknotesState = useTypedSelector(selectWalletBanknotes);
  const totalState = useTypedSelector(selectWalletTotal);
  const { isLoading, isFetching, data } = useGetWalletQuery({});

  useEffect(() => {
    if (data?.statusCode === 200) {
      dispatch(setWalletResponse(data.data));
    }
  }, [data, dispatch]);

  if (isLoading || isFetching) return <div></div>;

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <div>Simple Vending Machine</div>
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          <div className="flex items-center mr-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {Object.entries(walletCoinState).map(([k, v]: [string, number]) => {
              return (
                <div className="m-2" key={k + v}>
                  <p>
                    {k} : {v}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex items-center max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {Object.entries(walletBanknotesState).map(
              ([k, v]: [string, number]) => {
                return (
                  <div className="m-2" key={k + v}>
                    <p>
                      {k} : {v}
                    </p>
                  </div>
                );
              }
            )}
          </div>

          <div className="flex items-center justify-end md:w-1/3">
            <div>Total : {totalState}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
