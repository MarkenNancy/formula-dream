"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Boost Your  Visibility",
    description:
      "Become an early adopter and enjoy prominent promotions in high-traffic areas of our app during our exclusive introductory period. This drives highly targeted traffic straight to your platform, increasing conversion rates and boosting sales (for a minimal affiliate fee). Future high-traffic ad spaces will be reserved exclusively for our partners, ensuring sustained visibility and enhanced brand presence.",
  },
  {
    title: "Boost Your Brand Visibility",
    description:
      "Become an early adopter and enjoy prominent promotions in high-traffic areas of our app during our exclusive introductory period. This drives highly targeted traffic straight to your platform, increasing conversion rates and boosting sales (for a minimal affiliate fee). Future high-traffic ad spaces will be reserved exclusively for our partners, ensuring sustained visibility and enhanced brand presence.",
  },
  {
    title: "Boost  Brand Visibility",
    description:
      "Become an early adopter and enjoy prominent promotions in high-traffic areas of our app during our exclusive introductory period. This drives highly targeted traffic straight to your platform, increasing conversion rates and boosting sales (for a minimal affiliate fee). Future high-traffic ad spaces will be reserved exclusively for our partners, ensuring sustained visibility and enhanced brand presence.",
  },
];

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});
const orbitrondesc = Orbitron({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export default function BenefitSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

 const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = [
    cards[(currentIndex - 1 + cards.length) % cards.length], 
    cards[currentIndex], 
    cards[(currentIndex + 1) % cards.length], 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#301401] to-[#ff6600] py-10 text-center px-6 lg:px-16 xl:px-16 md:px-16">
      <center>
        <div className="">
          <h2
            className={`${orbitron.className} text-lg xl:text-2xl lg:text-2xl md:text-2xl text-white font-bold uppercase my-8`}
          >
            Benefits That Drive Your
            <br /> Business Forward
          </h2>
          <div className="flex flex-row justify-between items-center">
            <button
              onClick={prevSlide}
              className="hidden md:block lg:block xl:block bg-[#ff6600] text-black rounded-full p-2 shadow-md mt-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="hidden md:block lg:block xl:block my-32 relative w-full max-w-3xl h-64 mx-auto flex items-center justify-center">
              {visibleCards.map((card, index) => {
                 const position = index - 1;
  const isCenter = position === 0;

                return (
                  <>
                    <div
                      key={card.title}
                      className={` absolute transition-transform duration-700 ease-in-out rounded-lg shadow-lg text-black md:w-[800px] lg:w-[800px] xl:w-[800px] w-[100px] h-[200px] md:h-[350px] lg:h-[350px] xl:h-[350px] flex items-center justify-center text-center ${
                        isCenter ? "z-10 scale-100" : "z-0 scale-90 opacity-50"
                      }`}
                      style={{
                        backgroundImage: `url('/images/home/benefitsCar.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        transform: `translateX(${position * 140}px) scale(${
                          isCenter ? 1 : 0.9
                        })`,
                        zIndex: isCenter ? 10 : 0,
                      }}
                    >
                      <div className="flex flex-row justify-between items-start px-12">
                        {/* title and desc */}
                        <div className="flex flex-col text-white items-start">
                          {/* logo */}
                          <Image
                            src="/images/engagement.png"
                            alt="logo"
                            width={40}
                            height={24}
                            className="mt-12"
                          />
                          {/* title */}
                          <h1
                            className={`${orbitron.className} text-lg md:text-md text-white uppercase my-4`}
                          >
                            {card.title}
                          </h1>
                          <div className="mr-20">
                            <h2 className="text-sm text-left">
                              {" "}
                              {card.description}
                            </h2>
                          </div>
                          {/* desc */}
                        </div>
                        {/* image */}
                        <Image
                          src="/images/home/business2.png"
                          alt="card"
                          width={400}
                          height={380}
                          className="hidden md:block lg:block xl:block"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* RESPONSIVE */}
            <div className="block md:hidden lg:hidden xl:hidden my-32 relative w-full max-w-sm mx-auto flex items-center justify-center">
              {visibleCards.map((card, index) => {
                const position = index - 1;
                const isCenter = position === 0;

                return (
                  <div
                    key={card.title}
                    className={`absolute transition-transform duration-700 ease-in-out rounded-lg shadow-lg text-black w-48 h-72 flex items-center justify-center text-center ${
                      isCenter ? "z-10 scale-150" : "z-0 scale-75 opacity-50"
                    }`}
                    style={{
                      backgroundImage: `url('/images/home/vertical_car.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      transform: `translateX(${position * 80}px) scale(${
                        isCenter ? 1 : 0.9
                      })`,
                      zIndex: isCenter ? 10 : 0,
                    }}
                  >
                    <div className="flex flex-col text-white items-center justify-start px-4">
                      {/* Logo */}
                      <Image
                        src="/images/engagement.png"
                        alt="logo"
                        width={30}
                        height={30}
                        className=""
                      />
                      {/* Title */}
                      <h1
                        className={`${orbitron.className} text-sm text-white uppercase my-2`}
                      >
                        {card.title}
                      </h1>
                      {/* Description */}
                      <h2 className="text-[11px] text-left line-clamp-5">
                        {card.description}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="hidden md:block lg:block xl:block bg-[#ff6600] text-black rounded-full p-2 shadow-md mt-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white text-black rounded-full p-2 shadow-md"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-black rounded-full p-2 shadow-md"
            >
              Next
            </button>
          </div> */}
        </div>
      </center>
    </div>
  );
}
