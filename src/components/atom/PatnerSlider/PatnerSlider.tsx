"use client";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import PartnerSlider2 from "./partnerSlider2";
import PartnerSliderRes from "./PartnerSliderRes";


const partners = [
  //   { src: "/partners/cota.png", alt: "Circuit of the Americas" },
  { src: "/images/partners/BoxClub.png", alt: "BOXX" },
  { src: "/images/partners/nasa-logo.png", alt: "NASA" },
  { src: "/images/partners/throttletherapy.png", alt: "Throttle Therapy" },
  { src: "/images/partners/Rectangle.png", alt: "World of Racing" },
  { src: "/images/partners/Layer_1.png", alt: "World of Racing" },
];

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});
export default function PartnerSlider() {
  return (
    <div className="bg-gradient-to-b from-black via-[#301401] to-[#ff6600] py-10 text-center">
      <h2
        className={`${orbitron.className} hidden md:block lg:block xl:block text-lg xl:text-2xl lg:text-2xl md:text-4xl font-bold text-[#FF5900] uppercase mt-8 mb-4`}
      >
        TRUSTED BY THE F1 COMMUNITY
      </h2>
      {/* responsive */}
      <center className="block lg:hidden">
        <Image
          src="/images/home/flagTrusted.png"
          alt="Flag"
          width={80}
          height={50}
          className=""
        />
      </center>
      <h2
        className={`${orbitron.className} block md:hidden lg:hidden xl:hidden text-xl font-bold text-[#FF5900] uppercase my-20`}
      >
        TRUSTED BY THE F1 <br />
        COMMUNITY
      </h2>
      <div className="mb-12 mt-8">
        <Image
          src="/images/partners/1.png"
          alt="Partners Banner"
          width={300}
          height={100}
          className="mx-auto my-8 w-32 md:w-64 lg:w-64 xl:w-80"
        />
        <h2 className="hidden md:block lg:block xl:block font-custom mt-4 text-sm md:text-[25px] lg:text-[25px] xl:text-[25px] leading-[100%] tracking-[0.16em] text-center font-bold uppercase text-white italic">
            You’ll find us in COTA’s official gift stores at the track.
        </h2>
        {/* responsive */}
        <h2 className="block md:hidden lg:hidden xl:hidden mt-4 font-custom text-sm leading-[100%] tracking-[0.16em] text-center uppercase text-white italic">
            You’ll find us in COTA’s official
          <br /> gift stores at the track.
        </h2>
      </div>

      <div className="overflow-hidden w-full max-w-6xl mx-auto px-4">
        {/* <Swiper
                    modules={[Autoplay]}
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={1000}
                    loop={true}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                width={150}
                                height={60}
                                className="mx-auto opacity-80 hover:opacity-100 transition duration-300"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper> */}
        <div className="overflow-hidden w-full pb-8 hidden lg:block">
          <div className="flex animate-scroll gap-12 w-max">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={60}
                  className="opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Responsivee */}
        <div className="flex flex-col overflow-hidden w-full block lg:hidden justify-center gap-y-8 opacity-60">
          <div className="gap-12 flex flex-row justify-center items-center gap-x-8">
            <Image
              src="/images/partners/Rectangle.png"
              alt="partner"
              width={160}
              height={40}
              className="opacity-80 hover:opacity-100 transition duration-300 grayscale"
            />
            <Image
              src="/images/partners/BoxClub.png"
              alt="partner"
              width={40}
              height={20}
              className="opacity-80 hover:opacity-100 transition duration-300 grayscale"
            />
          </div>
          <div className="gap-12 flex flex-row justify-center items-center gap-x-8">
            <Image
              src="/images/partners/throttletherapy.png"
              alt="partner"
              width={120}
              height={40}
              className="opacity-80 hover:opacity-100 transition duration-300 grayscale"
            />
            <Image
              src="/images/partners/Layer_1.png"
              alt="partner"
              width={120}
              height={40}
              className="opacity-80 hover:opacity-100 transition duration-300 grayscale"
            />
          </div>
        </div>
      </div>
      <div>
        <h2
          className={`${orbitron.className} text-2xl md:text-4xl font-bold text-[#FF5900] uppercase mt-12 my-2 lg:my-8 xl:my-8 md:my-8`}
        >
          HEAR FROM THEM
        </h2>
        <div className="hidden lg:block">
          <PartnerSlider2 />
        </div>
        <div className="block lg:hidden">
          <PartnerSliderRes/>
        </div>
      </div>
    </div>
  );
}
