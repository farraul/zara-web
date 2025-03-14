import React from "react";
import OverviewProduct from "@/src/components/product/OverviewProduct";

interface Props {
  params: { productId: string };
}

export const dynamic = "auto";
export const dynamicParams = true;

const page = async ({ params: { productId } }: Props) => {
  return <OverviewProduct id={productId} />;
};

export default page;
