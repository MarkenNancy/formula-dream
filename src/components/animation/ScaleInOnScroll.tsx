"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

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
    visible: { scale: number };
    hidden: { scale: number };
  };
  offsetStart?: number;
  offsetEnd?: number;
};

const ScaleInOnScroll: FC<Props> = ({
  children,
  className,
  style,
  id,
  as = "div",
  variants = {
    visible: { scale: 1 },
    hidden: { scale: 0.7 },
  },
  offsetStart = 0.3,
  offsetEnd = 0.15,
}) => {
  const Component = motion.create(as);
  const { scrollYProgress } = useScroll();
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const scale = useTransform(scrollYProgress, [start, end], [0.7, 1]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    setStart(
      (offsetTop - window.innerHeight) /
        (document.body.clientHeight - window.innerHeight) -
        offsetStart
    );
    setEnd(
      offsetTop / (document.body.clientHeight - window.innerHeight) - offsetEnd
    );
  }, [offsetStart, offsetEnd]);

  return (
    <Component
      ref={ref}
      id={id}
      style={{ ...style, scale }}
      transition={{ duration: 1.5 }}
      className={twMerge(``, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </Component>
  );
};

export default ScaleInOnScroll;
