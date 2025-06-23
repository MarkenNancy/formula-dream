"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  placeholder?: string;
  value?: string;
  style?: React.CSSProperties;
  onChange?: React.Dispatch<React.SetStateAction<string>> | undefined;
};

const TextInput: React.FC<Props> = ({
  className,
  value = "",
  placeholder = "Enter your email",
  onChange,
  ...props
}) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <input
      type="text"
      className={twMerge(
        `w-full border border-[#C3C3C3] text-black bg-white bg-opacity-50 py-3 sm:py-5 ps-5 pe-5 sm:pe-52 focus:outline-none focus:border-opacity-100 rounded-full focus:border-secondary`,
        className
      )}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  );
};

export default TextInput;
