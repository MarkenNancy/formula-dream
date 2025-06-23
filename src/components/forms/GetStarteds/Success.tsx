import React, { FC } from "react";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Success: FC<Props> = ({ className, style }) => {
  return (
    <div className={twMerge(``, className)} style={style}>
      <Typo tag="h4" size="xl" weight="bold" isTitle>
        Thanks for taking the first step!
      </Typo>
      <Typo tag="p" className="mt-1">
        Our AI Strategy Lead will reach out to you shortly to schedule your
        session.
      </Typo>
    </div>
  );
};

export default Success;
