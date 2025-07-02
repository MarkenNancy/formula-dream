"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
};

const LetterFadeUp: FC<Props> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
}) => {
  const letters = text.split("");

  return (
    <motion.div
      className={`inline-flex overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          style={{ display: "inline-block" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{
            duration,
            delay: delay + index * stagger,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LetterFadeUp;
