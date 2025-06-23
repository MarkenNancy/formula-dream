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

const AiBuiltCard: FC<Props> = ({
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
        `px-6 sm:px-8 py-10 sm:py-14 bg-[#F6F6F6] hover:bg-white border md:border-l-0 md:[&:nth-child(1)]:border-l md:[&:nth-child(5)]:border-l sm:even:border-l-0 border-t-0 first:border-t md:[&:nth-child(-n+4)]:border-t sm:[&:nth-child(-n+2)]:border-t border-[#CCC] relative h-full md:min-h-[27rem] group aiBuiltCard`,
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
        className="text-balance !leading-tight text-[#D75372] pe-4"
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
      <div className="absolute w-0 group-hover:w-full h-[0.188rem] bg-secondary left-0 top-0 transition-all duration-700 ease-in-out"></div>
    </FadeUp>
  );
};

export default AiBuiltCard;
