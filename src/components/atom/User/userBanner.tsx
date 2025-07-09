"use client";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Countdown2 from "../CountDown/Countdown2";
import Countdown3 from "../CountDown/Countdown3";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
};
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});
const UserBanner: FC<Props> = ({ className, style }) => {
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
        "text-white lg:bg-gradient-to-b lg:from-black lg:via-black lg:to-[#FF7A00] py-8 lg:py-0 rounded-b-2xl pt-12 lg:pt-0 bg-cover h-screen lg:h-auto bg-no-repeat bg-[url(/images/home/userPhoneG.png)]"
      )}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-12 lg:mt-0">
        {/* Countdown Section */}
        <div className="flex flex-col items-center lg:items-center lg:ml-20 my-6 lg:my-4">
          <div className="flex flex-col justify-center items-center block lg:hidden mb-8">
            <h1
              className={`${orbitron.className} text-3xl lg:text-5xl font-extrabold uppercase bg-gradient-to-b from-[#FFFFFF] to-[#FF7822] bg-clip-text text-transparent`}
            >
              <i>WHERE F1 LIVES</i>
            </h1>
            <p
              className={`${orbitron.className} mt-2 text-sm lg:text-lg text-white tracking-wide`}
            >
              CONNECT. COMPETE. CELEBRATE
            </p>
          </div>
          <Countdown3 />
          <div className="text-center lg:text-left mt-6 lg:mt-12">
            <div className="flex flex-col justify-center items-center">
              <center>
                <div className="flex flex-col justify-center items-center hidden lg:block">
                  <h1
                    className={`${orbitron.className} text-3xl lg:text-5xl font-extrabold uppercase bg-gradient-to-b from-[#FFFFFF] to-[#FF7822] bg-clip-text text-transparent`}
                  >
                    <i>WHERE F1 LIVES</i>
                  </h1>
                  <p
                    className={`${orbitron.className} mt-2 text-sm lg:text-lg text-white tracking-wide`}
                  >
                    CONNECT. COMPETE. CELEBRATE
                  </p>
                </div>
              </center>
              <div className="relative top-80 mt-4 lg:mt-1 lg:top-4 flex flex-col justify-center items-center bg-black/60 p-6 px-8 rounded-2xl border border-[#FF7822] backdrop-blur lg:bg-transparent lg:p-0 lg:rounded-none lg:border-none lg:backdrop-none">
                <div className="lg:mt-8 w-fit lg:mt-12 bg-[#FF7822] text-black px-2 py-1 rounded-full font-bold shadow-lg hover:scale-105 transition text-sm md:text-base lg:text-lg">
                  <button className="" onClick={toggleModal}>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                      <h2
                        className={`font-semibold text-xl font-bold uppercase px-4`}
                      >
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
                <h4 className="lg:mt-4 mt-2 text-xl">
                  ONLY 1000 SPOTS RESERVED
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative -bottom-12 lg:-bottom-10 lg:right-4  hidden lg:block">
          <Image
            src="/images/home/userGroup.png"
            alt="Racers"
            width={2000}
            height={400}
            className="w-[500px] lg:w-[1500px]"
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/50 flex items-center justify-center">
          <div className="bg-[#FF7A00]/10 backdrop-blur-sm text-white p-8 rounded-lg w-auto mx-24 relative border border-orange-400/20">
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

            <div className="flex lg:flex-row flex-col justify-between items-center lg:space-x-12">
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
          <div className="bg-[#FF7A00]/10 backdrop-blur-sm text-white p-4 rounded-lg mx-8 relative border border-orange-400/20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/home/congratsCar.png"
                alt="card"
                width={500}
                height={380}
                className="lg:block hidden"
              />
              <Image
                src="/images/home/congratsCar2.png"
                alt="card"
                width={500}
                height={380}
                className="block lg:hidden"
              />
              <h2 className="lg:block hidden relative lg:text-2xl text-lg font-bold text-[#FF5900] uppercase text-center lg:bottom-12 bottom-10">
                YOU ARE IN
              </h2>
              <h2 className="block lg:hidden relative lg:text-2xl text-2xl font-bold text-[#FF5900] uppercase text-center bottom-20">
                QUALIFYING IN <br /> PROGRESS
              </h2>
              <p className="lg:text-lg text-xs text-white text-center hidden lg:block">
                Our team will reach out soon to get you on board. Keep an <br />
                eye on your inbox for the next steps!
              </p>
              <p className="lg:text-lg text-[16px] text-white text-center block lg:hidden">
                Our team will reach out soon to get you on board. Keep an eye on
                your inbox for the next steps!
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
      <div className="relative lg:bottom-12 -bottom-80 z-100 items-center flex justify-center">
        <div
          className="rounded-full bg-white/20 backdrop-blur py-4 px-6 cursor-pointer"
          onClick={() => {
            const target = document.getElementById("target-section");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            width="24"
            height="16"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 2L10.3495 9.87887L1.69893 2"
              stroke="white"
              stroke-width="3.39117"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default UserBanner;
