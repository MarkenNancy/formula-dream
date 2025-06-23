"use client";
import React, { FC, Suspense, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Container, Typo } from "@/components";
import dynamic from "next/dynamic";
import { FadeUp, Parallax, ScaleOnHover } from "@/components/animation";
import Countdown from "@/components/atom/CountDown/Countdown";
import Link from "next/link";
import { Orbitron } from "next/font/google";
import Image from "next/image";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const BannerHome: FC<Props> = ({ className, style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleApplyClick = () => {
    setIsModalOpen(false);
    setIsConfirmOpen(true);
  };

  return (
    <section
      className={twMerge(
        "text-white pt-20 pb-36 xl:pb-24 lg:pb-36 lg:bg-contain bg-black md:bg-contain bg-cover bg-center bg-no-repeat w-full overflow-hidden bg-[url(/images/home/landing_vdo.gif)] lg:bg-[url(/images/home/landing_vdo.gif)] xl:bg-[url(/images/home/landing_vdo.gif)] md:bg-[url(/images/home/landing_vdo.gif)]",
        className
      )}
      style={{
        ...style,
        boxShadow: "0px 4px 4px 0px #FF5900",
      }}
    >
      <Suspense fallback={``}></Suspense>
      <div className="relative z-[2]">
        <Container>
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <Countdown />
            <h1
              className={`${orbitron.className}
              text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[45px] font-medium
              leading-tight tracking-wide text-center uppercase text-[#FF5900] lg:mt-6 md:mt-6 mt-20
              `}
            >
              BRING LOYAL RACING FANS <br /> CLOSER TO YOUR BRAND
            </h1>

            <div className="flex flex-wrap justify-center items-center lg:gap-4 md:gap-3 gap-2 mt-6">
              <p className="text-sm md:text-base lg:text-lg font-medium uppercase text-[#FFD6B0] font-[Poppins]">
                BUILD LOYALTY
              </p>
              <div className="w-[4px] h-[4px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#FF7B00]"></div>
              <p className="text-sm md:text-base lg:text-lg font-medium uppercase text-[#FFD6B0] font-[Poppins]">
                ACCELERATE GROWTH
              </p>
              <div className="w-[4px] h-[4px] lg:w-[8px] lg:h-[8px] rounded-full bg-[#FF7B00]"></div>
              <p className="text-sm md:text-base lg:text-lg font-medium uppercase text-[#FFD6B0] font-[Poppins]">
                SIMPLIFY SUCCESS
              </p>
            </div>

            <div className="lg:mt-8 md:mt-8 mt-64 lg:mb-80 bg-gradient-to-r from-[#ff6600] to-[#ff9900] text-black px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition text-sm md:text-base lg:text-lg">
              <button className="" onClick={toggleModal}>
                <div className="flex flex-row items-center justify-end">
                  <h2
                    className={`${orbitron.className} text-xs md:text-sm text-black uppercase px-3`}
                  >
                    Apply for early access
                  </h2>
                  <div className="rounded-full px-3 py-1 bg-black text-orange-800">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2843 2L21.3725 9.78244M21.3725 9.78244L14.2843 17.5649M21.3725 9.78244H1.81885"
                        stroke="#FF8300"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/50 flex items-center justify-center">
          <div className="bg-[#FF7A00]/10 backdrop-blur-sm text-white p-8 rounded-lg w-full mx-24 relative border border-orange-400/20">
            <button
              onClick={toggleModal}
              className="absolute top-4 left-4 bg-black px-4 py-1 rotate-180 rounded-full flex items-center justify-center text-xl font-bold hover:bg-orange-700/30 transition-colors"
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
                  stroke="#FF8300"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <div className="flex lg:flex-row flex-col justify-between items-center">
              {/* text */}
              <div className="pt-8 lg:pt-2">
                <div className="flex flex-col justify-center">
                  <h2
                    className={`${orbitron.className} text-lg lg:text-3xl font-bold text-[#FF5900] mb-4 uppercase leading-tight w-64`}
                  >
                    DRIVE INTO THE FUTURE OF F1 FANTASY
                  </h2>
                  <p className="text-sm lg:text-lg text-white/80 pb-8 lg:pb-none">
                    Register and be a part of us
                  </p>
                </div>
              </div>
              {/* Fields */}
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column of Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white mb-1">
                        <i> Contact Name*</i>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full bg-white/10 border border-orange-400/50 p-2 rounded text-white placeholder-orange-300/60 focus:border-orange-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white mb-1">
                        Website
                      </label>
                      <input
                        type="url"
                        placeholder="Please provide a valid URL"
                        className="w-full bg-white/10  border border-orange-400/50 p-2 rounded text-white placeholder-orange-300/60 focus:border-orange-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white mb-1">
                        Social Media Platform
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Instagram"
                          className="w-full bg-white/10  border border-orange-400/50 p-2 rounded text-white placeholder-orange-300/60 focus:border-orange-400 focus:outline-none transition-colors"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column of Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full business name"
                        className="w-full bg-white/10  border border-orange-400/50 p-2 rounded text-white placeholder-orange-300/60 focus:border-orange-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white mb-1">
                        Business Email
                      </label>
                      <input
                        type="email"
                        placeholder="Please provide a valid URL"
                        className="w-full bg-white/10  border border-orange-400/50 p-2 rounded text-white placeholder-orange-300/60 focus:border-orange-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-white mb-1">
                        Shipping Address
                      </label>
                      <textarea
                        placeholder="Address"
                        className="w-full bg-white/10  border border-orange-400/50 p-2 rounded text-white placeholder-orange-300/60 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                        rows={2}
                      ></textarea>
                    </div>
                    <div className="pl-none lg:pl-10">
                      <button
                        className="w-full mt-6 text-xs lg:text-sm bg-gradient-to-r from-orange-600 to-orange-400 text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 col-span-2"
                        onClick={handleApplyClick}
                      >
                        <span className={`${orbitron.className} uppercase`}>
                          APPLY FOR EARLY ACCESS
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                        >
                          <path
                            d="M14.2843 2L21.3725 9.78244M21.3725 9.78244L14.2843 17.5649M21.3725 9.78244H1.81885"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="grid grid-cols-1 lg:grid-cols-2">
          
              
            </div> */}
          </div>
        </div>
      )}
      {isConfirmOpen && (
        <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/50 flex items-center justify-center">
          <div className="bg-[#FF7A00]/10 backdrop-blur-sm text-white p-8 rounded-lg w-full lg:mx-96 mx-8 relative border border-orange-400/20">
            
           <div className="flex flex-col justify-center items-center">
             <Image
              src="/images/home/congratsCar.png"
              alt="card"
              width={400}
              height={380}
              className=""
            />
            <h2 className="relative lg:text-2xl text-lg font-bold text-[#FF5900] uppercase text-center lg:bottom-12 bottom-10">
              YOU ARE IN
            </h2>
            <p className="lg:text-lg text-xs text-white text-center lg:mt-4">
             Our team will reach out soon to get you on board. Keep an eye on your inbox for the next steps!
            </p>
            <button
              onClick={() => setIsConfirmOpen(false)}
              className="bg-gradient-to-r from-[#FF5900] to-[#FF8800] px-8 mt-4 py-1 rounded-full uppercase flex items-center justify-center text-md font-semibold text-black"
            >
              <h3 className="mx-4">Back to home</h3>
            </button>
           </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BannerHome;
