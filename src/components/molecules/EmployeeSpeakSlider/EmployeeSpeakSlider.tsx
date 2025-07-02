"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Typo } from "@/components";
import styled from "styled-components";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import { FadeUp } from "@/components/animation";
import SwiperArrow from "@/components/atom/SwiperArrow/SwiperArrow";

const SwiperContainer = styled(Swiper)``;

const SwiperSlideContainer = styled(SwiperSlide)``;

export type Slide = {
  id: number;
  image: string;
  description?: string;
  name?: string;
  designation?: string;
};

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  slides: Slide[];
};

const EmployeeSpeakSlider: FC<Props> = ({ className, style, slides }) => {
  return (
    <div className={twMerge(` w-full`, className)} style={style}>
      <SwiperContainer
        slidesPerView={1}
        // slidesPerGroup={1}
        spaceBetween={0}
        grabCursor={false}
        loop={false}
        navigation={{
          nextEl: ".employeeSpeakSliderr-next",
          prevEl: ".employeeSpeakSlider-prev",
        }}
        modules={[Navigation]}
        className="z-10 bg-[url('/images/services/coutBg1.jpg')] bg-repeat bg-cover bg-center relative"
      >
        {slides.map((slide) => (
          <SwiperSlideContainer key={slide.id} className="!h-auto">
            <div className="grid grid-cols-12 w-full md:ps-16 ps-8 md:pt-16 pt-8 h-full">
              <div className="col-span-8 pb-14 h-full">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty text-white">
                    {slide.description}
                  </Typo>
                </FadeUp>
              </div>
              <div className="col-span-4 h-full">
                <FadeUp
                  delay={0.3}
                  className="relative z-10 h-full flex items-end"
                >
                  <Image
                    src={slide.image}
                    alt="Image"
                    width={262}
                    height={339}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </FadeUp>
              </div>
            </div>
            <div className="w-full md:px-16 px-8 py-5 bg-[#3F1B7E] text-white absolute left-0 bottom-0">
              <FadeUp delay={0.3}>
                <Typo
                  tag="p"
                  size="lg"
                  className="text-pretty"
                  weight="bold"
                  isTitle
                >
                  {slide.name}
                </Typo>
                <Typo
                  tag="p"
                  size="sm"
                  className="text-pretty"
                  weight="normal"
                  isTitle
                >
                  {slide.designation}
                </Typo>
              </FadeUp>
            </div>
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
      <div className="relative z-10 flex flex-col items-end xl:-right-9 right-0 xl:bottom-3 -bottom-10">
        <SwiperArrow
          iconSize={1}
          type="prev"
          className="employeeSpeakSlider-prev border-white text-white hover:text-white size-8 absolute left-auto xl:-right-1 right-10 top-auto xl:bottom-10 bottom-0  bg-black bg-opacity-50"
        />
        <SwiperArrow
          iconSize={1}
          type="next"
          className="employeeSpeakSliderr-next border-white text-white hover:text-white size-8 absolute top-auto bottom-0 xl:-right-1 right-0 bg-black bg-opacity-50"
        />
      </div>
    </div>
  );
};

export default EmployeeSpeakSlider;
