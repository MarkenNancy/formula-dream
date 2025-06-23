"use client";
import React, { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Icons from "../Icons/Icon";

import { useLenis } from "lenis/react";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const ScrollToTop: FC<Props> = ({ className, style }) => {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleClick = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        offset: 0,
        duration: 1, // optional duration in seconds
        easing: (t) => t, // optional easing function
      });
    }
    // window.scrollTo({
    //   behavior: "smooth",
    //   top: 0,
    // });
  };
  if (!scrolled) return null;
  return (
    <button
      onClick={handleClick}
      type="button"
      aria-label="scroll to top"
      className={twMerge(
        `fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50 opacity-70 transition-all size-8 md:size-10 bg-white rounded-full flex items-center justify-center shadow-100 hover:bg-secondary hover:text-white hover:opacity-100 `,
        className
      )}
      style={style}
    >
      <Icons name="arrow-left" className="rotate-90" size={0.9} />
    </button>
  );
};

export default ScrollToTop;
