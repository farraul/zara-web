'use client';

import { Specs } from '@/src/models/Product';
import React from 'react';

interface Props {
  specs: Specs;
}

const SpecificationsSelected = ({ specs }: Props) => {
  return (
    <div className="w-full flex flex-col mt-10">
      <div className="flex justify-between items-center mb-4 py-6">
        <h2 className="uppercase text-xl font-light text-gray-900">
          Specifications
        </h2>
      </div>
      <ul className="text-gray-700">
        {Object.entries(specs).map(([key, value], index, array) => (
          <li
            key={key}
            className={`flex justify-between text-sm gap-10 items-start py-3 border-t border-gray-800 ${
              index === array.length - 1 ? 'border-b' : ''
            }`}
          >
            <span className="font-medium uppercase">{key}</span>
            <span className="text-left flex-1 ml-4">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecificationsSelected;
