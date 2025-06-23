import React, { FC } from "react";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";
import { FadeUp } from "@/components/animation";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  description?: string;
  delay?: number;
  descriptionSize?: "xl" | "lg" | "sm";
};

const BeyondCard: FC<Props> = ({
  className,
  style,
  title,
  description,
  delay = 0,
  descriptionSize = "xl",
}) => {
  return (
    <FadeUp
      delay={delay}
      className={twMerge(
        `px-10 pt-8 sm:pb-14 pb-10 rounded-b-lg border border-[#E7E7E7] relative h-full sm:min-h-48 min-h-24`,
        className
      )}
      style={{
        background: "rgba(255, 255, 255, 0.60)",
        backdropFilter: "blur(0.281rem)",
        ...style,
      }}
    >
      {title && (
        <Typo
          tag="p"
          size="xl"
          weight="bold"
          className="text-balance !leading-tight text-secondary mb-4"
        >
          {title}
        </Typo>
      )}
      {description && (
        <Typo tag="p" size={descriptionSize} className="text-pretty leading-6">
          {description}
        </Typo>
      )}
      <div className="absolute w-full h-[0.313rem] bg-secondary left-0 top-0"></div>
    </FadeUp>
  );
};

export default BeyondCard;
