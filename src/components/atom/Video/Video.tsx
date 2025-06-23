import React from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  poster?: string;
  source?: string;
  fallbackColor?: string;
};

const Video: React.FC<Props> = ({
  className,
  style,
  poster,
  source,
  fallbackColor = "#0B0824",
}) => {
  if (source) {
    return (
      <video
        className={twMerge(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full m-0 object-cover",
          className
        )}
        style={style}
        poster={poster}
        autoPlay
        muted
        loop
      >
        <source src={source} type="video/mp4" />
      </video>
    );
  } else {
    return (
      <div
        className={twMerge(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full m-0 -z-[2]",
          className
        )}
        style={{ ...style, backgroundColor: fallbackColor }}
      />
    );
  }
};

export default Video;
