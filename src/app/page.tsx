import { Carousel } from "@/components/carousel";
import { ThreeItemGrid } from "@/components/grid/three-items";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "Blue Vending Machine",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
      </Suspense>
    </>
  );
}
