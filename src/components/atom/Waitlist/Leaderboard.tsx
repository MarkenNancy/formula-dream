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

const topThree = [
  { name: "MARIA", shares: "24 SHARES", position: 2, helmet: "🏎️" },
  { name: "ALEX S", shares: "25 SHARES", position: 1, helmet: "🏎️" },
  { name: "ANNE V", shares: "12 SHARES", position: 3, helmet: "🏎️" },
];

const otherPlayers = [
  { name: "SARAH L", shares: "10 SHARES", position: 4 },
  { name: "DAVID P", shares: "12 SHARES", position: 5 },
  { name: "EMMA R", shares: "15 SHARES", position: 6 },
  { name: "JAMES K", shares: "6 SHARES", position: 7 },
  { name: "LIAM N", shares: "4 SHARES", position: 8 },
  { name: "OLIVIA M", shares: "20 SHARES", position: 9 },
  { name: "SOPHIA T", shares: "18 SHARES", position: 10 },
];

export default function Leaderboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    <div className="bg-transparent lg:pt-20 pt-10 w-full lg:pb-24 pb-12 text-center px-4 lg:px-16">
      <center>
        <h2
          className={`${orbitron.className} block lg:hidden text-md xl:text-2xl lg:text-2xl md:text-2xl text-white uppercase mb-6 pt-6`}
        >
          LIVE LEADERBOARDS
        </h2>
        <div
          className="bg-gradient-to-b from-[#FF7A00]/50 to-[#FF5900]/50 text-center max-w-7xl w-80 h-auto md:w-auto lg:w-auto xl:w-auto rounded-2xl p-4 lg:p-8"
          // style={{
          //   background: "radial-gradient(circle, #ff6600,rgb(107, 43, 0))",
          // }}
        >
          <h2
            className={`${orbitron.className} hidden lg:block text-md xl:text-2xl lg:text-2xl md:text-2xl text-white uppercase mb-6 pt-6`}
          >
            LIVE LEADERBOARDS
          </h2>
          <h2
            className={`${orbitron.className} text-md xl:text-lg lg:text-2xl md:text-2xl text-white uppercase mb-6 pt-6`}
          >
            top 10 most shares
          </h2>
          <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 mb-8">
            {/* 2nd Place */}
            <div className="bg-[radial-gradient(circle,_#FFFFFF,_#707070)] rounded-xl p-2 sm:p-3 md:p-4 lg:w-48 lg:h-48 w-36 h-24 flex flex-col items-center justify-center relative">
              <div className="absolute top-0 lg:top-3 right-3 lg:right-3 text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                <i>2</i>
              </div>
              {/* <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mb-1 sm:mb-2 flex items-center justify-center text-lg sm:text-xl md:text-2xl border-2 sm:border-3 md:border-4 border-orange-300"> */}
                <Image
                  src="/images/home/helmet2.png"
                  alt="leader"
                  width={40}
                  height={40}
                  className="lg:w-24 lg:h-24 w-12 h-12"
                />
              {/* </div> */}
              <div className="text-white font-bold text-xs sm:text-sm">
                {topThree[0].name}
              </div>
              <div className="text-orange-200 text-xs">
                {topThree[0].shares}
              </div>
            </div>

            {/* 1st Place */}
            <div className="bg-[radial-gradient(circle,_#FF7A00,_#994900)] rounded-xl p-2 sm:p-3 md:p-4 lg:w-[230px] lg:h-[257px] w-36 h-36 flex flex-col items-center justify-center relative">
              <div className="absolute -top-2 lg:top-4 left-1/2 transform -translate-x-1/2 text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-base sm:text-lg md:text-xl">
                <i>1</i>
              </div>
              {/* <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-1 sm:mb-2 flex items-center justify-center text-xl sm:text-2xl md:text-3xl border-2 sm:border-3 md:border-4 border-yellow-300"> */}
                <Image
                  src="/images/home/helmet1.png"
                  alt="leader"
                  width={40}
                  height={40}
                  className="lg:w-36 lg:h-36 w-12 h-12"
                />
              {/* </div> */}
              <div className="text-white font-bold text-sm sm:text-base">
                {topThree[1].name}
              </div>
              <div className="text-yellow-200 text-xs sm:text-sm">
                {topThree[1].shares}
              </div>
            </div>

            {/* 3rd Place */}
            <div className="bg-[radial-gradient(circle,_#FF7A004D,_#8B4200)] rounded-xl p-2 sm:p-3 md:p-4 lg:w-48 lg:h-48 w-36 h-24 flex flex-col items-center justify-center relative">
              <div className="absolute top-0 lg:top-3 right-3 lg:right-3 sm:right-3 text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-sm sm:text-base md:text-lg">
                <i>3</i>
              </div>
              {/* <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-1 sm:mb-2 flex items-center justify-center text-lg sm:text-xl md:text-2xl border-2 sm:border-3 md:border-4 border-blue-300"> */}
                <Image
                  src="/images/home/helmet3.png"
                  alt="leader"
                  width={40}
                  height={40}
                  className="lg:w-24 lg:h-24 w-12 h-12"
                />
              {/* </div> */}
              <div className="text-white font-bold text-xs sm:text-sm">
                {topThree[2].name}
              </div>
              <div className="text-orange-200 text-xs">
                {topThree[2].shares}
              </div>
            </div>
          </div>

          {/* Remaining Positions */}
          <div className="space-y-2 lg:mx-48 pb-10">
            {otherPlayers.map((player) => (
             <FadeUp>
               <div
                key={player.position}
                className="bg-gradient-to-b from-[#FF7A00] to-[#FF5900] bg-opacity-50 rounded-lg lg:p-4 p-2 flex items-center justify-between hover:bg-opacity-90 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    {player.position}
                  </div>
                  {/* <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-sm"> */}
                    <Image
                      src="/images/home/helmet.png"
                      alt="leader"
                      width={30}
                      height={30}
                      className="w-4 h-4"
                    />
                  {/* </div> */}
                  <div className="text-white font-semibold lg:text-sm text-[10px] uppercase">
                    {player.name}
                  </div>
                </div>
                <div className="text-white font-semibold lg:text-sm text-[10px]">
                  {player.shares}
                </div>
              </div>
             </FadeUp>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
}
