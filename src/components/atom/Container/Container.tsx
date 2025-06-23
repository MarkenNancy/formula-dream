import React from "react";
import { twMerge } from "tailwind-merge";
export type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  clearRight?: boolean;
  clearLeft?: boolean;
  isSmall?: boolean;
};
const Container: React.FC<Props> = ({
  children,
  className,
  clearRight = false,
  clearLeft = false,
  isSmall = false,
  style,
}) => {
  // 82.75rem 1324px
  return (
    <div
      className={twMerge(
        `mx-auto px-4 w-full 
        ${
          isSmall
            ? `
          ${
            clearRight
              ? "mr-0 md:pr-0 lg:max-w-container-sm-right"
              : "lg:max-w-container-sm"
          } ${
                clearLeft
                  ? "ml-0 md:pl-0 lg:max-w-container-sm-left"
                  : "lg:max-w-container-sm"
              }
          `
            : `
          ${
            clearRight
              ? "mr-0 md:pr-0 lg:max-w-container-right"
              : "lg:max-w-container"
          } ${
                clearLeft
                  ? "ml-0 md:pl-0 lg:max-w-container-left"
                  : "lg:max-w-container"
              }
          `
        }
        `,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
