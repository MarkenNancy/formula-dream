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
import HomeSVG from "@/components/atom/homeSVG/HomeSVG";

// seo
import type { Metadata } from "next";
import { healthcareAndLifeSciencesgSeo } from "@/data/seoData";
export const metadata: Metadata = healthcareAndLifeSciencesgSeo;
// end seo

const HealthcareAndLifeSciences = () => {
  return (
    <>
      <PageBanner
        title="Transforming Healthcare Through Smart, Scalable Solutions"
        description="Clarient streamlines healthcare, improves patient outcomes, and ensures compliance—all in one smart solution."
        action={{
          typeForm: "contact",
          children: (
            <>
              <span className="uppercase">
                Take the <b>First Step Today!</b>
              </span>
            </>
          ),
        }}
        videoVimeoIframe={{
          videoId: "1077231717",
          className: "bg-[url(/images/healthcareVideoBg.jpg)]",
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
        pageName="Healthcare Life"
        nav={[
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "challenges",
            label: "Key Challenges",
          },
          {
            id: "solutions",
            label: "Solutions",
          },
          {
            id: "whyClarient",
            label: "Why Clarient",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section className="md:py-16 py-10" id="overview">
        <Container isSmall>
          <div className="grid md:grid-cols-12 lg:gap-20 gap-4">
            <div className="md:col-span-6 self-center md:order-1">
              <div className="flex pb-2">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="2xl" className="text-pretty">
                    Healthcare is evolving—AI, costs, and compliance pressures
                    demand smarter solutions. Clarient optimizes operations,
                    fosters collaboration, and drives precision medicine—keeping
                    you future-ready.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="md:col-span-4 md:order-0">
              <FadeUp delay={0.3} className="text-center md:flex items-end">
                <div className="relative overflow-hidden">
                  <div className="[&>span>svg]:absolute [&>span>svg]:w-full [&>span>svg]:bottom-0 [&>span>svg]:h-auto">
                    <HomeSVG
                      name="roundColor"
                      className="[&>svg]:!w-[80%] [&>svg]:!max-w-52 [&>svg]:!-left-4 [&>svg]:!-top-0 [&>svg]:animate-reverse-spin-medium"
                    />
                  </div>
                  <figure className="relative z-[1] bottom-0 flex items-end h-full [&>img]:w-[16.875rem] [&>img]:h-auto">
                    <Image
                      src="/images/industries/ourSolutionsHealth/flower.png"
                      alt="Image"
                      width={663}
                      height={438}
                    />
                  </figure>
                </div>
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
        <div className="md:pt-20 pt-10 relative" id="challenges">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7">
                <FadeUp>
                  <Typo
                    tag="p"
                    size="2xl"
                    weight="bold"
                    className="uppercase !leading-tight mb-1"
                  >
                    Key Challenges
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    Pressing Challenges in Healthcare
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    Healthcare leaders are navigating a complex set of
                    challenges.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
              <div className="lg:col-span-10 lg:col-start-2">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "Regulatory Compliance",
                      items: ["Stay ahead of evolving laws & privacy rules."],
                      delay: 0,
                    },
                    {
                      title: "Patient-Centric Care",
                      items: ["Deliver personalized care at scale."],
                      delay: 0.1,
                    },
                    {
                      title: "Operational Efficiency",
                      items: ["Cut costs & make smarter decisions."],
                      delay: 0.2,
                    },
                    {
                      title: "Data Security & Integration",
                      items: ["Secure, seamless data for better care."],
                      delay: 0.3,
                    },
                    {
                      title: "Emerging Tech Adoption",
                      items: ["Harness AI & robotics while managing risk."],
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
                <div className="md:col-span-7">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Our Solutions
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
                      Solutions Designed to Achieve Healthcare Excellence
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
                      Clarient's solutions are built to deliver outcomes that
                      matter:
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
                    image: "/images/industries/ourSolutionsHealth/img0.jpg",
                    title: "AI-Powered Insights & Engagement ",
                    listItems: [
                      "Enhance decision-making and patient interactions with AI-driven tools.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/ourSolutionsHealth/img1.jpg",
                    title: "Telemedicine & Digital Health",
                    listItems: [
                      "Secure, scalable virtual care solutions to expand access and reduce costs.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/ourSolutionsHealth/img2.jpg",
                    title: "Regulatory Compliance & Trust Management",
                    listItems: [
                      "Ensure HIPAA, GDPR, and industry-standard compliance with built-in security frameworks.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/ourSolutionsHealth/img3.jpg",
                    title: "Seamless Data & Knowledge Integration",
                    listItems: [
                      "Unify data for real-time decision-making, workflow automation, and improved content management.",
                    ],
                  },
                  {
                    id: 4,
                    image: "/images/industries/ourSolutionsHealth/img4.jpg",
                    title: "Patient Experience & Community Support",
                    listItems: [
                      "Streamline onboarding, scheduling, and peer-support networks for better engagement.",
                    ],
                  },
                  {
                    id: 5,
                    image: "/images/industries/ourSolutionsHealth/img5.jpg",
                    title: "UX-Centered Digital Healthcare Design",
                    listItems: [
                      "Deliver intuitive, research-backed platforms that drive adoption and improve outcomes.",
                    ],
                  },
                  {
                    id: 6,
                    image: "/images/industries/ourSolutionsHealth/img6.jpg",
                    title: "Intelligent Feedback & Continuous Optimization",
                    listItems: [
                      " Implement real-time feedback and AI-driven refinements for ongoing improvement.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/industries/healthcareCTA.jpg"
            title="Solve Industry Problems with Purpose-Built Intelligence"
            titleClass="text-pretty"
            description="Clarient combines deep domain expertise with cutting-edge technology to solve real-world industry challenges and drive meaningful outcomes."
            action={{
              className: "uppercase",
              size: "large",
              children: (
                <>
                  Talk to&nbsp; <b>Our Industry Experts</b>
                </>
              ),
              typeForm: "contact",
            }}
          />
        </div>
      </section>
      <section
        className="md:pt-24 pt-10"
        id="whyClarient"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div className="">
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
                    Why Leading Healthcare Providers Choose Clarient?
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    Clarient combines innovation, reliability, and deep
                    healthcare expertise to deliver impactful solutions:
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Expertise in Healthcare",
                    items: [
                      "A proven track record of delivering effective solutions tailored to healthcare's unique challenges.",
                    ],
                  },
                  {
                    title: "Successful Partnerships",
                    items: [
                      "Trusted by leading healthcare providers to optimize operational performance and improve patient outcomes.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Flexible & Scalable",
                    items: [
                      "Solutions designed for adaptability and growth, aligning with your organization’s long-term goals.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Compliance & Data Security",
                    items: [
                      "Committed to maintaining the highest standards in regulatory compliance and data protection.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "End-to-End Service",
                    items: [
                      "From initial strategy to final implementation and beyond, we provide seamless support throughout the process.",
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

export default HealthcareAndLifeSciences;
