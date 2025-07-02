"use client";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Props as ButtonProps } from "@/components/atom/Button/Button";
import {
  Navigation,
  Autoplay,
  Thumbs,
  Pagination,
  EffectFade,
} from "swiper/modules";
import { Container, Typo, Button } from "@/components";
import styled from "styled-components";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { FadeUp } from "@/components/animation";
import SwiperArrow from "@/components/atom/SwiperArrow/SwiperArrow";

const SwiperContainer = styled(Swiper)`
  .swiper-pagination-bullet {
    width: 2.5rem !important;
    height: 0.125rem !important;
    display: inline-block !important;
    border-radius: 0.625rem !important;
    background: rgba(255, 255, 255, 0.5);
    &.swiper-pagination-bullet-active {
      height: 0.25rem !important;
      background: rgba(255, 255, 255, 1);
    }
  }
`;

const SwiperSlideContainer = styled(SwiperSlide)`
  position: relative;

  /* All shutter bars are hidden by default */
  .shutter-bar {
    opacity: 0;
    transition: transform 0.6s ease, opacity 0.6s ease;
  }

  /* Left bars come in from the left */
  .shutter-bar.left-bar {
    transform: translateX(-100%);
  }

  /* Right bar comes in from the right */
  .shutter-bar.right-bar {
    transform: translateX(100%);
  }

  /* Animate bars into place when active */
  &.swiper-slide-active .shutter-bar {
    transform: translateX(0);
    opacity: 1;
  }

  &.swiper-slide-active .shutter-bar.left-bar:nth-child(1) {
    transition-delay: 0s;
  }

  &.swiper-slide-active .shutter-bar.left-bar:nth-child(2) {
    transition-delay: 0.1s;
  }

  &.swiper-slide-active .shutter-bar.right-bar {
    transition-delay: 0.2s;
  }

  /* Optional: image fade-in */
  .image-wrapper {
    opacity: 0;
    transition: opacity 0.8s ease;
  }

  &.swiper-slide-active .image-wrapper {
    opacity: 1;
  }
`;

const SwiperSlideContainersm = styled(SwiperSlide)`
  width: 100%;
  height: auto !important;
  display: flex;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(22px);
  overflow: hidden;
  opacity: 0 !important;
  &.swiper-slide-next {
    opacity: 1 !important;
  }
`;

export type Slide = {
  id: number;
  slideImage: string;
  title?: string;
  subTitle?: string;
  description?: string;
  btnText?: string;
  fileLink?: string;
  typeForm?: ButtonProps["typeForm"];
  barsLeft?: {
    width: string;
    color: string;
  }[];
  barRight?: {
    width: string;
    color: string;
  };
};

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  slides: Slide[];
};
const defaultLeftBars = [
  { width: "w-10", color: "bg-green-400" },
  { width: "w-20", color: "bg-red-500" },
];

const defaultRightBar = { width: "w-8", color: "bg-blue-400" };

