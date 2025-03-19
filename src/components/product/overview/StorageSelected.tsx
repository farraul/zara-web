"use client";

import { StorageOption } from "@/src/models/Product";
import React from "react";

interface Props {
  storageOptions: StorageOption[];
  storageCurrent?: StorageOption;
  handleStorageCurrent: (storage: StorageOption) => void;
}

const StorageSelected = ({
  storageOptions,
  storageCurrent,
  handleStorageCurrent,
}: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-sm md:text-lg transition-all xl:text-xl font-light text-gray-900 uppercase">
        Storage, ¿How much space do you need?
      </h2>
      <div className={`flex justify-start items-center`}>
        {storageOptions.map((storage) => (
          <button
            onClick={() => handleStorageCurrent(storage)}
            key={storage.capacity}
            className={`px-8 cursor-pointer hover:border-black transition-all py-4 border ${
              storageCurrent?.capacity === storage.capacity
                ? "border-black"
                : "border-gray-300"
            }`}
          >
            <span className="text-gray-700">{storage.capacity}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StorageSelected;
