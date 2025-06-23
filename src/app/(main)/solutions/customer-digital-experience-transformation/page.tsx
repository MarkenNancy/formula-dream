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
import { customerDigitalExperienceTransformationSeo } from "@/data/seoData";
export const metadata: Metadata = customerDigitalExperienceTransformationSeo;
// end seo

const CustomerDigitalExperienceTransformation = () => {
  return (
    <>
      <PageBanner
        title="Creating New Realities. Designing the Future."
        description="Solving everyday challenges with immersive, intuitive, and emotionally resonant experiences."
        action={{
          children: (
            <>
              <span className="uppercase">
                Let’s Talk <b>Innovation</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077232968",
          className: "bg-[url(/images/retailAndEcommerceVideoBg.jpg)]",
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
        pageName="Digital Experience"
        nav={[
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "obstacles",
            label: "Strategic Obstacles",
          },
          {
            id: "capabilities",
            label: "Core Capabilities",
          },
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
                  Reimagining Engagement in the Experience Economy
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                  Your users expect more than functionality—they expect
                  experiences. We, at Clarient, design immersive interfaces that
                  merge the physical and digital, delivering engagement that’s
                  not only delightful but also transformative, using the power
                  of voice, vision, and spatial interaction.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3} className="md:block hidden pt-8">
                <Image
                  src="/images/solutions/customerDigitalExperience/intro.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover mt-3"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty">
                  Our work is grounded in a deep understanding of human
                  behavior, powered by cutting-edge tools, and driven by a
                  singular focus: to help our clients imagine boldly, execute
                  beautifully, and lead with confidence.
                </Typo>
              </FadeUp>
            </div>
            <div className="md:hidden block">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/solutions/customerDigitalExperience/intro.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover mt-3"
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
        <div className="md:pt-20 pt-10 relative" id="obstacles">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
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
                    Meeting the Moment: Evolving Expectations, Emerging
                    Technologies
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    User expectations are not just rising, they’re becoming more
                    nuanced, more emotional, and more immediate. For businesses,
                    this creates a complex set of challenges:
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
              <div className="lg:col-span-10 lg:col-start-2">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "Disconnected Touchpoints",
                      items: [
                        "Customers expect seamless experiences, but fragmented journeys often lead to frustration and churn.",
                      ],
                      delay: 0,
                    },
                    {
                      title: "Outdated Interfaces",
                      items: [
                        "Legacy systems and static designs can’t keep up with the fluid, real-time engagement today’s users demand.",
                      ],
                      delay: 0.1,
                    },
                    {
                      title: "Lack of Insight into Behavior",
                      items: [
                        "Without a deep understanding of user motivations and context, even well-designed products fail to resonate.",
                      ],
                      delay: 0.2,
                    },
                    {
                      title: "One-Size-Fits-All Experiences",
                      items: [
                        "Experiences that aren’t inclusive, adaptive, or accessible risk alienating key user segments.",
                      ],
                      delay: 0.3,
                    },
                    {
                      title: "Missed Opportunities for Innovation",
                      items: [
                        "Emerging technologies like AR/VR, voice, and spatial design are often underutilized—or misapplied—due to lack of in-house expertise.",
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
        <div className="md:pt-20 pt-10" id="capabilities">
          <div>
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="lg:col-span-6 md:col-span-7">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Services
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
                      Comprehensive Services for a Multi-Sensory Future
                    </Typo>
                  </FadeUp>
                </div>
              </div>
            </Container>
          </div>
          <div className="">
            <Container isSmall>
              <SolutionsSlider
                slides={[
                  {
                    id: 0,
                    image:
                      "/images/solutions/customerDigitalExperience/img0.jpg",
                    title: "Immersive Experiences (AR/VR/Voice UX)",
                    listItems: [
                      "Context-aware experiences using AR, VR, and Voice-based interfaces",
                      "Emotionally resonant storytelling and spatial design",
                      "Cross-platform solutions for web, mobile, kiosk, and headset environments",
                    ],
                  },
                  {
                    id: 1,
                    image:
                      "/images/solutions/customerDigitalExperience/img1.jpg",
                    title: "Hyper-Realistic 3D Modeling",
                    listItems: [
                      "Photorealistic product and architectural models using industry-leading tools",
                      "Optimization for interactive, real-time environments and devices",
                      "Accelerated prototyping and faster design decision-making",
                    ],
                  },
                  {
                    id: 2,
                    image:
                      "/images/solutions/customerDigitalExperience/img2.jpg",
                    title: "Animation & VFX",
                    listItems: [
                      "Motion design, visual effects, and animated sequences for campaigns and products",
                      "Advanced VFX techniques including rotoscoping, paint-prep, and object removal",
                      "End-to-end production from concept to final render",
                    ],
                  },
                  {
                    id: 3,
                    image:
                      "/images/solutions/customerDigitalExperience/img3.jpg",
                    title: "Mobile xR Applications",
                    listItems: [
                      "Cross-platform AR/VR app development for iOS, Android, and wearables",
                      "Optimized content for high performance, low latency, and user comfort",
                      "Data capture and analytics integration for behavior insights",
                    ],
                  },
                  {
                    id: 4,
                    image:
                      "/images/solutions/customerDigitalExperience/img4.jpg",
                    title: "Web AR/VR Apps & Frameworks",
                    listItems: [
                      "Web-based AR/VR interfaces compatible with all major browsers",
                      "Customizable, plug-and-play 3D frameworks for enterprise use",
                      "Enhanced accessibility, no downloads or installations required",
                    ],
                  },
                  {
                    id: 5,
                    image:
                      "/images/solutions/customerDigitalExperience/img5.jpg",
                    title: "Passive 360° VR",
                    listItems: [
                      "Story-driven 360° video content for brand, education, or experiential marketing",
                      "Cross-device playback compatibility including mobile and headset",
                      "Expertise in minimizing motion discomfort and optimizing spatial sound",
                    ],
                  },
                  {
                    id: 6,
                    image:
                      "/images/solutions/customerDigitalExperience/img6.jpg",
                    title: "Experience Centers",
                    listItems: [
                      "Design and development of immersive physical-digital CX centers",
                      "Custom content and interactive installations aligned with brand strategy",
                      "Integration of sensory technologies—projection, touch, AR, and voice",
                    ],
                  },
                  {
                    id: 6,
                    image:
                      "/images/solutions/customerDigitalExperience/img7.jpg",
                    title: "Industry 4.0 Consulting",
                    listItems: [
                      "Business process realignment using AR/VR, AI/ML, IoT, and Big Data",
                      "Roadmapping and implementation for sustainable innovation",
                      "Cross-functional change enablement across people, process, and tech",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/solutions/customerDigitalExperience/cta.jpg"
            title="Step Into the Future of Experience"
            titleClass="xl:ps-20"
            description="From spatial computing to voice-first design, our immersive solutions engage minds, stir emotions, and move markets."
            action={{
              className: "uppercase",
              size: "large",
              children: (
                <>
                  Book a&nbsp; <b className="ms-1">Discovery Session</b>
                </>
              ),
              typeForm: "contact",
            }}
          />
        </div>
      </section>
      <section
        id="framework"
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
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-balance leading-none"
                  >
                    Designing for Impact, Grounded in Empathy
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    We blend user-centered design, deep technical expertise, and
                    industry foresight to create immersive experiences that are
                    as meaningful as they are measurable.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Empathize",
                    items: [
                      "Understand user behavior, context, and emotional triggers.",
                    ],
                  },
                  {
                    title: "Ideate & Define",
                    items: [
                      "Align vision with functional design thinking. Collaboratively outline creative, user-centric solutions.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Prototype & Visualize",
                    items: [
                      "Build 3D models, animations, immersive interactions, proof-of-concept models and interactive demos.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Design & Develop",
                    items: [
                      "Build scalable, accessible, and high-performance solutions. Optimize for device and context.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Test & Refine",
                    items: [
                      "Evaluate usability, motion, clarity, and impact. Iterate based on user feedback, ensuring excellence and inclusivity.",
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

export default CustomerDigitalExperienceTransformation;
