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
    visible: { opacity: number; x: number };
    hidden: { opacity: number; x: number };
  };
};

const FadeLeft: FC<Props> = ({
  children,
  className,
  style,
  id,
  delay = 0,
  duration = 0.5,
  variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  },
  as = "div",
}) => {
  //   const MotionComponent = motion[as as keyof typeof motion] as typeof as;
  const MotionComponent = motion.create(as);
  return (
    <MotionComponent
      className={twMerge("", className)}
      style={style}
      id={id}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration }}
      variants={variants}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeLeft;
