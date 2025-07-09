"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/images/home/crew.png",
    title: "FIND YOUR CREW",
    description:
      "TIRED OF WATCHING F1 ALONE? IMAGINE SCREAMING AT THE SCREEN, LAUGHING WITH FRIENDS, AND SHARING EVERY LAP WITH FANS WHO LOVE IT JUST LIKE YOU DO.",
  },
  {
    icon: "/images/home/crew.png",
    title: "FIND YOUR CREW",
    description:
      "TIRED OF WATCHING F1 ALONE? IMAGINE SCREAMING AT THE SCREEN, LAUGHING WITH FRIENDS, AND SHARING EVERY LAP WITH FANS WHO LOVE IT JUST LIKE YOU DO.",
  },
  {
    icon: "/images/home/crew.png",
    title: "FIND YOUR CREW",
    description:
      "TIRED OF WATCHING F1 ALONE? IMAGINE SCREAMING AT THE SCREEN, LAUGHING WITH FRIENDS, AND SHARING EVERY LAP WITH FANS WHO LOVE IT JUST LIKE YOU DO.",
  },
  {
    icon: "/images/home/crew.png",
    title: "FIND YOUR CREW",
    description:
      "TIRED OF WATCHING F1 ALONE? IMAGINE SCREAMING AT THE SCREEN, LAUGHING WITH FRIENDS, AND SHARING EVERY LAP WITH FANS WHO LOVE IT JUST LIKE YOU DO.",
  },
  {
    icon: "/images/home/crew.png",
    title: "FIND YOUR CREW",
    description:
      "TIRED OF WATCHING F1 ALONE? IMAGINE SCREAMING AT THE SCREEN, LAUGHING WITH FRIENDS, AND SHARING EVERY LAP WITH FANS WHO LOVE IT JUST LIKE YOU DO.",
  },
];

const MagicSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1A1A1A] to-[#FF7A00] py-16 px-4 lg:px-20 text-white rounded-[16px] border border-orange-500">
      <div className="text-center mb-10">
        <h2 className="text-sm md:text-md uppercase tracking-wide">
          EXPLORE THE MAGIC OF
        </h2>
        <h1 className="text-2xl md:text-4xl font-bold text-[#FFBE9C] italic">
          FORMULA DREAM
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center px-10 lg:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full h-[400px] lg:w-full lg:h-[380px] rounded-2xl overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('/images/home/magicCar2.png')] lg:bg-[url('/images/home/magicCar.png')] relative"
          >
            <div className="absolute bottom-0 w-full">
              <div className="flex justify-center -mb-6 z-10 relative">
                <Image
                  src={feature.icon}
                  alt="crew icon"
                  width={64}
                  height={64}
                  className="drop-shadow-[0_0_15px_#FF8000]"
                />
              </div>
              <div className="mx-4 lg:mx-4 mb-2 rounded-xl border border-orange-500 bg-gradient-to-b from-[#FF7A0080]/50 to-black/60 text-center px-4  py-4 lg:py-8 backdrop-blur-sm text-white">
                <h3 className="text-sm md:text-base font-bold tracking-widest">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[10px] md:text-xs font-medium leading-snug text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 hidden lg:block">
        <div className="lg:mt-8 w-fit lg:mt-12 bg-[#FF7822] text-black px-2 py-1 rounded-full font-bold shadow-lg hover:scale-105 transition text-sm md:text-base lg:text-lg">
          <button className="">
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <h2 className={`font-semibold text-xl font-bold uppercase px-4`}>
                CLAIM YOUR SPOT
              </h2>
              <div className="relative z-50 rounded-full px-3 py-1 lg:px-4 lg:py-2 bg-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M14.2843 2L21.3725 9.78244M21.3725 9.78244L14.2843 17.5649M21.3725 9.78244H1.81885"
                    stroke="#FF7822"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      <p className="text-center mt-2 text-[10px] text-white/80 tracking-widest hidden lg:block">
        ONLY 1000 SPOTS RESERVED
      </p>
    </section>
  );
};

export default MagicSection;
