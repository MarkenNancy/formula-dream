"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import OpenPositionsCard, {
  Props as OpenPositionsCardProps,
} from "../../molecules/OpenPositionsCard/OpenPositionsCard";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  cards: OpenPositionsCardProps[];
};

const OpenPositionsCardGrid: React.FC<Props> = ({
  className,
  cards,
  style,
}) => {
  const [isCurrentPage, setIsCurrentPage] = useState(1);
  const isPageSize = 4;

  const handleLodeMore = () => {
    setIsCurrentPage(isCurrentPage + 1);
  };
  const showCards = cards.slice(0, isPageSize * isCurrentPage);

  return (
    <>
      <div className={twMerge(`grid md:grid-cols-2`, className)} style={style}>
        {showCards.map((card, index) => (
          <OpenPositionsCard
            key={index}
            {...card}
            slug={`/careers/${card.slug}`}
          />
        ))}
      </div>
      {showCards.length < cards.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLodeMore}
            className="border-gray bg-transparent text-sm font-bold uppercase text-white h-[8.625rem] w-[8.625rem] flex justify-center items-center rounded-full"
            style={{
              background: "linear-gradient(90deg, #E3592A 0%, #4B1BC4 100%)",
            }}
          >
            Load More{" "}
            {/* <Icons name="arrow-right" className="rotate-90 ms-3" size={0.8} /> */}
          </button>
        </div>
      )}
    </>
  );
};

export default OpenPositionsCardGrid;
