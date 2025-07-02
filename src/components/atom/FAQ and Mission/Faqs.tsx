"use client";
import "swiper/css";
import { Orbitron } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import OurMission from "./OurMission";

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

interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "What is this platform about?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: " How do I create an account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What kinds of businesses are a good fit for Formula Dream?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How can my brand be featured on the app?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "What’s the audience demographic like?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Is there an option to track campaign performance?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: " Is there a minimum budget to partner with Formula Dream?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How do we get started or schedule a call?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: " Can I preview how my content will appear before publishing?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How often is the app updated?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: " Does the app work offline?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function FaqsPage() {
  return (
    <div className="bg-gradient-to-b from-[#ff6600] via-[#301401] to-black text-center">
      <center className="px-6 lg:px-16 xl:px-28 md:px-16 md:py-8 lg:py-8 xl:py-8 py-none">
        <div
          className="relative z-0 bg-gradient-to-b from-[#ff6600]/50 to-[##973500]/50 text-center max-w-7xl w-80 h-auto md:w-auto lg:w-auto xl:w-auto rounded-2xl"
          style={{
            background: "radial-gradient(circle, #ff6a00, #973500)",
          }}
        >
          <h2
            className={`${orbitron.className} text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold text-white uppercase p-12`}
          >
            your ultimate guide to
            <br /> formula dream
          </h2>
          <h2
            className={`${orbitrondesc.className} text-xs xl:text-xl lg:text-xl md:text-xl text-white`}
          >
            GENERAL FAQs
          </h2>
          <div>
            <div className="space-y-4 p-4 md:p-16 lg:p-16 xl:p-16">
              {faqData.map((item, index) => (
                <Accordion key={index} item={item} index={index} />
              ))}
               <div className="border border-white opacity-25"></div>
            </div>
          </div>
        </div>
      </center>
      <OurMission/>
    </div>
  );
}
const Accordion = ({ item, index }: { item: FAQItem; index: number}) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
     <div className={`${isOpen ? "" : ""} text-white px-4`}>
      <div className="border border-white opacity-25"></div>
      <div className={` ${isOpen ? "rounded-xl" : ""}`}>
        <button
          className={`flex justify-between w-full text-left text-[9px] xl:text-lg lg:text-lg md:text-lg font-semibold uppercase pt-4`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.question}
          <motion.div
            className="ml-2 text-md xl:text-xl lg:text-xl md:text-xl uppercase"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "-" : "+"}
          </motion.div>
        </button>
        {isOpen && <div className="text-white lg:text-sm md:text-sm xl:text-sm text-[8px] text-left pt-2">{item.answer}</div>}
      </div>
    </div>
  );
};
