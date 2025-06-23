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
import { mediaEntertainmentAndPublishingSeo } from "@/data/seoData";
export const metadata: Metadata = mediaEntertainmentAndPublishingSeo;
// end seo

const MediaEntertainmentAndPublishing = () => {
  return (
    <>
      <PageBanner
        title="AI-Driven Solutions for the Next Era of Media"
        description="Future-proof your media business with intelligent automation, data-driven insights, and powerful digital platforms. Clarient transforms media operations with next-generation solutions that optimize performance, enhance engagement, and maximize growth."
        action={{
          children: (
            <>
              <span className="uppercase">
                See How We <b>Power the Future</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077242391",
          className:
            "bg-[url(/images/mediaEntertainmentAndPublishingVideoBg.jpg)]",
        }}
        overlay={{
          style: {
            background:
              "linear-gradient(180deg, rgb(0 0 0) 65%, rgb(81, 0, 98) 100%)",
            opacity: 0.7,
          },
        }}
      />

      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Media Entertainment"
        nav={[
          {
            id: "industry",
            label: "Industry Shift",
          },
          {
            id: "solutions",
            label: "Solutions",
          },
          {
            id: "matters",
            label: "Why it Matters",
          },
          {
            id: "impact",
            label: "Impact",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section className="md:pt-24 pt-12" id="industry">
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
                  The Future of Media is Intelligent, Automated, and Scalable
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <div className="h-full flex flex-col flex-grow">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                    Technology is revolutionizing how content is created,
                    distributed, and monetized. To stay ahead, media brands must
                    innovate, adapt, and scale—fast!
                  </Typo>
                </FadeUp>
                <div className="md:block hidden mt-auto">
                  <Image
                    src="/images/industries/whyMatters/overview.png"
                    alt="Image"
                    width={663}
                    height={438}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-5 pb-5">
              <FadeUp delay={0.2}>
                <ul className="space-y-3 list-none [&>li>strong]:me-1 [&>li]:bg-no-repeat [&>li]:bg-check [&>li]:pl-6 [&>li]:bg-[0_0.4rem] [&>li]:bg-[length:0.875rem]">
                  <li>
                    <strong>Borderless, Multi-Platform Access:</strong>
                    Audiences demand frictionless experiences on every screen,
                    in every format.
                  </li>
                  <li>
                    <strong>AI as the New Creative Partner:</strong>
                    Personalization engines are optimizing content discovery and
                    user experience.
                  </li>
                  <li>
                    <strong>Beyond Traditional Monetization:</strong>
                    Innovative business models are blending advertising,
                    subscriptions, and commerce.
                  </li>
                  <li>
                    <strong>Automation-Driven Efficiency:</strong>
                    From production to distribution, intelligent workflows are
                    the key to scalability.
                  </li>
                  <li>
                    <strong>The Rise of Immersive Media:</strong>
                    AR, VR, and interactive content are shaping the next
                    generation of engagement.
                  </li>
                </ul>
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
        <div className="md:pt-20 pt-10 relative" id="solutions">
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
                    Our Solutions
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    Optimized Solutions. Automated Processes. Impact-Driven
                    Results.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    Clarient equips media brands with cutting-edge technology
                    and strategic expertise to optimize operations, enhance user
                    experience, and maximize revenue.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <ChallengesCardGrid
              className="md:pt-20 pt-10"
              columns="4"
              cards={[
                {
                  title: "AI-Powered Automation & Intelligence",
                  items: [
                    "AI is redefining media operations—our solutions automate QC, optimize workflows, and power predictive decision-making.",
                  ],
                  delay: 0,
                },
                {
                  title: "Digital Product & Platform Design",
                  items: [
                    "We design industry-leading platforms that prioritize usability, efficiency, and seamless cross-device functionality.",
                  ],
                  delay: 0.1,
                },
                {
                  title: "Media Asset & Content Management",
                  items: [
                    "Our enterprise-grade systems centralize, categorize, and accelerate content distribution at scale.",
                  ],
                  delay: 0.2,
                },
                {
                  title: "Workflow & Process Automation",
                  items: [
                    "We eliminate operational bottlenecks by automating production, localization, and campaign execution.",
                  ],
                  delay: 0.3,
                },
                {
                  title: "Performance, Scalability & Infrastructure",
                  items: [
                    "Our robust infrastructure ensures high performance, security, and global scalability.",
                  ],
                  delay: 0.4,
                },
                {
                  title: "Engagement, Monetization & Financial Tools",
                  items: [
                    "We build powerful monetization and analytics solutions that drive sustainable revenue growth.",
                  ],
                  delay: 0.5,
                },
                {
                  title: "Reporting, Analytics & Insights",
                  items: [
                    "Our advanced analytics platforms transform raw data into business intelligence for strategic decision-making.",
                  ],
                  delay: 0.6,
                },
              ]}
            />
          </Container>
        </div>
        <div className="md:pt-20 pt-10" id="matters">
          <div>
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-7">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Why It Matters
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
                      Accelerate Growth. Optimize Efficiency. Maximize Revenue.
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
                      Media brands that seamlessly integrate technology and
                      strategy don’t just compete—they lead.
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
                    image: "/images/industries/whyMatters/img1.jpg",
                    title: "Hyper-Personalized Content Experiences",
                    listItems: [
                      "AI-powered personalization keeps audiences engaged and coming back—across every platform.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/whyMatters/img2.jpg",
                    title: "Frictionless Operations",
                    listItems: [
                      "Automation streamlines production, distribution, and workflows—boosting speed and efficiency.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/whyMatters/img3.jpg",
                    title: "Effortless Scalability",
                    listItems: [
                      "Future-ready infrastructure scales with demand—supporting growth without disruption.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/whyMatters/img4.jpg",
                    title: "Smarter Revenue Strategies",
                    listItems: [
                      "Maximize monetization across ads, subscriptions, and commerce with data-driven tools.",
                    ],
                  },
                  {
                    id: 4,
                    image: "/images/industries/whyMatters/img5.jpg",
                    title: "Intelligent Insights ",
                    listItems: [
                      "Real-time analytics turn data into actionable decisions that drive performance and ROI.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/industries/mediaCTA.jpg"
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
      <section id="impact">
        <div className="md:py-14 py-10">
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
                    Media Innovation, Measured in Impact.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "500M+",
                    items: ["content interactions optimized"],
                  },
                  {
                    title: "30% faster",
                    items: ["content distribution with automated workflows"],
                    delay: 0.1,
                  },
                  {
                    title: "3X revenue growth",
                    items: ["achieved through AI-driven personalization"],
                    delay: 0.2,
                    className: "md:!border-b",
                  },
                  {
                    title: "98% platform uptime",
                    items: ["for uninterrupted streaming and engagement"],
                    delay: 0.3,
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

export default MediaEntertainmentAndPublishing;
