import React, { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

type Testimonial = {
  title: string;
  subtitle: string;
};

const testimonials: Testimonial[] = [
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."
  },
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."

  },
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."

  },
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."

  },
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."
  },
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."
  },
  {
    title: "CIRCUIT OF THE AMERICAS",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend."
  },
];

const PartnerSlider2: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const [activeIndex, setActiveIndex] = useState(testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex >= duplicatedTestimonials.length - testimonials.length) {
      const timeout = setTimeout(() => {
        setActiveIndex((prev) => prev - testimonials.length);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, duplicatedTestimonials.length, testimonials.length]);

  const getCardPosition = (index: number) => {
    const positionFromCenter = index - activeIndex;

    const horizontalSpacing = 300;
    const x = positionFromCenter * horizontalSpacing;

    const curveIntensity = 30;
    const y = Math.pow(positionFromCenter, 2) * curveIntensity;

    const isActive = index === activeIndex;

    const distanceFromActive = Math.abs(positionFromCenter);

    let scale, opacity, zIndex;
    if (isActive) {
      scale = 1.2;
      opacity = 1;
      zIndex = 10;
    } else {
      scale = 0.8 - distanceFromActive * 0.1;
      opacity = 0.5 - distanceFromActive * 0.1;
      zIndex = 5 - distanceFromActive;
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(${Math.max(scale, 0.6)})`,
      opacity: Math.max(opacity, 0.2),
      zIndex: Math.max(zIndex, 1),
      transition: "all 0.8s ease",
    };
  };


  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? duplicatedTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-2 overflow-hidden">
      <div className="relative w-full max-w-7xl">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left quotation mark */}
          <div className="absolute left-80 -right-12 -top-10 transform -translate-y-1/2 pl-20">
            <Image
              src="/images/partners/left.png"
              alt=""
              width={120}
              height={150}
              className=""
            />
          </div>

          {/* Right quotation mark */}
          <div className="absolute right-80 -bottom-12 lg:-bottom-24 xl:-bottom-24 md:-bottom-24 transform -translate-y-1/2 pr-20 md:pr-none lg:pr-none xl:pr-none pb-8 md:pb-none lg:pb-none xl:pb-none">
            <Image
              src="/images/partners/right.png"
              alt=""
              width={120}
              height={150}
              className=""
            />
          </div>
        </div>

        <div className="relative h-[300px] flex items-center justify-center">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute"
              style={getCardPosition(index)}
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={index === activeIndex}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center md:mt-12 lg:mt-12 xl:mt-12 mt-20 space-x-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 bg-[#ff6600] opacity-50 flex items-center justify-center rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 opacity-50"
            >
              <path
                fillRule="evenodd"
                d="M15.03 4.97a.75.75 0 010 1.06L9.06 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-[#ff6600] opacity-50 flex items-center justify-center rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 opacity-50"
            >
              <path
                fillRule="evenodd"
                d="M8.97 19.03a.75.75 0 010-1.06L14.94 12 8.97 6.03a.75.75 0 011.06-1.06l6.5 6.5a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 01-1.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

type TestimonialCardProps = {
  testimonial: Testimonial;
  isActive: boolean;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => {
  return (
    <div
      className={`relative ${isActive
        ? "w-64 md:w-80 lg:w-80 xl:w-80 h-80 md:h-64 lg:h-64 xl:h-64 bg-gradient-to-br from-brown-200 to-[#ff6600] shadow-2xl border border-[#ff6600]"
        : "w-64 md:w-80 lg:w-80 xl:w-80 h-80 md:h-64 lg:h-64 xl:h-64 bg-gradient-to-br from-brown-200 to-[#ff6600] shadow-lg border border-[#ff6600]"
        } p-8 rounded-2xl flex flex-col justify-between transform-gpu opacity-70`}
    >

      <div className="relative z-10 text-center">
        <Image
          src="/images/partners/1.png"
          alt="Partners Banner"
          width={100}
          height={100}
          className="mx-auto my-2"
        />
        <h3
          className={`${orbitron.className
            } italic font-bold tracking-widest mb-4 transition-colors duration-500 ${isActive ? "text-base text-white" : "text-sm text-white/50"
            }`}
        >
          {testimonial.title}
        </h3>
        <p
          className={`leading-relaxed transition-colors duration-500 ${isActive ? "text-xs text-white" : "text-xs text-white/40"
            }`}
        >
          {testimonial.subtitle}
        </p>
      </div>
    </div>
  );
};

export default PartnerSlider2;