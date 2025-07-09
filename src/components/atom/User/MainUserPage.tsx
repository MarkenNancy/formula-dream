"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FadeUp } from "@/components/animation";
import FaqsPage from "../FAQ and Mission/Faqs";
import UserBanner from "./userBanner";
import UserSection2 from "./userSection2";
import UserSection3 from "./userSection3";
import MagicSection from "./MagicSection";
import LaunchingWorldwide from "./WorldWide";
import JoinEarly from "./joinSection";

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

export default function MainUserPage() {
  return (
    <div className="relative text-white w-full rounded-b-3xl">
      <center className="bg-gradient-to-b from-[#130A04] via-[#FF6C00] to-[#130A04]">
        <UserBanner/>
       <FadeUp as={"section"} className="relative">
        <UserSection2 />
        <UserSection3/>
        <MagicSection/>
        <LaunchingWorldwide/>
        <JoinEarly/>
      </FadeUp>
      </center>
      <FadeUp className="bg-gradient-to-b from-[#130A04] to-[#FF6C00]">
        <FaqsPage />
      </FadeUp>
    </div>
  );
}
