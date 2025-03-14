"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full mb-5 h-24 flex justify-between items-center">
      <span className="text-2xl font-semibold">
        <Image
          src={"/icons/logotype.svg"}
          alt="image reference logotype"
          width={24}
          height={24}
        />
      </span>
      <div className="flex items-center gap-2">
        <Image
          src={"/icons/cart.svg"}
          alt="image reference cart"
          width={15}
          height={15}
        />
        <span className="font-light text-lg">0</span>
      </div>
    </header>
  );
};

export default Header;
