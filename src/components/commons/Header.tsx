'use client';

import { useCartProduct } from '@/src/context/ProductContext';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const { storage } = useCartProduct();
  return (
    <header className="w-full mb-5 h-24 flex justify-between items-center">
      <Link
        href={'/'}
        className="w-fit hover:opacity-80 transition-opacity text-2xl font-semibold"
      >
        <Image
          src={'/icons/logotype.svg'}
          alt="image reference logotype"
          width={120}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
          priority={true}
        />
      </Link>
      <Link
        href="/overview/cart"
        className="p-2 rounded-full cursor-pointer hover:opacity-80 transition-all hover:bg-slate-100 justify-center flex items-center"
      >
        <Image
          src={'/icons/cart.svg'}
          alt="image reference cart"
          style={{ width: 'auto', height: 'auto' }}
          width={36}
          height={36}
        />
        <span className="font-light text-2xl text-black -mb-2">
          {storage && storage.length > 0 ? storage.length : 0}
        </span>
      </Link>
    </header>
  );
};

export default Header;
