import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import Typo from "../Typo/Typo";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
  description: React.ReactNode;
  driection?:
    | "right-top"
    | "right-center"
    | "right-bottom"
    | "left-top"
    | "left-center"
    | "left-bottom";
};

const LeaderInfo: FC<Props> = ({
  className,
  style,
  description,
  driection = "down",
}) => {
  return (
    <div
      className={twMerge(
        `p-4 lg:px-6 lg:py-10 md:absolute md:bg-[#3F1B7E] md:h-[calc(300%_+_2px)] w-full z-30 md:text-white flex flex-col justify-center items-center 
        ${
          driection === "right-top"
            ? "md:top-0 md:left-full"
            : ""
        }
        ${
          driection === "right-center"
            ? "md:top-1/2 md:left-full md:-translate-y-1/2"
            : ""
        }
        ${
          driection === "right-bottom"
            ? "md:bottom-0 md:left-full"
            : ""
        }
        ${
          driection === "left-top"
            ? "md:top-0 md:right-full"
            : ""
        }
        ${
          driection === "left-center"
            ? "md:top-1/2 md:right-full md:-translate-y-1/2"
            : ""
        }
        ${
          driection === "left-bottom"
            ? "md:bottom-0 md:right-full"
            : ""
        }
        `,
        className
      )}
      style={style}
    >
      <Typo className=" text-lg xl:text-xl">{description}</Typo>
    </div>
  );
};

export default LeaderInfo;
