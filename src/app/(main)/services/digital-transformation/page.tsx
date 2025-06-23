import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import {
  AiBuiltCardGrid,
  AiCtaBg,
  AiFrameworkCardGrid,
  BusinessCard,
  Container,
  ExcitingRole,
  GetInTouch,
  InformedSlider,
  PageBanner,
  Typo,
} from "@/components";
import { FadeIn, FadeUp } from "@/components/animation";

// seo
import { digitalTransformationSeo } from "@/data/seoData";
import type { Metadata } from "next";
export const metadata: Metadata = digitalTransformationSeo;
// end seo

const DigitalTransformation = () => {
  return (
    <>
      <PageBanner
        title="Transformation, Simplified. Impact, Amplified."
        description="The future isn’t waiting. The right digital transformation strategy moves you from where you are to where you need to be—faster, smarter, and with impact that lasts. Let’s build it together."
        action={{
          className: "uppercase",
          children: (
            <>
              Contact <b className="ms-1">Our Experts</b>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077249715",
          className: "bg-[url(/images/digitalTransformationideoBg1.png)]",
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
        pageName="Digital Transformation"
        nav={[
          {
            id: "transformation",
            label: "Transformation",
          },
          {
            id: "value",
            label: "Value Proposition",
          },
          {
            id: "strategicEdge",
            label: "Strategic Edge",
          },
          {
            id: "framework",
            label: "Framework",
          },
          {
            id: "inisghts",
            label: "Inisghts",
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
                  Transformation That Works for You—And Your Customers.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  This is where vision meets velocity. At <b>Clarient</b>, we
                  don’t just implement change—we catalyze transformation. From
                  reimagining operations and unlocking untapped potential to
                  accelerating scalable growth, we equip businesses with the
                  clarity, strategy, and execution power needed to go further
                  and faster.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Typo tag="p" size="xl" className="text-pretty mt-4">
                  With a bold yet pragmatic approach, we empower leaders to
                  rethink possibilities, outpace disruption, and turn
                  high-stakes ambitions into measurable success—all at a speed
                  and scale they never thought achievable.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.4}>
                <Typo
                  tag="p"
                  size="xl"
                  weight="bold"
                  className="text-pretty mt-4"
                >
                  Welcome to the future of transformation. It starts now.
                </Typo>
              </FadeUp>
            </div>
          </div>
        </Container>
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
                    The Building Blocks of Enterprise Transformation
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:pt-20 pt-4">
              <div className="md:order-1 order-2">
                <div className="grid md:grid-cols-2">
                  <BusinessCard
                    className="md:border-r-0"
                    title="Competitive Differentiation"
                    items={[
                      "Stand out with customer-first, digital-first innovations.",
                    ]}
                    delay={0.2}
                  />
                  <BusinessCard
                    title="Revenue Acceleration"
                    items={[
                      "Increase efficiency, optimize digital channels, and scale faster.",
                    ]}
                    delay={0.3}
                  />
                </div>
              </div>
              <div className="md:order-2 order-1">
                <FadeUp
                  delay={0.5}
                  className="md:px-16 px-0 md:pt-8 md:pb-0 pb-10"
                >
                  <Typo
                    tag="p"
                    size="xl"
                    weight="normal"
                    className="text-pretty"
                  >
                    Clarient helps enterprises cut through digital noise by
                    aligning strategy with execution to scale what works, fix
                    what doesn’t, and move faster than the market.
                  </Typo>
                </FadeUp>
              </div>
              <div className="grid md:grid-cols-2 md:col-start-2 -mt-0.5 relative z-20 order-3">
                <BusinessCard
                  className="md:rounded-bl-lg"
                  delay={0.3}
                  title="Enterprise-Grade AI & Automation"
                  items={[
                    "Unlock new value streams with data-driven intelligence.",
                  ]}
                />
                <BusinessCard
                  className="md:border-l-0 md:rounded-br-lg"
                  delay={0.4}
                  title="Seamless Technology Integration"
                  items={[
                    "Build a robust digital foundation without disruption.",
                  ]}
                />
              </div>
            </div>
          </Container>
        </FadeIn>
        <AiCtaBg
          image="/images/services/aicta.jpg"
          title="Clarity at the Core"
          titleClass="lg:max-w-[18rem]"
          description="Clarient doesn’t just consult—we co-create digital journeys. Solutions that simplify complexity, unlock growth, and drive transformation that lasts."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Start <b className="ms-1">your journey</b>
              </>
            ),
            typeForm: "contact",
          }}
        />
      </section>
      <section className="md:pt-20 pt-10 bg-[#F5F5F5]" id="strategicEdge">
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
                  Technology-Driven Growth, Human-Centric Execution
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty pe-14">
                  Clarient delivers specialized expertise where it matters most.
                  Our services are designed to integrate seamlessly, scale
                  effortlessly, and drive measurable business outcomes from day
                  one.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="md:pt-20 pt-10">
            <AiBuiltCardGrid
              cards={[
                {
                  title: "Enhance Customer Engagement",
                  subTitle: "Seamless, Human-Centric Digital Experiences",
                  items: [
                    <>
                      <b>User Experience Design:</b> Transform interfaces into
                      frictionless, intuitive experiences.
                    </>,
                    <>
                      <b>Customer Experience Transformation:</b> Align digital
                      touchpoints with customer expectations.
                    </>,
                  ],
                  delay: 0.2,
                },
                {
                  title: "Operational Efficiency & Agility",
                  subTitle: "Optimize, Automate, and Adapt",
                  items: [
                    <>
                      <b>Process Optimization:</b> Streamline workflows for
                      maximum efficiency and scalability.
                    </>,
                    <>
                      <b>Digital Consulting:</b> Leverage expert advisory
                      services for strategic transformation.
                    </>,
                    <>
                      <b>Agile Transformation:</b> Adopt agile methodologies for
                      faster execution and innovation.
                    </>,
                    <>
                      <b>Microservices Architecture:</b> Build modular,
                      flexible, and resilient software architectures.
                    </>,
                    <>
                      <b>Product Development:</b> Develop scalable, market-ready
                      digital products.
                    </>,
                  ],
                  delay: 0.3,
                },
                {
                  title: "Modernize Core Technology and Systems",
                  subTitle: "Future-Proof Your Infrastructure",
                  items: [
                    <>
                      <b>Enterprise & Consumer Mobile Solutions:</b> Build
                      robust, user-friendly applications.
                    </>,
                    <>
                      <b>SaaS/Multi-Tenant Applications:</b> Develop scalable
                      cloud-based platforms.
                    </>,
                    <>
                      <b>Public Cloud Migrations:</b> Transition to the cloud
                      with minimal risk and maximum performance.
                    </>,
                  ],
                  delay: 0.4,
                },
                {
                  title: "Accelerate and Amplify Digital Marketing & Sales",
                  subTitle: "Data-Driven Growth Strategies",
                  items: [
                    <>
                      <b>Digital Innovation Strategy:</b> Align digital
                      marketing with business objectives.
                    </>,
                    <>
                      <b>Digital Marketing Services:</b> Enhance customer
                      acquisition through targeted campaigns.
                    </>,
                    <>
                      <b>eCommerce Solutions:</b> Build scalable platforms that
                      drive online sales.
                    </>,
                  ],
                  delay: 0.5,
                },
                {
                  title: "Entrepreneurial Ventures & Market Expansion",
                  subTitle: "Innovate, Scale, and Lead",
                  items: [
                    <>
                      <b>Business Model Innovation:</b> Reimagine and adapt your
                      business for digital success.
                    </>,
                    <>
                      <b>Consulting Services:</b> Define and execute high-impact
                      market strategies.
                    </>,
                    <>
                      <b>Software Product Development:</b> Build and launch
                      cutting-edge digital solutions.
                    </>,
                    <>
                      <b>Digital Product Management:</b> Drive product strategy
                      with data-backed insights.
                    </>,
                  ],
                  delay: 0.2,
                },
                {
                  title: "Intelligence & Insight-Driven Decision Making",
                  subTitle: "AI & Analytics for Smarter Business",
                  items: [
                    <>
                      <b>Artificial Intelligence Services:</b> Automate
                      processes, enhance decision-making, and optimize customer
                      interactions.
                    </>,
                    <>
                      <b>Big Data & Business Intelligence:</b> Extract
                      actionable insights from vast datasets.
                    </>,
                  ],
                  delay: 0.3,
                },
                {
                  title: "AI Services",
                  subTitle: "Next-Gen Intelligence for Business Acceleration",
                  items: [
                    <>
                      <b>AI Strategy & Consulting:</b> Develop a clear roadmap
                      for AI integration.
                    </>,
                    <>
                      <b>Machine Learning & Predictive Analytics:</b> Leverage
                      AI to forecast trends and automate insights.
                    </>,
                    <>
                      <b>AI-Powered Automation:</b> Streamline operations and
                      reduce manual workloads with intelligent automation.
                    </>,
                    <>
                      <b>Conversational AI & Chatbots:</b> Enhance customer
                      engagement through AI-driven interactions.
                    </>,
                    <>
                      <b>AI-Driven Outsourcing:</b> Augment teams with
                      AI-enhanced capabilities for maximum efficiency.
                    </>,
                  ],
                  delay: 0.4,
                },
              ]}
            />
          </div>
        </Container>
      </section>
      <section
        className="md:pt-44 pt-10 md:-mt-24"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div id="framework">
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
                    DigitalX Framework
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
                    Our DigitalX Framework keeps our clients ahead in their
                    digital journey. We take the time to understand your
                    business, your customers, and your needs, amplifying your
                    brand, digital footprint, and customer experiences.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Discover",
                    subTitle: "Evaluate Requirements",
                    items: [
                      "We understand key project objectives and gain visibility into business processes, people, technology, and operations, laying out detailed requirements.",
                    ],
                    delay: 0,
                  },
                  {
                    title: "Discern",
                    subTitle: "Detailed Analysis",
                    items: [
                      "We establish the solution's information architecture using artifacts such as the creative brief, model, and SEO and social marketing strategies site map, data.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Design",
                    subTitle: "Proof of Concept",
                    items: [
                      "We create low-fidelity wireframes and detailed mock-ups, followed by high-fidelity clickable prototypes to initiate the design phase.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Develop",
                    subTitle: "The Heavy Lifting",
                    items: [
                      "We translate prototypes into tangible deliverables, code designs into compliant XHTML markup, integrate content and backend systems, and deliver the beta project.",
                    ],
                    delay: 0.3,
                  },
                  {
                    title: "Deliver",
                    subTitle: "QA & Launch",
                    items: [
                      "After the Launch Readiness Assessment based on QA reports, we go live with the solution with the client's approval, ensuring process compliance through pre-defined checklists.",
                    ],
                    delay: 0.4,
                  },
                  {
                    title: "Drive",
                    subTitle: "Maintain & Optimize",
                    items: [
                      "We conduct post-transition reviews to assess the achievement of project and business goals, ensuring continued performance improvement and driving new opportunities.",
                    ],
                    delay: 0.5,
                  },
                ]}
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="bg-[#F5F5F5]" id="inisghts">
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
                      Insights That Drive Real Transformation
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <Typo tag="p" size="xl" className="text-pretty">
                      Explore practical insights, proven strategies, and
                      real-world case studies—crafted to help business leaders
                      navigate digital transformation with clarity and
                      confidence.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[8, 9, 1, 6]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch valueIndex={2} />
        </Container>
      </section>
    </>
  );
};

export default DigitalTransformation;
