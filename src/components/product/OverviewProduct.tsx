"use client";

import ProductService from "@/src/services/productServices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../commons/Loader";
import { useRouter } from "next/navigation";
import ButtonBack from "../commons/ButtonBack";
import DetailsProduct from "./overview/DetailsProduct";
import Custom404 from "../commons/404";

interface Props {
  id: string;
}

const OverviewProduct = ({ id }: Props) => {
  const productService = new ProductService();
  const router = useRouter();
  const { data, status } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: async () => await productService.getProduct(id),
    enabled: !!id,
    staleTime: 100 * 60,
    gcTime: 100 * 60,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <header className="w-full justify-star items-center h-24 flex">
        <ButtonBack handleClicked={() => router.back()}>
          <span>Back</span>
        </ButtonBack>
      </header>
      {status === "pending" ? (
        <Loader />
      ) : status === "error" ? (
        <Custom404 />
      ) : (
        <DetailsProduct data={data} />
      )}
    </>
  );
};

export default OverviewProduct;
