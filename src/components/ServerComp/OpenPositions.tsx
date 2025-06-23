import React, { FC } from "react";
import { Typo, Container } from "@/components";
import OpenPositionsCardGrid, {
  Props as GridOpenPositionsCardGridProps,
} from "@/components/organisms/OpenPositionsCardGrid/OpenPositionsCardGrid";
import { FadeUp } from "../animation";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  jobs: GridOpenPositionsCardGridProps["cards"];
};

const OpenPositions: FC<Props> = ({ className, style, jobs }) => {
  return (
    <section
      className={twMerge(`md:pt-20 pt-10 bg-[#F5F5F5]`, className)}
      id="jobs"
      style={style}
    >
      <Container isSmall>
        <FadeUp delay={0.2}>
          <Typo
            tag="p"
            size="2xl"
            weight="bold"
            isTitle
            className="text-pretty mb-2 uppercase"
          >
            Explore Opportunities
          </Typo>
          <Typo
            tag="h2"
            size="h2"
            weight="normal"
            isTitle
            className="text-balance leading-none"
          >
            Current Job Openings
          </Typo>
          <Typo
            tag="p"
            size="xl"
            weight="normal"
            isTitle
            className="text-pretty mb-8"
          >
            Looking for your next challenge? Join us.
          </Typo>
        </FadeUp>
        {/* <Typo tag="h2" size="h2" weight="bold" className="text-pretty">
          Open {positionsCards.length > 1 ? "Positions" : "Position"} (
          {positionsCards.length})
        </Typo> */}

        <div className="mt-10">
          <OpenPositionsCardGrid cards={jobs} />
        </div>
        <div className="border-b border-[#C4C4C4] md:pb-20 pb-10">
          <Typo
            tag="h2"
            size="h1"
            weight="normal"
            isTitle
            className="text-pretty leading-none mt-12 text-secondary lg:text-7xl"
          >
            Whether you’re a problem-solver, a creative thinker, or a bold
            innovator, there’s a place for you at Clarient.
          </Typo>
        </div>
      </Container>
    </section>
  );
};

export default OpenPositions;
