import React, { FC } from "react";
import {
  Typo,
  Logo,
  Container,
  Button,
  CustomLink,
  Address,
} from "@/components";
import FollowUs from "@/components/atom/FollowUs/FollowUs";
import { navLinks, servicesLinks } from "@/data/navData";
import FooterBottom from "./FooterBottom";
import { twMerge } from "tailwind-merge";
import { FadeIn, FadeUp } from "@/components/animation";
import Link from "next/link";
import { Orbitron } from "next/font/google";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};
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
const Footer: FC<Props> = ({ className, style }) => {
  return (
    <>
      <footer
        className={twMerge(
          `bg-black px-none lg:px-16 xl:px-16 md:px-16 md:py-8 lg:py-8 xl:py-8 py-none`,
          className
        )}
        style={style}
      >
        <Container
          className="rounded-t-3xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl opacity-75"
          style={{
            background:
              "radial-gradient(circle,rgb(142, 50, 0),rgb(119, 48, 1),rgb(164, 66, 0) )",
          }}
        >
          <FadeUp>
            <div className="text-white p-4 lg:p-8 xl:p-8 md:p-[3.125rem] rounded-full">
              <div className="grid">
                <Link
                  href="/"
                  className={twMerge(`transition-all duration-500 hidden md:block lg:block xl:block`, className)}
                  style={style}
                >
                  <svg
                    width="189"
                    height="41"
                    viewBox="0 0 189 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M84.5107 18.4184V7.85132C84.5107 6.59441 85.2524 5.87939 86.5562 5.87939H95.9558V8.92007H89.5307C88.9764 8.92007 88.7109 9.16844 88.7109 9.71035V10.6436H94.3788V13.6918H88.7109V18.4184H84.5107Z"
                      fill="white"
                    />
                    <path
                      d="M110.625 12.1474C110.625 17.5212 108.861 18.5599 103.474 18.5599C98.0874 18.5599 96.323 17.5212 96.323 12.1474C96.323 6.77351 98.0874 5.73486 103.474 5.73486C108.861 5.73486 110.625 6.77351 110.625 12.1474ZM103.474 15.444C105.707 15.444 106.316 14.4806 106.316 12.1474C106.316 9.81419 105.699 8.85081 103.474 8.85081C101.249 8.85081 100.632 9.81419 100.632 12.1474C100.632 14.4806 101.249 15.444 103.474 15.444Z"
                      fill="white"
                    />
                    <path
                      d="M112.109 7.85132C112.109 6.59441 112.85 5.87939 114.154 5.87939H121.493C124.467 5.87939 125.209 7.45242 125.209 10.1394C125.209 11.9306 124.912 14.6025 122.312 14.6025H121.758V14.6703L125.474 18.4109H120.423L117.917 15.152C117.488 14.595 117.027 14.166 117.027 13.451V13.18C117.027 12.1038 117.792 11.7651 118.901 11.7651H119.533C120.65 11.7651 121.016 11.4264 121.016 10.3501C121.016 9.27381 120.642 8.98781 119.533 8.98781H117.136C116.582 8.98781 116.317 9.23618 116.317 9.77809V18.4109H112.116V7.84379L112.109 7.85132Z"
                      fill="white"
                    />
                    <path
                      d="M138.309 16.8818C138.012 17.7925 137.638 18.5677 135.803 18.5677C133.968 18.5677 133.594 17.8 133.297 16.8818L131.291 10.8305C131.212 10.5972 131.142 10.379 131.049 10.379C130.885 10.379 130.885 10.665 130.885 10.7929L131.017 18.4247H126.778V7.94792C126.778 5.74268 129.308 5.74268 129.971 5.74268C131.088 5.74268 132.649 5.88568 133.313 7.81997L135.413 13.9089C135.452 14.0368 135.639 14.4809 135.803 14.4809C135.967 14.4809 136.154 14.0293 136.193 13.9089L138.293 7.81997C138.965 5.90073 140.542 5.74268 141.635 5.74268C144.586 5.74268 144.828 7.15764 144.828 7.94792V18.4247H140.589L140.737 10.7929C140.737 10.6349 140.721 10.379 140.573 10.379C140.495 10.379 140.425 10.4843 140.315 10.8305L138.309 16.8818Z"
                      fill="white"
                    />
                    <path
                      d="M155.375 13.083V5.8877H159.576V13.4066C159.576 17.3504 157.218 18.5622 153.127 18.5622C149.036 18.5622 146.678 17.3429 146.678 13.4066V5.8877H150.879V13.0905C150.879 14.7011 151.644 15.3108 153.127 15.3108C154.61 15.3108 155.375 14.7011 155.375 13.0905V13.083Z"
                      fill="white"
                    />
                    <path
                      d="M163.479 18.4192C162.175 18.4192 161.433 17.7042 161.433 16.4473V5.8877H165.634V14.5205C165.634 15.0549 165.891 15.3108 166.453 15.3108H172.878V18.4267H163.479V18.4192Z"
                      fill="white"
                    />
                    <path
                      d="M178.242 7.26301C178.648 6.32974 179.21 5.74268 181.216 5.74268C182.442 5.74268 183.598 5.87062 184.191 7.26301L189 18.4247H184.581L183.559 15.8431H178.874L177.852 18.4247H173.433L178.242 7.26301ZM179.881 12.9756H182.559L181.388 9.80695C181.349 9.679 181.295 9.536 181.224 9.536C181.154 9.536 181.092 9.679 181.06 9.80695L179.889 12.9756H179.881Z"
                      fill="white"
                    />
                    <path
                      d="M86.5484 34.8847C85.2446 34.8847 84.5029 34.1697 84.5029 32.9128V24.3176C84.5029 23.0607 85.2446 22.3457 86.5484 22.3457H91.9742C96.2447 22.3457 97.4704 24.3176 97.4704 28.6152C97.4704 32.9128 96.2447 34.8847 91.9742 34.8847H86.5484ZM88.7031 30.8731C88.7031 31.5204 88.9607 31.7688 89.6321 31.7688H89.8195C92.4192 31.7688 93.1609 31.3022 93.1609 28.6152C93.1609 25.9283 92.2709 25.4616 89.8195 25.4616H89.6321C88.9607 25.4616 88.7031 25.71 88.7031 26.3573V30.8731Z"
                      fill="white"
                    />
                    <path
                      d="M98.9617 24.3176C98.9617 23.0607 99.7033 22.3457 101.007 22.3457H108.346C111.32 22.3457 112.062 23.9187 112.062 26.6057C112.062 28.397 111.765 31.0688 109.165 31.0688H108.611V31.1366L112.327 34.8772H107.276L104.77 31.6183C104.341 31.0613 103.88 30.6323 103.88 29.9173V29.6463C103.88 28.5701 104.645 28.2314 105.754 28.2314H106.386C107.503 28.2314 107.869 27.8927 107.869 26.8164C107.869 25.7401 107.495 25.4541 106.386 25.4541H103.989C103.435 25.4541 103.17 25.7025 103.17 26.2444V34.8772H98.9695V24.3101L98.9617 24.3176Z"
                      fill="white"
                    />
                    <path
                      d="M125.061 25.3937H118.635C118.081 25.3937 117.816 25.6421 117.816 26.184V27.1173H124.912V29.8719H117.816V31.0536C117.816 31.588 118.073 31.8439 118.635 31.8439H125.139V34.8921H115.661C114.357 34.8921 113.615 34.177 113.615 32.9201V24.325C113.615 23.068 114.357 22.353 115.661 22.353H125.061V25.3937Z"
                      fill="white"
                    />
                    <path
                      d="M130.315 23.7308C130.721 22.7975 131.283 22.2104 133.289 22.2104C134.515 22.2104 135.671 22.3384 136.264 23.7308L141.073 34.8925H136.654L135.632 32.3109H130.947L129.925 34.8925H125.506L130.315 23.7308ZM131.954 29.4433H134.632L133.461 26.2747C133.422 26.1468 133.368 26.0038 133.297 26.0038C133.227 26.0038 133.165 26.1468 133.133 26.2747L131.962 29.4433H131.954Z"
                      fill="white"
                    />
                    <path
                      d="M153.166 33.3496C152.87 34.2603 152.495 35.0355 150.66 35.0355C148.826 35.0355 148.451 34.2678 148.154 33.3496L146.148 27.2983C146.07 27.065 145.999 26.8467 145.906 26.8467C145.742 26.8467 145.742 27.1327 145.742 27.2607L145.874 34.8925H141.635V24.4157C141.635 22.2104 144.165 22.2104 144.828 22.2104C145.945 22.2104 147.506 22.3535 148.17 24.2877L150.27 30.3766C150.309 30.5046 150.496 30.9486 150.66 30.9486C150.824 30.9486 151.011 30.497 151.051 30.3766L153.151 24.2877C153.822 22.3685 155.399 22.2104 156.492 22.2104C159.443 22.2104 159.685 23.6254 159.685 24.4157V34.8925H155.446L155.594 27.2607C155.594 27.1026 155.579 26.8467 155.43 26.8467C155.352 26.8467 155.282 26.9521 155.173 27.2983L153.166 33.3496Z"
                      fill="white"
                    />
                    <path
                      d="M51.6982 25.6044C53.2909 25.6044 54.2277 23.8884 53.3299 22.6239L52.0573 20.8326C49.9651 18.2661 49.4888 17.2952 47.623 16.3544C44.6641 14.8567 42.0253 15.0523 41.1744 15.0523H8.58789L9.32175 16.3469C12.5851 22.0594 14.0528 25.6044 25.576 25.6044H51.6982Z"
                      fill="white"
                    />
                    <path
                      d="M74.0183 29.0894C64.1737 -2.07749 46.6391 0.0299049 46.6391 0.0299049H0V0.0449577C3.71614 6.54026 4.65298 10.7551 18.487 10.5669H42.6888C45.9131 10.5669 49.0905 10.2508 53.2516 14.2097C55.5938 16.4375 60.278 23.6252 60.9806 26.553C61.4178 28.3669 60.6995 30.1808 58.7634 30.1808L17.1754 30.1055L17.2379 30.2184C21.0633 41.9446 32.3757 40.7403 35.7171 40.7403H68.6471C70.8409 40.7403 72.7145 39.22 73.0893 37.1352C74.1745 31.0764 74.0183 29.1045 74.0183 29.1045V29.0894Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                {/* <div className="lg:col-span-8 lg:ps-11 lg:pt-10 pt-8">
                  <Typo
                    isTitle
                    weight="bold"
                    tag="div"
                    size="sm"
                    className="opacity-80"
                  >
                    <ul className="flex sm:flex-row xl:gap-[1.875rem] gap-5 flex-wrap">
                      <li>United States</li>
                      <li>United Kingdom</li>
                      <li>Singapore</li>
                      <li>United Arab Emirates</li>
                      <li>India</li>
                    </ul>
                  </Typo>
                </div> */}
              </div>
              {/* <div className="grid sm:grid-cols-12 xl:grid-cols-11 lg:mt-8 mt-8 lg:ps-16">
                <div className="sm:col-span-5 lg:col-span-5 xl:col-span-3 grid"> */}
              {/* <div className="opacity-80">
                    <Typo
                      isTitle
                      size="sm"
                      weight="bold"
                      className="mb-4 opacity-80"
                    >
                      Executive HQ
                    </Typo>
                    <Typo isTitle weight="light">
                      Clarient Systems Corporation{" "}
                      <span className="inline-block">
                        (A Delaware Corporation)
                      </span>
                    </Typo>
                    <Typo
                      isTitle
                      weight="light"
                      className="mt-3 not-italic"
                      tag="address"
                    >
                      <Address />
                    </Typo>
                  </div>
                  <div className="pt-6">
                    <Button isRounded typeForm="contact">
                      Get in touch
                    </Button>
                  </div> */}
              {/* <div className="mt-auto pt-4">
                    <div className="opacity-80">
                      <Typo
                        isTitle
                        size="sm"
                        weight="bold"
                        className="opacity-80 mb-2"
                      >
                        Contact
                      </Typo>
                    </div>
                    <Typo isTitle weight="light" size="sm">
                      <span className="opacity-80">E </span>
                      <Link
                        href="mailto:hello@clarient.us"
                        className="transition-all opacity-80 hover:opacity-100"
                      >
                        hello@clarient.us
                      </Link>
                    </Typo>
                    <Typo isTitle weight="light" size="sm">
                      <span className="opacity-80">P </span>
                      <Link
                        className="transition-all underline underline-offset-4 opacity-80 hover:opacity-100"
                        href="tel:+911724190900"
                      >
                        +91 172 4190900
                      </Link>
                    </Typo>
                  </div> */}
            </div>
            {/* <div className="mt-10 sm:mt-0 sm:ps-4 lg:ps-0 sm:col-span-7 lg:col-span-7 xl:col-span-4 grid grid-cols-2">
                  <div>
                    <Typo
                      isTitle
                      size="sm"
                      weight="bold"
                      className="mb-4 opacity-80"
                    >
                      Capabilities
                    </Typo>
                    <Typo isTitle weight="light" tag="div" size="sm">
                      <ul className="space-y-4">
                        {servicesLinks.map((link, index) => (
                          <li key={index}>
                            <CustomLink
                              href={link.href}
                              isParent
                              className="hover:underline underline-offset-8 leading-6"
                              activeClassName="text-secondary"
                            >
                              {link.children}
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    </Typo>
                  </div>
                  <div>
                    <Typo
                      isTitle
                      size="sm"
                      weight="bold"
                      className="mb-4 opacity-80"
                    >
                      About Us & Resources
                    </Typo>
                    <Typo isTitle weight="light" tag="div" size="sm">
                      <ul className="space-y-4">
                        {navLinks.map((link, index) => (
                          <li key={index}>
                            <CustomLink
                              className={`hover:underline underline-offset-8 leading-6 ${
                                link.isHighlight ? "" : ""
                              }`}
                              href={link.href}
                              isParent
                              activeClassName="text-secondary"
                            >
                              {link.children}
                            </CustomLink>
                          </li>
                        ))}
                      </ul>
                    </Typo>
                  </div>
                </div> */}
            {/* <div className="mt-10 xl:mt-0 sm:col-span-12 xl:col-span-4">
                  <div className="flex xl:flex-col sm:flex-row max-sm:flex-col max-xl:justify-between flex-grow h-full">
                    <div className="">
                      <FollowUs />
                    </div>
                    <div className="flex sm:justify-end justify-start sm:mt-auto mt-8">
                      <Button
                        isRounded
                        size="medium"
                        variant="outline"
                        className="px-9"
                        type="link"
                        href="https://cerebrent.com"
                        isExternal
                      >
                        cerebrent.com
              
                      </Button>
                    </div>
                  </div>
                </div> */}
            {/* </div>
            </div> */}

            <div className="block md:hidden lg:hidden xl:hidden flex flex-col items-center justify-center pb-12">
              <Logo/>
              <div className={`${orbitrondesc.className} uppercase flex flex-row gap-12 py-6 text-white`}>
                {/* pages */}
                <div className="flex flex-col tracking-wide">
                  <h2 className="font-bold">Pages</h2>
                  <h3 className="opacity-50 italic pt-2 text-sm"><i>Info</i></h3>
                  <h3 className="opacity-50 italic text-sm"><i>Support</i></h3>
                  <h3 className="opacity-50 italic text-sm"><i>Partnership</i></h3>
                  <h3 className="opacity-50 italic text-sm"><i>Contact</i></h3>
                </div>
                {/* socials */}
                <div className="flex flex-col text-right tracking-wide">
                  <h2 className="font-bold">Social</h2>
                  <h3 className="opacity-50 italic pt-2 text-sm"><i>Instagram</i></h3>
                  <h3 className="opacity-50 italic text-sm"><i>Youtube</i></h3>
                  <h3 className="opacity-50 italic text-sm"><i>Twitter</i></h3>
                  <h3 className="opacity-50 italic text-sm"><i>E-mail</i></h3>

                </div>
              </div>
              <h3 className={`${orbitrondesc.className} text-[10px] text-white items-center pt-4`}>© 2025 Formula Dream. All rights reserved.</h3>
            </div>

          </FadeUp>
          <div className="hidden md:block lg:block xl:block">
            <FadeIn delay={0.5}>
              <FooterBottom />
            </FadeIn>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
