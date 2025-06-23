import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import {
  AiBuiltCardGrid,
  AiCtaBg,
  AiFrameworkCardGrid,
  BeyondCard,
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
import { customApplicationDevelopmentSeo } from "@/data/seoData";
export const metadata: Metadata = customApplicationDevelopmentSeo;
// end seo

const CustomApplicationDevelopment = () => {
  return (
    <>
      <PageBanner
        title="Custom Software. Built for Business. Designed for Impact."
        description="You don’t need another development partner. You need a technology enabler—one that understands your business, anticipates challenges, and builds software that moves the needle."
        action={{
          children: (
            <>
              <span className="uppercase">
                Let’s Build<b className="ms-1">Smarter Software</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        video={{
          source: "/video/bannerAICore.mov",
        }}
        className="bg-[url(/images/digitalTransformationideoBg1.png)]"
      />

      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Application Development"
        nav={[
          {
            id: "theOpportunity",
            label: "The Opportunity",
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
            id: "impact",
            label: "Impact",
          },
          {
            id: "insights",
            label: "Insights ",
          },
        ]}
      />

      <section
        id="theOpportunity"
        className="md:pt-28 pt-14 md:pb-20 pb-10 bg-[url('/images/services/overviewBg.jpg')] bg-repeat bg-cover bg-center"
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
                  Why Custom Software Matters for Your Business
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  If you're here, you're probably exploring a smarter way to
                  build software. That could mean you’re dealing with
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
                  <BeyondCard
                    className="sm:min-h-30"
                    title="Off-the-Shelf Limitations"
                    description="Accelerate go-to-market with streamlined development"
                    delay={0.1}
                    descriptionSize="sm"
                  />
                  <BeyondCard
                    className="sm:min-h-30"
                    title="Scalability Challenges"
                    description="Systems that break as you grow."
                    delay={0.2}
                    descriptionSize="sm"
                  />
                  <BeyondCard
                    className="sm:min-h-30"
                    title="Operational Bottlenecks"
                    description="Sluggish processes and outdated technology slowing you down."
                    delay={0.3}
                    descriptionSize="sm"
                  />
                  <BeyondCard
                    className="sm:min-h-30"
                    title="Competitive Pressure"
                    description="SThe need to innovate faster than your rivals."
                    delay={0.3}
                    descriptionSize="sm"
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
                    What Sets Us Apart? Business-First Software Development
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:pt-20 pt-4">
              <div className="md:order-1 order-2">
                <div className="grid md:grid-cols-2">
                  <BusinessCard
                    className="md:border-r-0"
                    delay={0.2}
                    title="Strategic-First Approach"
                    items={[
                      "We align technology with business goals to maximize ROI and long-term scalability.",
                    ]}
                  />
                  <BusinessCard
                    delay={0.3}
                    title="Agile, Yet Impact-Driven"
                    items={[
                      "Rapid, iterative development with a clear focus on reducing time-to-market.",
                    ]}
                  />
                </div>
              </div>
              <div className="md:order-2  order-1">
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
                    Our focus isn’t just building software, it’s driving
                    outcomes. We combine deep business intelligence with
                    world-class engineering to create software that works
                    smarter, scales better, and delivers real value.
                  </Typo>
                </FadeUp>
              </div>
              <div className="grid md:grid-cols-2 md:col-start-2 -mt-0.5 relative z-20 order-3">
                <BusinessCard
                  className="md:rounded-bl-lg"
                  delay={0.3}
                  title="Security & Compliance, Built-In"
                  items={[
                    "Not an afterthought. Enterprise-grade security and compliance at every stage.",
                  ]}
                />
                <BusinessCard
                  className="md:border-l-0 md:rounded-br-lg"
                  delay={0.4}
                  title="High-Performance, Future-Ready"
                  items={[
                    "Optimized architecture, cloud-native solutions, and seamless scalability.",
                  ]}
                />
              </div>
            </div>
          </Container>
        </FadeIn>
        <AiCtaBg
          image="/images/services/aicta.jpg"
          title="Software with Purpose"
          titleClass="lg:max-w-[25rem]"
          description="We build future-ready software aligned to your business, not just your backlog, accelerating innovation where it matters most."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Build Custom.&nbsp; <b>Build Smarter.</b>
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
                  Beyond Development: A Process Designed for Success
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
                  Every step in our framework is designed around your goals. We
                  ensure that you have clarity at the very beginning, agility
                  during execution, and growth long after launch.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <AiBuiltCardGrid
            className="md:pt-20 pt-10 md:[&>.aiBuiltCard]:min-h-[11rem]"
            cards={[
              {
                title: "Discovery & Strategy",
                items: [
                  "We start with deep business analysis—understanding your goals, mapping opportunities, and defining the right technology approach.",
                ],
                delay: 0.2,
              },
              {
                title: "Agile Development & Execution",
                items: [
                  "Using iterative, feedback-driven development, we build, refine, and optimize by ensuring faster time-to-market and greater flexibility.",
                ],
                delay: 0.3,
              },
              {
                title: "Performance, Security & Optimization",
                items: [
                  "Our solutions are high-performance, secure, and scalable, designed to keep up with your evolving business needs.",
                ],
                delay: 0.4,
              },
              {
                title: "Continuous Evolution & Support",
                items: [
                  "Technology never stands still, neither do we. We provide ongoing support, feature enhancements, and optimizations to ensure long-term success.",
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
        id="impact"
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
                  High-Impact Custom Software Development
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
            <AiFrameworkCardGrid
              cards={[
                {
                  title: "Enterprise Software Development",
                  items: [
                    "Seamless, scalable, and custom-built enterprise applications that optimize workflows, automate operations, and fuel business growth. Whether you're modernizing legacy systems or building from the ground up, we ensure your software is future-proof and high-performing.",
                  ],
                },
                {
                  title: "Mobile & Cross-Platform Apps",
                  items: [
                    "From iOS and Android to cross-platform solutions, we build intuitive, high-performance mobile applications that enhance engagement, boost conversions, and provide seamless digital experiences.",
                  ],
                  delay: 0.1,
                },
                {
                  title: "SaaS & Multi-Tenant Platforms",
                  items: [
                    "We develop scalable SaaS applications that cater to multiple users, businesses, and industries—equipped with secure, multi-tenant architectures, AI-powered insights, and rapid deployment capabilities.",
                  ],
                  delay: 0.2,
                },
                {
                  title: "Microservices & API Development",
                  items: [
                    "Move beyond rigid monolithic structures. We help businesses break down complex applications into scalable, agile microservices, enabling faster innovation and seamless integrations with third-party tools and platforms.",
                  ],
                  delay: 0.3,
                  className: "sm:!border-b md:!border-0",
                },
                {
                  title: "Cloud-Native & Secure Applications",
                  items: [
                    "Built for AWS, Azure, and Google Cloud, our cloud-native applications ensure optimal performance, security, and scalability—so your business is always ready for growth.",
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
                <div className="md:col-span-8">
                  <FadeUp>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      className="text-pretty mb-2"
                      isTitle
                    >
                      Browse Custom Development Insights
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[8, 9, 4, 1]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch valueIndex={7} />
        </Container>
      </section>
    </>
  );
};

export default CustomApplicationDevelopment;
