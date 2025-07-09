// "use client";
import React from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const JoinEarly = () => {
  return (
    <section className="w-full text-white bg-black">
      <div className="bg-gradient-to-b from-[#191919] to-[#FF7A00] border border-[#FF7A00] rounded-3xl py-12 lg:py-20 px-6">
        <div className="space-y-2">
          <span
            className={`${orbitron.className} lg:text-5xl font-extrabold text-4xl uppercase bg-gradient-to-b from-[#FFFFFF] to-[#FF9737] bg-clip-text text-transparent`}
          >
            <i>JOIN EARLY</i>
          </span>
          <p className="text-base lg:text-2xl uppercase lg:mt-4 font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FF9737] bg-clip-text text-transparent">
            Be the force behind F1’s next revolution.
          </p>
        </div>

        <p className="text-xs lg:text-lg uppercase mt-4 lg:mt-24 font-medium max-w-xl mx-auto text-white/90">
          We’re bringing together visionary fans to build the most electric F1
          community the sport has ever seen.
        </p>

        {/* Icons */}
        <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-20 items-center lg:my-20 my-6">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/home/join1.png"
              alt="Your Ideas"
              width={60}
              height={60}
            />
            <p className="font-semibold text-2xl bg-gradient-to-r font-bold from-[#FF8000] to-[#FFE3C2] bg-clip-text text-transparent uppercase tracking-wider">
              Your Ideas
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/home/join2.png"
              alt="Your Energy"
              width={50}
              height={50}
            />
            <p className="font-semibold text-2xl bg-gradient-to-b font-bold from-[#FFFFFF] to-[#FF9737] bg-clip-text text-transparent uppercase tracking-wider">
              Your Energy
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/home/join3.png"
              alt="Your Voice"
              width={60}
              height={60}
            />
            <p className="font-semibold text-2xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#FF9737] bg-clip-text text-transparent uppercase tracking-wider">
              Your Voice
            </p>
          </div>
        </div>

        <p className="text-sm uppercase mt-12 lg:text-xl text-white/80 font-medium  mt-2 block lg:hidden">
          Together, we’re creating something the world’s never seen – and it
          starts with <span className="font-bold text-white">you</span>
        </p>
        <p className="text-sm uppercase mt-12 lg:text-xl text-white/80 font-medium hidden lg:block mt-2 mb-12">
          Together, we’re creating something the world’s never <br />
          seen – and it starts with{" "}
          <span className="font-bold text-white">you</span>
        </p>

        <div className="pt-2 hidden lg:block">
          <div className="lg:mt-8 w-fit lg:mt-12 bg-[#FF7822] text-black px-2 py-1 rounded-full font-bold shadow-lg hover:scale-105 transition text-sm md:text-base lg:text-lg">
            <button className="">
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
        </div>
      </div>
    </section>
  );
};

export default JoinEarly;
