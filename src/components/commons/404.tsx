'use client';

import Link from 'next/link';
import React from 'react';

interface Props {
  msgCustom?: string;
}

const Custom404 = ({ msgCustom }: Props) => {
  const msgDefault =
    "Sorry, we can't find that page. You'll find lots to explore on the home page.";
  return (
    <section className="bg-white h-screen flex jsutify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            Somethings missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            {typeof msgCustom === 'string' ? msgCustom : msgDefault}
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
