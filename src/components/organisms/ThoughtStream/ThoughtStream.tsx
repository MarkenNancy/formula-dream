import React, { FC } from "react";
import { FadeUp } from "@/components/animation";
import { Typo, Container, Icons } from "@/components";
import Link from "next/link";
import Image from "next/image";
import BlogSlider from "@/components/molecules/BlogSlider/BlogSlider";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const ThoughtStream: FC<Props> = ({ className, style }) => {
  return (
    <section className={twMerge(``, className)} style={style}>
      <div className="pt-20 pb-10">
        <Container>
          <div className="grid xl:grid-cols-12">
            <div className="xl:col-span-9">
              <FadeUp>
                <Typo
                  className="text-2xl uppercase mb-1"
                  weight="bold"
                  tag="h3"
                  isTitle
                >
                  THOUGHTSTREAM
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="h2" size="h2" isTitle className="text-balance">
                  At Clarient, it’s the quality of our thinking that sets us
                  apart, and keeps you ahead.
                </Typo>
              </FadeUp>
            </div>
          </div>
        </Container>
      </div>
      <FadeUp delay={0.5}>
        <div className="bg-white">
          <Container clearRight>
            <div className="md:grid md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%]">
              <BlogSlider />
              <div className="relative min-h-96 md:mb-0 mb-4 md:min-h-0 px-6 lg:px-11 py-12 lg:py-[4rem] flex flex-col">
                <Link
                  href="/insights/how-cloud-3-0-brings-together-ai-workloads-fin-ops-and-green-ops"
                  className="transition-all hover:text-primary grow"
                >
                  <Image
                    src="/images/home/webinar-1.jpg"
                    alt="Clarient How Cloud 3.0 Brings Together AI Workloads FinOps and GreenOps"
                    fill
                    className="object-cover object-right-bottom"
                  />
                  <div className="grid grid-cols-[2.5rem_1fr] gap-3 relative z-10">
                    <div className="">
                      {/* <Icons name="play" size={2.5} /> */}
                    </div>
                    <div>
                      <div className="max-w-60">
                        <div className="flex items-end flex-wrap max-w-[14.375rem] text-white">
                          <Typo
                            isTitle
                            size="lg"
                            weight="bold"
                            className="leading-none inline-block mt-1"
                          >
                            {/* Webinar <br /> Highlights */}
                            BLOG
                          </Typo>
                          <Typo
                            isTitle
                            size="lg"
                            className="leading-none uppercase inline-block ps-3 opacity-70"
                          >
                            March 2025
                          </Typo>
                        </div>
                        <div className="pt-5 mt-auto">
                          <Typo
                            isTitle
                            weight="bold"
                            size="xl"
                            className="text-white"
                          >
                            How Cloud 3.0 Brings Together AI Workloads FinOps
                            and GreenOps
                          </Typo>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </FadeUp>
      <div
      // className="pb-20"
      // style={{
      //   background: "linear-gradient(180deg, #ECECEC 45.19%, #FFFFFF 100%)",
      // }}
      >
        <Container>
          <div className="grid gap-y-4 sm:gap-y-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <FadeUp
              delay={0.2}
              className="bg-white sm:col-span-2 lg:rounded-bl-[0.625rem] overflow-hidden md:max-h-[33.75rem]"
            >
              <Link
                href="/insights/the-co-innovation-approach-to-creating-value-with-clients"
                className="transition-all hover:text-primary group"
              >
                <Image
                  src="/images/home/webinar-2.jpg"
                  alt="Clarient The Co Innovation Approach to Creating Value with Clients"
                  width={662}
                  height={300}
                  className="w-full h-auto max-h-[20rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:rounded-none group-hover:scale-[1.07] origin-bottom"
                  quality={100}
                />
                <div className="pt-10 px-6 pb-5 grid gap-5">
                  <Typo isTitle size="lg" className="uppercase text-black">
                    <b>BLOG</b> <span className="opacity-70">March 2025</span>
                  </Typo>
                  <Typo isTitle tag="h3" size="h3" weight="bold">
                    The Co Innovation Approach to Creating Value with Clients
                  </Typo>
                </div>
              </Link>
            </FadeUp>

            <div className="sm:grid md:grid-rows-2 md:max-h-[33.75rem]">
              <FadeUp delay={0.4} className="flex flex-col relative z-10">
                <Link
                  href="/insights/the-circular-economy-and-the-future-of-sustainable-business-beyond-net-zero"
                  className="bg-[#D75372] text-white p-10 min-h-64 sm:min-h-[20rem] block grow"
                >
                  <Typo isTitle size="lg" className="uppercase">
                    <b>BLOG</b> <span className="opacity-70">March 2025</span>
                  </Typo>
                  <Typo
                    tag="h3"
                    size="xl"
                    isTitle
                    weight="bold"
                    className="mt-5"
                  >
                    The Circular Economy and the Future of Sustainable Business
                    Beyond Net Zero
                  </Typo>
                </Link>
              </FadeUp>
              <div className="hidden sm:block">
                <Image
                  src="/images/home/newsWave.png"
                  alt="Clarient Wave"
                  className="w-full h-auto object-cover sm:-mt-24"
                  width={405}
                  height={405}
                />
              </div>
            </div>
            <FadeUp
              delay={0.6}
              className="bg-white overflow-hidden md:max-h-[33.75rem]"
            >
              <Link
                href="/insights/how-ai-is-transforming-the-sourcing-deployment-and-retention-of-tech-talent"
                className="group transition-all hover:text-primary"
              >
                <Image
                  src="/images/home/webinar-3.jpg"
                  alt="Clarient How AI Is Transforming the Sourcing Deployment and Retention of Tech Talent"
                  width={662}
                  height={300}
                  className="w-full max-h-[20rem] h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:rounded-none group-hover:scale-[1.145] origin-bottom"
                  quality={100}
                />
                <div className="pt-[1.875rem] pb-12 px-5 grid gap-5">
                  <Typo isTitle size="lg" className="uppercase text-black">
                    <b>BLOG</b> <span className="opacity-70">March 2025</span>
                  </Typo>
                  <Typo isTitle tag="h3" size="xl" weight="bold">
                    How AI Is Transforming the Sourcing Deployment and Retention
                    of Tech Talent
                  </Typo>
                </div>
              </Link>
            </FadeUp>
            {/*  */}
            <FadeUp
              delay={0.8}
              className="bg-white p-5 md:rounded-bl-[0.625rem] lg:col-start-3 overflow-hidden lg:rounded-bl-none lg:rounded-br-[0.625rem]"
            >
              <Link
                href="/insights/the-future-of-media-with-generative-ai-content-creation-curation-and-monetization"
                className=" group  transition-all hover:text-primary"
              >
                <div className="pb-[1.875rem] pt-[0.625rem] grid gap-5">
                  <Typo isTitle size="lg" className="uppercase text-black">
                    <b>BLOG</b> <span className="opacity-70">March 2025</span>
                  </Typo>
                  <Typo isTitle tag="h3" size="xl" weight="bold">
                    The Future of Media with Generative AI Content Creation
                    Curation and Monetization
                  </Typo>
                </div>
                <Image
                  src="/images/home/webinar-4.jpg"
                  alt="Clarient The Future of Media with Generative AI Content Creation Curation and Monetization"
                  width={662}
                  height={300}
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all rounded-[0.625rem] group-hover:rounded-t-none lg:group-hover:rounded-bl-none group-hover:scale-[1.16] duration-500 origin-top"
                  quality={100}
                />
              </Link>
            </FadeUp>
            <FadeUp
              delay={0.9}
              className="flex flex-col justify-center lg:col-start-2 lg:row-start-2 bg-[#4F1DC0] sm:rounded-br-[0.625rem] md:rounded-br-none lg:rounded-bl-[0.625rem]"
            >
              <Typo
                tag="div"
                size="2xl"
                isTitle
                className="leading-none grow flex flex-col justify-center"
              >
                <Link
                  href="/insights"
                  className="group grow flex flex-col justify-center items-center p-10"
                >
                  <span className="transition-all text-white group-hover:opacity-100 group-hover:text-white">
                    See All Insights
                  </span>
                  <span className="transition-all mt-3 size-9 bg-black bg-opacity-25 rounded-full inline-flex items-center justify-center ms-2 text-white group-hover:opacity-100 group-hover:bg-secondary border border-white group-hover:border-secondary">
                    <Icons name="arrow-right" size={0.688} />
                  </span>
                </Link>
              </Typo>
            </FadeUp>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ThoughtStream;
