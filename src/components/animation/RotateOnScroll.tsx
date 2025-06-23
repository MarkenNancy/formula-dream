"use client";
import React, { FC, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
export interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  as?: React.ElementType;
}
const RotateOnScroll: FC<Props> = ({
  children,
  as = "div",
  className,
  style,
}) => {
  const Component = motion[as as keyof typeof motion] as typeof as;
  //   const Component = motion.create(as);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <Component
      ref={targetRef}
      className={twMerge(``, className)}
      style={{ rotate: rotate, ...style }}
    >
      {children}
    </Component>
  );
};

export default RotateOnScroll;
