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
import { enterprisePlatformsSeo } from "@/data/seoData";
export const metadata: Metadata = enterprisePlatformsSeo;

// end seo
const EnterprisePlatforms = () => {
  return (
    <>
      <PageBanner
        title="Redefine Efficiency with Intelligent Enterprise Solutions"
        description="Bridge gaps, enhance workflows, and drive measurable impact with our expert-driven cloud and platform services."
        action={{
          className: "uppercase",
          typeForm: "contact",
          children: (
            <>
              Let’s Elevate <b className="ms-1">Your Business</b>
            </>
          ),
        }}
        video={{
          source: "/video/bannerAICore.mov",
        }}
        className="bg-[url(/images/digitalTransformationideoBg1.png)]"
      />
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Enterprise Platform"
        nav={[
          {
            id: "theImpact",
            label: "The Impact",
          },
          {
            id: "clarientAdvantage",
            label: "Clarient Advantage",
          },
          {
            id: "serviceMatrix",
            label: "Service Matrix",
          },
          {
            id: "deliveryFramework",
            label: "Delivery Framework",
          },
          {
            id: "insights",
            label: "Insights ",
          },
        ]}
      />
      <section
        id="theImpact"
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
                  Measurable Impact Through Smarter Integrations
                </Typo>
              </FadeUp>
            </div>
          </div>
        </Container>
        <div className="md:pt-12 pt-8">
          <Container isSmall>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-10">
                <div className="grid sm:grid-cols-3 gap-6">
                  <AIGapCard
                    title="30%"
                    subTitle="Faster Cloud Migrations"
                    description="Reduce downtime and accelerate cloud adoption with expert-driven execution."
                    delay={0.2}
                  />
                  <AIGapCard
                    title="2X"
                    subTitle="Greater Operational Efficiency"
                    description="Transform business processes with seamless system integration."
                    delay={0.3}
                  />
                  <AIGapCard
                    title="40%"
                    subTitle="Cost Savings in Application Management"
                    description="Drive profitability with optimized, high-performance platforms."
                    delay={0.4}
                  />
                  <AIGapCard
                    title="90% +"
                    subTitle="Customer Retention"
                    description="Building long-term partnerships through consistent value and measurable outcomes."
                    delay={0.5}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="clarientAdvantage">
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
                    Enterprise Solutions That Scale with You
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-4 md:pt-20 pt-4">
              <div className="md:order-1 md:col-span-2 order-2">
                <div className="grid md:grid-cols-2">
                  <BusinessCard
                    className="md:border-r-0"
                    delay={0.2}
                    title="Effortless System Unification"
                    items={[
                      "Seamlessly integrate applications, teams, and workflows for uninterrupted operations and enhanced collaboration",
                    ]}
                  />
                  <BusinessCard
                    delay={0.3}
                    title="Scalability for Growth"
                    items={[
                      "Future-ready, cloud-driven solutions that evolve with your business and adapt to changing demands.",
                    ]}
                  />
                </div>
              </div>
              <div className="md:order-2 md:col-span-2 order-1">
                <FadeUp
                  delay={0.5}
                  className="lg:px-16 md:px-10 px-0 md:pt-8 md:pb-0 pb-10"
                >
                  <Typo
                    tag="p"
                    size="xl"
                    weight="normal"
                    className="text-pretty"
                  >
                    Clarient goes beyond platform implementation—we drive
                    transformation. With deep expertise and a tailored,
                    business-first approach, we build intelligent systems that
                    streamline operations, fuel growth, and deliver measurable
                    impact.
                  </Typo>
                </FadeUp>
              </div>
              <div className="grid md:grid-cols-4 md:col-span-4 md:col-start-0 -mt-0.5 relative z-20 order-3">
                <BusinessCard
                  delay={0.1}
                  className="md:border-r-0 md:rounded-bl-lg"
                  title="Agility & Efficiency"
                  items={[
                    "OMove beyond legacy limitations with real-time data access, faster decision-making, and streamlined workflows.",
                  ]}
                />
                <BusinessCard
                  className="md:border-r-0"
                  delay={0.2}
                  title="Enterprise-Grade Security"
                  items={[
                    "Stay compliant and protected with proactive threat detection and industry-aligned security frameworks.",
                  ]}
                />
                <BusinessCard
                  className="md:border-r-0"
                  delay={0.3}
                  title="Proven Expertise"
                  items={[
                    "Deep experience across industries, delivering end-to-end platform solutions with precision and confidence.",
                  ]}
                />
                <BusinessCard
                  className="md:rounded-br-lg"
                  delay={0.4}
                  title="Tailored Approach"
                  items={[
                    "No two enterprises are the same. We architect solutions aligned to your goals, timelines, and tech stacks.",
                  ]}
                />
              </div>
            </div>
          </Container>
        </FadeIn>
        <AiCtaBg
          image="/images/services/aicta.jpg"
          title="Intelligence at the Core"
          titleClass="lg:max-w-[22rem]"
          description="Clarient doesn’t just integrate systems—we streamline enterprise success. We create intelligent platforms that connect, scale, and perform."
          action={{
            className: "uppercase max-sm:px-3 max-sm:text-xs",
            // size: "large",
            children: (
              <>
                Streamline Your Enterprise,&nbsp; <b>the Smart Way</b>
              </>
            ),
            typeForm: "contact",
          }}
        />
      </section>
      <section className="md:pt-20 pt-10 bg-[#F5F5F5]" id="serviceMatrix">
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
                  Enterprise Solutions That Drive Real Business Outcomes
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty pe-14">
                  At Clarient, we don’t just integrate systems—we deliver
                  business outcomes. Our solutions are designed to improve
                  efficiency, accelerate decision-making, and future-proof
                  enterprise operations.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <AiBuiltCardGrid
            className="md:pt-20 pt-10"
            cards={[
              {
                title: "Optimize Customer Engagement",
                items: [
                  <>
                    <b>
                      Deliver exceptional customer experiences with seamless
                      content management and automation.
                    </b>
                  </>,
                  <>
                    <b>Salesforce CMS:</b> AI-powered automation to personalize
                    customer interactions and streamline processes.
                  </>,
                  <>
                    <b>HubSpot CMS:</b> Unified platform for marketing, sales,
                    and service, ensuring a seamless customer journey.
                  </>,
                ],
                delay: 0.2,
              },
              {
                title: "Enhance IT Infrastructure",
                items: [
                  <>
                    <b>
                      Modernize operations with secure, scalable, and
                      high-performance cloud solutions.
                    </b>
                  </>,
                  <>
                    <b>IBM Cloud:</b> AI-driven cloud solutions designed for
                    enterprise agility and security.
                  </>,
                  <>
                    <b>Microsoft Cloud:</b> Flexible, secure cloud environments
                    built for mission-critical workloads.
                  </>,
                  <>
                    <b>AWS:</b> High-speed, scalable cloud computing to power
                    enterprise digital transformation.
                  </>,
                ],
                delay: 0.3,
              },
              {
                title: "Maximize Data-Driven Decisions",
                items: [
                  <>
                    <b>
                      Harness powerful analytics and data management tools to
                      drive intelligent business decisions.
                    </b>
                  </>,
                  <>
                    <b>Databricks:</b> AI-powered data engineering, machine
                    learning, and real-time analytics.
                  </>,
                  <>
                    <b>Snowflake:</b> Scalable cloud data warehousing for
                    seamless insights and collaboration.
                  </>,
                ],
                delay: 0.4,
              },
              {
                title: "Automate & Streamline Operations",
                items: [
                  <>
                    <b>
                      Improve workflow efficiency and IT service management with
                      automation-driven platforms.
                    </b>
                  </>,
                  <>
                    <b>ServiceNow:</b> Optimize enterprise workflows, automate
                    processes, and enhance IT service management.
                  </>,
                ],
                delay: 0.5,
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
        id="deliveryFramework"
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
                  Agile, Strategic, Impactful
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
                  At Clarient, we deliver scalable, high-impact solutions
                  through an agile and results-driven approach, ensuring
                  successful digital transformation from ideation to execution.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
            <AiFrameworkCardGrid
              cards={[
                {
                  title: "Discovery & Alignment",
                  items: [
                    "We collaborate to understand your goals, market, and challenges, ensuring a clear vision for success.",
                  ],
                  delay: 0,
                },
                {
                  title: "Solution Design & Prototyping",
                  items: [
                    "We design flexible, scalable solutions and validate them through prototypes and testing before full-scale development.",
                  ],
                  delay: 0.1,
                },
                {
                  title: "Agile Development & Execution",
                  items: [
                    "Using agile methodologies, we deliver iterative solutions that adapt to feedback and evolving needs.",
                  ],
                  delay: 0.2,
                },
                {
                  title: "Quality Assurance & Testing",
                  items: [
                    "We ensure top-notch performance, security, and scalability with rigorous quality checks.",
                  ],
                  delay: 0.3,
                },
                {
                  title: "Deployment & Support",
                  items: [
                    "We deploy seamlessly with minimal disruption, offering continuous post-launch support and optimization.",
                  ],
                  delay: 0.4,
                },
                {
                  title: "Scaling for Growth",
                  items: [
                    "We help you scale solutions and optimize for ongoing innovation and competitive advantage.",
                  ],
                  delay: 0.5,
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
                <div className="md:col-span-8">
                  <FadeUp>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      className="text-pretty mb-2"
                      isTitle
                    >
                      The future of enterprise efficiency starts with the right
                      insights.
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <Typo tag="p" size="xl" className="text-pretty">
                      Discover how leading organizations are driving scalable
                      transformation with cloud, data, and platform-driven
                      innovation.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[7, 4, 5, 9]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch valueIndex={6} />
        </Container>
      </section>
    </>
  );
};

export default EnterprisePlatforms;
