"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Typo } from "@/components";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import SwiperArrow from "@/components/atom/SwiperArrow/SwiperArrow";
// import "swiper/css/scrollbar";
const SwiperContainer = styled(Swiper)`
  // .swiper-wrapper {
  //   display: flex;
  // }
`;
const SwiperSlideContainer = styled(SwiperSlide)`
  &:not(.swiper-slide-active) {
    // opacity: 0.5;
  }
  &:not(.swiper-slide-next) {
    border-color: transparent;
    .slideContent {
      display: none;
    }
  }
`;

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const BlogSlider: FC<Props> = ({ className, style }) => {
  return (
    <div className={twMerge(`relative`, className)} style={style}>
      <SwiperContainer
        slidesPerView={1}
        spaceBetween={0}
        grabCursor={true}
        navigation={{
          nextEl: ".blogSlider-next",
          prevEl: ".blogSlider-prev",
        }}
        initialSlide={0}
        modules={[Navigation]}
        className="relative bg-[#FFF4F5]"
      >
        <SwiperSlideContainer className="relative px-4 lg:px-[2.875rem]">
          <Link
            href="/insights/building-ethical-ai-innovation-responsibility-and-compliance-in-focus"
            className="transition-all text-secondary hover:text-primary"
          >
            <div className="lg:px-7 pb-1">
              <Image
                src="/images/home/blog-2.png"
                alt="Clarient Building Ethical AI. Innovation, Responsibility and Compliance
                  in Focus"
                width={966}
                height={498}
                className="w-full h-auto block"
              />
            </div>
            <div className="pt-7 pb-16 grid lg:grid-cols-10">
              <div className="lg:col-span-8">
                <Typo isTitle size="sm" className="text-black uppercase">
                  <span className="font-bold">BLOG</span>{" "}
                  <span className="opacity-70">March 3, 2025</span>
                </Typo>
                <Typo isTitle weight="bold" tag="h3" size="h3" className="mt-2">
                  Building Ethical AI. Innovation, Responsibility and Compliance
                  in Focus
                </Typo>
              </div>
            </div>
          </Link>
        </SwiperSlideContainer>
        <SwiperSlideContainer className="relative px-4 lg:px-[2.875rem]">
          <Link
            href="/insights/governing-ai-at-scale-finding-the-balance-between-progress-and-protection"
            className="transition-all text-secondary hover:text-primary"
          >
            <div className="lg:px-7 pb-1">
              <Image
                src="/images/home/blog-1.png"
                alt="Clarient Governing AI at Scale. Finding the Balance Between Progress
                  and Protection"
                width={966}
                height={498}
                className="w-full h-auto block"
              />
            </div>
            <div className="pt-7 pb-16 grid lg:grid-cols-10">
              <div className="lg:col-span-8">
                <Typo isTitle size="sm" className="text-black uppercase">
                  <span className="font-bold">BLOG</span>{" "}
                  <span className="opacity-70">March 3, 2025</span>
                </Typo>
                <Typo isTitle weight="bold" tag="h3" size="h3" className="mt-2">
                  Governing AI at Scale. Finding the Balance Between Progress
                  and Protection
                </Typo>
              </div>
            </div>
          </Link>
        </SwiperSlideContainer>
        {/* <SwiperSlideContainer className="relative px-4 lg:px-[2.875rem]">
          <Link
            href="#"
            className="transition-all text-secondary hover:text-primary"
          >
            <div className="lg:px-7 pb-1">
              <Image
                src="/images/home/blog-1.png"
                alt="blog-1"
                width={966}
                height={498}
                className="w-full h-auto block"
              />
            </div>
            <div className="pt-7 pb-16 grid lg:grid-cols-10">
              <div className="lg:col-span-8">
                <Typo isTitle size="sm" className="text-black uppercase">
                  <span className="font-bold">Article</span>{" "}
                  <span className="opacity-70">March 3, 2025</span>
                </Typo>
                <Typo isTitle weight="bold" tag="h3" size="h3" className="mt-2">
                  AI Strategy, Development, Execution & Operational Excellence
                </Typo>
              </div>
            </div>
          </Link>
        </SwiperSlideContainer> */}
      </SwiperContainer>
      {/* <div className="flex justify-between items-center absolute bottom-3 lg:bottom-[6.25rem] right-3 lg:right-0 w-[7.5rem] h-12 bg-white z-10 rounded-full border border-[#E3E3E3] shadow-100 md:translate-x-1/2 px-2">
        <SwiperArrow
          type="prev"
          className="blogSlider-prev border-none bg-black text-white hover:bg-primary hover:text-white disabled:bg-transparent disabled:text-white disabled:bg-black disabled:opacity-25 size-[1.875rem] static"
          iconSize={0.625}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            width="0.375rem"
            height="2.188rem"
            viewBox="0 0 6 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.38476 34.7988L2.38477 0.119141H3.38477L3.38476 34.7988H2.38476ZM4.39844 32.4214L4.39844 2.49658H5.39844L5.39844 32.4214H4.39844ZM0.373047 2.49658V32.4214H1.37305L1.37305 2.49658H0.373047Z"
              fill="black"
            />
          </svg>
        </span>
        <SwiperArrow
          type="next"
          className="blogSlider-next border-none bg-black text-white hover:bg-primary hover:text-white disabled:bg-transparent disabled:text-white disabled:bg-black disabled:opacity-25 size-[1.875rem] static"
          iconSize={0.625}
        />
      </div> */}
      <div className="flex justify-between items-center absolute bottom-3 lg:bottom-[6.25rem] right-3 lg:right-10 w-[7.5rem] h-12 bg-white z-10 rounded-full border border-[#E3E3E3] shadow-100 px-2">
        <SwiperArrow
          type="prev"
          className="blogSlider-prev border-none bg-black text-white hover:bg-primary hover:text-white disabled:bg-transparent disabled:text-white disabled:bg-black disabled:opacity-25 size-[1.875rem] static"
          iconSize={0.625}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            width="0.375rem"
            height="2.188rem"
            viewBox="0 0 6 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.38476 34.7988L2.38477 0.119141H3.38477L3.38476 34.7988H2.38476ZM4.39844 32.4214L4.39844 2.49658H5.39844L5.39844 32.4214H4.39844ZM0.373047 2.49658V32.4214H1.37305L1.37305 2.49658H0.373047Z"
              fill="black"
            />
          </svg>
        </span>
        <SwiperArrow
          type="next"
          className="blogSlider-next border-none bg-black text-white hover:bg-primary hover:text-white disabled:bg-transparent disabled:text-white disabled:bg-black disabled:opacity-25 size-[1.875rem] static"
          iconSize={0.625}
        />
      </div>
    </div>
  );
};

export default BlogSlider;
