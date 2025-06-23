import React, { FC } from "react";
import Video from "@/components/atom/Video/Video";
import { Button, Container, Typo } from "@/components";
import { FadeUp, Parallax } from "@/components/animation";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  description?: string;
  date?: string;
};

const BannerCMS: FC<Props> = ({
  className,
  style,
  title,
  description,
  date,
}) => {
  return (
    <section
      className={twMerge(
        `text-white md:pb-[14rem] md:pt-[18rem] py-[12rem] relative w-full bg-[url(/images/careerVideoBg.jpg)] bg-cover bg-center`,
        className
      )}
      style={style}
    >
      <Video
        source="/video/bannerCareer.mov"
        poster="/images/about/videoPoster.jpg"
        fallbackColor="#0B0824"
        className=""
      />
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat -z-[1} opacity-90"
        style={{
          backgroundImage: "url('/images/home/bannerVideo.png')",
        }}
      ></div>
      <div className="relative z-10">
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7">
              <Parallax startOffset={-100} endOffset={100}>
                <div>
                  <FadeUp>
                    {date && (
                      <Typo
                        tag="p"
                        size="lg"
                        weight="bold"
                        className="text-pretty"
                      >
                        {date}
                      </Typo>
                    )}
                    <Typo
                      tag="h1"
                      size="h2"
                      weight="bold"
                      isTitle
                      className="text-balance lg:text-[3.125rem] lg:leading-none tracking-[-0.063rem]"
                    >
                      {title}
                    </Typo>
                  </FadeUp>
                  {description && (
                    <FadeUp delay={0.2}>
                      <Typo
                        tag="p"
                        size="sm"
                        className="mt-5 md:max-w-[23.5rem] text-pretty"
                      >
                        {description}
                      </Typo>
                    </FadeUp>
                  )}
                  <FadeUp delay={0.2}>
                    <div className="mt-10">
                      <Button
                        isRounded
                        size="large"
                        variant="primary"
                        className="uppercase"
                        typeForm="contact"
                      >
                        Get in touch
                      </Button>
                    </div>
                  </FadeUp>
                </div>
              </Parallax>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BannerCMS;
