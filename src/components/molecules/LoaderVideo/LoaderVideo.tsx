"use client";
import React, { useEffect, useState } from "react";
import { Typo } from "@/components";
import { useLenis } from "lenis/react";
import { getCookiesVideo, setCookiesVideo } from "@/cookies";

const LoaderVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const handleClose = () => {
    setIsOpen(false);
    lenis?.start();
    setCookiesVideo();
  };
  const getVideoIsOpen = async () => {
    const video = await getCookiesVideo();
    if (video !== "true") {
      setTimeout(() => {
        lenis?.stop();
        setIsOpen(true);
      }, 1000);
    }
  };
  useEffect(() => {
    getVideoIsOpen();
  }, []);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="no-ripple fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-white opacity-90 backdrop-blur-2xl"
        // onClick={handleClose}
      ></div>
      <div className="max-w-[145vmin] relative z-10 m-auto w-[90%] aspect-[15.1/8] rounded-md">
        <div className="py-2 text-center">
          <Typo
            tag="h2"
            size="h3"
            isTitle
            weight="bold"
            className="text-balance"
          >
            Not Just Another Pitch. A Perspective Shift.
          </Typo>
          <Typo tag="p" className="text-pretty">
            Because sometimes, all you need is a better vantage point.
          </Typo>
        </div>
        <div className="relative">
          <iframe
            title="Not Just Another Pitch. A Perspective Shift."
            className="aspect-[15.1/8] w-full rounded-md m-0 bg-black"
            // src="https://player.vimeo.com/video/1076907270?autoplay=1&loop=1&autopause=0&background=1"
            //   src="https://player.vimeo.com/video/1076907270?autoplay=1"
            src="https://player.vimeo.com/video/1076907270?loop=1"
            width="100%"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
          ></iframe>
          <button
            className="absolute bottom-12 right-4 text-white px-4 py-1 font-bold bg-black backdrop-blur-lg rounded-full bg-opacity-5 hover:bg-opacity-100 transition-all duration-300 ease-in-out text-md"
            onClick={handleClose}
          >
            Skip
          </button>
          {/* <button
            className="absolute top-0 right-0 text-white outline-none focus:outline-none p-4"
            onClick={handleClose}
          >
            <Icons name="cross" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LoaderVideo;
