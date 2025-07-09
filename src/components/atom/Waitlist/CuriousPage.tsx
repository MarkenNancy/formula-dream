"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState } from "react";
import { FadeUp } from "@/components/animation";

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

export default function CuriousPage() {
  return (
    <div className="bg-transparent w-full pb-12 text-center px-4 lg:px-16">
      <center>
        <div className="bg-gradient-to-b from-[#FF7A00]/50 to-[#95430c]/50 text-center w-full max-w-4xl rounded-2xl p-6 md:p-8 lg:p-12">
          {/* Heading */}
          <h2
            className={`${orbitron.className} text-lg md:text-xl lg:text-2xl text-[#FF7A00] uppercase mb-4`}
          >
            <i>Curious about your position?</i>
          </h2>
          <h2
            className={`${orbitron.className} text-sm md:text-base lg:text-lg text-white uppercase mb-6`}
          >
            Enter your referral link below to check your current rank
          </h2>

          {/* Input and Button */}
          <div className="flex items-center bg-[#FF7A00]/20 border border-[#FF7A00] rounded-full shadow-lg w-full max-w-3xl mx-auto p-2">
            {/* Input Box */}
            <div className="flex items-center flex-1 lg:px-4">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25083 0.0105149C10.5325 -0.165315 13.6314 1.88003 14.7687 4.94328C15.7068 7.47057 15.265 10.2552 13.6144 12.3716L16.8595 15.6827C17.3903 16.5692 16.2996 17.4325 15.5437 16.7599L12.3961 13.6273C12.3124 13.6055 12.1031 13.8126 12.0157 13.8703C8.45649 16.2207 3.85901 15.5402 1.38678 12.0072C-2.0559 7.0866 1.2909 0.329868 7.25083 0.0105149ZM13.5667 7.63316C13.5667 4.35595 10.9096 1.69943 7.63171 1.69943C4.35377 1.69943 1.69667 4.35595 1.69667 7.63316C1.69667 10.9104 4.35377 13.5669 7.63171 13.5669C10.9096 13.5669 13.5667 10.9104 13.5667 7.63316Z"
                  fill="white"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your referral link"
                className={`flex-1 bg-transparent italic font-normal text-white placeholder-gray-400/50 focus:outline-none ml-2 text-[10px] lg:text-lg ${orbitron.className}`}
              />
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-[#FF5900] to-[#FF8800] whitespace-nowrap text-white text-[10px] lg:text-md font-bold rounded-full lg:px-4 lg:py-2 py-2 px-2 hover:scale-105 transition-transform uppercase">
              Check My Rank
            </button>
          </div>
        </div>

        <div className="flex items-center bg-[#FF7A00]/10 rounded-2xl shadow-lg w-full max-w-3xl mx-auto p-4 m-20">
          <div className="flex flex-row justify-between items-center w-full lg:px-24">
            <Image
              src="/images/home/warning.png"
              alt="Racers"
              width={20}
              height={20}
              className=""
            />
            <h2 className="text-[#FF7A00] uppercase ">
              <i> all activity is monitored</i>
            </h2>
            <Image
              src="/images/home/Chevdown.png"
              alt="Racers"
              width={20}
              height={20}
              className=""
            />
          </div>
        </div>
      </center>
    </div>
  );
}
