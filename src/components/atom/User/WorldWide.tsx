"use client";
import React from "react";
import Image from "next/image";

const countries = [
  "🇺🇸 United States",
  "🇨🇦 Canada",
  "🇬🇧 United Kingdom",
  "🇮🇹 Italy",
  "🇦🇺 Australia",
  "🇩🇪 Germany",
  "🇳🇱 Netherlands",
  "🇮🇳 India",
  "🇦🇪 UAE",
  "🇧🇷 Brazil",
  "🇯🇵 Japan",
  "🇳🇿 New Zealand",
  "🇫🇷 France",
  "🇦🇹 Austria",
  "🇮🇪 Ireland",
  "🇪🇸 Spain",
  "🇧🇪 Belgium",
  "🇲🇽 Mexico",
  "🇫🇮 Finland",
];

const LaunchingWorldwide = () => {
  return (
    <section className="bg-[#141414] text-white pt-16 lg:py-0 lg:pt-20 px-4 md:px-12 text-center">
      {/* Globe Title */}
      <div className="lg:pt-12">
        <Image
          src="/images/home/worldIcon.png"
          alt="Globe"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />
        <h2 className="text-2xl pb-4 lg:pb-8 lg:text-4xl font-bold italic uppercase bg-gradient-to-r from-[#FF8000] to-[#FFE3C2] bg-clip-text text-transparent">
          Launching Worldwide
        </h2>
      </div>

      {/* Country Flags */}
      <div className="flex flex-wrap justify-center lg:gap-4 gap-2 max-w-5xl px-8 lg:mx-64 lg:px-24 lg:pb-8 pb-4">
        {countries.map((country, index) => (
          <div
            key={index}
            className="text-xs font-sans not-italic md:text-sm px-4 py-[6px] rounded-full border border-orange-500 bg-transparent"
          >
            {country}
          </div>
        ))}
      </div>

      <h2 className=" lg:pb-8 pb-4 text-lg lg:text-xl font-semibold uppercase bg-gradient-to-r from-[#FF8000] to-[#FFE3C2] bg-clip-text text-transparent">
        Can’t find your country? <br />
        we are coming to you soon!
      </h2>

      {/* Download Section (BG with buttons and phone image) */}
      <div
        className="lg:pb-8 pb-4 relative max-w-xl mx-auto h-24 md:h-28 rounded-xl flex items-center justify-between px-6 overflow-hidden"
        style={{
          backgroundImage: `url('/images/home/downloadPhone.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Buttons */}
        <div className="flex gap-4 z-10">
          <Image
            src="/images/home/gstrore.png"
            alt="Google Play"
            width={110}
            height={36}
          />
          <Image
            src="/images/home/astore.png"
            alt="App Store"
            width={110}
            height={36}
          />
        </div>

        <div className="hidden md:block absolute right-0 bottom-0 z-0">
          <Image
            src="/images/home/phoneMockup.png"
            alt="Phone Mockup"
            width={170}
            height={70}
            className="object-contain"
          />
        </div>
      </div>

      {/* Racer Full Image */}
      <center>
        <div className="flex justify-center mt-20 hidden lg:block">
        <Image
          src="/images/home/signup1.png"
          alt="Racer Lineup"
          width={800}
          height={450}
          className="object-contain"
        />
      </div>
        <div className="flex justify-center mt-20 block lg:hidden">
        <Image
          src="/images/home/signup4.png"
          alt="Racer Lineup"
          width={800}
          height={450}
          className="object-contain"
        />
      </div>
      </center>
    </section>
  );
};

export default LaunchingWorldwide;
