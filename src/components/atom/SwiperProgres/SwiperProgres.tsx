import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  ref: React.Ref<HTMLDivElement>;
};

const SwiperProgres: FC<Props> = ({ ref, className, style }) => {
  return (
    <div
      className={twMerge(`h-2 bg-transparent mix-blend-overlay`, className)}
      style={style}
    >
      <div
        className="h-full bg-white rounded-xl mix-blend-overlay opacity-100"
        ref={ref}
        style={{ maxWidth: "var(--progress)" }}
      ></div>
    </div>
  );
};

export default SwiperProgres;
