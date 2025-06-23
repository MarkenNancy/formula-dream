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
import { productEngineeringSeo } from "@/data/seoData";
export const metadata: Metadata = productEngineeringSeo;
// end seo

const ProductEngineering = () => {
  return (
    <>
      <PageBanner
        title="Building Scalable, High-Impact Products for the Future"
        description="Clarient powers businesses with agile product development, strategic innovation, and scalable solutions—accelerating growth and market leadership."
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
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Product Engineering"
        nav={[
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "strategicEdge",
            label: "Strategic Edge",
          },
          {
            id: "matrix",
            label: "Service Matrix",
          },
          {
            id: "delivery",
            label: "Delivery Framework",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />

      <section
        id="overview"
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
                  Engineering Future-Ready Products with Precision
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  Innovation alone isn’t enough—products must be built for
                  speed, adaptability, and scale. Clarient transforms ideas into
                  market-ready solutions, ensuring long-term growth and
                  resilience in a competitive digital landscape.
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
                    className="px-8 sm:min-h-30"
                    description="Accelerate go-to-market with streamlined development"
                    delay={0.1}
                    descriptionSize="lg"
                  />
                  <BeyondCard
                    className="px-8 sm:min-h-30"
                    description="Adapt quickly with agile, iterative processes"
                    delay={0.2}
                    descriptionSize="lg"
                  />
                  <BeyondCard
                    className="px-8 sm:min-h-30"
                    description="Build for the future with scalable, high-performance architectures"
                    delay={0.3}
                    descriptionSize="lg"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="strategicEdge">
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
                    Your Partner for Scalable, Future-Ready Products
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:pt-20">
              <div className="md:order-1 order-2">
                <div className="grid md:grid-cols-2">
                  <BusinessCard
                    className="md:border-r-0"
                    delay={0.2}
                    title="End-to-End Solutions"
                    items={[
                      "From ideation to launch, we handle every stage of product development.",
                    ]}
                  />
                  <BusinessCard
                    delay={0.3}
                    title="Agility & Scalability"
                    items={[
                      "Rapid iterations and flexible frameworks designed for future growth.",
                    ]}
                  />
                </div>
              </div>
              <div className="md:order-2 order-1">
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
                    At Clarient, we transform ideas into high-impact, scalable
                    products that fuel growth and market leadership. Our agile
                    approach ensures your product adapts quickly, performs at
                    its best, and scales effortlessly as your business evolves.
                  </Typo>
                </FadeUp>
              </div>
              <div className="grid md:grid-cols-2 md:col-start-2 -mt-0.5 relative z-20 order-3">
                <BusinessCard
                  className="md:rounded-bl-lg"
                  delay={0.3}
                  title="Global Expertise"
                  items={[
                    "Access top talent across 15+ countries for diverse, specialized solutions.",
                  ]}
                />
                <BusinessCard
                  className="md:border-l-0 md:rounded-br-lg"
                  delay={0.4}
                  title="Innovation with Results"
                  items={[
                    "We deliver products that drive measurable impact and long-term success.",
                  ]}
                />
              </div>
            </div>
          </Container>
        </FadeIn>
        <AiCtaBg
          className="xl:-mt-[18rem]"
          image="/images/services/aicta.jpg"
          title="Engineering at the Core"
          titleClass="lg:max-w-[22rem]"
          description="Product success isn’t just about building fast—it’s about building right. Clarient helps you move from vision to validation with precision, agility, and impact that scales."
          action={{
            className: "uppercase",
            size: "large",
            children: (
              <>
                Accelerate&nbsp; <b>Your Product Journey</b>
              </>
            ),
            typeForm: "contact",
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
                  Solutions for Scalable, High-Impact Product Development
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty pe-14">
                  Launching a product is just the beginning. The key to success
                  is designing for scalability, adaptability, and market
                  relevance. Clarient’s product development strategies ensure
                  you stay ahead of the curve and achieve impactful growth.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <AiBuiltCardGrid
            className="md:[&>.aiBuiltCard]:min-h-[11rem] md:pt-20 pt-10"
            cards={[
              {
                title: "Agile Product Development",
                items: [
                  "We use iterative, data-driven approaches to build adaptable, market-ready products that evolve with industry shifts.",
                ],
                delay: 0.2,
              },
              {
                title: "Seamless Launch and Scale Strategies",
                items: [
                  "Growth shouldn’t come at the cost of efficiency. We design scalable solutions that optimize performance while minimizing risk.",
                ],
                delay: 0.3,
              },
              {
                title: "Future-Ready Engineering",
                items: [
                  "Our solutions ensure long-term viability, delivering intelligent, high-performing products designed to thrive in competitive markets.",
                ],
                delay: 0.4,
              },
              {
                title: "Product Strategy & Roadmapping",
                items: [
                  "Aligning product vision, user needs, and market trends to create a comprehensive roadmap that drives success from ideation to execution.",
                ],
                delay: 0.5,
              },
              {
                title: "MVP Development & Launch",
                items: [
                  "Rapidly building Minimum Viable Products (MVPs) to validate ideas, attract investors, and gain user feedback before full-scale development.",
                ],
                delay: 0.2,
              },
              {
                title: "AI-Powered Product Engineering",
                items: [
                  "Leveraging AI and machine learning to enhance product capabilities, improve efficiency, and drive innovation.",
                ],
                delay: 0.3,
              },
              {
                title: "Cloud-Native Product Development",
                items: [
                  "Building and deploying scalable, resilient applications optimized for cloud environments like AWS, Azure, GCP, and IBM Cloud.",
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
        className="md:pt-24 pt-10 md:-mt-24"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div id="delivery" className="md:pt-20">
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
                    Our Process: Agile, Strategic, and Built for Impact
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
                    Our process is designed to deliver results quickly,
                    efficiently, and sustainably. By focusing on agile
                    methodologies and continuous improvement, we ensure your
                    product meets market demands and scales seamlessly.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Discovery & Planning",
                    items: [
                      "We establish a clear roadmap by aligning business goals, market trends, and user expectations.",
                    ],
                  },
                  {
                    title: "Prototyping & Validation",
                    items: [
                      "Data-driven iterations ensure every product is refined, optimized, and validated before development.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Development & Execution",
                    items: [
                      "Agile execution focuses on efficiency, flexibility, and rapid deployment without compromising quality.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Testing & Quality Assurance",
                    items: [
                      "We uphold the highest standards, ensuring reliability, security, and seamless user experiences.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Scaling & Continuous Growth",
                    items: [
                      "Sustained success requires continuous optimization—we fine-tune performance, scalability, and innovation for long-term impact.",
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
                      Explore Product Engineering Insights
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
          <Container clearRight isSmall>
            <InformedSlider blogIDs={[6, 4, 9, 7]} className="pt-10" />
          </Container>
        </div>
        <Container isSmall>
          <ExcitingRole className="md:mt-20 mt-10" />
          <GetInTouch valueIndex={5} />
        </Container>
      </section>
    </>
  );
};

export default ProductEngineering;
