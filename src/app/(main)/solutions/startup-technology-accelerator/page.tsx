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
import { startupTechnologyAcceleratorSeo } from "@/data/seoData";
export const metadata: Metadata = startupTechnologyAcceleratorSeo;
// end seo

const StartupTechnologyAccelerator = () => {
  return (
    <>
      <PageBanner
        title="Launch Big. Build Right. Scale Fast."
        description="The Startup Technology Accelerator Program is built for founders who are ready to go beyond the prototype through deep technical partnership, co-creation, and relentless iteration."
        action={{
          children: (
            <>
              <span className="uppercase">
                Schedule a <b>Strategic Consultation</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077232937",
          style: { transform: "scaleX(-1)" },
          className:
            "bg-[url(/images/startupTechnologyAcceleratorVideoBg.jpg)]",
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
        pageName="Technology Accelerator"
        nav={[
          {
            id: "theChallenge",
            label: "The Challenge",
          },
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "solutions",
            label: "Solutions",
          },
          {
            id: "clarientAdvantage",
            label: "Clarient Advantage",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section className="md:pt-24 pt-12" id="theChallenge">
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
                  The MVP Isn’t the Finish Line—It’s the Starting Block
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                  Great ideas are just the beginning. For most founders, the
                  real challenge starts after the MVP—when the pressure to scale
                  fast meets the reality of unclear product strategy, tech debt,
                  and team limitations. The transition from prototype to
                  product-market fit is the hardest stretch—raw ambition must
                  meet disciplined execution. It’s where bold ideas are tested,
                  refined, and made real. And it’s where too many promising
                  ventures lose steam.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3} className="md:block hidden mt-4">
                <Image
                  src="/images/industries/coreOfferings/imgIntro.png"
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
                  At Clarient, we’ve seen it all: rushed builds, unscalable
                  codebases, short-term fixes that stall long-term momentum.
                  Startups don’t just need more code—they need strategic
                  collaborators who think like founders and build like veterans.
                </Typo>
                <Typo tag="p" size="2xl" className="text-pretty mt-3">
                  That’s why we created the Startup Technology Accelerator—to
                  help early-stage teams cross the execution gap with
                  confidence, clarity, and serious engineering firepower.
                </Typo>
              </FadeUp>
            </div>
            <div className="md:hidden block mt-4">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/industries/coreOfferings/imgIntro.png"
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
          style={{
            background: "linear-gradient(180deg, #EEE 27.25%, #FFF 100%)",
          }}
        >
          <div className="md:pt-20 pt-10" id="overview">
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-9">
                  <FadeUp>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      isTitle
                      className="text-pretty leading-none"
                    >
                      Your Strategic, Technical, and Execution Partner in One
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-9">
                  <FadeUp delay={0.2}>
                    <Typo tag="p" size="lg" className="text-pretty mt-2">
                      Clarient’s Startup Technology Accelerator Program is a
                      hands-on growth engine designed for early-stage teams. We
                      embed with founders to validate ideas, build digital
                      products, and evolve platforms that scale—with clarity and
                      speed.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
                <div className="lg:col-span-10 lg:col-start-2">
                  <ChallengesCardGrid
                    cards={[
                      {
                        title: "Embedded Product Teams",
                        items: [
                          "Cross-functional experts work as an extension of your core team.",
                        ],
                        delay: 0,
                      },
                      {
                        title: "From MVP to Market Fit",
                        items: [
                          "Support across every stage: discovery, build, launch, iterate.",
                        ],
                        delay: 0.1,
                      },
                      {
                        title: "Founder-Led, Product-First Approach",
                        items: [
                          "We think like entrepreneurs, execute like engineers.",
                        ],
                        delay: 0.2,
                      },
                      {
                        title: "No Black Boxes, Just Clarity",
                        items: [
                          "Transparent collaboration, weekly momentum, real outcomes.",
                        ],
                        delay: 0.3,
                      },
                      {
                        title: "Global Product Experience",
                        items: [
                          "Platforms built and scaled across 15+ countries and industries.",
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
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="lg:col-span-6 col-span-7">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      CORE OFFERINGS
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
                      Execution as a Service, Designed for Startups
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
                      Smart execution meets product-first thinking in Clarient’s
                      Startup Technology Accelerator Program. Whether you’re
                      post-MVP or preparing for your next funding round,
                      Clarient helps you turn vision into traction—with speed,
                      clarity, and engineering firepower.
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
                    image: "/images/industries/coreOfferings/img0.jpg",
                    title: "Ideation & Product Validation",
                    listItems: [
                      "Shape bold ideas into market-ready blueprints. We define user journeys, test assumptions, and align vision with product-market reality—before a single line of code is written.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/coreOfferings/img1.jpg",
                    title: "Co-Creation of Digital Products",
                    listItems: [
                      "Our cross-functional teams embed with yours to design, build, and launch scalable platforms—fast. From MVPs to relaunches, we turn product ambition into reality.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/coreOfferings/img2.jpg",
                    title: "Maintenance & Infrastructure Support",
                    listItems: [
                      "Focus on growth—we’ll handle the rest. Our ongoing support ensures reliability, performance, and scalability, long after launch.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/coreOfferings/img3.jpg",
                    title: "Continuous Improvement & Iteration",
                    listItems: [
                      "We turn feedback into features. Using real-time insights, we refine UX, add capabilities, and evolve your product to meet shifting market needs.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
        </div>
        <SolutionCtaBg
          image="/images/solutions/startupCTA.jpg"
          title="Momentum Starts with the Right Partner"
          description="Founders move fast—but sustainable growth demands clarity, collaboration, and execution that scales. That’s where we come in."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Book a&nbsp; <b>Discovery Call</b>
              </>
            ),
            typeForm: "contact",
          }}
        />
      </section>
      <section id="clarientAdvantage">
        <div className="md:pt-20 pt-10">
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
                    ADVANTAGE
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-balance leading-none"
                  >
                    Built by Builders. Trusted by Innovators.
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    Clarient combines the discipline of a consultancy with the
                    energy of a startup. We bring global product experience,
                    user-first design thinking, and the kind of execution
                    mindset every founder needs in their corner.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:py-[3.5rem] py-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "We Co-Create, Not Just Deliver",
                    items: [
                      "You don’t hand off a brief, you gain a thought partner who’s invested in your outcome.",
                    ],
                    delay: 0,
                  },
                  {
                    title: "Clarity Before Code",
                    items: [
                      "We prioritize product-market fit, user validation, and architectural foresight, before the first sprint.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Scalable by Design",
                    items: [
                      "We build tech foundations that can evolve with your traction, not crack under it.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "UX-Led, Data-Informed",
                    items: [
                      "Great experiences create loyal users. We bake in user insight from the first prototype to every iteration.",
                    ],
                    delay: 0.3,
                  },
                  {
                    title: "Flexible Engagement Models",
                    items: [
                      "Whether you need a sprint-ready team or a full embedded product pod, we flex to your startup stage and runway.",
                    ],
                    delay: 0.4,
                  },
                  {
                    title: "Reliable, Transparent, and Long-Term Focused",
                    items: [
                      "No black boxes. No overpromises. Just consistent, strategic execution from a team that shows up.",
                    ],
                    delay: 0.5,
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

export default StartupTechnologyAccelerator;
