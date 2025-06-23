import React, { FC } from "react";
import { Typo } from "@/components";
import { FadeUp } from "@/components/animation";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  items?: React.ReactNode[];
  delay?: number;
};

const DifferentiatorsCard: FC<Props> = ({
  className,
  style,
  title,
  subTitle,
  items = [],
  delay = 0,
}) => {
  return (
    <FadeUp
      delay={delay}
      className={twMerge(
        `px-8 sm:py-16 py-10 bg-white border border-[#CCC] relative h-full md:min-h-[17.5rem] min-h-[12rem] lg:!border-l-0 lg:first:!border-l sm:border-l-0 sm:odd:border-l`,
        className
      )}
      style={{
        backdropFilter: "blur(0.281rem)",
        ...style,
      }}
    >
      <Typo
        tag="p"
        size="xl"
        weight="bold"
        className="text-balance !leading-tight text-[#D75372]"
      >
        {title}
      </Typo>
      <Typo
        tag="p"
        size="sm"
        weight="bold"
        className="text-pretty opacity-40 mt-1"
      >
        {subTitle}
      </Typo>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className={index > 0 ? "mt-4 first:mt-0" : ""}>
            <Typo tag="p" size="sm" className="text-pretty">
              {item}
            </Typo>
          </li>
        ))}
      </ul>
      <div className="absolute w-full h-[0.188rem] bg-secondary left-0 top-0"></div>
    </FadeUp>
  );
};

export default DifferentiatorsCard;
