"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/autoplay";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import SwiperCore from "swiper";

type Testimonial = {
  title: string;
  author: string;
  designation: string;
};

export type Props = {
  testimonials: Testimonial[];
  className?: string;
};

const SwiperContainer = styled(Swiper)`
  height: 36.25rem !important;
  position: unset !important;

  @media (max-width: 767px) {
    height: auto !important;
  }

  .swiper-slide {
    opacity: 0.1;
    transition: all 0.3s ease;
    @media (min-width: 767px) {
      height: 11.25rem !important;
      overflow: hidden;
    }
  }

  .swiper-slide-active {
    opacity: 1 !important;
    @media (min-width: 767px) {
      height: calc(36.25rem - 22.5rem) !important;
      overflow: auto !important;
    }
    h3 {
      color: #d75372;
    }
  }

  .swiper-pagination-bullet {
    width: 2.25rem !important;
    height: 0.5rem !important;
    border-radius: 1rem !important;
    opacity: 0.08 !important;
    background: #000 !important;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    cursor: auto;
  }

  .custom-swiper-pagination {
    display: flex !important;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.5rem;
  }
`;

const TestimonialSlider: React.FC<Props> = ({ testimonials, className }) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const originalLength = testimonials.length;

  const duplicatedTestimonials =
    originalLength > 1
      ? Array(2)
          .fill(null)
          .flatMap(() => testimonials)
      : testimonials;

  const handleSlideChange = () => {
    if (!swiperRef.current) return;
    const realIndex = swiperRef.current.realIndex;
    setActiveIndex(realIndex % originalLength);
  };

  if (testimonials.length === 1) {
    const single = testimonials[0];
    return (
      <div className={twMerge("relative md:max-w-xl", className)}>
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Typo
              tag="h3"
              size="h3"
              weight="normal"
              isTitle
              className="text-pretty mb-4 text-secondary"
            >
              {single.title}
            </Typo>
            <div>
              <Typo tag="p" size="xl" weight="bold" className="text-black">
                {single.author}
              </Typo>
              <Typo
                tag="p"
                size="lg"
                weight="normal"
                className="text-neutral-700"
              >
                {single.designation}
              </Typo>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={twMerge("relative md:max-w-xl pb-14", className)}>
      <SwiperContainer
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            setActiveIndex(swiper.realIndex % originalLength);
          }, 0);
        }}
        onSlideChange={handleSlideChange}
        direction="vertical"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={48}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 3,
            direction: "vertical",
            spaceBetween: 48,
            centeredSlides: true,
          },
          0: {
            slidesPerView: 1,
            direction: "horizontal",
            spaceBetween: 16,
            centeredSlides: false,
          },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Typo
                tag="h3"
                size="h3"
                weight="normal"
                isTitle
                className="text-pretty mb-3"
              >
                {testimonial.title}
              </Typo>
              <div>
                <Typo tag="p" size="xl" weight="bold" className="text-black">
                  {testimonial.author}
                </Typo>
                <Typo
                  tag="p"
                  size="lg"
                  weight="normal"
                  className="text-neutral-700"
                >
                  {testimonial.designation}
                </Typo>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        <div className="custom-swiper-pagination z-10 absolute !left-0 bottom-0 !top-auto">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={twMerge(
                "w-9 h-2 rounded-full bg-black opacity-10 transition-all cursor-pointer",
                activeIndex === index && "opacity-100 cursor-default"
              )}
            />
          ))}
        </div>
      </SwiperContainer>
    </div>
  );
};

export default TestimonialSlider;
