import { useState } from "react";
import { ColorOption, StorageOption } from "../models/Product";

const useProduct = () => {
  const [colorCurrent, setColorCurrent] = useState<ColorOption>();
  const [storageCurrent, setStorageCurrent] = useState<StorageOption>();

  const handleColorCurrent = (color: ColorOption) => {
    setColorCurrent(color);
  };

  const handleStorageCurrent = (storage: StorageOption) => {
    setStorageCurrent(storage);
  };

  return {
    storageCurrent,
    colorCurrent,
    handleColorCurrent,
    handleStorageCurrent,
  };
};

export default useProduct;
