"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

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

export default function SkipLineBox() {
  return (
    <div className="text-center py-8 lg:pb-20 px-4 lg:px-16">
      <center className="">
        <div
          className=" pt-4 text-center max-w-7xl w-80 lg:h-auto md:h-auto xl:h-auto h-64 md:w-auto lg:w-auto xl:w-auto rounded-2xl bg-center bg-contain bg-no-repeat bg-[url(/images/home/skipCar2.png)] lg:bg-[url(/images/home/skipCar1.png)] md:bg-[url(/images/home/skipCar1.png)] xl:bg-[url(/images/home/skipCar1.png)]">
          <h2
            className={`${orbitrondesc.className} relative -bottom-12 lg:-bottom-none text-[10px] tracking-wide xl:text-2xl lg:text-xl font-semibold text-[#FF9433] uppercase px-4 pb-12 lg:pb-64 xl:pb-64 md:pb-64`}
          >
            want to skip the line?
          </h2>
        </div>
      </center>
    </div>
  );
}
