import React from 'react';
import ProductOverview from '@/src/components/product/ProductOverview';

interface Props {
  params: { productId: string };
}

const Page = async ({ params }: Props) => {
  const { productId } = await params;

  return <ProductOverview id={productId} />;
};

export default Page;
