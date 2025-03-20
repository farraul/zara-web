"use client";

import { Product } from "@/src/models/Product";
import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import StorageSelected from "./StorageSelected";
import ColorSelected from "./ColorSelected";
import Button from "../../commons/Button";
import { useCartProduct } from "@/src/context/ProductContext";
import useProduct from "@/src/hooks/useProduct";
import SpecificationsSelected from "./SpecificationsSelected";
import ItemProduct from "../ItemProduct";
import CarouselComponent from "../../carousel/Carousel";

interface Props {
  data: Product;
}

const DetailsProduct = ({ data }: Props) => {
  const { handleSelecteds } = useCartProduct();
  const {
    handleColorCurrent,
    handleStorageCurrent,
    storageCurrent,
    colorCurrent,
  } = useProduct();
  const isDisabled = useMemo(() => {
    if (colorCurrent && storageCurrent) return false;
    return true;
  }, [colorCurrent, storageCurrent]);

  useEffect(() => {
    if (data) {
      handleColorCurrent(data.colorOptions[0]);
    }
  }, [data]);

  const handleAddToCart = () => {
    if (colorCurrent && storageCurrent) {
      handleSelecteds({
        id: data.id,
        name: data.name,
        colorOption: colorCurrent,
        storageOptions: storageCurrent,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="flex w-full flex-col xl:flex-row justify-start items-start xl:space-x-8">
        <div className="w-full xl:w-1/2">
          {colorCurrent ? (
            <div className="relative w-full h-72 mb-14 md:mb-0 md:h-[600px]">
              <Image
                src={colorCurrent?.imageUrl as string}
                alt={`${data.brand} ${data.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            </div>
          ) : null}
        </div>

        <div className="w-full xl:w-1/2 xl:mb-12 xl:self-end flex flex-col space-y-6 pb-10">
          <h1 className="text-3xl font-light text-gray-900 uppercase">
            {data.name}
          </h1>
          <p className="text-xl font-light text-gray-800">
            {storageCurrent?.price ?? data.basePrice.toFixed(0)} EUR
          </p>
          <StorageSelected
            storageOptions={data.storageOptions}
            storageCurrent={storageCurrent}
            handleStorageCurrent={handleStorageCurrent}
          />
          <ColorSelected
            colorOptions={data.colorOptions}
            colorCurrent={colorCurrent}
            handleColorCurrent={handleColorCurrent}
          />
          <Button
            isDisabled={isDisabled}
            onClick={handleAddToCart}
            className="rounded-none w-full bg-black flex justify-center items-center text-white text-xl"
          >
            Añadir
          </Button>
        </div>
      </div>

      <SpecificationsSelected specs={data.specs} />

      <div className="w-full flex flex-col my-10 gap-10 items-start justify-center">
        <h2 className="uppercase text-xl font-light text-gray-900">
          Similar items
        </h2>
        <CarouselComponent>
          {data.similarProducts.map((product) => (
            <ItemProduct key={product.id} data={product} />
          ))}
        </CarouselComponent>
      </div>
    </div>
  );
};

export default DetailsProduct;
