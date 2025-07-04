import { homeSeo } from "@/data/seoData";
import { Metadata } from "next";
import Section2 from "@/components/atom/Section2/Section2";
import PartnerSlider from "@/components/atom/PatnerSlider/PatnerSlider";
import InfluencerSlider from "@/components/atom/Influencer/Influencer";
import BenefitSlider from "@/components/atom/Benefits/BenefitSlider";
import InsideLook from "@/components/atom/InsideLook/InsideLook";
import FaqsPage from "@/components/atom/FAQ and Mission/Faqs";
import SignupPage from "@/components/atom/SignUpPage/SignupPage";
import BannerHome from "@/components/molecules/BannerHome/BannerHome";
import { FadeUp } from "@/components/animation";
export const metadata: Metadata = homeSeo;
// end seo

const page = () => {
  return (
    <>
      {/* <SignupPage/> */}
      <BannerHome />
      <FadeUp as={"section"} className="relative">
        <div className="absolute top-0 left-0 w-full bottom-0 bg-gradient-to-b from-black via-[#FF5E00]/80 to-black mt-10"></div>

        <Section2 />
      </FadeUp>

      <FadeUp as={"section"} className="relative">
        <div className="relative flex items-center justify-center overflow-hidden">
          <div
            className="hidden md:block lg:block xl:block absolute w-[2500px] h-[2500px] rounded-full border border-white opacity-50 -mt-96 mb-48"
            style={{
              clipPath: "inset(0 0)",
            }}
          ></div>

          <div className="w-full">
            <PartnerSlider />
            <InfluencerSlider />
            <BenefitSlider />
            <InsideLook />
            <FaqsPage />
          </div>
        </div>
      </FadeUp>
    </>
  );
};

export default page;
