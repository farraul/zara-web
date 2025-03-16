"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductSelected } from "../models/Product";
import { toast } from "sonner";

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
  const [storage, setStorage] = useState<ProductSelected[]>([]);

  const handleSelecteds = (data: ProductSelected) => {
    const total = [...storage, data];
    toast.success(
      `Se ha añadido con éxito el teléfono: ${data.name} al carrito`
    );
    localStorage.setItem("cart", JSON.stringify(total));
    setStorage(total);
  };

  useEffect(() => {
    const total = localStorage.getItem("cart");
    if (total) {
      setStorage(JSON.parse(total as string));
    }
  }, []);

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
