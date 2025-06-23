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
import { aiServicesSeo } from "@/data/seoData";
export const metadata: Metadata = aiServicesSeo;
// end seo

const Services = () => {
  return (
    <>
      <PageBanner
        title="The Future of AI Isn’t Artificial — It’s Collaborative."
        description="The best AI feels invisible: it slots into your workflows, learns from your team, and quietly lifts margins. That’s our standard."
        action={{
          className: "uppercase",
          children: (
            <>
              Partner with <b className="ms-1">AI That Thinks Beyond</b>
            </>
          ),
          typeForm: "partner",
        }}
        video={{
          source: "/video/bannerAICore.mov",
        }}
        className="bg-[url(/images/digitalTransformationideoBg1.png)]"
      />
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="AI Service"
        nav={[
          {
            id: "aigap",
            label: "The AI Gap",
          },
          {
            id: "perspective",
            label: "Our Perspective",
          },
          {
            id: "solutions",
            label: "AI Solutions",
          },
          // {
          //   id: "success",
          //   label: "AI Success",
          // },
          {
            id: "framework",
            label: "Our Framework",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section
        id="aigap"
        className="md:pt-28 pt-14 md:pb-20 pb-10 md:bg-[url('/images/services/overviewBg.jpg')] bg-repeat bg-cover bg-center"
      >
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-6">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  className="text-pretty leading-none mb-4"
                  isTitle
                >
                  The AI Gap. What the Numbers Say.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  From strategy to scale, the AI journey is often fragmented and
                  filled with friction. These insights highlight the widening
                  gap between early experimentation and enterprise-wide
                  execution—and why bridging that gap is now a competitive
                  imperative. At Clarient, we help you move from siloed pilots
                  to integrated, intelligent systems that drive measurable
                  value. Because insight alone isn’t enough—it’s what you do
                  with it that counts.
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
                    title="68%"
                    description="Executives prioritize AI for strategic insights over
                        automation alone."
                  />
                  <AIGapCard
                    title="35%"
                    description="Companies with AI-driven decision-making pivot 2x faster
                        during disruptions."
                    delay={0.1}
                  />
                  <AIGapCard
                    title="92%"
                    description="C-suite leaders say AI is fundamental to business
                        success—not just an add-on."
                    delay={0.2}
                  />
                  <AIGapCard
                    title="35%"
                    description="Organizations face roadblocks in scaling AI beyond pilot
                        programs."
                    delay={0.2}
                  />
                  <AIGapCard
                    title="79%"
                    description="AI-driven enterprises experience a direct boost in
                        market dominance and revenue."
                    className="sm:col-span-2"
                    delay={0.3}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="perspective">
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
                    AI That Works for Your Business, Not Just in Theory.
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
                    title="Business-First Artificial Intelligence"
                    items={[
                      "Solutions tied to KPIs, not just technical benchmarks.",
                    ]}
                  />
                  <BusinessCard
                    delay={0.3}
                    title={
                      <>
                        Scalable
                        <br /> by Design
                      </>
                    }
                    items={[
                      "Architectured for enterprise adoption, not just pilots.",
                    ]}
                  />
                </div>
              </div>
              <div className="md:order-2 order-1">
                <FadeUp
                  delay={0.3}
                  className="md:px-16 px-0 md:pt-8 md:pb-0 pb-10"
                >
                  <Typo
                    tag="p"
                    size="xl"
                    weight="normal"
                    className="text-pretty"
                  >
                    AI adoption is complex, but success doesn’t have to be. At
                    Clarient, we bridge the gap between AI potential and
                    real-world impact. Our AI solutions are engineered for
                    measurable business transformation - tailored, scalable, and
                    built for decision-makers.
                  </Typo>
                </FadeUp>
              </div>
              <div className="grid md:grid-cols-2 md:col-start-2 -mt-0.5 relative z-20 order-3">
                <BusinessCard
                  className="md:rounded-bl-lg"
                  delay={0.3}
                  title="Governance & Compliance"
                  items={[
                    "Built-in ethical AI frameworks for regulated industries.",
                  ]}
                />
                <BusinessCard
                  className="md:border-l-0 md:rounded-br-lg"
                  delay={0.4}
                  title={
                    <>
                      Continuous
                      <br /> Optimization
                    </>
                  }
                  items={["AI that improves with use, not just deployment."]}
                />
              </div>
            </div>
          </Container>
        </FadeIn>
        <AiCtaBg
          image="/images/services/aicta.jpg"
          title="AI at the Core"
          description="Clarient doesn’t just build AI tools—we build AI teammates. Systems that learn your goals, adapt to your challenges, and accelerate what your people do best."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Partner with&nbsp;
                <span className="font-bold">AI That Thinks Beyond</span>
              </>
            ),
            typeForm: "partner",
          }}
        />
      </section>
      <section className="md:pt-20 pt-10 bg-[#F5F5F5]" id="solutions">
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
                  AI Built for the Way You Work, And the Future You’re Building.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty pe-14">
                  Clarient transforms AI from a tool into a trusted partner. Our
                  solutions don’t just process data; they enhance
                  decision-making, optimize operations, and drive long-term
                  growth; designed to think and act like a true extension of
                  your business.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <AiBuiltCardGrid
            className="md:pt-20 pt-10"
            cards={[
              {
                title: "Advisory & Consulting",
                items: [
                  "AI strategies aligned with human insight and business acumen.",
                  "Ethics-driven AI governance for sustainable innovation.",
                  "Custom AI roadmaps for high-impact transformation.",
                ],
                delay: 0.2,
              },
              {
                title: "Engineering & Build",
                items: [
                  "AI models that adapt and improve with real-world data.",
                  "Cloud-native, scalable architectures built for agility.",
                  "Machine learning pipelines designed for continuous intelligence.",
                ],
                delay: 0.3,
              },
              {
                title: "Operations & Acceleration",
                items: [
                  "Real-time AI optimization that keeps businesses a step ahead.",
                  "Decision intelligence that turns insights into action.",
                  "Integrated AI solutions that scale dynamically.",
                ],
                delay: 0.4,
              },
              {
                title: "AI-driven Outsourcing",
                items: [
                  "Intelligent automation that enhances—not replaces—human expertise.",
                  "AI-powered customer experience solutions that feel truly human.",
                  "AI-driven workforce augmentation that accelerates productivity.",
                ],
                delay: 0.5,
              },
            ]}
          />
        </Container>
      </section>
      <section
        className="md:pt-24 pt-10 md:-mt-24"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div className="md:pt-20" id="framework">
          <Container isSmall>
            <CountOnUsCard
              title="Count on us being there. Every step of the way!"
              description="Working at the cross-section of technology and design, we bring together incredible talent, insights, and market-smarts to every engagement we’re a part of. For over 27 years, our people have partnered with clients across the globe to decipher what’s next, and help them reimagine, reinvent and transform their businesses."
              author="Harjeet S Gulati"
              designation="Group Chair & CEO"
              authorImage="/images/about/harjeet.png"
            />
            <div className="grid md:grid-cols-12 md:pt-20 pt-10">
              <div className="md:col-span-7">
                <FadeUp>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="bold"
                    className="text-pretty"
                    isTitle
                  >
                    The Clarient AI Framework
                  </Typo>
                  <Typo
                    tag="h3"
                    size="h3"
                    weight="normal"
                    className="text-pretty"
                    isTitle
                  >
                    From Insight to Impact
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
                    AI’s true potential lies not in what it can do, but in what
                    it should do for your business. At Clarient, we engineer AI
                    systems with purpose—transforming raw data into deliberate
                    action, and latent potential into measurable advantage.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Data Intelligence & Model Development",
                    items: [
                      "Structure, cleanse, and optimize data.",
                      "Develop AI models with accuracy and security.",
                    ],
                  },
                  {
                    title: "AI Vision & Business Alignment",
                    items: [
                      "Identify high-impact AI opportunities.",
                      "Align AI with strategic business goals.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Seamless Integration & Automation",
                    items: [
                      "Embed AI into existing workflows and systems.",
                      "Ensure interoperability and minimal disruption.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Scalability & Enterprise Adoption",
                    items: [
                      "AI solutions that evolve with your organization.",
                      "Train teams for AI adoption and maximize ROI.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Performance Monitoring & Continuous Improvement",
                    items: [
                      "AI model tuning, governance, and compliance.",
                      "Future-proofing with ongoing innovation.",
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
                      AI That Works—Insights That Matter.
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <Typo tag="p" size="xl" className="text-pretty">
                      Our AI resource hub delivers grounded insights, expert
                      perspectives, and real-world applications to help you
                      harness AI for smarter decision-making.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[2, 3, 8, 10]} className="pt-10" />
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

export default Services;
