"use client";
import React, { FC, Suspense } from "react";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";
import { Button, Container, Typo } from "@/components";
import { FadeUp } from "@/components/animation";
import type { Props as ButtonProps } from "@/components/atom/Button/Button";
import ScrollToJobs from "@/components/atom/ScrollToJobs/ScrollToJobs";
import type { Props as VideoProps } from "@/components/atom/Video/Video";
import type { Props as VideoVimeoIframeProps } from "@/components/atom/VideoVimeoIframe/VideoVimeoIframe";
import ScrollFullPage from "@/components/atom/ScrollFullPage/ScrollFullPage";
import GetStarteds from "@/components/forms/GetStarteds/GetStarteds";
import ScrollToId from "@/components/atom/ScrollToId/ScrollToId";

const VideoVimeoIframe = dynamic(
  () => import("@/components/atom/VideoVimeoIframe/VideoVimeoIframe"),
  {
    ssr: false,
  }
);
const Video = dynamic(() => import("@/components/atom/Video/Video"), {
  ssr: false,
});

export type Props = {
  style?: React.CSSProperties;
  className?: string;
  video?: VideoProps;
  videoVimeoIframe?: VideoVimeoIframeProps;
  overlay?: {
    style?: React.CSSProperties;
    className?: string;
  };
  title: string;
  titleClass?: string;
  description: string;
  descriptionClass?: string;
  action?: ButtonProps;
  isScrollToJobs?: boolean;
  scrollToId?: string;
  isLandingPage?: boolean;
  showScroller?: boolean;
  scrollFullPageOffset?: number;
};

const PageBanner: FC<Props> = ({
  className,
  style,
  video,
  overlay,
  title,
  titleClass,
  description,
  descriptionClass,
  action,
  isScrollToJobs,
  videoVimeoIframe,
  showScroller = true,
  isLandingPage = false,
  scrollToId,
  scrollFullPageOffset = 130,
}) => {
  return (
    // md:pt-[18rem] md:pb-[14rem]
    <section
      id="pageBanner"
      className={twMerge(
        "pt-40 pb-20 lg:pt-52 lg:pb-40 relative w-full bg-primary-200 text-white lg:min-h-screen flex flex-col items-center justify-center bg-cover bg-center",
        className
      )}
      style={style}
    >
      <div className="w-full h-full overflow-hidden absolute inset-0">
        {videoVimeoIframe ? (
          <Suspense fallback={``}>
            <VideoVimeoIframe
              {...videoVimeoIframe}
              className={twMerge(
                `absolute inset-0 w-auto h-auto min-h-full min-w-full object-cover m-auto bg-primary-200 bg-[url('/images/about/videoPoster.jpg')] bg-repeat bg-cover bg-center`,
                videoVimeoIframe.className
              )}
            />
          </Suspense>
        ) : (
          <>
            {video && (
              <Suspense fallback={``}>
                <Video {...video} />{" "}
              </Suspense>
            )}
          </>
        )}
      </div>

      <div
        className={twMerge(
          `absolute inset-0 w-full h-full z-[1] bg-no-repeat bg-cover opacity-90`,
          overlay?.className
        )}
        style={{
          backgroundImage: "url(/images/home/bannerVideo.png)",
          ...overlay?.style,
        }}
      ></div>
      <div className="relative z-10 w-full">
        <Container isSmall>
          <div className="grid md:grid-cols-12 gap-x-4">
            <div
              className={`${
                isLandingPage ? "md:col-span-6 lg:col-span-7" : "md:col-span-7"
              }`}
            >
              <div>
                <FadeUp>
                  <Typo
                    tag="h1"
                    size="h2"
                    weight="bold"
                    isTitle
                    className={twMerge(
                      "text-balance lg:text-[3.125rem] lg:leading-none tracking-[-0.063rem]",
                      titleClass
                    )}
                  >
                    {title}
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <Typo
                    tag="p"
                    size="sm"
                    className={twMerge(
                      "mt-5 md:max-w-[23.5rem] text-pretty",
                      descriptionClass
                    )}
                  >
                    {description}
                  </Typo>
                </FadeUp>
                {action && (
                  <FadeUp delay={0.2}>
                    <div className="mt-10">
                      {isScrollToJobs && <ScrollToJobs isRounded {...action} />}
                      {scrollToId && (
                        <ScrollToId
                          scrollId={scrollToId}
                          isRounded
                          {...action}
                        />
                      )}
                      {!isScrollToJobs && !scrollToId && (
                        <Button isRounded {...action} />
                      )}
                      {/* {isScrollToJobs ? (
                        <ScrollToJobs isRounded {...action} />
                      ) : (
                        <>
                          {scrollToId ? (
                            <ScrollToId
                              scrollId={scrollToId}
                              isRounded
                              {...action}
                            />
                          ) : (
                            <Button isRounded {...action} />
                          )}
                        </>
                      )} */}
                    </div>
                  </FadeUp>
                )}
              </div>
            </div>
            {isLandingPage && (
              <FadeUp className="md:col-span-6 lg:col-span-5 z-10" delay={0.5}>
                <div className="md:relative">
                  <GetStarteds
                    className="bg-white py-7 px-4 sm:px-7 lg:pt-9 lg:pb-10 text-black rounded-lg md:absolute md:-top-11 w-full border border-[#CCCCCC] mt-10 md:mt-0 -mb-52 md:mb-0"
                    style={{
                      boxShadow: "0 0.25rem 2.5rem 0 #0000000F",
                    }}
                  />
                </div>
              </FadeUp>
            )}
          </div>
        </Container>
      </div>
      {showScroller && (
        <ScrollFullPage
          className="max-lg:hidden"
          offset={scrollFullPageOffset}
        />
      )}
    </section>
  );
};

export default PageBanner;
