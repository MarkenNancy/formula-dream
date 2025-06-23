import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  message: string;
};

const ErrorMessage: FC<Props> = ({ className, style, message }) => {
  return (
    <p
      className={twMerge(`text-red-500 text-xs mt-1 text-pretty`, className)}
      style={style}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
