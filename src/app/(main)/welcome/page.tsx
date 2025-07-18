"use client";
import React from "react";
import { Container } from "@/components";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import TextFadeUp from "@/components/animation/TextFadeUp";
import { FadeUp } from "@/components/animation";

// export type Props = {
//   style?: React.CSSProperties;
//   className?: string;
// };

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});
const orbitrondesc = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const WelcomePage = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //     setShowForm(window.scrollY > 20);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="lg:bg-gradient-to-b lg:from-[#151515] lg:via-[#603114] lg:to-[#FF6F13] overflow-hidden h-screen bg-[radial-gradient(circle,_#FF7A00,_#151515_80%,_black)] pt-12">
      <Container className="flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <svg
          width="150"
          height="40"
          viewBox="0 0 87 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.9019 9.24534V4.38112C38.9019 3.80254 39.2433 3.4734 39.8434 3.4734H44.1702V4.87308H41.2126C40.9575 4.87308 40.8353 4.98741 40.8353 5.23686V5.66646H43.4443V7.0696H40.8353V9.24534H38.9019Z"
            fill="white"
          />
          <path
            d="M50.923 6.35836C50.923 8.83205 50.1108 9.31016 47.6312 9.31016C45.1515 9.31016 44.3394 8.83205 44.3394 6.35836C44.3394 3.88468 45.1515 3.40657 47.6312 3.40657C50.1108 3.40657 50.923 3.88468 50.923 6.35836ZM47.6312 7.87584C48.659 7.87584 48.9393 7.43237 48.9393 6.35836C48.9393 5.28435 48.6554 4.84089 47.6312 4.84089C46.607 4.84089 46.3231 5.28435 46.3231 6.35836C46.3231 7.43237 46.607 7.87584 47.6312 7.87584Z"
            fill="white"
          />
          <path
            d="M51.6055 4.38112C51.6055 3.80254 51.9469 3.4734 52.547 3.4734H55.9251C57.2943 3.4734 57.6357 4.19749 57.6357 5.43434C57.6357 6.2589 57.4991 7.48881 56.3024 7.48881H56.0473V7.51999L57.7579 9.24187H55.4328L54.2792 7.74172C54.0815 7.48535 53.8695 7.28787 53.8695 6.95874V6.83401C53.8695 6.33858 54.2217 6.18268 54.732 6.18268H55.0231C55.537 6.18268 55.7059 6.02677 55.7059 5.53134C55.7059 5.03591 55.5334 4.90426 55.0231 4.90426H53.9198C53.6647 4.90426 53.5425 5.01859 53.5425 5.26804V9.24187H51.6091V4.37765L51.6055 4.38112Z"
            fill="white"
          />
          <path
            d="M63.6661 8.53772C63.5295 8.95693 63.357 9.31377 62.5125 9.31377C61.668 9.31377 61.4955 8.96039 61.3589 8.53772L60.4353 5.75222C60.3994 5.64482 60.367 5.54435 60.3239 5.54435C60.2484 5.54435 60.2484 5.676 60.2484 5.7349L60.3095 9.24795H58.3582V4.4253C58.3582 3.41019 59.5225 3.41019 59.828 3.41019C60.3419 3.41019 61.0606 3.47601 61.3661 4.3664L62.3328 7.16922C62.3508 7.22812 62.437 7.43252 62.5125 7.43252C62.5879 7.43252 62.6742 7.22465 62.6922 7.16922L63.6589 4.3664C63.9679 3.48294 64.6939 3.41019 65.197 3.41019C66.5554 3.41019 66.6668 4.06152 66.6668 4.4253V9.24795H64.7154L64.7837 5.7349C64.7837 5.66214 64.7765 5.54435 64.7082 5.54435C64.6723 5.54435 64.6399 5.59285 64.5896 5.75222L63.6661 8.53772Z"
            fill="white"
          />
          <path
            d="M71.5219 6.7889V3.4768H73.4554V6.93788C73.4554 8.7533 72.3701 9.31109 70.487 9.31109C68.6039 9.31109 67.5186 8.74984 67.5186 6.93788V3.4768H69.452V6.79237C69.452 7.53378 69.8041 7.81441 70.487 7.81441C71.1698 7.81441 71.5219 7.53378 71.5219 6.79237V6.7889Z"
            fill="white"
          />
          <path
            d="M75.2521 9.24527C74.6519 9.24527 74.3105 8.91614 74.3105 8.33756V3.4768H76.244V7.45063C76.244 7.69662 76.3626 7.81441 76.6213 7.81441H79.5789V9.24873H75.2521V9.24527Z"
            fill="white"
          />
          <path
            d="M82.048 4.11003C82.2348 3.68042 82.4936 3.41019 83.4172 3.41019C83.9814 3.41019 84.5132 3.46908 84.7864 4.11003L87.0001 9.24795H84.966L84.4953 8.05961H82.339L81.8683 9.24795H79.8342L82.048 4.11003ZM82.8026 6.73962H84.0353L83.4962 5.28104C83.4782 5.22214 83.4531 5.15632 83.4208 5.15632C83.3884 5.15632 83.3597 5.22214 83.3453 5.28104L82.8062 6.73962H82.8026Z"
            fill="white"
          />
          <path
            d="M39.8397 16.8248C39.2396 16.8248 38.8982 16.4956 38.8982 15.917V11.9605C38.8982 11.382 39.2396 11.0528 39.8397 11.0528H42.3374C44.3031 11.0528 44.8673 11.9605 44.8673 13.9388C44.8673 15.917 44.3031 16.8248 42.3374 16.8248H39.8397ZM40.8316 14.9782C40.8316 15.2761 40.9502 15.3904 41.2593 15.3904H41.3455C42.5422 15.3904 42.8836 15.1756 42.8836 13.9388C42.8836 12.7019 42.4739 12.4871 41.3455 12.4871H41.2593C40.9502 12.4871 40.8316 12.6015 40.8316 12.8994V14.9782Z"
            fill="white"
          />
          <path
            d="M45.5537 11.9605C45.5537 11.382 45.8951 11.0528 46.4953 11.0528H49.8733C51.2425 11.0528 51.5839 11.7769 51.5839 13.0138C51.5839 13.8383 51.4474 15.0682 50.2507 15.0682H49.9955V15.0994L51.7061 16.8213H49.381L48.2274 15.3211C48.0298 15.0648 47.8177 14.8673 47.8177 14.5382V14.4134C47.8177 13.918 48.1699 13.7621 48.6802 13.7621H48.9713C49.4852 13.7621 49.6541 13.6062 49.6541 13.1108C49.6541 12.6153 49.4816 12.4837 48.9713 12.4837H47.8681C47.6129 12.4837 47.4907 12.598 47.4907 12.8475V16.8213H45.5573V11.9571L45.5537 11.9605Z"
            fill="white"
          />
          <path
            d="M57.5674 12.456H54.6098C54.3547 12.456 54.2325 12.5703 54.2325 12.8198V13.2494H57.4992V14.5174H54.2325V15.0613C54.2325 15.3073 54.3511 15.4251 54.6098 15.4251H57.6034V16.8282H53.2406C52.6405 16.8282 52.2991 16.4991 52.2991 15.9205V11.964C52.2991 11.3854 52.6405 11.0563 53.2406 11.0563H57.5674V12.456Z"
            fill="white"
          />
          <path
            d="M59.9862 11.6903C60.1731 11.2607 60.4318 10.9905 61.3554 10.9905C61.9196 10.9905 62.4515 11.0494 62.7246 11.6903L64.9383 16.8282H62.9043L62.4335 15.6399H60.2773L59.8065 16.8282H57.7725L59.9862 11.6903ZM60.7409 14.3199H61.9735L61.4344 12.8613C61.4165 12.8024 61.3913 12.7366 61.359 12.7366C61.3266 12.7366 61.2979 12.8024 61.2835 12.8613L60.7445 14.3199H60.7409Z"
            fill="white"
          />
          <path
            d="M70.5049 16.118C70.3684 16.5372 70.1959 16.8941 69.3513 16.8941C68.5068 16.8941 68.3343 16.5407 68.1978 16.118L67.2742 13.3325C67.2382 13.2251 67.2059 13.1246 67.1628 13.1246C67.0873 13.1246 67.0873 13.2563 67.0873 13.3152L67.1484 16.8282H65.197V12.0056C65.197 10.9905 66.3614 10.9905 66.6668 10.9905C67.1807 10.9905 67.8995 11.0563 68.205 11.9467L69.1717 14.7495C69.1896 14.8084 69.2759 15.0128 69.3513 15.0128C69.4268 15.0128 69.5131 14.8049 69.531 14.7495L70.4977 11.9467C70.8068 11.0632 71.5327 10.9905 72.0358 10.9905C73.3943 10.9905 73.5057 11.6418 73.5057 12.0056V16.8282H71.5543L71.6226 13.3152C71.6226 13.2424 71.6154 13.1246 71.5471 13.1246C71.5112 13.1246 71.4788 13.1731 71.4285 13.3325L70.5049 16.118Z"
            fill="white"
          />
          <path
            d="M23.7976 12.553C24.5307 12.553 24.9619 11.7631 24.5486 11.181L23.9629 10.3565C22.9998 9.17505 22.7805 8.72813 21.9216 8.29506C20.5596 7.60561 19.345 7.69569 18.9532 7.69569H3.95312L4.29093 8.29159C5.7931 10.9212 6.46872 12.553 11.773 12.553H23.7976Z"
            fill="white"
          />
          <path
            d="M34.0719 14.1571C29.5403 -0.189583 21.4688 0.780489 21.4688 0.780489H0V0.787418C1.7106 3.77732 2.14185 5.71746 8.50989 5.63085H19.6504C21.1346 5.63085 22.5972 5.48534 24.5127 7.30769C25.5908 8.3332 27.747 11.6418 28.0704 12.9895C28.2717 13.8245 27.9411 14.6595 27.0498 14.6595L7.90615 14.6248L7.9349 14.6768C9.69582 20.0745 14.9031 19.5202 16.4412 19.5202H31.5995C32.6093 19.5202 33.4718 18.8204 33.6443 17.8607C34.1438 15.0717 34.0719 14.164 34.0719 14.164V14.1571Z"
            fill="white"
          />
        </svg>

        {/* Headings */}
        <h1
          className={`${orbitron.className} text-bold uppercase text-3xl lg:text-5xl bg-gradient-to-b from-white to-[#FF7822] bg-clip-text text-transparent px-4 mt-12 lg:mt-12`}
        >
          <i>
            {" "}
            <TextFadeUp
              text="WELCOME TO THE INNER CIRCLE"
              className="break-words"
              delay={0}
              duration={0.3}
              stagger={0.1}
            />
          </i>
        </h1>
        <h2
          className={`${orbitrondesc.className} uppercase text-sm lg:text-xl text-white mt-12`}
        >
          <TextFadeUp
            text="WATCH YOUR INBOX FOR NEXT STEPS"
            className="break-words"
            delay={0}
            duration={0.3}
            stagger={0.1}
          />
        </h2>

        {/* Responsive Image */}
        <div className="mt-10 w-full">
          <div className="hidden lg:block">
            <FadeUp>
              <Image
                src="/images/home/welcomeCar1.png"
                alt="Racers"
                width={600}
                height={400}
                className="w-full max-w-3xl mx-auto h-auto"
              />
            </FadeUp>
          </div>
          <div className="block lg:hidden">
            <FadeUp>
              <Image
                src="/images/home/welcomeCar.png"
                alt="Racers"
                width={1000}
                height={400}
                className="w-full h-auto"
              />
            </FadeUp>
          </div>
        </div>

        {/* Info Panel */}
        <div className="bg-black/40 border border-orange-600 rounded-t-3xl w-screen px-6 lg:px-12 pt-12">
          <div className="flex flex-col items-center text-center">
            <h2
              className={`${orbitrondesc.className} text-bold uppercase text-sm lg:text-xl text-white`}
            >
              {/* EVERYTHING FROM EARLY UPDATES TO LAUNCH NEWS WILL COME FROM */}
              <TextFadeUp
                text="EVERYTHING FROM EARLY UPDATES TO LAUNCH NEWS WILL COME
                      FROM "
                className="break-words"
                delay={0}
                duration={0.3}
                stagger={0.1}
              />
            </h2>
            <h3
              className={`${orbitrondesc.className} uppercase text-sm lg:text-xl text-[#FF8B41] mt-4`}
            >
              <i>EARLYACCESS@FORMULADREAM.APP</i>
            </h3>
            <h1
              className={`${orbitron.className} font-bold uppercase text-2xl lg:text-5xl bg-gradient-to-b from-white to-[#FF7822] bg-clip-text text-transparent pt-12 pb-36`}
            >
              {/* Let’s make F1 history! */}
              <TextFadeUp
                text="Let’s make F1 history!"
                className="break-words"
                delay={0}
                duration={0.3}
                stagger={0.1}
              />
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
