import React from "react";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};
const MergeSection: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        `md:-mt-28 -mt-8 relative md:mb-10 md:pb-0 border-b md:border-0`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MergeSection;
