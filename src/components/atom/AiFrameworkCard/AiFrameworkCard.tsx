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

const AiFrameworkCard: FC<Props> = ({
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
        `h-full flex flex-col flex-grow border-secondary md:[&:nth-child(-n+3)]:border-b md:border-0 sm:border-b sm:[&:nth-last-child(-n+2)]:border-0 border-b last:border-0`,
        className
      )}
      style={{
        backdropFilter: "blur(0.281rem)",
        ...style,
      }}
    >
      <div className="flex-grow pe-6 pb-10">
        <Typo
          tag="p"
          size="2xl"
          className="text-balance text-secondary !leading-6 mb-1"
          weight="bold"
        >
          {title}
        </Typo>
        <Typo
          tag="p"
          size="lg"
          className="text-balance !leading-6 opacity-40"
          weight="bold"
        >
          {subTitle}
        </Typo>
        <ul className="mt-4">
          {items.map((item, index) => (
            <li key={index} className={index > 0 ? "mt-3 first:mt-0" : ""}>
              <Typo tag="p" size="lg" className="text-pretty !leading-5">
                {item}
              </Typo>
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
};

export default AiFrameworkCard;
