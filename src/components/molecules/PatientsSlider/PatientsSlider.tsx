"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import styled from "styled-components";
import { Typo, Button, SwiperArrow } from "@/components";
import type { Props as ButonProps } from "@/components/atom/Button/Button";
import SwiperProgres from "@/components/atom/SwiperProgres/SwiperProgres";
const SwiperContainer = styled(Swiper)``;
const SwiperSlideContainer = styled(SwiperSlide)`
  // flex-shrink: 1;
  // min-width: 80vw;
  .imageOver,
  .slideContent {
    transition: all 1s 0.5s;
    opacity: 0;
  }
  .slideImg {
    filter: grayscale(100%) blur(10px);
    transition: all 1s 0.5s;
    transform: scale(1.2);
  }
  .slideContent {
    transform: translateY(2rem);
  }
  .imageOver {
    // transition-delay: 1s;
    transform: translateY(5rem);
  }
  &.swiper-slide-active {
    .slideImg {
      filter: grayscale(0) blur(0);
      transform: scale(1);
    }
    .slideContent,
    .imageOver {
      opacity: 1;
    }
    .slideContent {
      transform: translateY(0);
    }
    .imageOver {
      transform: translateY(0);
    }
  }
`;

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};
type ImageProps = {
  str: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};
type SliderDataProps = {
  image: ImageProps;
  logo?: ImageProps;
  logoTagLine?: React.ReactNode;
  title: string;
  tag: string[];
  description: React.ReactNode;
  action?: ButonProps;
};
const sliderData: SliderDataProps[] = [
  {
    image: {
      str: "/images/home/patientsSlide-1.jpg",
      alt: "Clarient 18% reduction in mortality in critical care situations",
    },
    logo: {
      str: "/images/home/cllLogo.png",
      alt: "cllLogo",
    },
    logoTagLine: (
      <>
        DESIGN FOR DEEP TECH
        <span className="text-[#FFAA00] block">GOLD AWARD</span>
      </>
    ),
    title: "18% reduction in mortality in critical care situations",
    tag: ["User Experience Design", "AI", "DEEP TECH", "HEALTHCARE"],
    description: (
      <>
        <p>
          Our user experience team’s design for an AI-based, predictive care
          solution deployed at one of the world’s finest hospitals’ critical
          care facilities helped intensivists achieve an 18% reduction in
          patient mortality.
        </p>
        <b className="mt-3">That’s what good design can achieve. </b>
      </>
    ),
    action: {
      children: "Read the Case Study",
      variant: "outline",
      isRounded: true,
      typeForm: "cs-bayesian-sepsis",
    },
  },
  {
    image: {
      str: "/images/home/patientsSlide-2.jpg",
      alt: "Clarient AI at the Core. Intelligence That Moves Business.",
    },
    title: "AI at the Core. Intelligence That Moves Business.",
    tag: ["Built on intelligence. Designed for impact. Made to scale."],
    description: (
      <>
        <p>
          AI is changing everything—but only if it’s done right. Explore how
          Clarient builds intelligence into the core of experiences, systems,
          and strategies. Practical. Scalable. And built to move your business
          forward.
        </p>
        {/* <b className="mt-3">That’s what good design can achieve. </b> */}
      </>
    ),
    action: {
      children: "See How We Build With AI",
      variant: "outline",
      isRounded: true,
      type: "link",
      href: "/services/ai-services",
      isScrole: true,
    },
  },
  {
    image: {
      str: "/images/home/patientsSlide-3.jpg",
      alt: "Clarient Next-Gen Tech - AI, Quantum & Edge in Enterprise",
    },
    title: "Next-Gen Tech - AI, Quantum & Edge in Enterprise",
    tag: ["Three breakthrough technologies. One strategic imperative."],
    description: (
      <>
        <p>
          AI, Quantum, and Edge are converging to redefine enterprise
          transformation. Discover how leading organizations are harnessing this
          shift to scale intelligence, unlock new value, and stay ahead.
        </p>
      </>
    ),
    action: {
      children: "Explore the Full Perspective",
      variant: "outline",
      isRounded: true,
      type: "link",
      href: "/insights/the-future-of-enterprise-tech-powered-by-ai-quantum-computing-and-edge",
      isScrole: true,
    },
  },
];

