import React, { FC, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Typo, Icons } from "@/components";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  id?: string | number;
  title: string;
  description?: React.ReactNode;
  isActive?: boolean;
  isLats?: boolean;
  handleActive?: () => void;
  delay?: number;
};
const AccordionItm: FC<Props> = ({
  className,
  style,
  title,
  description,
  isActive = false,
  isLats = false,
  handleActive,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <div className={twMerge(``, className)} style={style}>
      <button
        onClick={handleActive}
        className={`relative pe-10 w-full text-left border-none outline-none hover:text-secondary transition-all ${
          isActive ? "text-secondary" : ""
        }`}
      >
        <Typo tag="h4" size="lg" weight="bold">
          {title}
        </Typo>
        <Icons
          // name={isActive ? "arrow-left" : "arrow-right"}
          name="triangle-right"
          className={`transition-all absolute right-0 top-1/2 -translate-y-1/2 rotate-90 ${
            isActive ? "-rotate-90 " : "rotate-90 "
          }`}
          size={0.8}
        />
      </button>
      {description && (
        <div
          ref={contentHeight}
          className={`transition-all overflow-hidden duration-700`}
          style={
            isActive
              ? { maxHeight: contentHeight.current?.scrollHeight }
              : { maxHeight: "0" }
          }
        >
          <Typo size="h5" tag="div" className="mt-4 text-pretty">
            {description}
          </Typo>
        </div>
      )}
      {!isLats && <div className="border-b-2 border-[#EDEDE] my-5"></div>}
    </div>
  );
};

export default AccordionItm;
