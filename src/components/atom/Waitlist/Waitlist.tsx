"use client";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Countdown2 from "../CountDown/Countdown2";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
};
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});
const WaitlistHome: FC<Props> = ({ className, style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section
      className={twMerge(
        "relative text-white bg-gradient-to-b from-[#130A04] to-[#FF7A00] py-8 lg:py-12 rounded-b-2xl pt-20 lg:pt-4",
        className
      )}
      style={{
        ...style,
        boxShadow: "0px 4px 4px 0px #FF5900",
      }}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Countdown Section */}
        <div className="flex flex-col items-center lg:items-center lg:ml-20 my-6 lg:my-20">
          <Countdown2 />
          <div className="flex flex-col justify-center items-center lg:items-center text-white text-center lg:text-left text-base lg:text-2xl mt-6 lg:mt-12">
            <div className="bg-[#FF6200] shadow-md shadow-[#FF7B00] py-1 lg:py-2 px-6 lg:px-4 text-sm lg:text-2xl mb-4 rounded-lg">
              ONLY{" "}
              <b>
                <i>1000</i>
              </b>{" "}
              SPOTS RESERVED
            </div>
            <h1 className="text-sm lg:text-base">FIRST COME, FIRST IN</h1>
            <div className="mt-8 lg:mt-12 bg-[#FF7A00] lg:bg-white text-black lg:text-[#FF7A00] px-2 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition text-sm md:text-base lg:text-lg">
              <button className="">
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <h2
                    className={`${orbitron.className} font-bold text-base lg:text-2xl font-bold uppercase px-2`}
                  >
                    Apply Now
                  </h2>
                  <div className="relative z-50 rounded-full px-3 py-1 lg:px-4 lg:py-2 lg:bg-[#FF7A00] bg-black ml-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden lg:block"
                    >
                      <path
                        d="M14.2843 2L21.3725 9.78244M21.3725 9.78244L14.2843 17.5649M21.3725 9.78244H1.81885"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="block lg:hidden"
                    >
                      <path
                        d="M14.2843 2L21.3725 9.78244M21.3725 9.78244L14.2843 17.5649M21.3725 9.78244H1.81885"
                        stroke="#FF7A00"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:mt-12 lg:mt-0 -bottom-12 lg:-bottom-24 lg:right-12 lg:mb-8">
          <Image
            src="/images/home/waitlistgroup.png"
            alt="Racers"
            width={2000}
            height={400}
            className="w-[500px] lg:w-[1500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WaitlistHome;
