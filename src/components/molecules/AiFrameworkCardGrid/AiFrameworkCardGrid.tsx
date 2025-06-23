import React from "react";
import AiFrameworkCard, {
  Props as AiFrameworkCardProps,
} from "@/components/atom/AiFrameworkCard/AiFrameworkCard";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  cards: AiFrameworkCardProps[];
};

const AiFrameworkCardGrid: React.FC<Props> = ({ className, cards, style }) => {
  return (
    <div
      className={twMerge(`grid md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 h-full`, className)}
      style={style}
    >
      {cards.map((card, index) => (
        <AiFrameworkCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AiFrameworkCardGrid;
