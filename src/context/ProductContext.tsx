"use client";

import { createContext, useContext, useState } from "react";
import { ProductSelected } from "../models/Product";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

interface Values {
  current: ProductSelected[];
  handleSelected: (data: ProductSelected) => void;
}

const ProductContext = createContext({} as Values);

export function useProductCurrent() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }: Props) => {
  const [current, setCurrent] = useState<ProductSelected[]>([]);

  const handleSelected = (data: ProductSelected) => {
    const total = [...current, data];
    setCurrent(total);
  };

  const values = {
    current,
    handleSelected,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
