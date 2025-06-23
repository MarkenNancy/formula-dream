import React from "react";
// import {useFormatter} from 'next-intl'
import moment from "moment";
import { twMerge } from "tailwind-merge";
// import Icons from "../Icons/Icon";
import { Typo, Icons } from "@/components";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  dataSring: string;
  testSize?: "sm" | "xs" | "md" | "lg";
  isIcon?: boolean;
};
const DateFormat: React.FC<Props> = ({
  dataSring,
  className,
  isIcon = true,
  testSize = "sm",
  ...props
}) => {
  return (
    <div
      className={twMerge(
        `grid ${isIcon ? "grid-cols-[1.25rem_1fr] gap-2 items-center" : ""}`,
        className
      )}
      {...props}
    >
      {isIcon && <Icons name="date" size={1.25} />}
      <Typo tag="p" size={testSize}>
        {/* {moment(dataSring).local(true).format("MMMM DD, YYYY - hh:mm A")} */}
        {moment(dataSring).local(false).format("MMMM DD, YYYY")}
      </Typo>
    </div>
  );
};

export default DateFormat;
