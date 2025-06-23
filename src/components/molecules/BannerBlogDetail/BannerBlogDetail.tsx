import { Container, Typo } from "@/components";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button, { Props as ButtonProps } from "@/components/atom/Button/Button";
import DateFormat from "@/components/atom/DateFormat/DateFormat";
import Tag from "@/components/atom/Tag/Tag";
import Video from "@/components/atom/Video/Video";

export type Props = {
  className?: string;
  contentClass?: string;
  id?: string;
  style?: React.CSSProperties;
  indent?: boolean;
  tag?: string;
  subTitle?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  date?: string;
  action?: ButtonProps;
  type?: "blog" | "page";
};

const BannerBlogDetail: React.FC<Props> = ({
  className,
  contentClass,
  title,
  subTitle,
  tag,
  description,
  style,
  indent = false,
  action,
  date,
  type = "page",
}) => {
  return (
    <section
      className={twMerge(
        `text-white pt-24 md:pt-56 pb-14 md:pb-32 lg:pb-56 relative bg-[url(/images/homeVideoBg.jpg)] bg-cover bg-center`,
        className
      )}
      style={style}
    >
      <Video
        poster="/images/about/videoPoster.jpg"
        source="/video/bannerHome.mov"
        fallbackColor="#0B0824"
      />
      <div className="absolute inset-0 w-full h-full -z-[1] bg-[url('/images/home/bannerVideo.png')] bg-cover bg-no-repeat opacity-90"></div>
      <Container className="relative" isSmall>
        <div className={`${indent ? "md:ps-20" : ""}`}>
          <div
            className={`grid grid-cols-12 gap-4 z-[1] relative ${
              type === "blog" ? "" : ""
            }`}
          >
            {type === "blog" && <div className="hidden"></div>}
            <div
              className={twMerge(
                `col-span-12 md:col-span-8 xl:col-span-6 lg:pe-1 pb-12 lg:pb-0 ${
                  type === "blog"
                    ? "md:col-span-9 lg:col-span-8 xl:col-span-7"
                    : ""
                }`,
                contentClass
              )}
            >
              {subTitle && (
                <Typo tag="p" weight="bold" className="mb-2">
                  {subTitle}
                </Typo>
              )}
              {tag && <Tag title={tag} />}
              <Typo
                tag="h1"
                size="h2"
                weight="bold"
                className="pb-0 text-2xl md:text-[2.625rem] md:leading-[120%] text-pretty"
              >
                {title}
              </Typo>
              {description && (
                <Typo
                  tag="p"
                  className="my-4 text-base md:text-lg leading-[180%] text-pretty lg:pe-10"
                >
                  {description}
                </Typo>
              )}
              {date && <DateFormat dataSring={date} />}
              {action && (
                <div className="mt-4">
                  <Button variant="primary" {...action} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerBlogDetail;
