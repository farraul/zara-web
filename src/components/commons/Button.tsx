"use client";

import React, { PropsWithChildren } from "react";

type typeProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends PropsWithChildren, typeProps {
  isDisabled?: boolean;
  loading?: boolean;
}

const Button = ({ children, isDisabled, loading = false, ...props }: Props) => {
  return (
    <button
      {...props}
      disabled={loading || isDisabled}
      className={`bg-black shadow-md disabled:cursor-not-allowed font-light disabled:text-gray-500 disabled:bg-gray-200 disabled:opacity-90 hover:opacity-80 transition-all cursor-pointer px-6 py-4 gap-4 flex justify-center items-center ${props.className}`}
    >
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
          />
        </svg>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
