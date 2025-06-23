import React, { FC } from "react";
import PageBanner, {
  Props as PageBannerProps,
} from "@/components/molecules/PageBanner/PageBanner";

import { Container, Typo } from "@/components";
import { twMerge } from "tailwind-merge";
import TestimonialCard, {
  Props as TestimonialCardProps,
} from "@/components/atom/TestimonialCard/TestimonialCard";
import { FadeUp } from "@/components/animation";

type InfoCardProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  description: string;
};

const InfoCard = ({ className, style, title, description }: InfoCardProps) => {
  return (
    <div
      className={twMerge(`py-6 border-b border-secondary pe-10`, className)}
      style={style}
    >
      <Typo
        size="2xl"
        weight="bold"
        className="text-balance text-secondary max-w-40 md:max-w-44 lg:max-w-52 !leading-tight"
      >
        {title}
      </Typo>
      <Typo size="lg" className="text-pretty mt-3 md:mt-5">
        {description}
      </Typo>
    </div>
  );
};

export type Props = {
  banner: PageBannerProps;
  overview: {
    title: string;
    description: string;
    cards: InfoCardProps[];
  };
  testimonial: {
    title: string;
    description: string;
    testimonialCard: TestimonialCardProps;
  };
};
const LandingPageOne: FC<Props> = ({ banner, overview, testimonial }) => {
  return (
    <>
      <PageBanner {...banner} isLandingPage showScroller={false} />
      <div
        style={{
          background:
            "linear-gradient(178.89deg, #FFFFFF 19.4%, #EEEEEE 79.67%)",
        }}
        className="pb-10 md:pb-20 pt-32 md:pt-0"
      >
        <section className="pt-10 md:pt-24">
          <Container isSmall>
            <div className="grid md:grid-cols-2 md:gap-5">
              <div>
                <FadeUp>
                  <Typo size="h2" tag="h2" isTitle className="text-pretty">
                    {overview.title}
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <Typo className="mt-3 md:mt-6 text-pretty" size="xl">
                    {overview.description}
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="mt-5 md:mt-11 grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 md:pe-10">
              {overview.cards.map((card, index) => (
                <FadeUp
                  key={index}
                  delay={index * 0.2}
                  className="flex flex-col"
                >
                  <InfoCard {...card} className="grow" />
                </FadeUp>
              ))}
            </div>
          </Container>
        </section>
        <section className="pt-10 md:pt-24">
          <Container isSmall>
            <div className="grid md:grid-cols-2">
              <div>
                <FadeUp>
                  <Typo size="h2" tag="h2" isTitle className="text-pretty">
                    {testimonial.title}
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-2">
                <FadeUp delay={0.2}>
                  <Typo className="mt-3 md:mt-6 text-pretty" size="xl">
                    {testimonial.description}
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="pt-8 md:pt-[3.75rem]">
              <TestimonialCard {...testimonial.testimonialCard} />
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default LandingPageOne;
