"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string | number;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  variants?: {
    visible: { opacity: number; scale: number };
    hidden: { opacity: number; scale: number };
  };
}

const ZoomIn: FC<Props> = ({
  children,
  className,
  style,
  id,
  delay = 0,
  duration = 0.5,
  variants = {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0.9, opacity: 0 },
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

export default ZoomIn;
