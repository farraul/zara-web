"use client";

import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ProductSelected } from "../models/Product";
import { toast } from "sonner";
import useLocalStorage from "../hooks/useLocalStorage";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

interface Values {
  storage: ProductSelected[];
  setStorage: Dispatch<SetStateAction<ProductSelected[]>>;
  handleSelecteds: (data: ProductSelected) => void;
}

const ProductContext = createContext({} as Values);

export function useCartProduct() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }: Props) => {
  const [storage, setStorage] = useLocalStorage<ProductSelected[]>("cart", []);

  const handleSelecteds = (data: ProductSelected) => {
    const total = [...storage, data];
    toast.success(
      `Se ha añadido con éxito el teléfono: ${data.name} al carrito`
    );
    setStorage(total);
  };

  const values = {
    storage,
    setStorage,
    handleSelecteds,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
