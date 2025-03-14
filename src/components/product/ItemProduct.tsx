"use client";

import React from "react";
import Image from "next/image";
import { ProductSummary } from "@/src/models/Product";
import Link from "next/link";

interface Props {
  data: ProductSummary;
}

const ItemProduct = ({ data }: Props) => {
  const { id, name, brand, basePrice, imageUrl } = data;

  return (
    <Link
      href={`/overview/product/${id}`}
      className="cursor-pointer w-72 hover:opacity-80 flex flex-col items-center p-4 border-2 border-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={imageUrl}
          alt={`${brand} ${name}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{brand}</p>
        <p className="text-lg font-semibold text-gray-900 mt-2">
          ${basePrice.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ItemProduct;
