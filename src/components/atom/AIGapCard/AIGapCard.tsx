import React, { FC } from "react";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";
import { FadeUp } from "@/components/animation";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  subTitle?: string;
  description?: string;
  delay?: number;
  descriptionSize?: "lg" | "sm";
};

const AIGapCard: FC<Props> = ({
  className,
  style,
  title,
  subTitle,
  description,
  delay = 0,
  descriptionSize = "lg",
}) => {
  return (
    <FadeUp
      delay={delay}
      className={twMerge(
        `md:px-10 px-8 pt-8 pb-14 rounded-b-lg border border-[#E7E7E7] relative h-full sm:min-h-60`,
        className
      )}
      style={{
        background: "rgba(255, 255, 255, 0.60)",
        backdropFilter: "blur(0.281rem)",
        ...style,
      }}
    >
      <Typo
        tag="h2"
        size="h2"
        weight="bold"
        className="text-pretty leading-none text-secondary mb-4"
      >
        {title}
      </Typo>
      {subTitle && (
        <Typo
          tag="p"
          size="lg"
          weight="bold"
          className="text-pretty lg:leading-6 mb-3"
        >
          {subTitle}
        </Typo>
      )}
      {description && (
        <Typo tag="p" size={descriptionSize}  className="text-pretty leading-6 description">
          {description}
        </Typo>
      )}
      <div className="absolute w-full h-[0.313rem] bg-secondary left-0 top-0"></div>
    </FadeUp>
  );
};

export default AIGapCard;
