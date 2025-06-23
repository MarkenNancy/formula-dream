"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "Empowering Fans to Use Skill to Win Rewards",
    details:
      "Formula Dream introduces a new era where fans can leverage their racing expertise to compete for exciting rewards. By joining skill-based competitions and leagues, users can showcase their knowledge and earn valuable prizes. This competitive element enriches the experience, fostering a sense of achievement and community among fans.",
  },
  {
    id: 2,
    title: "Addictive Games and Frequent Draws with Dreamy Prizes",
    details:
      "Users dive into thrilling games and exclusive draws, offering life-changing rewards never seen before in racing. These immersive experiences keep fans coming back for more, enriching their time on the app and encouraging consistent usage both during the season and off-season.",
  },
  {
    id: 3,
    title: "The Ultimate Hangout During Live Racing Events",
    details:
      "Fans can enjoy live race analysis with interactive tools, track league standings in real-time, and follow actual race results. Engage with the community through chats, discuss strategies, and celebrate victories together—making every race an exciting and connected experience.",
  },
  {
    id: 4,
    title: "Empowering Influencers to Drive Growth and Profit",
    details:
      "For the first time in racing, influencers can directly monetize their audience by hosting leagues and earning 80% of the profits. This model sparks engagement, builds vibrant communities, and creates lasting value for fans, influencers, and businesses alike.",
  },
];

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function InfluencerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  // };

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
        transform: "translateX(20px) translateY(8px) rotateZ(6deg) scale(0.95)",
        zIndex: 30,
        opacity: 0.8,
      },
      2: {
        transform:
          "translateX(-25px) translateY(15px) rotateZ(-8deg) scale(0.9)",
        zIndex: 20,
        opacity: 0.6,
      },
      3: {
        transform:
          "translateX(15px) translateY(-5px) rotateZ(12deg) scale(0.85)",
        zIndex: 10,
        opacity: 0.4,
      },
    };

    return styles[position] || styles[3];
  };

  const closePopup = () => setActiveCardId(null);

  return (
    <div className="bg-gradient-to-b from-[#ff6600] to-[#301401] px-6 lg:px-16 xl:px-28 md:px-16 md:py-8 lg:py-8 xl:py-8 py-none">
      <center>
        <div className="bg-gradient-to-b from-[#ff6600] to-[#301401] text-center max-w-7xl w-96 h-auto md:w-auto lg:w-auto xl:w-auto rounded-2xl">
          <h2
            className={`${orbitron.className} text-lg xl:text-2xl lg:text-2xl md:text-2xl text-white font-bold uppercase py-8 pt-4`}
          >
            What Attracts Influencers <br /> and Fans to Formula Dream
          </h2>
          <div className="flex flex-row items-center justify-center md:justify-between lg:justify-between xl:justify-between mx-12 relative">
            {/* Phone 1 */}
            <Image
              src="/images/home/phone-left.png"
              alt=""
              width={250}
              height={250}
              className="hidden md:block lg:block xl:block"
            />
            <button
              onClick={prevSlide}
              className="md:mr-4 lg:mr-4 xl:mr-4 mr-1 bg-[#ff6600] text-black rounded-full p-2 shadow-md hidden lg:block"
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
            {/* Slider */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {cards.map((card, index) => {
                const style = getCardStyle(index);

                return (
                  <div
                    key={card.id}
                    className={`absolute w-64 lg:w-80 xl:w-80 md:w-80 h-64 rounded-2xl shadow-2xl transition-all duration-700 ease-out cursor-pointer hover:shadow-3xl`}
                    style={style}
                    onClick={() => {
                      if (index !== currentIndex && !isAnimating) {
                        nextSlide();
                      }
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br from-[#FF7A00] to-[#FF5900] rounded-2xl p-6 flex flex-col justify-between items-center text-white relative overflow-hidden`}
                    >
                      <Image
                        src="/images/home/rocketArrow.png"
                        alt="logo"
                        width={64}
                        height={64}
                        className="w-32"
                      />
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <h3 className="text-md xl:text-xl lg:text-xl md:text-xl font-bold mb-3 tracking-wide leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      <div className="bg-black rounded-full px-4 py-2">
                        <button onClick={() => setActiveCardId(card.id)}>
                          <h2
                            className={`${orbitron.className} text-sm text-[#FF5900] italic font-bold uppercase`}
                          >
                            Learn More
                          </h2>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={nextSlide}
              className="md:ml-4 lg:ml-4 xl:ml-4 ml-1 bg-[#ff6600] text-black rounded-full p-2 shadow-md hidden lg:block"
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
            {/* Phone 2 */}
            <Image
              src="/images/home/phone-right.png"
              alt=""
              width={250}
              height={250}
              className="hidden md:block lg:block xl:block"
            />
          </div>
        </div>
      </center>
      {activeCardId !== null && (
        <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/50 flex items-center justify-center">
         <div className="bg-gradient-to-b from-[#FF8300]/70 to-[#FF7A00]/50 backdrop-blur-sm text-white p-6 lg:p-12 rounded-lg w-11/12 max-w-4xl relative border border-orange-400/20">
            <button
              onClick={closePopup}
              className="absolute bg-[#FF8300] p-2 rotate-180 rounded-full flex items-center justify-center text-xl font-bold"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2843 2L21.3725 9.78244M21.3725 9.78244L14.2843 17.5649M21.3725 9.78244H1.81885"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <div className="flex lg:flex-row flex-col items-center">
              <div className="lg:mr-20">
                <h2 className="lg:text-xl text-lg font-bold uppercase mb-4 lg:mt-0 mt-12">
                  {cards.find((card) => card.id === activeCardId)?.title}
                </h2>
                <p className="lg:text-sm text-sm">{cards.find((card) => card.id === activeCardId)?.details}</p>
              </div>
              <Image
                src="/images/home/popUpphone.png"
                alt=""
                width={450}
                height={450}
                className="w-[170px] h-[364px] hidden lg:block"
              />
              <Image
                src="/images/home/popUpphone2.png"
                alt=""
                width={450}
                height={450}
                className="relative lg:w-[170px] lg:h-[364px] w-[180px] block lg:hidden lg:top-none top-4 lg:-bottom-none -bottom-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
