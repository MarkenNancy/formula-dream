"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useEffect, useState } from "react";

const cards = [
  {
    id: 1,
    title: "Boost Your Brand Visibility",
    icon: "/images/engagement.png",
    description:
      "Become an early adopter and enjoy prominent promotions in high-traffic areas of our app during our exclusive introductory period. This drives highly targeted traffic straight to your platform, increasing conversion rates and boosting sales (for a minimal affiliate fee). Future high-traffic ad spaces will be reserved exclusively for our partners, ensuring sustained visibility and enhanced brand presence.",
  },
  {
    id: 2,
    title: "Stop Wasting Ad Spend—Reach Fans Directly",
    icon: "/images/adspend.png",
    description:
      "Take the guess work out of the equation! Formula Dream connects your brand with a highly targeted group of motorsport fans, ensuring you reach exactly the audience you need. Instead of wasting time and money on platforms like Meta or Google, showcase your product to engaged fans in our motorsport enthusiast niche—improving your ad spend efficiency and maximizing profit.",
  },
  {
    id: 3,
    title: "Hangout with Fans During Live Race Events",
    icon: "/images/start.png",
    description:
      "Hangout with Fans During Live Race Events. Engage with fans in real time during races, building authentic connections that make your brand part of the shared excitement. Whether through live chats, tracking race standings, or discussing strategies, this deeper engagement fosters trust and brand loyalty, turning your audience into lifelong advocates who become loyal customers and help your brand grow through organic word-of-mouth.",
  },
  {
    id: 4,
    title: "Find Brand-Aligned Influencers Across Platforms, All in One Place",
    icon: "/images/tick.png",
    description:
      "Finding the right influencers can be time-consuming and complicated. Formula Dream simplifies the process by seamlessly bringing together influencers from various platforms and organizing them by their unique content styles and areas of expertise. This makes it simple to find and partner with those who perfectly align with your brand, allowing for more authentic and impactful partnerships that drive sales and increase brand credibility.",
  },
  {
    id: 5,
    title: "Generate High-Intent Leads with Valuable Customer Data",
    icon: "/images/high.png",
    description:
      "Attract passionate racing fans through organizing leagues, games and giveaways, drawing in those who are deeply interested in your offerings/products. These engaged participants are your most optimal customers, actively seeking to win your products or services. By collecting their data through these interactions, your marketing efforts become laser-targeted, resulting in higher conversion rates and deeper customer insights",
  },
  {
    id: 6,
    title: "Join the Revolution in Racing Experience",
    icon: "/images/revolve.png",
    description:
      "Be part of the movement transforming how fans experience racing, driving innovation and excitement within the community. Formula Dream is revolutionizing fan engagement by creating unique and interactive experiences that deepen connections within the racing community. Partnering with us positions your brand as a key player in this revolution, offering exclusive opportunities for growth in a rapidly evolving space",
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
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const visibleCards = [
    cards[(currentIndex - 1 + cards.length) % cards.length],
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

  const closePopup = () => setActiveCardId(null);

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
                      key={card.id}
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
                      onClick={() => setActiveCardId(card.id)}
                    >
                      <div className="flex flex-row justify-between items-start px-12">
                        {/* title and desc */}
                        <div className="flex flex-col text-white items-start">
                          {/* logo */}
                          <Image
                            src={card.icon}
                            alt="logo"
                            width={40}
                            height={24}
                            className="mt-12"
                          />
                          {/* title */}
                          <h1
                            className={`${orbitron.className} text-lg md:text-md text-white uppercase my-4 text-left`}
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
                    onClick={() => setActiveCardId(card.id)}
                  >
                    <div className="flex flex-col text-white items-center justify-start px-4">
                      {/* Logo */}
                      <Image
                        src={card.icon}
                        alt="logo"
                        width={30}
                        height={30}
                        className=""
                      />
                      {/* Title */}
                      <h1
                        className={`${orbitron.className} text-[10px] text-[#FF7A00] uppercase my-2`}
                      >
                        {card.title}
                      </h1>
                      {/* Description */}
                      <h2 className="text-[8px] text-left line-clamp-4">
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
      {activeCardId !== null && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center px-4">
          <div
            className={`relative rounded-lg shadow-lg text-black lg:w-[800px] h-[350px] flex items-center justify-center text-center bg-[url('/images/home/vertical_car.png')] lg:bg-[url('/images/home/benefitsCar.png')] bg-contain bg-center bg-no-repeat`}
          >
            <button
              onClick={closePopup}
              className="absolute top-8 lg:right-10 right-20 text-[#FF7A00]"
            >
              ✕
            </button>
            <div className="flex flex-row justify-between items-start px-12">
              {/* Title and Description */}
              <div className="flex flex-col text-white items-start hidden lg:block">
                {/* Logo */}
                <Image
                  src={
                    cards.find((card) => card.id === activeCardId)?.icon || ""
                  }
                  alt="logo"
                  width={40}
                  height={24}
                  className=""
                />
                {/* Title */}
                <h1
                  className={`${orbitron.className} text-lg md:text-md text-[#FF7A00] uppercase my-4 text-left`}
                >
                  {cards.find((card) => card.id === activeCardId)?.title}
                </h1>
                <div className="mr-20">
                  <h2 className="text-sm text-left">
                    {
                      cards.find((card) => card.id === activeCardId)
                        ?.description
                    }
                  </h2>
                </div>
              </div>
              <div className="flex flex-col text-white items-center justify-start px-4 block lg:hidden">
                {/* Logo */}
                <Image
                  src={
                    cards.find((card) => card.id === activeCardId)?.icon || ""
                  }
                  alt="logo"
                  width={40}
                  height={30}
                  className="mb-4"
                />
                {/* Title */}
                <h1
                  className={`${orbitron.className} text-xs text-[#FF7A00] uppercase mb-2`}
                >
                  {cards.find((card) => card.id === activeCardId)?.title}
                </h1>
                {/* Description */}
                <h2 className="text-[9px]">
                  {cards.find((card) => card.id === activeCardId)?.description}
                </h2>
              </div>
              <div className="w-80 hidden lg:block"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
