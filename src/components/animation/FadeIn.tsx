"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string | number;
  style?: React.CSSProperties;
  as?: React.ElementType;
  variants?: {
    visible: { opacity: number };
    hidden: { opacity: number };
  };
};

const FadeIn: FC<Props> = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  style,
  id,
  variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
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
      variants={variants}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
