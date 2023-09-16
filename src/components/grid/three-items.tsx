"use client";

import { GridTileImage } from "@/components/grid/tile";
import { Product, selectProducts } from "@/redux/slices/productSlice";
import { useTypedSelector } from "@/redux/store";

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <div className="relative block aspect-square h-full w-full">
        <GridTileImage
          src={item.image}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.name}
          label={{
            quantity: item.quantity,
            id: item.id,
            position: size === "full" ? "center" : "bottom",
            title: item.name as string,
            amount: "" + item.price,
            currencyCode: "THB",
          }}
        />
      </div>
    </div>
  );
}

export function ThreeItemGrid() {
  const homepageItems = useTypedSelector(selectProducts);

  if (
    !homepageItems ||
    homepageItems.length === 0 ||
    !homepageItems[0] ||
    !homepageItems[1] ||
    !homepageItems[2]
  )
    return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
