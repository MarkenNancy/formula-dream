"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {  Typo } from "@/components";
import styled from "styled-components";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import SwiperArrow from "@/components/atom/SwiperArrow/SwiperArrow";

const SwiperContainer = styled(Swiper)``;

const SwiperSlideContainer = styled(SwiperSlide)``;

export type Slide = {
  id: number;
  image: string;
  title: string;
  listItems?: string[];
  contentClass?: string;
};

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  slides: Slide[];
};

const SolutionsSlider: FC<Props> = ({ className, style, slides }) => {
  return (
    <div className={twMerge(` w-full`, className)} style={style}>
      <div
        className={`flex justify-between items-center relative md:mt-10 mt-6 w-[7.5rem] h-12 bg-white z-10 rounded-full border border-[#E3E3E3] shadow-100 px-2 ${
          slides.length > 4 ? "xl:opacity-100" : "xl:opacity-0"
        }`}
      >
        <SwiperArrow
          type="prev"
          className="solutionsSlider-prev border-none bg-black text-white hover:bg-primary hover:text-white disabled:bg-transparent disabled:text-white disabled:bg-black disabled:opacity-25 size-[1.875rem] static"
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
          className="solutionsSlider-next border-none bg-black text-white hover:bg-primary hover:text-white disabled:bg-transparent disabled:text-white disabled:bg-black disabled:opacity-25 size-[1.875rem] static"
          iconSize={0.625}
        />
      </div>
      {/* Slider */}
      <SwiperContainer
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={0}
        grabCursor={false}
        loop={false}
        navigation={{
          nextEl: ".solutionsSlider-next",
          prevEl: ".solutionsSlider-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        modules={[Navigation]}
        className="z-10 relative w-full h-auto max-lg:[&>.swiper-wrapper>.swiper-slide-active>div>img]:grayscale-0 max-lg:[&>.swiper-wrapper>.swiper-slide-active>div>.bg-line]:w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlideContainer key={index} className="w-full !h-auto mt-10">
            <div className="h-full flex flex-col flex-grow group transition-all ease-in-out duration-500 relative w-full overflow-hidden">
              <Image
                // src="/images/solutions/esg/solutions1.png"
                src={slide.image}
                alt="Image"
                width={278}
                height={141}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all ease-in-out duration-500 group-hover:scale-[1.05] origin-bottom"
              />
              <div
                className={twMerge(
                  `flex-grow p-10 pt-7 border border-[#CCCCCC] border-l-0 first:border-l bg-[#F6F6F6] hover:bg-white h-full min-h-[14rem]`,
                  slide.contentClass
                )}
              >
                <Typo
                  tag="p"
                  size="xl"
                  className="text-pretty leading-6 lg:leading-none text-secondary"
                >
                  {slide.title}
                </Typo>
                <ul className="pt-4">
                  {slide.listItems?.map((item, index) => (
                    <li key={index} className="mb-3 last:mb-0">
                      <Typo
                        tag="p"
                        size="sm"
                        className="text-pretty leading-6"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute left-0 top-0 h-[0.188rem] w-0 group-hover:w-full bg-secondary transition-all ease-in-out duration-500 bg-line"></div>
            </div>
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default SolutionsSlider;
