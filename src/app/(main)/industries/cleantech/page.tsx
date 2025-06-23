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
import { FadeUp } from "@/components/animation";
import Image from "next/image";

// seo
import type { Metadata } from "next";
import { cleantechSeo } from "@/data/seoData";
export const metadata: Metadata = cleantechSeo;
// end seo

const Cleantech = () => {
  return (
    <>
      <PageBanner
        title="Redefining CleanTech for a Regenerative Tomorrow"
        description="Smarter technology. Sustainable transformation. Clarient brings CleanTech into the now."
        action={{
          className: "uppercase",
          typeForm: "contact",
          children: (
            <>
              Talk to an <b className="ms-1">Expert</b>
            </>
          ),
        }}
        videoVimeoIframe={{
          videoId: "1077243331",
          className: "bg-[url(/images/cleantechVideoBg.jpg)]",
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
        pageName="CleanTech"
        nav={[
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "keyChallenges",
            label: "Key Challenges",
          },
          {
            id: "ourSolutions",
            label: "Our Solutions",
          },
          {
            id: "clarientAdvantage",
            label: "Clarient Advantage",
          },
          {
            id: "insights",
            label: "Insights ",
          },
        ]}
      />
      <section className="md:pt-24 pt-12" id="overview">
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
                  THE CLEAN TECH ERA IS NOW
                </Typo>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  isTitle
                  className="text-pretty leading-none"
                >
                  The Next Industrial Revolution is Green, Digital, and
                  Inclusive
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                  The pressure to act on climate isn’t limited to policies or
                  regulations anymore. Concerns are now being raised by
                  customers, investors, employees, and even the planet itself.
                  CleanTech is helping organizations respond with more than just
                  empty words. It's driving real change: lowering emissions,
                  cutting costs, and creating new opportunities for growth.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3} className="md:block hidden mt-4">
                <Image
                  src="/images/industries/ourSolutionsCleanTech/intro.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty ">
                  However, making the shift isn't as simple. It takes clarity,
                  the right partners, and a willingness to rethink legacy
                  systems. That’s where Clarient comes in, our goal is to help
                  companies take action that are practical, measurable, and
                  built to last.
                </Typo>
              </FadeUp>
            </div>
            <div className="md:hidden block mt-4">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/industries/ourSolutionsCleanTech/intro.png"
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
        <div className="md:pt-20 pt-10 relative" id="keyChallenges">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8">
                <FadeUp>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    The Path to Sustainability Isn’t Linear
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    The CleanTech sector is full of promise but also complex
                    barriers that stall progress. From cost challenges to policy
                    gaps and integration hurdles, many businesses struggle to
                    scale their sustainability ambitions. At Clarient, we help
                    you navigate these with clarity, speed, and precision.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
              <div className="lg:col-span-10 lg:col-start-2">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "High Initial Investment",
                      items: [
                        "Sustainable tech can be cost-prohibitive without the right funding models or scale plans.",
                      ],
                      delay: 0,
                    },
                    {
                      title: "Cost vs. ROI Uncertainty",
                      items: [
                        "Difficulty in calculating long-term business benefits deters adoption.",
                      ],
                      delay: 0.1,
                    },
                    {
                      title: "Regulatory Complexity",
                      items: [
                        "Inconsistent or evolving policies make it hard to plan ahead.",
                      ],
                      delay: 0.2,
                    },
                    {
                      title: "Infrastructure Readiness",
                      items: [
                        "Legacy systems can't support clean integrations without disruption.",
                      ],
                      delay: 0.3,
                    },
                    {
                      title: "Misaligned Stakeholders",
                      items: [
                        "Internal teams, investors, and policymakers often work in silos.",
                      ],
                      delay: 0.4,
                    },
                    {
                      title: "Market Readiness",
                      items: [
                        "Tech works but market ecosystems for scale are still evolving.",
                      ],
                      delay: 0.5,
                    },
                  ]}
                />
              </div>
            </div>
          </Container>
        </div>
        <div className="md:pt-20 pt-10" id="ourSolutions">
          <div>
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-6">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Our Solutions
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
                      Smart Solutions for a Sustainable Shift
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
                      At Clarient, we help businesses move beyond ESG checklists
                      by delivering integrated, intelligent solutions that embed
                      sustainability at the heart of operations. From real-time
                      analytics to sector-specific innovation platforms, our
                      tools are built to drive measurable impact, not just
                      compliance.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </Container>
          </div>
          <div className="xl:-mt-20">
            <Container isSmall>
              <SolutionsSlider
                slides={[
                  {
                    id: 0,
                    image: "/images/industries/ourSolutionsCleanTech/img0.jpg",
                    title: "ESG Reporting & Compliance Automation",
                    listItems: [
                      "Effortless Reporting. Future-Ready Compliance.",
                      "Streamline ESG reporting with automated platforms built to align with leading frameworks like GHG Protocol, TCFD, and CDP. Our tools reduce manual effort, improve accuracy, and keep you ahead of shifting global regulations.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/ourSolutionsCleanTech/img1.jpg",
                    title: "Sustainability Analytics & Insights",
                    listItems: [
                      "Real-Time Intelligence for Smarter Sustainability Decisions",
                      "Use AI-powered analytics to monitor, measure, and optimize environmental metrics across your operations. Clarient’s analytics engine turns complex data into clear insights — helping teams make decisions with confidence and accountability.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/ourSolutionsCleanTech/img2.jpg",
                    title: "Biosciences Innovation Support",
                    listItems: [
                      "Driving Sustainable Innovation in Regulated Environments",
                      " We support bioscience organizations with tools tailored for ethical compliance, R&D alignment, and breakthrough innovation. Our solutions integrate sustainability at the product and process level — with built-in governance for traceability and reporting.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/ourSolutionsCleanTech/img3.jpg",
                    title: "Stakeholder Engagement Platforms",
                    listItems: [
                      "Transparency that Builds Trust Across the Value Chain",
                      "Clarient’s engagement platforms give internal teams, investors, and partners shared visibility into ESG progress. With custom dashboards and real-time reporting, we make it easy to align stakeholders around data, accountability, and action.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/industries/cleantechCTA.jpg"
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
        id="clarientAdvantage"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
        className="pb-10"
      >
        <div className="md:pt-24 pt-10">
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
                    Your CleanTech Growth Partner
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    In a world of increasing environmental mandates and rising
                    stakeholder expectations, you need a partner who understands
                    both the technical depth and the strategic context. That’s
                    Clarient.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Built for Real-World Complexity",
                    subTitle: "We don’t deliver theory — we deliver impact.",
                    items: [
                      "CleanTech initiatives often get stuck between ambition and execution. At Clarient, we bridge that gap. Our solutions are designed for imperfect systems, fragmented infrastructure, and shifting regulations — the real-world environments businesses operate in.",
                    ],
                  },
                  {
                    title: "CleanTech, Not Retrofit Tech",
                    subTitle:
                      "Sustainability isn’t an add-on — it’s our starting point.",
                    items: [
                      "Unlike traditional firms adapting legacy tools to sustainability goals, Clarient was built with CleanTech at the core. Every system, platform, and process we develop is designed for environmental performance from day one.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Modular, Scalable, and Practical",
                    subTitle: "Start where you are. Scale as you grow.",
                    items: [
                      "Whether you're launching a pilot or overhauling your sustainability roadmap, our approach meets you where you are. We design modular solutions that grow with your business — without disrupting what already works.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Data-Driven, Outcome-Aligned",
                    subTitle: "Because impact needs more than intention.",
                    items: [
                      "From carbon footprint to resource optimization, we measure what matters. Clarient builds systems that integrate with your existing tech stack and track real-time performance — so you know exactly where you stand and where you’re headed.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Global Reach, Local Context",
                    subTitle: "We design for scale, but we build with context.",
                    items: [
                      "With experience across 15+ countries, we understand the nuances of infrastructure, policy, and cultural context. Clarient’s solutions are globally informed, but always grounded in local realities.",
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

export default Cleantech;
