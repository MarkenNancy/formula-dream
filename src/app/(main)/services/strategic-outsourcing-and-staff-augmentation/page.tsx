import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import {
  AiBuiltCardGrid,
  AiCtaBg,
  AiFrameworkCardGrid,
  AIGapCard,
  BusinessCard,
  Container,
  CountOnUsCard,
  ExcitingRole,
  GetInTouch,
  InformedSlider,
  PageBanner,
  Typo,
} from "@/components";
import { FadeIn, FadeUp } from "@/components/animation";

// seo
import type { Metadata } from "next";
import { strategicOutsourcingAndStaffAugmentationSeo } from "@/data/seoData";
export const metadata: Metadata = strategicOutsourcingAndStaffAugmentationSeo;
// end seo

const StrategicOutsourcingAndStaffAugmentation = () => {
  return (
    <>
      <PageBanner
        title="Global Talent, Scalable Growth, Limitless Potential"
        description="From building agile teams to simplifying operations, we help you scale smarter and deliver measurable impact."
        action={{
          className: "uppercase",
          typeForm: "contact",
          children: (
            <>
              Talk to <b className="ms-1">Our Experts</b>
            </>
          ),
        }}
        video={{
          source: "/video/bannerAICore.mov",
        }}
        className="bg-[url(/images/digitalTransformationideoBg1.png)]"
      />
      {/* <FadeIn delay={0.6}> */}
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Strategic Outsourcing"
        nav={[
          {
            id: "impact",
            label: "Our Impact",
          },
          {
            id: "value",
            label: "Value Delivered",
          },
          {
            id: "matrix",
            label: "Service Matrix",
          },
          {
            id: "framework",
            label: "Delivery Framework",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      {/* </FadeIn> */}
      <section
        id="impact"
        className="md:pt-28 pt-14 md:pb-20 pb-10 bg-[url('/images/services/overviewBg.jpg')] bg-repeat bg-cover bg-center"
      >
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-9">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  className="text-pretty leading-none mb-4"
                  isTitle
                >
                  Delivering Outsourcing That Works
                </Typo>
              </FadeUp>
            </div>
          </div>
        </Container>
        <div className="md:pt-12 pt-8">
          <Container isSmall>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-10">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                  <AIGapCard
                    title="80%"
                    subTitle="Faster Team Scalability"
                    description="Rapid deployment of skilled professionals tailored to your needs."
                    delay={0.1}
                    descriptionSize="sm"
                  />
                  <AIGapCard
                    title="40%"
                    subTitle="Reduction in Operational Costs"
                    description="Achieve efficiency without compromising quality."
                    delay={0.2}
                    descriptionSize="sm"
                  />
                  <AIGapCard
                    title="2X"
                    subTitle="Productivity Gains"
                    description="Streamlined processes and optimized resources."
                    delay={0.3}
                    descriptionSize="sm"
                  />
                  <AIGapCard
                    title="15+"
                    subTitle="Countries Global Reach"
                    description="Access top talent and expertise wherever you need it."
                    delay={0.4}
                    descriptionSize="sm"
                    className="md:col-span-2"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="value">
        <FadeIn
          delay={0.3}
          as="section"
          className="md:pt-20 pt-10"
          style={{
            background: "linear-gradient(180deg, #EEE 27.25%, #FFF 100%)",
          }}
        >
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7">
                <FadeUp>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    className="text-pretty leading-none mb-4"
                    isTitle
                  >
                    Delivering Value Beyond Outsourcing
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-4 md:pt-20 pt-4">
              <div className="md:order-1 md:col-span-2 order-2">
                <div className="grid md:grid-cols-2 ">
                  <BusinessCard
                    className="md:border-r-0"
                    delay={0.2}
                    title={<span className="pe-8">Scalable Solutions:</span>}
                    items={[
                      <>
                        <b>
                          <i>
                            Outsourcing models that grow with your business.
                          </i>
                        </b>
                      </>,
                      <>Build agile teams without the overheads.</>,
                      <>Flexible contracts to match dynamic needs.</>,
                    ]}
                  />
                  <BusinessCard
                    delay={0.3}
                    title={<span className="pe-8">Cost Optimization:</span>}
                    items={[
                      <>
                        <b>
                          <i>Streamline operations while reducing expenses.</i>
                        </b>
                      </>,
                      <>Leverage cost-effective global talent pools.</>,
                      <>Optimize processes for long-term efficiency.</>,
                    ]}
                  />
                </div>
              </div>
              <div className="md:order-2 order-1 md:col-span-2">
                <FadeUp
                  delay={0.4}
                  className="md:px-16 px-0 md:pt-8 md:pb-0 pb-10"
                >
                  <Typo
                    tag="p"
                    size="xl"
                    weight="normal"
                    className="text-pretty"
                  >
                    Clarient isn’t just a provider—we’re a growth partner. Our
                    outsourcing models are designed to flex with your business,
                    reduce costs, and unlock specialized capabilities that
                    accelerate results.
                  </Typo>
                </FadeUp>
              </div>
              <div className="grid md:grid-cols-3 md:col-span-3 md:col-start-2 -mt-0.5 relative z-20 order-3">
                <BusinessCard
                  className="md:border-r-0 lg:rounded-bl-lg"
                  delay={0.2}
                  title={<span className="pe-8">Specialized Expertise:</span>}
                  items={[
                    <>
                      <b>
                        <i>
                          Access industry-specific professionals ready to
                          deliver results.
                        </i>
                      </b>
                    </>,
                    <>From DevOps to design, we cover all niches.</>,
                    <>Rapid onboarding ensures zero downtime.</>,
                  ]}
                />
                <BusinessCard
                  className="md:border-r-0"
                  delay={0.3}
                  title={<span className="pe-8">Global Coverage:</span>}
                  items={[
                    <>
                      <b>
                        <i>Seamless outsourcing across borders.</i>
                      </b>
                    </>,
                    <>24/7 support across time zones.</>,
                    <>Talent from over 15+ countries.</>,
                  ]}
                />
                <BusinessCard
                  className="lg:rounded-br-lg"
                  delay={0.3}
                  title={
                    <span className="pe-8">
                      Proven Expertise Across Industries:
                    </span>
                  }
                  items={[
                    <>
                      <b>
                        <i>
                          Decades of experience delivering for businesses like
                          yours.
                        </i>
                      </b>
                    </>,
                    <>Custom outsourcing models aligned with your goals.</>,
                    <>Efficient workflows designed for seamless integration.</>,
                  ]}
                />
              </div>
            </div>
          </Container>
        </FadeIn>
        <AiCtaBg
          image="/images/services/aicta.jpg"
          title="Capability at the Core"
          titleClass="lg:max-w-[22rem]"
          description="Clarient delivers outsourcing solutions that adapt to your business needs, ensuring flexibility, efficiency, and growth."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Scale with&nbsp; <b>confidence</b>
              </>
            ),
            typeForm: "partner",
          }}
        />
      </section>
      <section className="md:pt-20 pt-10 bg-[#F5F5F5]" id="matrix">
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-8">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  className="text-pretty leading-none mb-4"
                  isTitle
                >
                  Tailored Outsourcing Solutions for Agile and Scalable
                  Operations
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty pe-14">
                  Most outsourcing stops at cost savings. Ours fuels
                  transformation. Clarient delivers integrated, scalable
                  outsourcing solutions that help you move faster, build
                  smarter, and operate leaner—without compromising control or
                  quality.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <AiBuiltCardGrid
            className="md:[&>.aiBuiltCard]:min-h-[11rem] md:pt-20 pt-10"
            cards={[
              {
                title: "Outsourcing Technology & Design Teams",
                items: [
                  "Enhance your capabilities with specialized technology and design teams that integrate seamlessly with your business.",
                ],
                delay: 0.2,
              },
              {
                title: "Global Capability Centers (GCCs)",
                items: [
                  "Leverage research, analytics, and process outsourcing through scalable GCCs that deliver excellence.",
                ],
                delay: 0.3,
              },
              {
                title: "Outsourcing Readiness Assessment",
                items: [
                  "Evaluate your outsourcing potential and create a strategic roadmap tailored to your goals.",
                ],
                delay: 0.4,
              },
              {
                title: "Outsourcing Governance",
                items: [
                  "Ensure smooth operations and compliance with structured outsourcing governance frameworks.",
                ],
                delay: 0.5,
              },
              {
                title: "Cloud & DevOps Outsourcing",
                items: [
                  "Accelerate innovation and reliability with expert cloud and DevOps services.",
                ],
                delay: 0.2,
              },
              {
                title: "Creative Process Outsourcing (CPO) Services",
                items: [
                  "We focus on delivering intuitive, user-centric designs that elevate engagement and satisfaction.",
                ],
                delay: 0.3,
              },
              {
                title: "Technical Support Services",
                items: [
                  "Deliver seamless support for your products and services with a globally accessible support model.",
                ],
                delay: 0.4,
              },
            ]}
          />
        </Container>
        <div className="md:pt-20 pt-10 bg-[#ECECEC]">
          <Container isSmall>
            <CountOnUsCard
              title="Count on us being there. Every step of the way!"
              description="Working at the cross-section of technology and design, we bring together incredible talent, insights, and market-smarts to every engagement we’re a part of. For over 27 years, our people have partnered with clients across the globe to decipher what’s next, and help them reimagine, reinvent and transform their businesses."
              author="Harjeet S Gulati"
              designation="Group Chair & CEO"
              authorImage="/images/about/harjeet.png"
            />
          </Container>
        </div>
      </section>
      <section
        id="framework"
        className="md:pt-44 pt-10 md:-mt-24"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="bold"
                  className="text-pretty"
                  isTitle
                >
                  How We Deliver Outcomes That Matter
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo
                  tag="p"
                  size="xl"
                  className="text-pretty mt-4"
                  weight="normal"
                  isTitle
                >
                  At Clarient, delivery isn’t an afterthought—it’s the backbone
                  of our promise. Our framework is designed to maximize speed,
                  quality, and alignment with your business goals. Whether
                  you're scaling teams, transforming operations, or entering new
                  markets, our delivery engine ensures results that are
                  predictable, repeatable, and measurable.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
            <AiFrameworkCardGrid
              cards={[
                {
                  title: "Strategic Alignment",
                  items: [
                    <>
                      <b>
                        We begin by understanding your business, industry, and
                        long-term vision.
                      </b>
                    </>,
                    "Outcome-driven planning tailored to your goals",
                    "Cross-functional stakeholder alignment",
                    "Business-specific delivery models",
                  ],
                },
                {
                  title: "Agile Delivery Models",
                  items: [
                    <>
                      <b>Built to move fast and stay flexible.</b>
                    </>,
                    "Scrum, Kanban, or hybrid agile methodologies",
                    "Modular team structures for quick scale-up/down",
                    "Milestone-driven governance and visibility",
                  ],
                  delay: 0.1,
                },
                {
                  title: "Global Talent Orchestration",
                  items: [
                    <>
                      <b>We source and manage talent with precision.</b>
                    </>,
                    "Access to pre-vetted professionals across 15+ countries",
                    "Onshore, nearshore, and offshore flexibility",
                    "Cultural fit and domain expertise prioritized",
                  ],
                  delay: 0.2,
                },
                {
                  title: "Operational Governance",
                  items: [
                    <>
                      <b>Your control, our execution.</b>
                    </>,
                    "Transparent SLAs, KPIs, and real-time dashboards",
                    "Risk mitigation and compliance frameworks",
                    "Structured change management",
                  ],
                  delay: 0.3,
                  className: "sm:!border-b md:!border-0",
                },
                {
                  title: "Continuous Improvement",
                  items: [
                    <>
                      <b>We never stop optimizing.</b>
                    </>,
                    "Built-in feedback loops and performance audits",
                    "Innovation and automation opportunities identified",
                    "Evolving delivery playbooks for evolving needs",
                  ],
                  delay: 0.4,
                },
              ]}
            />
          </div>
        </Container>
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
                      Insights to Guide Your Outsourcing Journey
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <Typo tag="p" size="xl" className="text-pretty">
                      From success stories to actionable strategies, discover
                      how Clarient makes outsourcing impactful.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[4, 1, 9, 3]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch valueIndex={3} />
        </Container>
      </section>
    </>
  );
};

export default StrategicOutsourcingAndStaffAugmentation;
