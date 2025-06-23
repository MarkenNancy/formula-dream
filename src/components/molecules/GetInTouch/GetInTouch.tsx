import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typo } from "@/components";
import Subscribe from "@/components/forms/Subscribe/Subscribe";
import { FadeIn, FadeUp } from "@/components/animation";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  valueIndex?: number;
};
const GetInTouch: FC<Props> = ({ className, style, valueIndex }) => {
  return (
    <div className={twMerge(`py-10 md:py-20`, className)} style={style}>
      <FadeUp>
        <Typo isTitle weight="bold" size="2xl">
          GET IN TOUCH
        </Typo>
      </FadeUp>
      <FadeUp delay={0.2}>
        <Typo isTitle tag="h2" size="h2" className="mt-4 md:mt-9">
          Ready to talk?
        </Typo>
      </FadeUp>
      <FadeIn delay={0.5}>
        <Subscribe valueIndex={valueIndex} />
      </FadeIn>
    </div>
  );
};

export default GetInTouch;
