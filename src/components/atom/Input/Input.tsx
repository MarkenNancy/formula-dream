// components/Input.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import Label from "../Label/Label";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className={twMerge(``, className)}>
      {label && <Label className="md:mb-1">{label}</Label>}
      <input
        autoComplete="off"
        ref={ref}
        className={`w-full px-0 pb-2 border-b outline-none text-sm md:text-base min-h-8 ${
          error ? "border-red-500" : "border-[#C3C3C3]"
        }`}
        {...props}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  )
);

Input.displayName = "Input";
export default Input;
