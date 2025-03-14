"use client";

import ProductService from "@/src/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../commons/Button";
import { useProductCurrent } from "@/src/context/ProductContext";

interface Props {
  id: string;
}

const OverviewProduct = ({ id }: Props) => {
  const productService = new ProductService();
  const [colorCurrent, setColorCurrent] = useState<string>("");
  const { handleSelected } = useProductCurrent();
  const { data, status } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: async () => await productService.getProduct(id),
    enabled: !!id,
    staleTime: 100 * 60,
    gcTime: 100 * 60,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (data) {
      setColorCurrent(data.colorOptions[0].imageUrl);
    }
  }, [data]);

  if (status === "pending") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl font-semibold">Cargando...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl font-semibold">Producto no encontrado</span>
      </div>
    );
  }

  const {
    name,
    brand,
    description,
    basePrice,
    rating,
    specs,
    colorOptions,
    storageOptions,
    similarProducts,
  } = data;

  const handleColorCurrent = (color: string) => {
    setColorCurrent(color);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-96 md:h-[600px]">
          <Image
            src={colorCurrent}
            alt={`${brand} ${name}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <p className="text-lg text-gray-600">{brand}</p>
          <p className="text-xl font-semibold text-gray-900">
            ${basePrice.toFixed(2)}
          </p>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg">★ {rating}</span>
            <span className="text-gray-500">(5.0)</span>
          </div>

          <p className="text-gray-700">{description}</p>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">
              Especificaciones
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Pantalla: {specs.screen}</li>
              <li>Resolución: {specs.resolution}</li>
              <li>Procesador: {specs.processor}</li>
              <li>Cámara principal: {specs.mainCamera}</li>
              <li>Cámara frontal: {specs.selfieCamera}</li>
              <li>Batería: {specs.battery}</li>
              <li>Sistema operativo: {specs.os}</li>
              <li>Frecuencia de pantalla: {specs.screenRefreshRate}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">
              Colores disponibles
            </h2>
            <div className="flex space-x-4">
              {colorOptions.map((color) => (
                <button
                  onClick={() => handleColorCurrent(color.imageUrl)}
                  key={color.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color.hexCode }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Almacenamiento</h2>
            <div className="flex space-x-4">
              {storageOptions.map((storage) => (
                <button
                  key={storage.capacity}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg"
                >
                  <span className="text-gray-700">{storage.capacity}</span>
                  <span className="text-gray-500 ml-2">
                    +${storage.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button>Añadir</Button>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Productos similares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="border-2 border-gray-200 rounded-lg p-4"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.imageUrl}
                  alt={`${product.brand} ${product.name}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.brand}</p>
              <p className="text-xl font-bold text-gray-900">
                ${product.basePrice.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewProduct;
