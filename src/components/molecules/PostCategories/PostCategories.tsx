import React from "react";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  bg?: string;
  style?: React.CSSProperties;
  title: string;
  description?: React.ReactNode;
};
const PostCategories: React.FC<Props> = ({
  className,
  title,
  description,
  bg = "#e4f3fa",
  ...props
}) => {
  return (
    <div className={twMerge("", className)} {...props}>
      <div className="flex flex-col">
        <div className="">
          <div
            className={`bg-[#e4f3fa] bg-opacity-10 px-6 py-8 min-h-52 flex justify-center flex-col relative`}
            style={{ background: bg }}
          >
            <Typo
              tag="h2"
              weight="bold"
              className="text-[#434343] text-3xl lg:text-4xl"
            >
              {title}
            </Typo>
            <div className="absolute bottom-0">
              <svg
                width="14.938rem"
                height="3rem"
                viewBox="0 0 239 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="163.242"
                  y="24"
                  width="75.0957"
                  height="24"
                  fill="white"
                />
                <rect opacity="0.5" width="163.242" height="24" fill="white" />
              </svg>
            </div>
          </div>
          {description && (
            <Typo tag="p" className="text-sm pt-5 lg:pe-12">
              {description}
            </Typo>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCategories;
