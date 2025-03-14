"use client";

import React, { useState } from "react";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { InputMask } from "@react-input/mask";

import FieldError from "./FieldError";
import Image from "next/image";
import { montserrat } from "@/fonts";

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
  register?: UseFormRegister<any>;
  error?: string | undefined;
  rules?: RegisterOptions;
  isRequired?: boolean;
  withIcon?: boolean;
  iconSvg?: string;
  withMask?: boolean;
  mask?: string;
} & AttributeProps;

const FieldInput = ({
  label,
  id,
  isRequired,
  classAditional,
  type = "text",
  name,
  rules,
  error,
  mask,
  withMask,
  register,
  iconSvg,
  withIcon = false,
  ...props
}: Props) => {
  const [currentType, setCurrentType] = useState<typeInput>(type);

  const handlePassword = () => {
    const typeIn = currentType === "password" ? "text" : "password";
    setCurrentType(typeIn);
  };

  return (
    <div
      className={`${
        classAditional || "max-w-xl"
      } flex w-full flex-col relative text-black items-center justify-start`}
    >
      <div className="relative w-full">
        <label
          className={`${montserrat.className} font-semibold capitalize absolute left-5 top-3 text-xs -translate-y-1/2`}
          htmlFor={id}
        >
          {label}
        </label>
        {withMask ? (
          <InputMask
            mask={mask}
            replacement={{ _: /\d/ }}
            id={name ?? id}
            required={isRequired}
            type={currentType}
            autoComplete="current-password"
            className={`w-full pr-20 pl-5 rounded-[19px] border focus:outline-none border-black border-1 font-light bg-[#F3F4F6] py-4 flex items-center`}
            {...(register && register(name as string, rules))}
            name={name}
            {...props}
          />
        ) : (
          <input
            id={name ?? id}
            required={isRequired}
            type={currentType}
            autoComplete="current-password"
            className={`w-full pr-20 pl-5 rounded-[19px] border focus:outline-none border-black border-1 font-light bg-[#F3F4F6] py-4 flex items-center`}
            {...(register && register(name as string, rules))}
            name={name}
            {...props}
          />
        )}
      </div>
      <FieldError error={error} />
    </div>
  );
};

export default FieldInput;
