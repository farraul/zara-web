import { useState } from "react";

import { useDebounce } from "./useDebounce";

const usePaginate = () => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedFilter = useDebounce<string>(filter, 500);

  const handlePage = (page: number) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  return {
    debouncedFilter,
    currentPage,
    filter,
    handlePage,
    handleFilter,
  };
};

export default usePaginate;
