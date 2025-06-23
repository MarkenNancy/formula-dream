"use client";
import { FadeUp } from "@/components/animation";
import { Orbitron } from "next/font/google";
import Image from "next/image";


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});


const Section2 = () => {
    const features = [
        {
            text: ["Engage Your", "Target Audience"],
            icon: "/images/audience.png",
        },
        {
            text: ["Discover Top", "Influencers"],
            icon: "/images/influencer.png",
        },
        {
            text: ["Save on Ad", "Spends"],
            icon: "/images/adspend.png",
        },
        {
            text: ["Boost Brand", "Engagement"],
            icon: "/images/engagement.png",
        },
    ];

    return (
        // <section className="relative w-full bg-gradient-to-b from-black via-[#FF5E00]/80 to-black text-white py-16 overflow-hidden bg-opacity-90" style={{ marginTop: "-60px" }}>
        //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 mb-16 relative z-10 mt-16">
        //         {features.map((item, i) => (
        //             <div
        //                 key={i}
        //                 className="relative w-[220px] h-[128px] mx-auto rounded-[20px] bg-[url(/images/Rectangle.png)] flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition-transform duration-300"
        //             >
        //                 <div className="absolute -top-12 p-3 rounded-full ">
        //                     <Image src={item.icon} alt={item.text.join(" ")} width={64} height={64} />
        //                 </div>
        //                 <p className="text-sm font-bold uppercase text-center leading-snug">
        //                     {item.text.map((line, index) => (
        //                         <span key={index}>
        //                             {line}
        //                             <br />
        //                         </span>
        //                     ))}
        //                 </p>
        //             </div>
        //         ))}

        //     </div>
        <section className="relative w-full bg-gradient-to-b from-black via-[#FF5E00]/80 to-black text-white py-16 overflow-hidden bg-opacity-90" style={{ marginTop: "-85px" }}>
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FF5E00] to-transparent opacity-60 z-10 pointer-events-none rounded-lg" />
            <FadeUp>
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-6 lg:gap-6 max-w-6xl mx-auto px-8 mb-16 relative z-10 mt-16">
                    {features.map((item, i) => (
                        <FadeUp key={i} delay={i * 0.4}>
                            <div
                                className="relative pt-8 lg:pt-none xl:pt-none pb-4 lg:pb-10 xl:pb-10 mx-auto rounded-[20px] bg-[url(/images/Rectangle.png)] bg-cover bg-center flex flex-col items-center justify-center text-center shadow-lg hover:scale-110 transition-transform duration-300 group"
                            >
                                <div className="absolute -top-10 lg:p-3 md:p-3 p-2 rounded-full">
                                    <Image src={item.icon} alt={item.text.join(" ")} width={64} height={64} />
                                </div>
                                <p className="text-xs lg:text-sm xl:text-sm font-bold uppercase text-center leading-snug mt-2 lg:mt-4 md:mt-6">
                                    {item.text.map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </FadeUp>

            {/* Branding Text */}
            <FadeUp>
                <div className="text-center mb-24 md:nb-16 lg:mb-16 xl:mb-16 z-10 relative px-4">
                    <p className="text-sm uppercase text-[#FF7A00] mb-2 font-bold">Powered By</p>
                    {/* <h2 className="text-4xl md:text-5xl font-extrabold"> */}
                    {/* FORMULA <span className="text-white">neon</span> */}
                    <div className="flex justify-center items-center px-12 lg:px-none md:px-none xl:px-none">
                        <svg width="459" height="39" viewBox="0 0 459 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.89435H29.6231V10.6908H10.2609V16.8415H27.7607V25.1741H10.2609V38.1111H0V1.89435Z" fill="white" />
                            <path d="M33.0141 20.0886V19.9856C33.0141 9.59127 41.5883 1.15558 53.0088 1.15558C64.4294 1.15558 72.8981 9.48819 72.8981 19.8825V19.9856C72.8981 30.3798 64.324 38.8155 52.9034 38.8155C41.4829 38.8155 33.0141 30.4829 33.0141 20.0886ZM62.4264 20.0886V19.9856C62.4264 14.7626 58.561 10.2098 52.9034 10.2098C47.2459 10.2098 43.5386 14.6596 43.5386 19.8825V19.9856C43.5386 25.2085 47.404 29.7613 53.0088 29.7613C58.6137 29.7613 62.4264 25.3116 62.4264 20.0886Z" fill="white" />
                            <path d="M78.257 1.89435H95.7568C101.414 1.89435 105.332 3.33752 107.81 5.82871C109.971 7.89039 111.095 10.6908 111.095 14.2644V14.3675C111.095 19.8997 108.073 23.5763 103.488 25.4834L112.325 38.0939H100.483L93.0334 27.1327H88.5355V38.0939H78.2746V1.89435H78.257ZM95.2824 19.264C98.7788 19.264 100.782 17.6146 100.782 14.9688V14.8657C100.782 12.0309 98.6734 10.5706 95.2297 10.5706H88.5179V19.264H95.2824Z" fill="white" />
                            <path d="M116.296 1.89435H127.137L135.975 15.9137L144.812 1.89435H155.653V38.0939H145.445V17.3054L135.975 31.4794H135.764L126.346 17.4085V38.0939H116.296V1.89435Z" fill="white" />
                            <path d="M161.75 1.89435H172.169V22.0129C172.169 27.2358 174.857 29.727 178.986 29.727C183.115 29.727 185.803 27.356 185.803 22.2878V1.91153H196.222V21.9785C196.222 33.6613 189.405 38.7812 178.881 38.7812C168.356 38.7812 161.75 33.5583 161.75 22.2362V1.89435Z" fill="white" />
                            <path d="M202.337 1.89435H212.598V29.2975H230.519V38.0939H202.337V1.89435Z" fill="white" />
                            <path d="M247.738 1.63664H257.63L273.39 38.0939H262.391L259.685 31.634H245.401L242.765 38.0939H231.977L247.738 1.63664ZM256.734 23.8168L252.605 13.5256L248.423 23.8168H256.734Z" fill="white" />
                            <path d="M296.811 38.0939H291.206V1.31021H296.811V7.71858C298.076 5.72563 299.728 4.02475 301.766 2.63312C303.804 1.24148 306.439 0.537078 309.69 0.537078C311.974 0.537078 313.994 0.897871 315.769 1.60228C317.544 2.30668 319.037 3.32034 320.284 4.62607C321.514 5.9318 322.463 7.47805 323.131 9.28202C323.781 11.086 324.115 13.0789 324.115 15.2609V38.0939H318.51V16.601C318.51 13.182 317.614 10.4847 315.822 8.49171C314.03 6.49876 311.447 5.50228 308.108 5.50228C306.51 5.50228 305.016 5.77717 303.628 6.32695C302.24 6.87673 301.045 7.64986 300.026 8.6807C299.007 9.69436 298.216 10.9142 297.654 12.3402C297.092 13.7662 296.811 15.3296 296.811 17.0305V38.0939Z" fill="white" />
                            <path d="M340.894 27.0296C341.667 28.5759 342.669 29.8816 343.881 30.9468C345.093 32.012 346.446 32.8195 347.957 33.3693C349.468 33.9191 351.032 34.1939 352.684 34.1939C355.302 34.1939 357.551 33.7301 359.413 32.7679C361.275 31.823 362.997 30.5688 364.543 29.0054L368.04 32.0635C366.142 34.1424 363.981 35.8261 361.557 37.0803C359.132 38.3345 356.127 38.9702 352.543 38.9702C349.978 38.9702 347.553 38.5063 345.269 37.5785C342.985 36.6508 341 35.345 339.278 33.6613C337.573 31.9776 336.203 29.9503 335.201 27.5794C334.2 25.2085 333.69 22.597 333.69 19.745C333.69 17.082 334.13 14.5908 335.043 12.2371C335.939 9.88334 337.187 7.85603 338.786 6.12078C340.385 4.38554 342.3 3.02827 344.496 2.03179C346.71 1.03532 349.117 0.537078 351.735 0.537078C354.493 0.537078 356.971 1.0525 359.149 2.06615C361.328 3.07981 363.173 4.47144 364.684 6.22387C366.195 7.97629 367.319 10.038 368.11 12.4089C368.883 14.7798 369.27 17.3226 369.27 20.0199V20.8102C369.27 21.1023 369.252 21.3944 369.199 21.738H339.436C339.629 23.7309 340.121 25.5005 340.894 27.0296ZM363.524 17.6662C363.384 15.9996 363.032 14.419 362.47 12.9071C361.908 11.3952 361.152 10.0552 360.151 8.92123C359.167 7.78731 357.955 6.87673 356.531 6.18951C355.108 5.50228 353.457 5.15867 351.577 5.15867C349.943 5.15867 348.414 5.4851 347.026 6.12078C345.62 6.75647 344.391 7.63268 343.336 8.74942C342.282 9.86616 341.404 11.1891 340.736 12.701C340.068 14.2129 339.629 15.8794 339.436 17.6834H363.524V17.6662Z" fill="white" />
                            <path d="M414.495 27.0983C413.494 29.4521 412.123 31.4966 410.384 33.249C408.644 35.0014 406.553 36.3931 404.129 37.4067C401.704 38.4204 399.086 38.9358 396.275 38.9358C393.464 38.9358 390.863 38.4204 388.491 37.4067C386.119 36.3931 384.046 35.0186 382.307 33.2834C380.567 31.5481 379.197 29.5208 378.23 27.2014C377.264 24.882 376.772 22.408 376.772 19.7966C376.772 17.1851 377.264 14.7111 378.23 12.3574C379.197 10.0036 380.55 7.95911 382.307 6.20669C384.046 4.45426 386.119 3.06263 388.527 2.04897C390.934 1.03532 393.552 0.519897 396.415 0.519897C399.279 0.519897 401.827 1.03532 404.234 2.04897C406.641 3.06263 408.715 4.43708 410.454 6.17233C412.193 7.90757 413.564 9.93489 414.53 12.2543C415.497 14.5737 415.989 17.0477 415.989 19.6591C415.989 22.2706 415.497 24.7446 414.495 27.0983ZM409.189 14.1613C408.486 12.4089 407.502 10.8798 406.237 9.59127C404.972 8.28554 403.496 7.25471 401.792 6.49876C400.088 5.74281 398.243 5.36484 396.257 5.36484C394.272 5.36484 392.357 5.72563 390.652 6.4644C388.948 7.20316 387.507 8.21682 386.33 9.52255C385.136 10.8283 384.204 12.3402 383.537 14.0582C382.851 15.7935 382.518 17.649 382.518 19.6248C382.518 21.6005 382.869 23.4904 383.572 25.2257C384.275 26.9781 385.241 28.49 386.488 29.7613C387.718 31.0327 389.194 32.0464 390.881 32.8195C392.585 33.5754 394.43 33.9534 396.415 33.9534C398.401 33.9534 400.316 33.5926 402.02 32.8539C403.725 32.1151 405.165 31.1186 406.378 29.8301C407.59 28.5587 408.539 27.0468 409.224 25.3287C409.909 23.6107 410.243 21.7552 410.243 19.7622C410.243 17.7693 409.892 15.8966 409.189 14.1613Z" fill="white" />
                            <path d="M431.696 38.0939H426.091V1.31021H431.696V7.71858C432.961 5.72563 434.613 4.02475 436.651 2.63312C438.689 1.24148 441.325 0.537078 444.575 0.537078C446.859 0.537078 448.88 0.897871 450.654 1.60228C452.429 2.30668 453.922 3.32034 455.17 4.62607C456.4 5.9318 457.348 7.47805 458.016 9.28202C458.666 11.086 459 13.0789 459 15.2609V38.0939H453.395V16.601C453.395 13.182 452.499 10.4847 450.707 8.49171C448.915 6.49876 446.332 5.50228 442.994 5.50228C441.395 5.50228 439.901 5.77717 438.513 6.32695C437.125 6.87673 435.931 7.64986 434.911 8.6807C433.892 9.69436 433.102 10.9142 432.539 12.3402C431.977 13.7662 431.696 15.3296 431.696 17.0305V38.0939Z" fill="white" />
                        </svg>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <svg width="289" height="3" viewBox="0 0 289 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <foreignObject x="-13.8273" y="-13.7074" width="316.655" height="31.055"><div className="backdrop-filter:blur(7.25px);clip-path:url(#bgblur_0_305_367_clip_path);height:100%;width:100%"></div></foreignObject><g data-figma-bg-blur-radius="14.5075">
                                <rect x="0.680176" y="0.800049" width="287.64" height="2.04" rx="1.02" fill="url(#paint0_radial_305_367)" className="mix-blend-mode:soft-light" />
                            </g>
                            <defs>
                                <clipPath id="bgblur_0_305_367_clip_path" transform="translate(13.8273 13.7074)"><rect x="0.680176" y="0.800049" width="287.64" height="2.04" rx="1.02" />
                                </clipPath><radialGradient id="paint0_radial_305_367" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140.759 0.398231) rotate(99.513) scale(5.03008 158.705)">
                                    <stop stop-color="#FFD500" />
                                    <stop offset="0.972831" stop-color="#C25D00" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                    {/* </h2> */}
                    <p className="mt-4 text-lg md:text-xl text-white font-[Magistral] pb-2 md:pb-none lg:pb-none xl:pb-none">
                        <p className="italic">Serving over </p><br /> <span className="text-[58.53px] font-bold mt-1 uppercase text-transparent bg-gradient-to-b from-[#D95C01] to-black bg-clip-text font-[Magistral]">10M FANS</span><br />
                        <span className="font-[Magistral] italic">Across Major Platforms</span>
                    </p>
                </div>
            </FadeUp>
            {/* Driver images (floating left and right) */}
            <FadeUp>
                <div className="hidden lg:block md:block xl:block absolute left-0 bottom-0 w-[40%] md:w-[25%] z-0 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4">
                    <Image src="/images/left-driver.png" alt="Left Driver" width={600} height={600} className="w-full h-auto" />
                </div>
            </FadeUp>
            <FadeUp>
                <div className="hidden lg:block md:block xl:block absolute right-0 bottom-0 w-[40%] md:w-[25%] z-0 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4">
                    <Image src="/images/right-driver.png" alt="Right Driver" width={600} height={600} className="w-full h-auto" />
                </div>
            </FadeUp>
            
            {/* Quote + CEO Image */}
            <div className="relative z-10 max-w-5xl mx-auto px-12 lg:px-20 xl:px-24">
                <div className="bg-gradient-to-br from-[#FF7A00]/80 via-[#FF5E00]/80 via-[#8B4200] to-black rounded-2xl md:px-6 lg:px-6 xl:px-6 px-10 flex flex-col md:flex-row items-center shadow-lg">
                {/* responsive image */}
                 <div className="block lg:hidden md:hidden xl:hidden lg:w-64 lg:h-64 h-42 w-42 relative rounded-xl bottom-10">
                        <Image
                            src="/images/ceo.png"
                            alt="Navroz Lamba"
                            width={144}
                            height={144}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-lg leading-relaxed font-[Magistral] lg:pt-8 md:pt-8 xl:pt-8 pt-none lg:mr-20">
                        <Image src="/images/Quote.png" alt="Right Driver" width={24} height={24} />
                        <p className="text-[#FFBE9C] mb-4 mt-2 lg:mt-4 xl:mt-4 font-[Magistral] text-[10px] md:text-xs lg:text-md xl:text-[14px]">
                            Bringing Formula Dream to life has been a journey of passion, persistence, and countless hours of work.
                            I’m thrilled to finally introduce a platform that connects your business directly with the racing fans who
                            matter most. With opportunities to build trust, foster meaningful engagement, and create lasting
                            connections, this is your chance to elevate the fan experience and unlock new growth. Together, let’s
                            shape the future of fan engagement.<br/>
                            <i> Welcome to Formula Dream.</i>
                        </p>
                        <p className="hidden md:block lg:block xl:block font-bold">NAVROZ LAMBA</p>
                        <p className="hidden md:block lg:block xl:block text-orange-200 text-xs pb-10 md:pb-6 lg:pb-6 xl:pb-6">Co-Founder & CEO</p>
                    </div>
                    <div className="block md:hidden lg:hidden xl:hidden flex flex-col items-center">
                        <p className={`${orbitron.className} text-sm font-bold text-[#FF7A00]`}>NAVROZ LAMBA</p>
                        <p className="text-white text-xs pb-10 md:pb-6 lg:pb-6 xl:pb-6">Co-Founder & CEO</p>
                    </div>
                    {/* CEO Image */}
                    <div className="hidden lg:block md:block xl:block w-64 h-64 overflow-hidden rounded-xl my-6">
                        <Image
                            src="/images/ceo.png"
                            alt="Navroz Lamba"
                            width={144}
                            height={144}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="block lg:hidden md:hidden xl:hidden absolute right-0 -bottom-40 w-[50%] md:w-[25%] z-0 transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-4">
                    <Image src="/images/right-driver.png" alt="Right Driver" width={600} height={600} className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default Section2;
