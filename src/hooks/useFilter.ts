import { useState } from "react";

import { useDebounce } from "./useDebounce";

const useFilter = () => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce<string>(filter, 500);

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  return {
    filter,
    debouncedFilter,
    handleFilter,
  };
};

export default useFilter;
