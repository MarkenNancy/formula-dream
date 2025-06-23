import React from "react";
import ChallengesCard, {
  Props as ChallengesCardProps,
} from "@/components/atom/ChallengesCard/ChallengesCard";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  cards: ChallengesCardProps[];
  columns?: "3" | "4";
};

const ChallengesCardGrid: React.FC<Props> = ({
  className,
  cards,
  style,
  columns = "3",
}) => {
  return (
    <div
      className={twMerge(`grid md:grid-cols-12 gap-6`, className)}
      style={style}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${
            card.isLarge
              ? "lg:col-span-8 md:col-span-12"
              : columns === "4"
              ? "sm:col-span-6 lg:col-span-3"
              : "md:col-span-6 lg:col-span-4"
          }`}
        >
          <ChallengesCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default ChallengesCardGrid;
