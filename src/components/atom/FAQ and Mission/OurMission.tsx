"use client";
import "swiper/css";
import { Orbitron } from "next/font/google";

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

export default function OurMission() {
  return (
    <div className="text-center py-20">
      <center className="lg:px-16">
        <div
          className="text-center max-w-7xl w-80 lg:h-auto md:h-auto xl:h-auto h-64 md:w-auto lg:w-auto xl:w-auto rounded-2xl bg-center bg-contain bg-no-repeat bg-[url(/images/home/missionCar2.png)] lg:bg-[url(/images/home/missionCar.png)] md:bg-[url(/images/home/missionCar.png)] xl:bg-[url(/images/home/missionCar.png)]"
          // style={{
          //   backgroundImage: `url('/images/home/missionCar.png')`,
          //   backgroundSize: "contain",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <h2
            className={`${orbitron.className} text-md xl:text-2xl lg:text-2xl md:text-2xl font-bold text-white uppercase px-12 pt-10 pb-4 md:pb-8 lg:pb-8 xl:pb-8`}
          >
            our mission
          </h2>
          <h2
            className={`${orbitrondesc.className} text-[10px] tracking-wide xl:text-2xl lg:text-lg md:text-lg italic text-[#ff6600] px-4 pb-12 lg:pb-64 xl:pb-64 md:pb-64`}
          >
            <i>Bringing the racing community closer to
            <br /> elevate the fan experience for the sport</i>
          </h2>
        </div>
      </center>
      <div className="w-full bg-gradient-to-r from-[#301401] via-[#301401] to-[#FF5900] text-center p-4 opacity-90 mt-20">
         <h2
            className={`${orbitron.className} text-[9px] md:text-lg lg:text-lg xl:text-lg font-bold text-white uppercase`}
          >
             Formula Dream is not affiliated with F1, the FIA, or any teams.
          </h2>
      </div>
    </div>
  );
}
