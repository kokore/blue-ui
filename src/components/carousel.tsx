"use client";

import Link from "next/link";
import { GridTileImage } from "@/components/grid/tile";
import { useGetProductsQuery } from "@/redux/services/productApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  selectProducts,
  setProductResponse,
} from "@/redux/slices/productSlice";
import { useTypedSelector } from "@/redux/store";

export function Carousel() {
  const dispatch = useDispatch();
  const productState = useTypedSelector(selectProducts);
  const { isLoading, isFetching, data } = useGetProductsQuery({});

  useEffect(() => {
    if (data?.statusCode === 200) {
      dispatch(setProductResponse(data.data));
    }
  }, [data, dispatch]);

  if (isLoading || isFetching) return <div></div>;

  const carouselProducts = [...productState];

  console.log(">>carouselProducts", carouselProducts);

  return (
    <div className=" w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link
              href={`/product/${product.id}`}
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price,
                  currencyCode: "THB",
                }}
                src={product.image}
                fill
                priority={true}
                quality={50}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
