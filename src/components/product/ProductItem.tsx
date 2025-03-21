'use client';

import React from 'react';
import Image from 'next/image';
import { ProductSummary } from '@/src/models/Product';
import Link from 'next/link';

interface Props {
  data: ProductSummary;
}

const ProductItem = ({ data }: Props) => {
  const { id, name, brand, basePrice, imageUrl } = data;

  return (
    <Link
      href={`/overview/product/${id}`}
      className="cursor-pointer w-full hover:text-white text-gray-800 h-full justify-center flex flex-col items-center p-4 border-1 border-gray-300 duration-300 relative overflow-hidden group"
    >
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 group-hover:opacity-75 group-hover:h-full transition-all duration-300 ease-in-out z-0"></div>

      <div className="relative w-48 h-48 mb-4 overflow-hidden z-10">
        <Image
          src={imageUrl}
          alt={`${brand} ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
          className="w-full h-full"
        />
      </div>

      <div className="text-center w-full flex self-end items-center justify-between z-10">
        <div className="w-fit flex items-start text-sm flex-col font-light">
          <p className="text-sm text-start text-gray-300">{brand}</p>
          <h2 className="">{name}</h2>
        </div>
        <p className="font-light text-sm self-end">
          {basePrice.toFixed(2)} EUR
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
