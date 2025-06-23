import React, { FC } from "react";
import PageBanner, {
  Props as PageBannerProps,
} from "@/components/molecules/PageBanner/PageBanner";
import { Container, Typo } from "@/components";
import { FadeUp } from "@/components/animation";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TestimonialSlider, {
  Props as TestimonialCardProps,
} from "@/components/molecules/TestimonialSlider/TestimonialSlider";
import GetStartedsSec from "@/components/organisms/GetStartedsSec/GetStartedsSec";

export type CardProps = {
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type overviewProps = {
  title: string;
  description: string;
  className?: string;
  cards: CardProps[];
};
export type Props = {
  banner: PageBannerProps;
  overview: overviewProps;
  testimonial: {
    title: string;
    testimonialCard: TestimonialCardProps["testimonials"];
  };
};

const LandingPageTwo: FC<Props> = ({ banner, overview, testimonial }) => {
  const { className, ...props } = overview;
  return (
    <>
      <PageBanner {...banner} scrollFullPageOffset={70} />
      <section
        className={twMerge(`md:pt-24 pt-12 md:pb-44 pb-16`, className)}
        {...props}
      >
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  isTitle
                  className="text-pretty leading-none mb-4"
                >
                  {overview.title}
                </Typo>
              </FadeUp>
              <FadeUp delay={0.1}>
                <Typo tag="p" size="xl" className="text-pretty" weight="normal">
                  {overview.description}
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-[1.875rem] md:mt-16 mt-8">
            {overview.cards.map((card, idx) => (
              <div
                key={idx}
                className="h-full flex flex-col flex-grow px-5 pt-8 bg-[#F6F6F6] relative"
              >
                <div className="mb-8">
                  <Typo
                    tag="p"
                    size="2xl"
                    className="text-balance text-secondary !leading-[110%] mb-4 lg:w-2/3"
                    weight="bold"
                  >
                    {card.title}
                  </Typo>
                  <Typo
                    tag="p"
                    size="xl"
                    className="text-pretty lg:w-[85%]"
                    weight="normal"
                  >
                    {card.description}
                  </Typo>
                </div>
                <div className="flex-grow h-full flex items-end justify-end">
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={card.imageWidth || 112}
                      height={card.imageHeight || 125}
                      quality={100}
                      className="max-w-full h-auto object-cover"
                    />
                  )}
                </div>
                <div className="h-1.5 w-full bg-secondary absolute left-0 top-0"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-[#F9F9F9] md:pt-20 pt-10">
        <Container isSmall>
          <div id="letsbuild" className="md:-mt-44 -mt-16">
            <GetStartedsSec />
          </div>
        </Container>
      </section>
      <section className="md:py-20 py-10 bg-[#F9F9F9]">
        <Container isSmall className="relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:block z-0">
            <Image
              src="/images/bluePrint/flower.png"
              alt="Sustainability"
              width={581}
              height={585}
              className="max-w-full h-auto object-cover"
              quality={100}
            />
          </div>
          <div>
            <div className="md:mb-[3.5rem] mb-8">
              <FadeUp>
                <Typo size="h2" tag="h2" isTitle className="text-pretty">
                  {testimonial.title}
                </Typo>
              </FadeUp>
            </div>
            <FadeUp delay={0.1} className="grid grid-cols-12 h-full gap-2">
              <div className="sm:col-span-3 h-full md:flex sm:justify-center justify-start items-center">
                <svg
                  className="max-sm:max-w-[60px] max-sm:max-h-[60px] max-md:max-h-[150px] max-md:max-w-[150px] xl:pe-0 sm:pe-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="223"
                  height="196"
                  viewBox="0 0 223 196"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M72.785 1.22819C66.3927 3.6562 56.4167 8.98997 49.1979 13.8386C40.5611 19.6398 28.6947 30.7038 22.7853 38.4656C12.1708 52.4065 6.61804 66.5858 3.42729 87.8997C1.28139 102.232 1.12879 105.871 0.9308 147.47C0.72027 191.713 0.528333 188.936 4.03681 192.441C7.42209 195.824 5.41928 195.672 46.6538 195.672C86.4796 195.672 85.0854 195.753 88.3756 193.245C89.216 192.605 90.4286 191.188 91.071 190.097L92.2381 188.113L92.3553 150.419L92.4729 112.724L91.5387 110.554C90.442 108.007 87.4319 105.168 85.1585 104.537C84.2265 104.279 76.4599 104.102 65.9764 104.101L48.3605 104.098L48.3605 101.382C48.3605 95.1976 50.1252 84.7024 52.3342 77.7488C55.2707 68.5041 59.7514 61.0503 66.2419 54.6129C71.537 49.3608 77.6686 45.1898 86.2881 40.9757C92.5909 37.8946 93.5363 37.13 95.2681 33.7128C95.7268 32.8079 96.0324 31.195 96.0475 29.6006C96.0691 27.2927 95.7812 26.3554 93.6522 21.8022C85.5502 4.47605 84.8875 3.37673 81.5031 1.65151C79.0213 0.386314 75.4575 0.213532 72.785 1.22819ZM200.619 0.91158C198.223 1.35347 186.958 6.86174 180.858 10.574C162.352 21.8363 147.906 36.9248 139.452 53.8216C133.271 66.1768 130.209 78.6576 128.053 100.292C127.479 106.042 127.315 114.638 127.16 147.035C126.946 191.763 126.753 188.931 130.266 192.441C133.651 195.824 131.651 195.672 172.861 195.672C213.028 195.672 211.62 195.759 214.886 193.069C215.743 192.363 216.948 190.776 217.564 189.541L218.683 187.295L218.674 149.908C218.664 113.229 218.648 112.484 217.784 110.577C216.772 108.343 215.228 106.602 213.064 105.256C211.586 104.336 211.121 104.309 192.968 104.098L174.386 103.882L174.518 100.426C174.859 91.5009 177.015 80.8787 180.01 73.3748C183.089 65.6593 186.777 60.0314 192.373 54.5075C197.467 49.4805 202.667 45.8983 210.829 41.7947C218.654 37.8609 220.841 36.048 221.727 32.7617C222.775 28.8719 222.223 26.9122 217.064 16.1954C214.184 10.2146 211.629 5.50541 210.643 4.36332C208.139 1.46189 204.475 0.200152 200.619 0.91158Z"
                    fill="#F0EEF2"
                  />
                </svg>
              </div>
              <div className="sm:col-span-9 col-span-12">
                <TestimonialSlider testimonials={testimonial.testimonialCard} />
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LandingPageTwo;
