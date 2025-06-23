import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import {
  AiCtaBg,
  AiFrameworkCardGrid,
  BeyondCard,
  BusinessCard,
  Container,
  DifferentiatorsCardGrid,
  ExcitingRole,
  GetInTouch,
  InformedSlider,
  PageBanner,
  Typo,
} from "@/components";
import { FadeUp } from "@/components/animation";

// seo
import type { Metadata } from "next";
import { cloudServicesSeo } from "@/data/seoData";
export const metadata: Metadata = cloudServicesSeo;
// end seo

const Cloud = () => {
  return (
    <>
      <PageBanner
        title="Powering Businesses with the Right Cloud Strategy."
        description="The cloud isn’t just infrastructure—it’s your strategic advantage. Whether you’re migrating, modernizing, or optimizing, we remove complexity and replace it with clarity, speed, and control."
        action={{
          className: "uppercase",
          children: (
            <>
              Talk to a <b className="ms-1">Cloud Expert Today</b>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077233068",
          className: "bg-[url(/images/cloudVideoBg.jpg)]",
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
        pageName="Cloud"
        nav={[
          {
            id: "transformation",
            label: "Cloud Transformation",
          },
          {
            id: "advantage",
            label: "Clarient Advantage",
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
      <section id="transformation" className="md:pt-28 pt-14 md:pb-20 pb-10">
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
                  Beyond IT. The Cloud Unlocks Growth, Agility, and Innovation.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  Every industry is evolving, and cloud-native businesses are
                  outpacing their competitors—moving faster, reducing costs, and
                  staying ahead of disruptions. Are you keeping up, or falling
                  behind?
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Typo tag="p" size="xl" className="text-pretty mt-4">
                  At Clarient, we don’t just migrate workloads—we create
                  intelligent, future-proof cloud ecosystems that help
                  businesses:
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
                  <BeyondCard
                    description="Anticipate change instead of reacting to it."
                    delay={0.1}
                  />
                  <BeyondCard
                    description="Automate inefficiencies that slow teams down."
                    delay={0.2}
                  />
                  <BeyondCard
                    description="Optimize costs so IT drives revenue, not drains it."
                    delay={0.3}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 md:pt-12 pt-6">
              <div className="col-span-12">
                <FadeUp delay={0.3}>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    className="text-pretty text-secondary"
                    isTitle
                  >
                    Wherever you are in your cloud journey, we’ll help you move
                    from uncertainty to unshakable confidence.
                  </Typo>
                </FadeUp>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="advantage" className="md:pt-20 pt-10 bg-[#ECECEC]">
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
                  Stop Guessing. Start Scaling. We Simplify Cloud Complexity.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty pe-4">
                  At Clarient, we take the guesswork out of the cloud. No
                  buzzwords. No bloated architectures. Just smart, scalable
                  solutions that align with your business goals. Whether you’re
                  migrating, modernizing, or managing, we put strategy before
                  servers—so your cloud doesn’t just run, it delivers.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <FadeUp className="pt-10 pb-12">
            <Typo
              tag="h3"
              size="h3"
              weight="bold"
              className="text-pretty lg:text-[1.75rem]"
              isTitle
            >
              Key Differentiators:
            </Typo>
          </FadeUp>
          <DifferentiatorsCardGrid
            cards={[
              {
                title: "Business First, Technology Second",
                items: [
                  "You don’t need cloud for the sake of cloud. You need growth, agility, and resilience. We start with your business objectives and build cloud solutions that accelerate them.",
                ],
                delay: 0.1,
              },
              {
                title: "Seamless Migration, Zero Disruptions",
                items: [
                  "Moving to the cloud shouldn’t be complicated. We ensure a smooth transition that minimizes downtime, maximizes efficiency, and protects your operations.",
                ],
                delay: 0.2,
              },
              {
                title: "Security & Compliance at the Core",
                items: [
                  "Cyber threats aren’t hypothetical. We design cloud architectures with built-in security, compliance, and disaster recovery, so you sleep easy knowing your data is safe.",
                ],
                delay: 0.3,
              },
              {
                title: "Cost-Effective Scaling (No Hidden Surprises)",
                items: [
                  "Most businesses overspend on the cloud without realizing it. We optimize your cloud investment to reduce costs, increase efficiency, and prevent runaway spending.",
                ],
                delay: 0.4,
              },
              {
                title: "AI-Powered Cloud Management",
                items: [
                  "Why manage the cloud manually? Leverage AI-driven insights to optimize infrastructure performance, enhance security, and streamline operations—predict, automate, and accelerate your cloud journey.",
                ],
                delay: 0.5,
              },
            ]}
          />
        </Container>
      </section>
      <section id="matrix" className="bg-[#F5F5F5]">
        <div className="md:pt-20 pt-10 relative z-20">
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
                    Precision-Crafted Cloud Solutions for Smarter Scaling.
                  </Typo>
                  <FadeUp delay={0.1}>
                    <Typo tag="p" size="xl" className="text-pretty">
                      At Clarient, we go beyond basic cloud enablement. We
                      design and deliver integrated cloud strategies that
                      elevate performance, reduce risk, and drive real business
                      outcomes. From seamless migration to intelligent
                      automation, every solution is engineered for clarity,
                      control, and continuous value.
                    </Typo>
                  </FadeUp>
                </FadeUp>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 md:pt-20 pt-4">
              <BusinessCard
                className="md:min-h-[15.5rem] py-10 sm:py-14 md:py-14 md:border-l-0"
                title="Cloud Strategy & Migration"
                items={[
                  "We build a migration roadmap tailored to your business—minimizing risk, maximizing value, and ensuring zero disruptions.",
                ]}
                delay={0.1}
              />
              <BusinessCard
                className="md:min-h-[15.5rem] py-10 sm:py-14 md:py-14 sm:border-l-0"
                title="Cloud Infrastructure Management"
                items={[
                  "Proactive monitoring, cost-efficient resource allocation, and continuous optimization keep your cloud environment performing at its best.",
                ]}
                delay={0.2}
              />
              <BusinessCard
                className="md:min-h-[15.5rem] py-10 sm:py-14 md:py-14 md:border-l-0"
                title="DevOps & CI/CD Automation"
                items={[
                  "We implement automated pipelines that reduce manual errors, speed up software releases, and make deployments seamless.",
                ]}
                delay={0.3}
              />
              <BusinessCard
                className="md:min-h-[15.5rem] py-10 sm:py-14 md:py-14 sm:border-l-0"
                title="AI-Powered Cloud Optimization"
                items={[
                  "With AI-driven insights, your cloud adapts dynamically—optimizing costs, improving performance, and predicting risks before they happen.",
                ]}
                delay={0.4}
              />
            </div>
            <div className="grid grid-cols-12">
              <BusinessCard
                className="lg:col-span-3 sm:col-span-6 col-span-12 lg:col-start-4 md:rounded-bl-lg md:min-h-[15.5rem] py-10 sm:py-14 md:py-14"
                title="Security & Compliance"
                items={[
                  "Security isn’t an afterthought. We integrate robust encryption, compliance frameworks, and real-time threat detection into your cloud.",
                ]}
                delay={0.1}
              />
              <BusinessCard
                className="md:col-span-6 sm:col-span-6 col-span-12 border md:rounded-br-lg md:min-h-[15.5rem] py-10 sm:py-14 md:py-14 sm:border-l-0"
                title="Cloud Platforms"
                items={[
                  "We build, optimize, and manage cloud environments across leading platforms:",
                  <>
                    <b>Amazon Web Services (AWS):</b> Scalable and
                    enterprise-ready solutions
                  </>,
                  <>
                    <b>Microsoft Azure:</b> Secure, hybrid, and AI-powered cloud
                    services
                  </>,
                  <>
                    <b>Google Cloud Platform (GCP):</b> Data-driven innovation
                    and seamless scalability
                  </>,
                  <>
                    <b>IBM Cloud:</b> AI-driven, enterprise-grade cloud
                    infrastructure
                  </>,
                ]}
                delay={0.2}
              />
            </div>
          </Container>
        </div>
        <AiCtaBg
          image="/images/services/aicta.jpg"
          title="Agility at the Core"
          titleClass="lg:max-w-[18rem]"
          description="Cloud is no longer optional. It’s operational. Clarient ensures your cloud journey is secure, scalable, and strategically aligned to your business goals."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Build Smarter. <b className="ms-1">Scale Faster</b>
              </>
            ),
            typeForm: "contact",
          }}
        />
      </section>
      <section
        id="framework"
        className="md:pt-24 pt-12"
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
                  Beyond Implementation: A Proven Framework for Cloud Success.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.1}>
                <Typo
                  tag="p"
                  size="xl"
                  className="text-pretty mt-4"
                  weight="normal"
                  isTitle
                >
                  Success in the cloud isn’t about one-time deployments—it’s
                  about ongoing evolution. Clarient’s delivery framework is
                  designed to align with your business goals from day one,
                  combining strategic foresight with technical precision. Every
                  phase is built to reduce risk, maximize value, and ensure
                  continuous performance.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
            <AiFrameworkCardGrid
              cards={[
                {
                  title: "Assess & Strategize",
                  items: [
                    "We audit your current IT landscape, identify opportunities, and create a cloud roadmap that aligns with your business goals.",
                  ],
                },
                {
                  title: "Design & Deploy",
                  items: [
                    "We build secure, scalable cloud solutions that reduce complexity, improve agility, and future-proof your IT.",
                  ],
                  delay: 0.1,
                },
                {
                  title: "Automate & Optimize",
                  items: [
                    "AI-driven automation helps you reduce manual workload, lower costs, and enhance performance.",
                  ],
                  delay: 0.2,
                  className: "md:!border-b",
                },
                {
                  title: "Monitor & Evolve",
                  items: [
                    "Continuous improvement ensures your cloud infrastructure stays secure, efficient, and always one step ahead.",
                  ],
                  delay: 0.3,
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
            <InformedSlider blogIDs={[4, 1, 9, 3]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch valueIndex={4} />
        </Container>
      </section>
    </>
  );
};

export default Cloud;
