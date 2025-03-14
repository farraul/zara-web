"use client";

import React, { useState } from "react";

import FieldError from "./FieldError";
import Image from "next/image";

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type typeInput = "text" | "password" | "number" | "email" | "";

type Props = {
  id: string;
  label: string;
  type?: typeInput;
  name?: string;
  classAditional?: string;
  error?: string | undefined;
  isRequired?: boolean;
} & AttributeProps;

const FieldInput = ({
  label,
  id,
  isRequired,
  classAditional,
  type = "text",
  name,
  error,
  ...props
}: Props) => {
  const [currentType, setCurrentType] = useState<typeInput>(type);

  return (
    <div
      className={`${
        classAditional || "max-w-xl"
      } flex w-full flex-col relative text-black items-center justify-start`}
    >
      <div className="relative w-full">
        <label
          className={`font-semibold capitalize absolute left-5 top-3 text-xs -translate-y-1/2`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={name ?? id}
          required={isRequired}
          type={currentType}
          className={`w-full pr-20 pl-5 rounded-[19px]  focus:outline-none border-black  font-light bg-[#F3F4F6] py-4 flex items-center`}
          name={name}
          {...props}
        />
      </div>
      <FieldError error={error} />
    </div>
  );
};

export default FieldInput;
