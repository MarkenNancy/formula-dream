"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/autoplay";
import { getBlogsById } from "@/data/blogs";
import BlogCard from "@/components/atom/BlogCard/BlogCard";

const SwiperContainer = styled(Swiper)``;

const SwiperSlideContainer = styled(SwiperSlide)``;

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  blogIDs?: number[];
};

const InformedSlider: FC<Props> = ({ className, style, blogIDs = [] }) => {
  const blogsByids = getBlogsById(blogIDs);
  if (!blogsByids || blogsByids.length < 1) return null;
  return (
    <div className={twMerge(`relative w-full`, className)} style={style}>
      <SwiperContainer
        // a11y={{ enabled: true }}
        centeredSlides={false}
        slidesPerView={3.5}
        slidesPerGroup={1}
        spaceBetween={24}
        grabCursor={false}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 3.5,
          },
        }}
        className="relative z-10 max-lg:[&>.swiper-wrapper>.swiper-slide-active>a>div>img]:grayscale-0 max-lg:[&>.swiper-wrapper>.swiper-slide-active]:text-primary"
      >
        {blogsByids?.map((blog) => (
          <SwiperSlideContainer key={blog.id} className="!h-auto">
            <BlogCard {...blog} className="" />
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
    </div>
  );
};

export default InformedSlider;
