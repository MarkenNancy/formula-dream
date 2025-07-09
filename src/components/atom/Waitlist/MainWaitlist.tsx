"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import SkipLineBox from "./SkipLine";
import ShareCards from "./ShareSkip";
import { FadeUp } from "@/components/animation";
import Leaderboard from "./Leaderboard";
import FaqsPage from "../FAQ and Mission/Faqs";
import CuriousPage from "./CuriousPage";
import WaitlistHome from "./Waitlist";

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

export default function MainWaitlist() {
  return (
    <div className="relative text-white w-full rounded-b-3xl">
      <center className="bg-gradient-to-b from-[#130A04] via-[#FF6C00] to-[#130A04]">
        <WaitlistHome/>
        <SkipLineBox />
        <FadeUp>
          <ShareCards />
        </FadeUp>
        <FadeUp>
          <Leaderboard />
        </FadeUp>
        <FadeUp>
          <CuriousPage/>
        </FadeUp>
      </center>
      <FadeUp className="bg-gradient-to-b from-[#130A04] to-[#FF6C00]">
        <FaqsPage />
      </FadeUp>
    </div>
  );
}
