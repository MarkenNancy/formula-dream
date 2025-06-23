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
  internships: GridOpenPositionsCardGridProps["cards"];
};
const OpenInternships: FC<Props> = ({ className, style, internships }) => {
  return (
    <section
      className={twMerge(`pt-10 md:pt-20 bg-[#F5F5F5]`, className)}
      id="internships"
      style={style}
    >
      <Container isSmall>
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6">
            <FadeUp delay={0.2}>
              <Typo
                tag="p"
                size="2xl"
                weight="bold"
                isTitle
                className="text-pretty mb-2 uppercase"
              >
                Internships
              </Typo>
              <Typo
                tag="h2"
                size="h2"
                weight="normal"
                isTitle
                className="text-balance leading-none"
              >
                Kickstart Your Career
              </Typo>
              <Typo
                tag="p"
                size="xl"
                weight="normal"
                isTitle
                className="text-pretty"
              >
                Start your journey with us. Gain real-world experience,
                mentorship, and a chance to contribute to exciting projects.
              </Typo>
            </FadeUp>
          </div>
        </div>
        {/* <Typo tag="h2" size="h2" weight="bold" className="text-pretty">
          Open {positionsCards.length > 1 ? "Positions" : "Position"} (
          {positionsCards.length})
        </Typo> */}

        <div className="mt-10">
          <OpenPositionsCardGrid cards={internships} />
        </div>
      </Container>
    </section>
  );
};

export default OpenInternships;
