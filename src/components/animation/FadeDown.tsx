"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string | number;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  variants?: {
    visible: { opacity: number; y: number };
    hidden: { opacity: number; y: number };
  };
};

const FadeDown: FC<Props> = ({
  children,
  className,
  style,
  id,
  delay = 0,
  duration = 0.5,
  variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  },
  as = "div",
}) => {
  const Component = motion.create(as);
  return (
    <Component
      className={twMerge("", className)}
      style={style}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration, delay }}
      variants={variants}
    >
      {children}
    </Component>
  );
};

export default FadeDown;
