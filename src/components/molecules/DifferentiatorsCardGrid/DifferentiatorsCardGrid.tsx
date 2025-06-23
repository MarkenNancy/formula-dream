import React from "react";
import DifferentiatorsCard, {
  Props as DifferentiatorsCardProps,
} from "@/components/atom/DifferentiatorsCard/DifferentiatorsCard";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  cards: DifferentiatorsCardProps[];
};

const DifferentiatorsCardGrid: React.FC<Props> = ({ className, cards, style }) => {
  return (
    <div
      className={twMerge(`grid lg:grid-cols-5 md:grid-col-3 sm:grid-cols-2`, className)}
      style={style}
    >
      {cards.map((card, index) => (
        <DifferentiatorsCard key={index} {...card} />
      ))}
    </div>
  );
};

export default DifferentiatorsCardGrid;
