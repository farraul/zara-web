'use client';

import React from 'react';
import FieldInput from '../commons/field/FieldInput';
import { useQuery } from '@tanstack/react-query';
import ProductService from '@/src/services/productServices';
import ProductItem from './ProductItem';
import useFilter from '@/src/hooks/useFilter';
import Loader from '../commons/Loader';

const ProductContainer = () => {
  const productService = new ProductService();

  const { filter, debouncedFilter, handleFilter } = useFilter();
  const { data, status } = useQuery({
    queryKey: [`paginate-products`, debouncedFilter],
    queryFn: async () =>
      await productService.getProducts(debouncedFilter, 20, 1),
    staleTime: 100 * 60,
    gcTime: 100 * 60,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="flex flex-col gap-5 items-start w-full justify-center">
        <FieldInput
          label=""
          classAditional="w-full max-w-none"
          placeholder="Search for a smartphone..."
          type="text"
          value={filter}
          onChange={(event) => handleFilter(String(event.target.value))}
          name="filter"
          data-testid="filter"
          id="filter"
        />
        {status === 'success' ? (
          <>
            <span className="text-gray-600 text-lg">
              {data?.length} results
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
              {data?.map((product, index) => (
                <ProductItem
                  key={`${product.id}-${product.name}-${index}`}
                  data={product}
                />
              ))}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
