import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  htmlFor?: string;
};

const Label: FC<Props> = ({ children, className, style, htmlFor }) => {
  return (
    <label
      className={twMerge(
        `text-sm md:text-lg font-title font-semibold`,
        className
      )}
      style={style}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