const PatientsSlider: FC<Props> = ({ className, style }) => {
  const [isChanging, setIsChanging] = useState(false);
  const progressCircle = useRef<HTMLDivElement>(null);
  // const progressContent = useRef<HTMLDivElement>(null);

  const onAutoplayTimeLeft = (progress: number) => {
    // console.log("s", s);
    const progressValue = (1 - progress) * 100;
    // console.log("time", time);
    // console.log("progressValue", progressValue);

    progressCircle.current?.style.setProperty(
      "--progress",
      progressValue.toString() + "%"
    );
    // progressCircle.current?.style.setProperty("--progress", progressValue.toString());
    // progressContent.current?.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleBeforeSlideChange = () => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 3000);
  };

  useEffect(() => {
    const slides = document.querySelectorAll<HTMLElement>(
      ".patientsSlider .swiper-slide .slideContent"
    );
    let maxHeight = 0;
    slides.forEach((slide) => {
      slide.style.height = "auto";
      const height = slide.offsetHeight;
      if (height > maxHeight) maxHeight = height;
      // console.log("height", slide.offsetHeight);
    });

    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
    // console.log("maxHeight", maxHeight);
  }, []);

  return (
    <div
      className={twMerge(` relative z-10 pb-8 md:pb-20`, className)}
      style={style}
    >
      <SwiperContainer
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={24}
        onBeforeSlideChangeStart={handleBeforeSlideChange}
        onTouchMove={() => setIsChanging(true)}
        onTouchEnd={() => setIsChanging(false)}
        speed={600}
        onBeforeInit={(swiper) => {
          if (swiper) {
            swiper.params.autoHeight = true;
          }
        }}
        breakpoints={{
          0: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 16,
          },
          1024: {
            spaceBetween: 24,
          },
        }}
        // autoplay={{
        //   delay: 5000,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        //   waitForTransition: true,
        //   stopOnLastSlide: false,
        // }}
        // grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: ".patientsSlider-next",
          prevEl: ".patientsSlider-prev",
          // disabledClass: "swiper-button-disabled",
        }}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        modules={[Navigation]}
        // loop={true}
        // initialSlide={1}
        className="patientsSlider relative z-10"
        onAutoplayTimeLeft={(s, time, progress) => onAutoplayTimeLeft(progress)}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlideContainer
            key={index}
            // className="!w-full max-w-[88%] lg:!w-3/4 lg:max-w-[67.5rem]"
            className="!w-[88%] lg:max-w-[67.5rem] bg-white rounded-[0.625rem] overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <Image
                src={slide.image.str}
                alt={slide.image.alt}
                width={1080}
                height={442}
                // rounded-t-[0.625rem]
                className="slideImg w-full h-auto object-cover object-center min-h-[14rem] md:min-h-[21.875rem] "
                // xl:h-[27.625rem]
                quality={100}
              />
              <div className="imageOver absolute top-1/2 left-8 md:left-14 -translate-y-1/3 text-white">
                {slide.logo && (
                  <Image
                    width={233}
                    height={92}
                    className={twMerge(
                      `w-36 md:w-[14.563rem] h-auto`,
                      slide.logo.className
                    )}
                    quality={100}
                    src={slide.logo.str}
                    alt={slide.logo.alt}
                  />
                )}
                {slide.logoTagLine && (
                  <Typo
                    tag="div"
                    className="font-inter w-24 md:w-32 tracking-[-0.04em] !leading-none ms-[3.7rem] md:ms-24 max-md:text-sm"
                    weight="extrabold"
                  >
                    {slide.logoTagLine}
                  </Typo>
                )}
              </div>
            </div>
            <div className="py-[1.875rem] px-6 sm:px-11 gap-4">
              <div className="slideContent transition-all grid md:grid-cols-12">
                <div className="col-span-7 md:pe-6">
                  <Typo
                    tag="h2"
                    size="h2"
                    isTitle
                    weight="bold"
                    className="lg:text-[2.625rem] text-balance"
                  >
                    {slide.title}
                  </Typo>
                  <div className="flex flex-wrap mt-2 gap-x-4 opacity-40">
                    {slide.tag.map((tag, index) => (
                      <Typo
                        key={index}
                        isTitle
                        weight="bold"
                        size="sm"
                        className="uppercase"
                      >
                        {tag}
                      </Typo>
                    ))}
                  </div>
                </div>
                <div className="col-span-5 pt-4 md:pt-0">
                  <Typo tag="div" size="sm" className="[&>b]:block text-pretty">
                    {slide.description}
                  </Typo>
                  {slide.action && (
                    <div className="mt-6">
                      <Button {...slide.action} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlideContainer>
        ))}
      </SwiperContainer>
      {/* xl:block */}
      <SwiperProgres
        ref={progressCircle}
        className={`hidden absolute top-[25.625rem] z-10 left-0 right-0 mx-auto max-w-[70%] !w-[63.5rem] ${
          isChanging ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* max-lg:top-[12vw] */}
      <SwiperArrow
        type="prev"
        className="patientsSlider-prev max-md:size-8 max-md:left-6 max-md:top-[6rem]"
      />
      <SwiperArrow
        type="next"
        className="patientsSlider-next max-md:size-8 max-md:right-6 max-md:top-[6rem]"
      />
    </div>
  );
};

export default PatientsSlider;
