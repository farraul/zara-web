"use client";

import React from "react";
import FieldInput from "../commons/field/FieldInput";
import { useQuery } from "@tanstack/react-query";
import ProductService from "@/src/services/productServices";
import usePaginate from "@/src/hooks/usePaginate";

const ContainerProduct = () => {
  const productService = new ProductService();

  const {
    currentPage: offset,
    debouncedFilter,
    handleFilter,
    handlePage,
  } = usePaginate();
  const { data, status } = useQuery({
    queryKey: [`paginate-products`, debouncedFilter, offset],
    queryFn: async () =>
      await productService.getProducts(offset, 20, debouncedFilter),
    staleTime: 100 * 60,
    gcTime: 100 * 60,
    refetchOnWindowFocus: false,
  });
  return (
    <div className="flex flex-col gap-5 items-start w-full justify-center">
      <FieldInput
        label="test"
        type="text"
        onChange={(event) => handleFilter(String(event.target.value))}
        name="filter"
        id="filter"
      />
      <span>0 results</span>
    </div>
  );
};

export default ContainerProduct;
