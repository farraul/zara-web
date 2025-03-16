import React from "react";
import OverviewProduct from "@/src/components/product/OverviewProduct";

interface Props {
  params: { productId: string };
}

const Page = ({ params }: Props) => {
  console.log(" params:::", params);
  const productId = params.productId;

  return <OverviewProduct id={productId} />;
};

export default Page;
