"use client";
import React, { FC, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
export interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  as?: React.ElementType;
  startOffset?: number;
  endOffset?: number;
}
const Parallax: FC<Props> = ({
  children,
  as = "div",
  className,
  style,
  startOffset = 50,
  endOffset = 0,
}) => {
  const Component = motion[as as keyof typeof motion] as typeof as;
  //   const Component = motion.create(as);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });
  // const y = useTransform(scrollY, [0, 300], [0, offset]);
  const y = useTransform(scrollYProgress, [0, 1], [endOffset, startOffset]);

  return (
    <Component
      ref={targetRef}
      className={twMerge(``, className)}
      style={{ y: y, x: 0, ...style }}
    >
      {children}
    </Component>
  );
};

export default Parallax;
