"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "CIRCUIT OF THE AMERICAS",
    desc: "motorsport venue/brand",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend.",
  },
  {
    id: 2,
    title: "CIRCUIT OF THE AMERICAS",
    desc: "motorsport venue/brand",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend.",
  },
  {
    id: 3,
    title: "CIRCUIT OF THE AMERICAS",
    desc: "motorsport venue/brand",
    subtitle:
      "Partnering with Formula Dream has completely transformed the way we work—it's reliable, efficient, and provides exactly what we need to stay sharp and ahead every race weekend.",
  },
];

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function PartnerSliderRes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + cards.length) % cards.length;

    const styles: Record<
      number,
      { transform: string; zIndex: number; opacity: number }
    > = {
      0: {
        transform: "translateX(0px) translateY(0px) rotateZ(0deg) scale(1)",
        zIndex: 40,
        opacity: 1,
      },
      1: {
        transform:
          "translateX(30px) translateY(12px) rotateZ(10deg) scale(0.9)",
        zIndex: 30,
        opacity: 0.8,
      },
      2: {
        transform:
          "translateX(-30px) translateY(12px) rotateZ(-10deg) scale(0.9)",
        zIndex: 30,
        opacity: 0.8,
      },
    };

    return styles[position] || styles[3];
  };

  const closePopup = () => setActiveCardId(null);

  return (
    <>
      <center>
        <div className="flex flex-row justify-center items-center gap-x-36">
          <button
            onClick={prevSlide}
            className="mt-10 rounded-2xl bg-gradient-to-r from-[#000000] to-[#FF7A0080] p-2 cursor-pointer z-50 border border-[#FF7822]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF7822"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Slider */}
          <div className="w-auto h-80 flex items-center justify-center mt-12">
            {cards.map((card, index) => {
              const style = getCardStyle(index);

              return (
                <div
                  key={card.id}
                  // className={`absolute w-64 h-64 rounded-3xl shadow-2xl transition-all duration-700 ease-out cursor-pointer hover:shadow-3xl`}
                  className={`absolute w-64 h-80 rounded-3xl shadow-2xl transition-all duration-700 ease-out cursor-pointer hover:shadow-3xl bg-gradient-to-b from-[#FF8800] via-[#FF8800] to-[#1a0500] border border-[#FF8800] text-white p-4`}
                  style={style}
                  onClick={() => {
                    if (index !== currentIndex && !isAnimating) {
                      nextSlide();
                    }
                  }}
                >
                  <div className="relative z-10 text-center">
                    <Image
                      src="/images/partners/1.png"
                      alt="Partners Banner"
                      width={100}
                      height={100}
                      className="mx-auto my-2 mb-8"
                    />
                    <h3
                      className={`${orbitron.className} text-xs font-bold tracking-widest mb-2 transition-colors duration-500`}
                    >
                      <i>{card.title}</i>
                    </h3>
                    <h3 className="text-[10px] uppercase opacity-50 tracking-widest mb-4 transition-colors duration-500">
                      {card.desc}
                    </h3>
                    <Image
                      src="/images/partners/stars.png"
                      alt="Partners Banner"
                      width={100}
                      height={100}
                      className="mx-auto mt-8 mb-6"
                    />
                    <p
                      className={`leading-relaxed transition-colors text-[10px] duration-500`}
                    >
                      "{card.subtitle}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={nextSlide}
            className="mt-10 rounded-2xl bg-gradient-to-r from-[#FF7A0080] to-[#000000] p-2 cursor-pointer z-50 border border-[#FF7822]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF7822"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          {/* <div className="flex flex-row justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="relative rounded-full bg-[#FF7100] p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-[#FF7100] p-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </center>
    </>
  );
}
