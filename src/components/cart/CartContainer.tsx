'use client';

import React, { useState } from 'react';
import { useCartProduct } from '@/src/context/ProductContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../commons/Button';
import { ProductSelected } from '@/src/models/Product';
import { toast } from 'sonner';

const CartContainer = () => {
  const { storage, setStorage } = useCartProduct();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const total = storage.reduce(
    (acc, item) => acc + item.storageOptions.price,
    0
  );
  const handleDeleted = (data: ProductSelected) => {
    const storageNew = storage.filter(
      (product) =>
        product.id !== data.id ||
        product.storageOptions.price !== data.storageOptions.price
    );
    toast.success(
      `Se ha eliminado con éxito el teléfono: ${data.name} del carrito`
    );
    setStorage(storageNew);
  };

  const handlePay = async () => {
    setLoading(true);
    setTimeout(() => {
      setStorage([]);
      setLoading(false);
      localStorage.clear();
      toast.success(`Ha comprado con éxito se le enviará un correo`);
    }, 1200);
  };
  return (
    <section className="xl:min-h-[100vh-24rem] w-full flex-1 flex flex-col p-4">
      <h1 className="text-2xl font-light text-black mb-6">
        Cart ({storage.length})
      </h1>
      <div
        className={`space-y-6 w-full ${storage.length === 0 ? 'h-[50vh]' : ''}`}
      >
        {storage.map((item, index) => (
          <div
            key={index}
            className="flex flex-row h-full items-start md:items-center gap-6 pb-6"
          >
            <div className="relative w-32 md:w-48 md:h-48 xl:w-56 xl:h-56 h-32">
              <Image
                src={item.colorOption.imageUrl}
                alt={`${item.name} - ${item.colorOption.name}`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>

            <div className="flex-1 flex flex-col items-start w-fit font-light text-gray-700 h-full">
              <h2 className="">{item.name}</h2>
              <div className="text-sm gap-2 flex items-center">
                <span>{item.storageOptions.capacity}</span>
                <span>|</span>
                <span>{item.colorOption.name}</span>
              </div>
              <p className="mt-5">{item.storageOptions.price.toFixed(0)} EUR</p>
              <button
                className="cursor-pointer text-sm text-red-600 hover:text-red-800"
                onClick={() => handleDeleted(item)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto border-t border-gray-200 pt-6">
        <div className="flex justify-between xl:justify-start gap-10 items-center mb-6">
          <h2 className="uppercase text-xl font-light text-gray-900">Total</h2>
          <p className="text-xl font-bold text-gray-900">
            {total.toFixed(0)} EUR
          </p>
        </div>

        <div className="flex whitespace-nowrap w-full max-w-xl mx-auto flex-row gap-4">
          <Button
            type="button"
            onClick={() => router.push('/')}
            className="rounded-none w-full bg-white border border-black flex justify-center items-center text-black text-sm xl:text-xl hover:bg-gray-100"
          >
            Continue Shopping
          </Button>
          {storage.length !== 0 ? (
            <Button
              loading={loading}
              onClick={handlePay}
              className="rounded-none w-full bg-black flex justify-center items-center text-white text-sm xl:text-xl"
            >
              Pay
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
