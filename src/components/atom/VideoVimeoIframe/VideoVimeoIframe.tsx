import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  videoId: string;
  autoPlay?: boolean;
  loop?: boolean;
  autopause?: boolean;
  background?: boolean;
};

const VideoVimeoIframe: FC<Props> = ({
  className,
  style,
  videoId,
  autoPlay = true,
  loop = true,
  autopause = false,
  background = true,
}) => {
  return (
    <iframe
      className={twMerge(`aspect-video w-full bg-white rounded-md`, className)}
      style={style}
      // src={`https://player.vimeo.com/video/999430758?autoplay=1&loop=1&autopause=0&background=1`}
      src={`https://player.vimeo.com/video/${videoId}?autoplay=${
        autoPlay ? "1" : "0"
      }&loop=${loop ? "1" : "0"}&autopause=${
        autopause ? "1" : "0"
      }&background=${background ? "1" : "0"}`}
      width="100%"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      allowFullScreen
    ></iframe>
  );
};

export default VideoVimeoIframe;
