"use client";
import React from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import UserSection3 from "./userSection3";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const features = [
  {
    icon: "/images/home/crew.png", 
    title: "FIND YOUR F1 CREW",
    subtitle: "F1 FEELS BETTER WITH FRIENDS",
  },
  {
    icon: "/images/home/gameCon.png",
    title: "PLAY QUICK, FUN GAMES",
    subtitle: "A HIT OF F1, ANYTIME.",
  },
  {
    icon: "/images/home/fire.png",
    title: "HANDPICKED DRAMA. DAILY.",
    subtitle: "NEVER MISS A MOMENT THAT MATTERS.",
  },
  {
    icon: "/images/home/chat.png",
    title: "YOUR RACE DAY HANGOUT",
    subtitle: "LIVE CHATS. BOLD TAKES. PURE CHAOS.",
  },
];

const UserSection2 = () => {
  return (
    <section className="target-section bg-black" >
     <div className="w-full text-white py-12 lg:py-20 px-6">
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 lg:py-20">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={item.icon}
              alt={item.title}
              width={120}
              height={120}
              className="mb-2 object-contain"
            />
            <h3
              className={`${orbitron.className} text-sm lg:text-md text-[#FF7A00] font-extrabold uppercase`}
            >
              {item.title}
            </h3>
            <p className="text-[10px] lg:text-xs mt-1 text-[#E0E0E0] tracking-wide">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default UserSection2;
