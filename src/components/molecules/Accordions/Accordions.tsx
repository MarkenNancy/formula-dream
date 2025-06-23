"use client";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import AccordionItm, { Props as AccordionItmProps } from "./AccordionItm";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  accordions: AccordionItmProps[];
};
const Accordions: FC<Props> = ({ className, style, accordions }) => {
  const [isActive, setIsActive] = useState(-1);
  const handleActive = (index: number) => {
    if (isActive === index) {
      setIsActive(-1);
    } else {
      setIsActive(index);
    }
  };
  return (
    <div className={twMerge(``, className)} style={style}>
      {accordions.map((accordion, index) => (
        <AccordionItm
          {...accordion}
          key={index}
          delay={index * 0.1}
          isActive={isActive === index ? true : false}
          isLats={index === accordions.length - 1 ? true : false}
          handleActive={() => handleActive(index)}
        />
      ))}
    </div>
  );
};

export default Accordions;
