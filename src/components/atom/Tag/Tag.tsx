import { Typo } from "@/components";
import React from "react";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
};
const Tag: React.FC<Props> = ({ title, className, ...props }) => {
  return (
    <div
      className={twMerge(
        `mb-6 bg-secondary inline-block px-4 py-1 rounded-[.1875rem]`,
        className
      )}
      {...props}
    >
      <Typo tag="p" size="sm" className="m-0">
        {title}
      </Typo>
    </div>
  );
};

export default Tag;
