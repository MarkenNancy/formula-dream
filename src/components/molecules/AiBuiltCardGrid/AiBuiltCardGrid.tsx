import React from "react";
import AiBuiltCard, {
  Props as AiBuiltCardProps,
} from "@/components/atom/AiBuiltCard/AiBuiltCard";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  cards: AiBuiltCardProps[];
};

const AiBuiltCardGrid: React.FC<Props> = ({ className, cards, style }) => {
  return (
    <div
      className={twMerge(`grid md:grid-cols-4 sm:grid-cols-2`, className)}
      style={style}
    >
      {cards.map((card, index) => (
        <AiBuiltCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AiBuiltCardGrid;
