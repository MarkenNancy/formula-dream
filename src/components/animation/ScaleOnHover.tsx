"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string | number;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  whileHover?: { scale: number };
  whileTap?: { scale: number };
};

const ScaleOnHover: FC<Props> = ({
  children,
  className,
  id,
  style,
  as = "div",
  whileHover = { scale: 1.1 },
  whileTap = { scale: 1 },
}) => {
  const Component = motion.create(as);
  return (
    <Component
      className={twMerge(``, className)}
      style={style}
      id={id}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{ duration: 0.3 }}
    >
      {children}
    </Component>
  );
};

export default ScaleOnHover;
