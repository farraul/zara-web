"use client";

import { ColorOption } from "@/src/models/Product";
import React from "react";

interface Props {
  colorOptions: ColorOption[];
  colorCurrent?: ColorOption;
  handleColorCurrent: (color: ColorOption) => void;
}

const ColorSelected = ({
  colorOptions,
  colorCurrent,
  handleColorCurrent,
}: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-sm md:text-lg transition-all xl:text-xl font-light text-gray-900 uppercase">
        COLOR. PÌCK YOUR FAVOURITE.
      </h2>
      <div className={`flex flex-col gap-2 justify-center items-start`}>
        <div className="w-full flex gap-5 items-center">
          {colorOptions.map((color) => (
            <button
              onClick={() => handleColorCurrent(color)}
              key={color.imageUrl}
              style={{ backgroundColor: color.hexCode }}
              className={`w-6 cursor-pointer hover:border-black transition-all h-6 border ${
                colorCurrent?.imageUrl === color.imageUrl
                  ? "border-black"
                  : "border-gray-300"
              }`}
            />
          ))}
        </div>
        {colorCurrent ? (
          <span className="text-black text-sm font-light">
            {colorCurrent?.name}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ColorSelected;
