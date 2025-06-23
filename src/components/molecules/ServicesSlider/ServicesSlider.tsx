"use client";
import React, { FC, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import { servicesData } from "@/data/services";
import {
  Typo,
  Button,
  ServicesIcons,
  SwiperArrow,
  Container,
} from "@/components";
import styled from "styled-components";
import LinkList from "@/components/atom/LinkList/LinkList";
// import "swiper/css/scrollbar";
const SwiperContainer = styled(Swiper)`
  align-items: stretch;
  transition: all 0.5s ease-in-out;
  .swiper-wrapper {
    display: flex !important;
    & > div {
      align-items: stretch !important;
    }
  }
  .swiper-slide-prev {
    @media (min-width: 1025px) {
      opacity: 0;
    }
  }
`;
const SwiperSlideContainer = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  .slideItem {
    // min-height: 28.75rem;
    transition: all 0.5s ease-in-out;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    // border-top: solid 0.375rem transparent;
    border-radius: 0 0 0.625rem 0.625rem;
    align-self: flex-start;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 0.375rem;
      width: 0;
      left: 0;
      top: 0;
      background: #d75372;
      transition: all 1s ease-out;
    }
    @media (min-width: 1025px) {
      max-height: 28.75rem;
      overflow: hidden;
    }
    .slideContent {
      transition: all 0.5s ease-in-out;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      @media (min-width: 1025px) {
        opacity: 0;
      }
    }
  }
  @media (min-width: 1025px) {
    // &:hover,
    &.swiper-slide-active {
      .slideItem {
        // border-color: #d75372 !important;
        flex-grow: 1;
        max-height: 100%;
        border-radius: 0;
        &:before {
          content: "";
          width: 100%;
        }
        h5 {
          color: #d75372 !important;
        }
        .slideContent {
          // display: block !important;
          opacity: 1;
          transition-delay: 0.3s;
        }
      }
    }
    .slideItem {
      &:hover {
        max-height: 100%;
        .slideContent {
          // display: block !important;
          opacity: 1;
          transition-delay: 0.3s;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    &.swiper-slide-active {
      .slideItem {
        border-color: #e3592a !important;
        flex-grow: 1;
        max-height: 100%;
        border-radius: 0;
        h5 {
          color: #d75372 !important;
        }
        .slideContent {
          // display: block !important;
          opacity: 1;
        }
      }
    }
  }
`;

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const ServicesSlider: FC<Props> = ({ className, style }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // const [offset, setOffset] = useState(16);
  // useEffect(() => {
  //   const handleOffset = () => {
  //     if (window.innerWidth > 1292) {
  //       const offsetVal = (window.innerWidth - 1292) / 2;
  //       setOffset(offsetVal);
  //     }
  //   };
  //   handleOffset();
  //   window.addEventListener("resize", handleOffset);
  //   return () => window.removeEventListener("resize", handleOffset);
  // }, []);

  useEffect(() => {
    const slides = document.querySelectorAll<HTMLElement>(
      ".serviscesSlider .swiper-slide"
    );
    let maxHeight = 0;

    slides.forEach((slide) => {
      slide.style.height = "auto"; // reset
      const height = slide.offsetHeight;
      if (height > maxHeight) maxHeight = height;
    });

    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div
      className={twMerge(
        `relative mb-1 border-b border-black border-opacity-20 transition-all`,
        className
      )}
      style={style}
      ref={sliderRef}
    >
      <SwiperContainer
        slidesPerGroup={1}
        slidesPerView={"auto"}
        // slidesOffsetBefore={offset}
        // slidesOffsetAfter={offset}
        // allowSlideNext={false}
        // allowSlidePrev={false}
        // centeredSlidesBounds={true}
        // centeredSlides={true}
        spaceBetween={24}
        // speed={3000}
        // autoplay={{
        //   delay: 5000,
        //   pauseOnMouseEnter: false,
        //   disableOnInteraction: false,
        //   waitForTransition: true,
        //   stopOnLastSlide: false,
        // }}
        // wrapperClass="swiperNew"
        // grabCursor={true}
        navigation={{
          nextEl: ".servicesSlider-next",
          prevEl: ".servicesSlider-prev",
          // disabledClass: "swiper-button-disabled",
        }}
        // centeredSlidesBounds={true}
        // wrapperClass="servicesSliderWrapper"
        initialSlide={0}
        // onClick={(swiper) => {
        //   console.log(swiper.clickedIndex);
        //   swiper.slideTo(swiper.clickedIndex, 3000);
        // }}
        // autoHeight={false}
        // scrollbar={true}
        scrollbar={{
          draggable: true,
          dragSize: 200,
          el: ".scrollbar",
          dragClass: "scrollbarDrag",
        }}
        // loop
        modules={[Navigation, Autoplay, Scrollbar]}
        autoHeight={false}
        className="serviscesSlider relative z-10 w-full"
        // SwiperSlide
      >
        {/* <SwiperSlideContainer className="!w-[25.625rem] max-w-[80%]">
          <div>
            <Typo tag="p" size="lg">
              Our user experience team’s design for an AI-based, predictive care
              care solution deployed at one of the world’s finest hospitals’
              critical care facilities helped intensivists achieve an 18%
              reduction in patient mortality.
            </Typo>
            <Typo tag="p" size="lg" weight="bold" className="mt-3">
              That’s what good design can achieve.
            </Typo>
            <Typo tag="p" size="lg">
              We don’t just build solutions, we design outcomes. By blending
              human-centered design, intelligent technology, and sharp business
              thinking, we help ambitious teams move faster, think clearer, and
              lead with purpose.
            </Typo>
          </div>
        </SwiperSlideContainer> */}

        {servicesData.map((services, index) => (
          <SwiperSlideContainer
            key={index}
            className="!w-[19.125rem] max-w-[80%]"
          >
            <div className="slideItem pt-9 px-6 pb-6">
              <Typo
                tag="h5"
                size="xl"
                weight="bold"
                isTitle
                className="text-[#525252]"
              >
                {services.title}
              </Typo>
              <Typo tag="p" size="sm" className="mt-3 text-pretty">
                {services.description}
              </Typo>
              <div className="slideContent">
                <LinkList list={services.links} />

                <div className="pt-8">
                  <Button
                    variant="outline"
                    isRounded
                    {...services.action}
                    isScrole
                  />
                </div>
                <div className="pt-10 mt-auto">
                  {/* <div className="pt-36 mt-auto"> */}
                  <ServicesIcons
                    name={services.servicesIcons ?? "AIStrategy"}
                    className="block"
                    iconClassName="mx-auto"
                  />
                </div>
              </div>
            </div>
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
      <div className="absolute -bottom-1 left-0 right-0 z-10 transition-all">
        <Container>
          <div className="scrollbar relative">
            {/* <div className="bg-black bg-opacity-20 h-px absolute top-1/2 left-0 w-full"></div> */}
            <div className="scrollbarDrag h-2 rounded-lg bg-[#E88CA2] z-10"></div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="absolute -top-16 lg:right-16 right-10 z-10 transition-all">
          <SwiperArrow
            type="prev"
            className="servicesSlider-prev border-[#292D32] text-[#292D32] hover:text-white size-9 bottom-auto top-5 left-auto right-11"
          />
          <SwiperArrow
            type="next"
            className="servicesSlider-next border-[#292D32] text-[#292D32] hover:text-white size-9 bottom-auto top-5 left-auto right-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default ServicesSlider;
