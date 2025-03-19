import React from "react";
import OverviewProduct from "@/src/components/product/OverviewProduct";

interface Props {
  params: { productId: string };
}

const Page = ({ params }: Props) => {
  const productId = params.productId;

  return <OverviewProduct id={productId} />;
};

export default Page;
