import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Container, Typo } from "@/components";
import Video from "@/components/atom/Video/Video";
import { FadeUp } from "@/components/animation";

import type { Props as ButtonProps } from "@/components/atom/Button/Button";

import ScrollToJobs from "@/components/atom/ScrollToJobs/ScrollToJobs";

import VideoVimeoIframe, {
  Props as VideoVimeoIframeProps,
} from "@/components/atom/VideoVimeoIframe/VideoVimeoIframe";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
  videoSource: string;
  videoPoster: string;
  fallbackColor?: string;
  backgroundImage: string;
  backgroundStyle?: React.CSSProperties;
  title: string;
  titleClass?: string;
  description: string;
  descriptionClass?: string;
  action?: ButtonProps;
  isScrollToJobs?: boolean;
  videoVimeoIframe?: VideoVimeoIframeProps;
};

const BannerAbout: FC<Props> = ({
  className,
  style,
  videoSource,
  videoPoster,
  fallbackColor = "#0B0824",
  backgroundImage,
  backgroundStyle,
  title,
  titleClass,
  description,
  descriptionClass,
  action,
  isScrollToJobs,
  videoVimeoIframe,
}) => {
  return (
    <div
      className={twMerge(
        "text-white md:pb-[14rem] md:pt-[18rem] py-[12rem] relative w-full overflow-hidden",
        className
      )}
      style={style}
    >
      {videoVimeoIframe ? (
        <VideoVimeoIframe
          {...videoVimeoIframe}
          className={twMerge(
            `absolute inset-0 w-auto h-auto min-h-full min-w-full object-cover m-auto bg-primary-200 bg-[url('/images/about/videoPoster.jpg')] bg-repeat bg-cover bg-center`,
            videoVimeoIframe.className
          )}
        />
      ) : (
        <Video
          poster={videoPoster}
          source={videoSource}
          fallbackColor={fallbackColor}
        />
      )}
      <div
        className="absolute inset-0 w-full h-full z-[1] bg-cover bg-no-repeat opacity-90 z"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...backgroundStyle,
        }}
      ></div>
      <Container isSmall className="relative z-10">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-7">
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
                    {isScrollToJobs ? (
                      <ScrollToJobs isRounded {...action} />
                    ) : (
                      <Button isRounded {...action} />
                    )}
                  </div>
                </FadeUp>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerAbout;
