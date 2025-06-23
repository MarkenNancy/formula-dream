"use client";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

import { servicesData } from "@/data/services";
import ServicesAccordionItm from "./ServicesAccordionItm";
// import { Container, Typo } from "@/components";

const ServicesAccordion: FC<Props> = ({ className, style }) => {
  const [isActive, setIsActive] = useState(0);
  const handleActive = (index: number) => {
    if (isActive === index) {
      setIsActive(-1);
    } else {
      setIsActive(index);
    }
  };
  return (
    <div className={twMerge(`pb-8`, className)} style={style}>
      {servicesData.map((accordion, index) => (
        <ServicesAccordionItm
          {...accordion}
          key={index}
          delay={index * 0.1}
          isActive={isActive === index ? true : false}
          isLats={index === servicesData.length - 1 ? true : false}
          handleActive={() => handleActive(index)}
        />
      ))}
    </div>
  );
};

export default ServicesAccordion;
