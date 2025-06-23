"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Logos } from "@/components";
import styled from "styled-components";
const SwiperContainer = styled(Swiper)`
  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
`;
const SwiperSlideContainer = styled(SwiperSlide)`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  span {
    svg,
    img {
      width: auto;
      height: 1.875rem;
      max-width: 9.375rem;
    }
  }
`;

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const LogosSlider: FC<Props> = ({ className, style }) => {
  return (
    <div className={twMerge(`relative w-full`, className)} style={style}>
      <SwiperContainer
        slidesPerGroup={1}
        slidesPerView={"auto"}
        spaceBetween={30}
        speed={10000}
        // grabCursor={true}
        initialSlide={0}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode
        allowTouchMove={false}
        className="logoasSlider relative z-10"
      >
        <SwiperSlideContainer>
          <Logos name="aws" />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Logos name="microsoftPartner" />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Logos name="servicenow" />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Logos name="databricks" />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Logos name="snowflake" />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Logos name="hubspot" />
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Logos name="salesforcePartner" />
        </SwiperSlideContainer>
      </SwiperContainer>
    </div>
  );
};

export default LogosSlider;
