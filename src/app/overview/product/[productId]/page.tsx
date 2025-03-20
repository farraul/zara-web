import React from "react";
import OverviewProduct from "@/src/components/product/OverviewProduct";

interface Props {
  params: { productId: string };
}

const Page = async ({ params }: Props) => {
  const { productId } = await params;

  return <OverviewProduct id={productId} />;
};

export default Page;
