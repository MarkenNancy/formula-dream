"use client";
import Image from "next/image";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState } from "react";

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

const cards = [
  {
    image: "/images/home/businessCenter.png",
  },
  {
    image: "/images/home/businessCenter.png",
  },
  {
    image: "/images/home/businessCenter.png",
  },
];

export default function InsideLook() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndex = 0;
  const visibleCards = [
    cards[(currentIndex - 1 + cards.length) % cards.length],
    cards[currentIndex],
    cards[(currentIndex + 1) % cards.length],
  ];

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
    <div className="bg-[#ff6600] pt-10 pb-24 text-center px-6 lg:px-16 xl:px-28 md:px-16 md:py-8 lg:py-8 xl:py-8 py-none">
      <center>
        <div
          className="bg-gradient-to-b from-[#ff6600] to-[#301401] text-center max-w-7xl w-80 h-auto md:w-auto lg:w-auto xl:w-auto rounded-2xl"
          style={{
            background: "radial-gradient(circle, #ff6600, #301401)",
          }}
        >
          <h2
            className={`${orbitron.className} hidden md:block lg:block xl:block text-md xl:text-2xl lg:text-2xl md:text-2xl text-white uppercase mb-6 pt-6`}
          >
            An Inside Look at Formula Dream
          </h2>
          <h2
            className={`${orbitrondesc.className} block md:hidden lg:hidden xl:hidden text-md xl:text-2xl lg:text-2xl md:text-2xl text-white uppercase mb-6 pt-6`}
          >
            An Inside Look at
            <br /> Formula Dream
          </h2>
          <div className="flex flex-row items-end justify-center">
            {/* image 1 */}
            <Image
              src="/images/home/Charles.png"
              alt="Partners Banner"
              width={300}
              height={200}
              className="hidden md:block lg:block xl:block relative mx-auto my-4 w-[600px] -mb-2 pb-2 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4"
            />
            {/* Slider */}
            <div className="flex flex-col my-16 items-center">
              <div className="my-32 w-full max-w-3xl flex items-center justify-center">
                {visibleCards.map((card, index) => {
                  const position = index - 1;
                  const isCenter = position === 0;

                  return (
                    <>
                      <div
                        key={card.image}
                        className={`hidden md:block lg:block xl:block absolute transition-transform duration-700 ease-in-out rounded-lg flex items-center justify-center text-center ${
                          isCenter
                            ? "z-10 scale-100"
                            : "z-0 scale-20 opacity-50"
                        }`}
                        style={{
                          // backgroundImage: `url(${card.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          transform: `translateX(${position * 140}px) scale(${
                            isCenter ? 1 : 0.9
                          })`,
                          zIndex: isCenter ? 10 : 0,
                        }}
                      >
                        <Image
                          src={card.image}
                          alt="logo"
                          width={171}
                          height={367}
                          className="mt-20 mb-24 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4"
                        />
                      </div>

                      {/*  responsivee */}
                      <div
                        key={card.image}
                        className={`block md:hidden lg:hidden xl:hidden absolute transition-transform duration-700 ease-in-out rounded-lg flex items-center justify-center text-center ${
                          isCenter
                            ? "z-10 scale-100"
                            : "z-0 scale-20 opacity-60"
                        }`}
                        style={{
                          // backgroundImage: `url(${card.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          transform: `translateX(${position * 80}px) scale(${
                            isCenter ? 0.8 : 0.7
                          })`,
                          zIndex: isCenter ? 10 : 0,
                        }}
                      >
                        <Image
                          src={card.image}
                          alt="logo"
                          width={171}
                          height={367}
                          className="mt-20 mb-24 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4"
                        />
                      </div>
                    </>
                  );
                })}
              </div>
              <h2
                className={`${orbitron.className} text-md xl:text-2xl lg:text-2xl md:text-2xl text-white uppercase pt-16 my-2 whitespace-nowrap`}
              >
                Fuel Your Brand’s Growth
              </h2>
              <button
                className="z-50 rounded-full p-1 bg-gradient-to-r from-[#FF5900] to-[#FF8800] cursor-pointer hover:scale-105 transition"
                onClick={toggleModal}
              >
                <div className="flex flex-row items-center justify-end">
                  <h2
                    className={`${orbitron.className} text-sm md:text-sm text-black uppercase px-3`}
                  >
                    Sign up today
                  </h2>
                  <div className="rounded-full px-3 py-1 bg-black text-orange-800">
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
                  </div>
                </div>
              </button>
            </div>
            {/* image 2 */}
            <Image
              src="/images/home/Max.png"
              alt="Partners Banner"
              width={300}
              height={200}
              className="hidden md:block lg:block xl:block relative mx-auto my-4 w-[600px] -mb-2 pb-2 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4"
            />
          </div>
        </div>
      </center>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] backdrop-blur-md bg-black/50 flex items-center justify-center">
          <div className="bg-[#FF7A00]/10 backdrop-blur-sm text-white p-8 rounded-lg w-full mx-24 relative border border-orange-400/20">
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

            <div className="flex lg:flex-row flex-col justify-between items-center">
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
          <div className="bg-[#FF7A00]/10 backdrop-blur-sm text-white p-8 rounded-lg w-full lg:mx-96 mx-8 relative border border-orange-400/20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/images/home/congratsCar.png"
                alt="card"
                width={400}
                height={380}
                className=""
              />
              <h2 className="relative lg:text-2xl text-lg font-bold text-[#FF5900] uppercase text-center lg:bottom-12 bottom-10">
                YOU ARE IN
              </h2>
              <p className="lg:text-lg text-xs text-white text-center lg:mt-4">
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
    </div>
  );
}
