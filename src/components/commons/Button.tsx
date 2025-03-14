"use client";

import React, { PropsWithChildren } from "react";

type typeProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends PropsWithChildren, typeProps {
  isDisabled?: boolean;
  loading?: boolean;
  small?: boolean;
}

const Button = ({
  children,
  isDisabled,
  loading = false,
  small = true,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      disabled={loading || isDisabled}
      className={`bg-black text-white shadow-md disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-90 hover:opacity-80 transition-all focus:scale-90 cursor-pointer hover:scale-105 w-fit px-6 py-2 gap-4 flex rounded-3xl justify-center items-center ${
        small ? "w-fit" : "w-full text-xl h-16"
      } ${loading ? "w-36 h-10" : ""}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
