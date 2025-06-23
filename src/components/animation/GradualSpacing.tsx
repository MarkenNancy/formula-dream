'use client';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

export type GradualSpacingProps = {
  text: string; // The text to animate
  className?: string; // Custom class for the text container
  charClassName?: string; // Custom class for each character
  animationDuration?: number; // Duration of the animation
  delayPerChar?: number; // Delay between each character's animation
  initialX?: number; // Initial X offset for the animation
};

export function GradualSpacing({
  text = 'Gradual Spacing',
  className = '',
  charClassName = '',
  animationDuration = 0.5,
  delayPerChar = 0.1,
  initialX = -18,
}: GradualSpacingProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`flex space-x-1 justify-center ${className}`}>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: initialX }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: animationDuration, delay: i * delayPerChar }}
            className={`text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] ${charClassName}`}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}