"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FadeUp } from "@/components/animation";

const ShareCards = () => {
  const cards = [
    {
      text: "EVERY SHARE HELPS YOU JUMP 3 SPOTS ON THE WAITLIST",
      icon: "/images/home/share1.png",
    },
    {
      text: "5 SHARES UNLOCK GUARANTEED PHASE 1 ACCESS",
      icon: "/images/home/share2.png",
    },
    {
      text: "5 SHARES UNLOCK GUARANTEED PHASE 1 ACCESS",
      icon: "/images/home/share3.png",
    },
  ];

  return (
    <section className="w-full items-center">
       <div className="max-w-xl mx-auto px-4 grid grid-cols-1 gap-12 px-8 lg:px-16">
        {cards.map((card, index) => (
          <FadeUp>
            <div
            key={index}
            className={twMerge(
              "relative bg-[#FF6200] text-white rounded-2xl lg:py-4 py-2 lg:mx-none mx-4 px-4 flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105"
            )}
          >
            <div className="hidden lg:block absolute lg:-top-10 -top-8 flex items-center justify-center">
              <Image
                src={card.icon}
                alt={card.text}
                width={40}
                height={40}
                className="lg:w-20 lg:h-20 w-12 h-12"
              />
            </div>

             <div className="block lg:hidden absolute -left-6 bottom-8 flex items-center justify-center">
              <Image
                src={card.icon}
                alt={card.text}
                width={40}
                height={40}
                className="lg:w-20 lg:h-20 w-12 h-12"
              />
            </div>
            <p className="text-center text-sm font-bold lg:my-8 my-6">{card.text}</p>
          </div>
          </FadeUp>
        ))}
      </div>
      <div className="hidden lg:block max-w-5xl mx-auto mt-20 px-4">
        <div className="border border-[#FF7A00] border-2 rounded-lg py-6 px-8 bg-transparent text-white">
          <h3 className="text-center text-md font-bold uppercase mb-2">
            <i>VALID SHARE CRITERIA</i>
          </h3>
          <p className="text-center lg:text-xs text-[10px] font-medium px-36">
            ONLY SHARES THAT LEAD TO SIGN-UPS COUNT! A SHARE IS CONSIDERED VALID
            WHEN A FAN CLICKS YOUR UNIQUE LINK, LANDS ON THIS PAGE, AND
            SUCCESSFULLY SIGNS UP.
          </p>
        </div>
      </div>
      
     <div className="block lg:hidden w-full pt-8">
        <div className="py-2 bg-black/30 text-white">
          <h3 className="text-center text-sm font-bold uppercase mb-1">
            <i>VALID SHARE CRITERIA</i>
          </h3>
          <p className="text-center text-[9px] font-medium">
            ONLY SHARES THAT LEAD TO SIGN-UPS COUNT! A SHARE IS CONSIDERED VALID
            WHEN A FAN CLICKS YOUR UNIQUE LINK, LANDS ON THIS PAGE, AND
            SUCCESSFULLY SIGNS UP.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShareCards;
