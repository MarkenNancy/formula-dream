import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
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
import { FadeUp } from "@/components/animation";
import Image from "next/image";

// seo
import type { Metadata } from "next";
import { esgSolutionsSeo } from "@/data/seoData";
export const metadata: Metadata = esgSolutionsSeo;
// end seo

const EsgSolutions = () => {
  return (
    <>
      <PageBanner
        title="Transform Your ESG Strategy with Intelligent Solutions"
        description="Harness the full potential of your ESG strategy with Clarient’s intelligent solutions—built to streamline compliance, enhance sustainability performance, and empower stakeholders. "
        action={{
          children: (
            <>
              <span className="uppercase">
                BOOK<b className="ms-1">Consultation</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077239113",
          className: "bg-[url(/images/esgSolutionsVideoBg.jpg)]",
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
        pageName="ESG solutions"
        nav={[
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "imperative",
            label: "ESG Imperative",
          },
          {
            id: "solutions",
            label: "Solutions",
          },
          {
            id: "approach",
            label: "Our Approach",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section className="md:pt-24 pt-12" id="overview">
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
                  Turn ESG Challenges into Strategic Wins
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                  Navigating the complexities of ESG compliance, sustainability
                  reporting, and stakeholder expectations is a growing challenge
                  for businesses across industries. Fragmented data systems,
                  evolving regulations, and the demand for accurate, transparent
                  disclosures are constant hurdles.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3} className="md:block hidden">
                <Image
                  src="/images/solutions/esg/overview.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty">
                  Clarient delivers powerful, outcome-driven ESG solutions
                  designed to transform compliance requirements into strategic
                  advantages. From streamlined reporting automation to advanced
                  sustainability analytics and tailored biosciences support, our
                  intelligent tools empower you to achieve measurable impact,
                  enhance transparency, and drive long-term growth.
                </Typo>
              </FadeUp>
            </div>
            <div className="md:hidden block">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/solutions/esg/overview.png"
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
      <section>
        <div
          className=""
          style={{
            background: "linear-gradient(180deg, #EEE 27.25%, #FFF 100%)",
          }}
        >
          <div id="imperative" className="md:pt-20 pt-10 relative">
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-6">
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
                      Navigating an Evolving ESG Landscape
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-9">
                  <FadeUp delay={0.2}>
                    <Typo tag="p" size="lg" className="text-pretty mt-2">
                      Your business faces complex, multifaceted challenges as
                      ESG expectations evolve. These challenges demand solutions
                      that are agile, integrated, and aligned with your
                      strategic vision. At Clarient, we address these pain
                      points with purpose-built tools designed for measurable
                      impact.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
                <div className="lg:col-span-10 lg:col-start-2">
                  <ChallengesCardGrid
                    cards={[
                      {
                        title: "Fragmented Data Ecosystems",
                        items: [
                          "Disconnected systems and incompatible data sources make accurate, transparent reporting nearly impossible.",
                        ],
                        delay: 0,
                      },
                      {
                        title: "Evolving Regulations",
                        items: [
                          "New frameworks and guidelines emerge constantly, creating a moving target for compliance.",
                        ],
                        delay: 0.1,
                      },
                      {
                        title: "Demand for Transparency",
                        items: [
                          "Stakeholders expect consistent, credible disclosures—and anything less risks damaging trust and credibility.",
                        ],
                        delay: 0.2,
                      },
                      {
                        title: "High Stakeholder Expectations",
                        items: [
                          "Effective engagement requires seamless communication, but fragmented tools often hinder clarity.",
                        ],
                        delay: 0.3,
                      },
                      {
                        title: "Lack of Comprehensive Strategy",
                        items: [
                          "Without a unified approach, sustainability efforts remain siloed, disjointed, and ineffective.",
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
          <div className="md:pt-20 pt-10" id="solutions">
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
                        Solutions
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
                        Our Comprehensive ESG Solutions
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
                        At Clarient, we go beyond compliance—delivering
                        innovative, outcome-focused solutions that empower
                        businesses to thrive in a rapidly evolving ESG
                        landscape. From AI-powered analytics to streamlined
                        reporting and engagement platforms, our tools are
                        designed to turn your sustainability goals into
                        measurable results.
                      </Typo>
                    </FadeUp>
                  </div>
                </div>
              </Container>
            </div>
            <div>
              <Container isSmall>
                <SolutionsSlider
                  slides={[
                    {
                      id: 0,
                      image:
                        "/images/industries/ourSolutionsCleanTech/img0.jpg",
                      title: "ESG Reporting & Compliance Automation",
                      listItems: [
                        "Automated tools for streamlined reporting aligned with frameworks like GHG Protocol, TCFD, and CDP.",
                        "Scalable platforms designed to simplify complex regulatory requirements.",
                      ],
                    },
                    {
                      id: 1,
                      image:
                        "/images/industries/ourSolutionsCleanTech/img1.jpg",
                      title: "Sustainability Analytics & Insights",
                      listItems: [
                        "AI-driven analytics to monitor, measure, and optimize sustainability metrics.",
                        "Data-driven decision-making for enhanced transparency and accountability.",
                      ],
                    },
                    {
                      id: 2,
                      image:
                        "/images/industries/ourSolutionsCleanTech/img2.jpg",
                      title: "Biosciences Innovation Support",
                      listItems: [
                        "Tailored solutions for the biosciences sector, integrating compliance, ethics, and innovation.",
                        "Tools to drive sustainable breakthroughs with precision and responsibility.",
                      ],
                    },
                    {
                      id: 3,
                      image:
                        "/images/industries/ourSolutionsCleanTech/img3.jpg",
                      title: "Stakeholder Engagement Platforms",
                      listItems: [
                        "Enhancing visibility and communication across the value chain.",
                        "Tools to empower stakeholders with actionable data and insights.",
                      ],
                    },
                  ]}
                />
              </Container>
            </div>
            <SolutionCtaBg
              image="/images/solutions/esg/esgcta.jpg"
              title="Sustainability Starts With Action"
              titleClass="xl:ps-20"
              description="ESG shouldn’t sit on the sidelines. Clarient embeds sustainability into your operational backbone with intelligent, auditable solutions designed to keep you ahead of regulations, markets, and expectations."
              action={{
                className: "uppercase",
                size: "large",
                children: (
                  <>
                    Connect&nbsp; <b className="ms-1">with us</b>
                  </>
                ),
                typeForm: "contact",
              }}
            />
          </div>
        </div>
      </section>
      <section
        id="approach"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div className="md:pt-24 pt-10">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7">
                <FadeUp>
                  <Typo
                    tag="p"
                    size="2xl"
                    weight="bold"
                    isTitle
                    className="text-pretty uppercase"
                  >
                    Clarient for ESG Solutions
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-balance leading-none"
                  >
                    The Clarient Difference. Purpose Built ESG Solutions.
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    At Clarient, we don’t just provide tools—we empower
                    transformation. Our ESG solutions are built to deliver
                    measurable, lasting impact, helping you stay ahead of
                    regulatory demands, enhance transparency, and drive
                    sustainable growth.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Holistic, Data-Driven Approach",
                    items: [
                      "From compliance automation to AI-powered insights, our solutions provide a comprehensive, integrated framework to meet your ESG objectives.",
                    ],
                  },
                  {
                    title: "Future Ready Tools",
                    items: [
                      "Our platforms are engineered for scalability and adaptability, ensuring you remain resilient in a rapidly evolving regulatory landscape.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Industry Expertise",
                    items: [
                      "Leveraging deep domain knowledge across various sectors, we help you navigate complex ESG challenges with confidence.",
                    ],
                    delay: 0.2,
                    className: "md:!border-b",
                  },
                  {
                    title: "Strategic Partnership",
                    items: [
                      "We collaborate with you to create tailored, purpose-built solutions that turn compliance requirements into competitive advantages.",
                    ],
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
                      Insights That Inspire Progress.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[5, 6, 4, 10]} className="pt-10" />
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

export default EsgSolutions;