const StoriesSlider: FC<Props> = ({ className, style, slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={twMerge(`relative`, className)} style={style}>
      {/* Main Slider */}
      <SwiperContainer
        slidesPerGroup={1}
        slidesPerView={1}
        centeredSlidesBounds={true}
        spaceBetween={0}
        freeMode={false}
        effect={"fade"}
        speed={500}
        fadeEffect={{ crossFade: true }}
        // grabCursor={true}
        navigation={{
          nextEl: ".StoriesSlider-next",
          prevEl: ".StoriesSlider-prev",
        }}
        pagination={{
          clickable: true,
          el: ".main-swiper-pagination",
        }}
        loop={true}
        modules={[Navigation, Autoplay, Thumbs, Pagination, EffectFade]}
        thumbs={{ swiper: thumbsSwiper }}
        className="relative z-10"
      >
        {slides.map((slide) => (
          <SwiperSlideContainer key={slide.id} className="!h-auto">
            <div className="grid lg:grid-cols-12 h-full">
              <div className="xl:col-span-5 lg:col-span-6 lg:py-20 md:pt-16 md:pb-10 pt-10 pb-6 md:pe-10">
                <FadeUp>
                  <Typo
                    className="text-2xl uppercase mb-1"
                    weight="bold"
                    tag="h3"
                    isTitle
                  >
                    {slide.title}
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <Typo tag="h2" size="h2" isTitle>
                    {slide.subTitle}
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <Typo tag="p" size="lg" className="mt-4">
                    {slide.description}
                  </Typo>
                </FadeUp>
                {slide.typeForm && (
                  <FadeUp delay={0.4} className="mt-7">
                    <Button
                      variant="secondary"
                      isRounded
                      {...{ typeForm: slide.typeForm }}
                      // type="link"
                      // href={slide.fileLink}

                      isExternal
                    >
                      {slide.btnText}
                    </Button>
                  </FadeUp>
                )}
              </div>
              <div className="xl:col-span-7 col-span-6 h-full">
                <div className="flex relative overflow-hidden bg-[#3F1B7E] h-full">
                  {/* LEFT BARS */}
                  {(slide.barsLeft ?? defaultLeftBars).map((bar, i) => (
                    <div
                      key={`left-${i}`}
                      className={`shutter-bar left-bar ${bar.width} h-full ${bar.color}`}
                    />
                  ))}

                  {/* IMAGE */}
                  <div className="image-wrapper flex-1">
                    <Image
                      src={slide.slideImage}
                      alt={`Clarient ${slide.subTitle}`}
                      width={460}
                      height={700}
                      className="w-full h-full object-cover xl:max-h-[45rem] lg:max-h-[40rem] max-h-[30rem]"
                      quality={100}
                    />
                  </div>

                  {/* RIGHT BAR */}
                  <div
                    className={`shutter-bar right-bar ${
                      (slide.barRight ?? defaultRightBar).width
                    } h-full ${(slide.barRight ?? defaultRightBar).color}`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlideContainer>
        ))}
        <div className="main-swiper-pagination lg:flex hidden items-center gap-3 absolute md:left-1/2 left-0 xl:bottom-7 bottom-4 z-[99]"></div>
      </SwiperContainer>

      {/* Thumbnail Slider */}
      <SwiperContainer
        onSwiper={setThumbsSwiper}
        slidesPerView={1}
        spaceBetween={0}
        freeMode={false}
        effect={"fade"}
        speed={500}
        fadeEffect={{ crossFade: true }}
        watchSlidesProgress={true}
        modules={[Thumbs, EffectFade]}
        loop={true}
        className="w-[17.5rem] h-[5.25rem] !absolute lg:left-1/2 left-4 xl:bottom-12 bottom-4 !z-10 max-md:!hidden"
      >
        {slides.map((slide) => (
          <SwiperSlideContainersm key={slide.id}>
            <div className="flex-1 ps-4 pe-3.5 py-3.5">
              <div className="text-[9px] text-[#0A0A0A] font-normal mb-0.5">
                Next
              </div>
              <div className="text-[10px] text-[#0A0A0A] font-bold opacity-80">
                {slide.subTitle}
              </div>
            </div>
            <Image
              src={slide.slideImage}
              alt="Slide Image"
              width={84}
              height={84}
              className="max-w-full h-auto rounded-r-md object-cover"
              quality={100}
            />
          </SwiperSlideContainersm>
        ))}
      </SwiperContainer>

      {/* Navigation Arrows */}
      <Container>
        <div className="relative z-10">
          <SwiperArrow
            type="prev"
            className="StoriesSlider-prev border-white text-white hover:text-white size-9 top-auto md:bottom-12 bottom-4 right-11 left-auto"
          />
          <SwiperArrow
            type="next"
            className="StoriesSlider-next border-white text-white hover:text-white size-9 top-auto md:bottom-12 bottom-4 right-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default StoriesSlider;
