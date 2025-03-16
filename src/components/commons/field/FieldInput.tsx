"use client";

import React from "react";

import FieldError from "./FieldError";

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
  return (
    <div
      className={`${classAditional}"
        } flex w-full flex-col relative text-black items-center justify-start`}
    >
      <div className="relative w-full">
        <input
          id={name ?? id}
          type={type}
          required={isRequired}
          className={`pr-5 border-b border-black py-1 w-full focus:border-b-1 focus:border-primary transition-colors focus:outline-none peer bg-inherit`}
          name={name}
          {...props}
        />
        <label
          className={`absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-primary`}
          htmlFor={id}
        >
          {label}
        </label>
        {props.value ? (
          <button
            type="button"
            className="absolute -translate-y-1/2 top-1/2 right-5 p-1 w-6 flex justify-center items-center h-6 cursor-pointer rounded-full transition-all hover:bg-gray-100"
          >
            x
          </button>
        ) : null}
      </div>
      <FieldError error={error} />
    </div>
  );
};

export default FieldInput;
