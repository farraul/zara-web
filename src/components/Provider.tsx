"use client";

import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "../context/ProductContext";

const Provider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>{children}</ProductProvider>
    </QueryClientProvider>
  );
};

export default Provider;
