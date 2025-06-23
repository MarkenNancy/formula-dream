import React, { FC } from "react";
import { Typo } from "@/components";
import { FadeUp } from "@/components/animation";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  items?: React.ReactNode[];
  delay?: number;
  isLarge?: boolean;
};

const ChallengesCard: FC<Props> = ({
  className,
  style,
  title,
  items = [],
  delay = 0,
}) => {
  return (
    <FadeUp
      delay={delay}
      className={twMerge(
        `p-10 md:py-20 bg-white border border-[#E7E7E7] relative h-full md:min-h-[16.75rem] sm:min-h-[12rem]`,
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
        className="text-balance !leading-tight text-secondary"
      >
        {title}
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

export default ChallengesCard;
