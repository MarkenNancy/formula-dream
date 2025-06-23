import React, { FC } from "react";
import { Typo } from "@/components";
import GetStarteds, {
  Props as GetStartedsProps,
} from "@/components/forms/GetStarteds/GetStarteds";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  getStarteds?: GetStartedsProps;
};

const GetStartedsSec: FC<Props> = ({ className, style, getStarteds }) => {
  return (
    <section className={twMerge(``, className)} style={style}>
      <div className="px-5 md:ps-12 md:pe-24 lg:gap-[4.875rem] pb-10 md:pb-[3.5rem] bg-white border border-[#CCCCCC] border-t-[0.375rem] border-t-secondary rounded-b-xl flex lg:flex-row flex-col">
        <div className="xl:max-w-[30.5rem] lg:max-w-md pt-10 md:pt-10">
          <Typo className="mb-3 opacity-70 lg:text-base lg:leading-5" size="lg">
            Tell us your goal, and we’ll map out an AI strategy to get you
            there.
          </Typo>
          <Typo tag="h2" size="h2" weight="normal" className="xl:pe-10">
            What’s Your AI Blind Spot? Let’s Find Out.
          </Typo>
        </div>
        <div className="flex-1">
          <GetStarteds {...getStarteds} title="" description="" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedsSec;
