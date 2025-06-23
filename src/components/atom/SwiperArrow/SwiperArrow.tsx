import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import Icons from "../Icons/Icon";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  type: "next" | "prev";
  iconSize?: number;
};

const SwiperArrow: FC<Props> = ({
  type,
  className,
  style,
  iconSize = 1.125,
}) => {
  return (
    <button
      style={style}
      type="button"
      aria-label={type === "prev" ? "prev" : "next"}
      className={twMerge(
        `text-white flex items-center justify-center border border-white rounded-full size-12 absolute top-36 z-20 hover:bg-primary hover:border-primary disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-gray-400 ${
          type === "prev" ? "left-14" : "right-14"
        }`,
        className
      )}
    >
      {type === "prev" ? (
        <Icons size={iconSize} name="arrow-left" />
      ) : (
        <Icons size={iconSize} name="arrow-right" />
      )}
    </button>
  );
};

export default SwiperArrow;
