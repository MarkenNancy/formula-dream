import {
  AiFrameworkCardGrid,
  ChallengesCardGrid,
  Container,
  ExcitingRole,
  GetInTouch,
  InformedSlider,
  PageBanner,
  SolutionCtaBg,
  SolutionsSlider,
  Typo,
} from "@/components";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import Image from "next/image";
import { FadeUp } from "@/components/animation";

// seo
import type { Metadata } from "next";
import { retailAndEcommerceSeo } from "@/data/seoData";
export const metadata: Metadata = retailAndEcommerceSeo;
// end seo

const Education = () => {
  return (
    <>
      <PageBanner
        title="Outgrow, Outperform, Outmaneuver Your Competition"
        description="Clarient powers future-ready commerce—designed to convert, optimized to scale, and built to win across every channel."
        action={{
          children: (
            <>
              <span className="uppercase">
                Get a <b>Custom Strategy</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077232968",
          className: "bg-[url(/images/retailAndEcommerceVideoBg.jpg)]",
        }}
        overlay={{
          style: {
            background:
              "linear-gradient(180deg, rgb(0 0 0) 50%, rgb(81, 0, 98) 100%)",
            opacity: 0.7,
          },
        }}
      />
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Retail & Ecommerce"
        nav={[
          {
            id: "opportunity",
            label: "Opportunity",
          },
          {
            id: "challenges",
            label: "Our Approach",
          },
          {
            id: "strategic",
            label: "Solutions",
          },
          {
            id: "innovation",
            label: "Clarient Advantage",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section className="md:pt-24 pt-12" id="opportunity">
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  isTitle
                  className="text-pretty leading-none"
                >
                  Accelerate Your Growth in a Mobile-First, Omni-Channel World
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                  To win in the modern eCommerce race, you need to meet today’s
                  consumer where they are—on mobile, across channels, and with
                  personalized experiences. Clarient’s solutions provide the
                  technology and strategy to give you a competitive edge.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3} className="md:block hidden">
                <Image
                  src="/images/industries/whyMatters/overview.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.2}>
                <ul className="[&>li>strong]:pe-1 text-xl space-y-3 [&>li>strong]:text-secondary">
                  <li>
                    <strong>75%</strong>
                    of consumers demand a seamless experience across all
                    touchpoints.
                  </li>
                  <li>
                    <strong>40%</strong>
                    of executives report their platforms limit innovation.
                  </li>
                  <li>
                    <strong>58%</strong>
                    of online sales now happen on mobile.
                  </li>
                </ul>
                <Typo tag="p" size="xl" className="text-pretty mt-4">
                  With Clarient, you’ll have the tools to build the experiences
                  your customers expect, now and into the future.
                </Typo>
              </FadeUp>
            </div>
            <div className="md:hidden block">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/industries/whyMatters/overview.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover"
                />
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>
      <section
        style={{
          background: "linear-gradient(180deg, #EEE 27.25%, #FFF 100%)",
        }}
      >
        <div className="md:pt-20 pt-10 relative" id="challenges">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp>
                  <Typo
                    tag="p"
                    size="2xl"
                    weight="bold"
                    className="uppercase !leading-tight mb-1"
                  >
                    Challenges & Needs
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    A Full-Spectrum Approach to Digital Commerce Excellence
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    At Clarient, we build lasting partnerships. From strategic
                    consulting to real-time optimization, we offer a
                    comprehensive suite of services that empower your business
                    to grow and thrive in a competitive digital market.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
              <div className="lg:col-span-10 lg:col-start-2">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "Strategy",
                      items: [
                        "We analyze markets, platforms, and customer behavior to shape focused digital commerce strategies that drive growth.",
                      ],
                      delay: 0,
                    },
                    {
                      title: "Design",
                      items: [
                        "Intuitive, high-converting interfaces tailored to deliver seamless user journeys across every channel and device.",
                      ],
                      delay: 0.1,
                    },
                    {
                      title: "Development",
                      items: [
                        "We build scalable, enterprise-grade platforms with future-ready architecture and seamless system integrations.",
                      ],
                      delay: 0.2,
                    },
                    {
                      title: "Optimization",
                      items: [
                        "Using real-time data, we fine-tune performance, boost speed, and improve customer experiences continuously.",
                      ],
                      delay: 0.3,
                    },
                    {
                      title: "Innovation",
                      items: [
                        "Our agile mindset ensures you’re always ahead—adopting new tech and features that fuel long-term success.",
                      ],
                      isLarge: true,
                      delay: 0.4,
                    },
                  ]}
                />
              </div>
            </div>
          </Container>
        </div>
        <div className="md:pt-20 pt-10" id="strategic">
          <div>
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-8">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Professional & Strategic
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      className="text-balance"
                      isTitle
                    >
                      End-to-End Solutions for Retail & eCommerce Leaders
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid md:grid-cols-12 mt-4">
                <div className="md:col-span-10">
                  <FadeUp delay={0.2}>
                    <Typo
                      tag="p"
                      size="lg"
                      className="text-pretty"
                      weight="normal"
                    >
                      At Clarient, we power every stage of your eCommerce
                      journey—from strategy and execution to optimization. Our
                      tailored solutions help you scale faster, boost
                      engagement, and drive long-term growth.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </Container>
          </div>
          <div className="">
            <Container isSmall>
              <SolutionsSlider
                slides={[
                  {
                    id: 0,
                    image: "/images/industries/professionalStrategic/img0.jpg",
                    title: "eCommerce Strategy & Consulting",
                    listItems: [
                      "Market Analysis & Platform Selection",
                      "Business Growth Roadmaps",
                      "Operational Excellence Strategy",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/professionalStrategic/img1.jpg",
                    title: "Enterprise-Grade Platform Development",
                    listItems: [
                      "Custom eCommerce Development",
                      "Omni-Channel Enablement",
                      "Platform Performance Optimization",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/professionalStrategic/img2.jpg",
                    title: "Conversion Rate Optimization & Analytics",
                    listItems: [
                      "Behavior Analytics for Deep Customer Insights",
                      "A/B Testing & Personalization",
                      "Advanced Dashboards for Data Visualization",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/professionalStrategic/img3.jpg",
                    title: "Customer Engagement & Personalization",
                    listItems: [
                      "Personalized User Journeys",
                      "AI/ML-Driven Recommendations",
                      "Reducing Cart Abandonment with Smart Personalization",
                    ],
                  },
                  {
                    id: 4,
                    image: "/images/industries/professionalStrategic/img4.jpg",
                    title: "Go-to-Market Acceleration",
                    listItems: [
                      "Faster Deployment Cycles",
                      "Agile Delivery for Quicker ROI",
                    ],
                  },
                  {
                    id: 5,
                    image: "/images/industries/professionalStrategic/img5.jpg",
                    title: "Scalable Platform Integration",
                    listItems: [
                      "Enterprise-Grade Infrastructure",
                      "Modular, Future-Ready Architecture",
                      "Seamless Integration with Existing Tech Stack",
                    ],
                  },
                  {
                    id: 6,
                    image: "/images/industries/professionalStrategic/img6.jpg",
                    title: "Data-Driven Strategy & Insights",
                    listItems: [
                      "Insight-Led Decision-Making",
                      "Real-Time Analytics for Growth Optimization",
                      "Performance Benchmarking for Continuous Improvement",
                    ],
                  },
                  {
                    id: 7,
                    image: "/images/industries/professionalStrategic/img7.jpg",
                    title: "Omni-Channel Commerce Enablement",
                    listItems: [
                      "Unified Customer Experience Across Digital and Physical Channels",
                      "Backend Alignment for Cross-Channel Fulfillment",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/industries/ecommerseCTA.jpg"
            title="Solve Industry Problems with Purpose-Built Intelligence"
            titleClass="text-pretty"
            description="Clarient combines deep domain expertise with cutting-edge technology to solve real-world industry challenges and drive meaningful outcomes."
            action={{
              className: "uppercase",
              size: "large",
              children: (
                <>
                  Talk to&nbsp; <b>Our Industry Experts</b>
                </>
              ),
              typeForm: "contact",
            }}
          />
        </div>
      </section>
      <section
        id="innovation"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div className="md:pt-24 md:pb-20 pb-10 pt-10">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7">
                <FadeUp>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-balance leading-none"
                  >
                    Why Retail Innovators Rely on Clarient for Growth
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    Clarient is the partner of choice for forward-thinking
                    retail and eCommerce brands. Here’s why we lead the way in
                    delivering results-driven, innovative solutions:
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Tailored Strategies",
                    items: [
                      "Personalized solutions designed to drive your business forward.",
                    ],
                  },
                  {
                    title: "Human-Centered Design",
                    items: [
                      "Creating user experiences that increase engagement and loyalty.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Scalable Platforms",
                    items: [
                      "Enterprise-grade solutions built to support rapid growth.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Data-Driven Insights",
                    items: [
                      "Make informed decisions with data-backed strategies.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Seamless Integration",
                    items: [
                      "Effortless alignment across all digital and physical channels.",
                    ],
                    delay: 0.4,
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-[#F5F5F5]" id="insights">
        <div>
          <Container isSmall>
            <div className="md:pt-20 pt-10">
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-7">
                  <FadeUp>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      className="text-pretty mb-2"
                      isTitle
                    >
                      Insights That Inspire Innovation
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[5, 7, 4, 10]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch />
        </Container>
      </section>
    </>
  );
};

export default Education;
