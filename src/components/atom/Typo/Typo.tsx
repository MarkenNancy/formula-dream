import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export type TypoProps = {
  tag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "b"
    | "div"
    | "blockquote"
    | "address";
  className?: string;
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  weight?:
    | "normal"
    | "bold"
    | "semibold"
    | "light"
    | "medium"
    | "extrabold"
    | "black";
  style?: React.CSSProperties;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  isTitle?: boolean;
};

const Typo: FC<TypoProps> = ({
  tag = "p",
  className,
  size = "md",
  weight = "normal",
  children,
  isTitle = false,
  ...props
}) => {
  const TypoTag = tag as keyof JSX.IntrinsicElements;
  return (
    <TypoTag
      className={twMerge(
        `typo 
        ${isTitle ? "font-title" : ""}
        ${weight === "light" ? "font-light" : ""}
        ${weight === "normal" ? "font-normal" : ""}
        ${weight === "bold" ? "font-bold" : ""}
        ${weight === "semibold" ? "font-semibold" : ""}
        ${weight === "medium" ? "font-medium" : ""}
        ${weight === "extrabold" ? "font-extrabold" : ""}
        ${weight === "black" ? "font-black" : ""}

        ${
          size === "h1"
            ? "text-3xl md:text-5xl lg:text-[4rem] leading-none"
            : ""
        } 
        ${
          size === "h2"
            ? "text-[1.75rem] md:text-4xl lg:text-5xl leading-[1.2] lg:leading-none"
            : ""
        } 
        ${
          size === "h3"
            ? "text-2xl md:text-3xl lg:text-[2rem] leading-[1.1]"
            : ""
        } 
   

        ${size === "2xl" ? "text-lg md:text-xl lg:text-2xl" : ""} 
        ${
          size === "xl" ? "text-base md:text-lg lg:text-xl leading-[1.1em]" : ""
        } 
        ${size === "lg" ? "text-sm md:text-base lg:text-lg" : ""} 
        ${size === "sm" ? "text-xs md:text-sm leading-[1.286]" : ""} 
        
        `,
        className
      )}
      {...props}
    >
      {children}
    </TypoTag>
  );
};

export default Typo;
