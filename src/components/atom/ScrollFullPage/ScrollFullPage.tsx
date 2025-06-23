"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
  offset?: number;
};

const ScrollFullPage: FC<Props> = ({ className, style, offset = 130 }) => {
  const handleClick = () => {
    const element = document.getElementById("pageBanner");
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.scrollHeight - offset,
      });
    }
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        `absolute bottom-3 lg:bottom-20 right-5 xl:right-20 z-10 opacity-70 hover:opacity-100 transition-all`,
        className
      )}
      style={style}
    >
      <svg
        width="1.5rem"
        height="3.75rem"
        viewBox="0 0 24 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8621 2.96552C6.9488 2.96552 2.96552 6.94856 2.96552 11.8621V23.7241C2.96552 28.6374 6.94856 32.6207 11.8621 32.6207C16.7756 32.6207 20.7586 28.6376 20.7586 23.7241V11.8621C20.7586 6.9488 16.7756 2.96552 11.8621 2.96552ZM11.8621 0C18.4142 0 23.7241 5.30994 23.7241 11.8621V23.7241C23.7241 30.2744 18.4142 35.5862 11.8621 35.5862C5.30994 35.5862 0 30.2744 0 23.7241V11.8621C0 5.30994 5.30994 0 11.8621 0Z"
          fill="white"
        />
        <path
          d="M10.3789 8.89682C10.3789 8.07758 11.0424 7.41406 11.8617 7.41406C12.6809 7.41406 13.3444 8.07758 13.3444 8.89682V16.8036C13.3444 17.6228 12.6809 18.2864 11.8617 18.2864C11.0424 18.2864 10.3789 17.6228 10.3789 16.8036V8.89682Z"
          fill="white"
          className="animate-bounceIcon"
        />
        <path
          d="M12.5992 43.7956C11.8875 44.2015 10.983 43.955 10.5753 43.2432C10.1694 42.5315 10.4159 41.6271 11.1276 41.2193L18.0465 37.2659C18.7583 36.86 19.6646 37.1065 20.0705 37.8182C20.4764 38.5281 20.2299 39.4344 19.5181 39.8403L12.5992 43.7956Z"
          fill="white"
          className="animate-bounceIcon"
        />
        <path
          d="M12.5992 41.2191C13.311 41.6269 13.5575 42.5314 13.1516 43.2431C12.7438 43.9548 11.8394 44.2013 11.1276 43.7954L4.20872 39.8402C3.49699 39.4343 3.2505 38.528 3.65637 37.8181C4.06228 37.1064 4.9686 36.8599 5.68033 37.2657L12.5992 41.2191Z"
          fill="white"
          className="animate-bounceIcon"
        />
      </svg>
    </button>
  );
};

export default ScrollFullPage;
