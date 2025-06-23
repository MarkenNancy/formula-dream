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
import { educationSeo } from "@/data/seoData";
export const metadata: Metadata = educationSeo;
// end seo

const Education = () => {
  return (
    <>
      <PageBanner
        title="Reimagining Learning Journeys for a Digital-First World"
        description="Empowering educators, institutions, and learners with transformative digital solutions that enhance engagement, accessibility, and outcomes."
        action={{
          children: (
            <>
              <span className="uppercase">
                Let’s Build the <b>Future of Learning</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077232991",
          className: "bg-[url(/images/educationVideoBg.jpg)]",
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
        pageName="Education"
        nav={[
          {
            id: "clarientImpact",
            label: "Clarient's Impact",
          },
          {
            id: "opportunities",
            label: "Opportunities",
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
      <section id="clarientImpact" className="md:pt-24 pt-12">
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
                  Transforming Education with Purposeful, Impactful Solutions
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty xl:ps-24">
                  Clarient has helped leading education providers and platforms
                  drive growth and engagement by transforming how they interact
                  with learners, educators, and administrators.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3} className="md:block hidden">
                <Image
                  src="/images/industries/whyMatters/overview.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5">
              <FadeUp delay={0.2}>
                <ul className="[&>li>strong]:pe-1 text-xl space-y-3 [&>li>strong]:text-secondary">
                  <li>
                    <strong>40M+ students</strong>
                    supported via enrollment & counseling platforms
                  </li>
                  <li>
                    <strong>AI-driven student</strong>
                    decision tools built for mobile-first generations
                  </li>
                  <li>
                    <strong>End-to-end UX</strong>
                    and platform design for grants, awards & fellowships
                  </li>
                  <li>
                    <strong>Cross-platform</strong>
                    solutions for education administration and engagement
                  </li>
                </ul>
              </FadeUp>
            </div>
            <div className="md:hidden block">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/industries/whyMatters/overview.png"
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
      <section
        style={{
          background: "linear-gradient(180deg, #EEE 27.25%, #FFF 100%)",
        }}
      >
        <div id="opportunities" className="md:pt-20 pt-10 relative">
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
                    What We Solve
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    Transforming Challenges into Opportunities for Education
                    Providers
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    Clarient addresses the most complex challenges in education
                    with innovative solutions designed to drive efficiency,
                    engagement, and success.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
              <div className="lg:col-span-10 lg:col-start-2">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "Complex student enrollment journeys",
                      items: [
                        "AI-powered, mobile-first enrollment apps that guide students through every step, ensuring a seamless and personalized experience.",
                      ],
                      delay: 0,
                    },
                    {
                      title: "Disconnected education touchpoints",
                      items: [
                        "Unified UX across all channels, providing a cohesive experience for students and staff, regardless of the device or platform.",
                      ],
                      delay: 0.1,
                    },
                    {
                      title: "Manual grant & award program processes",
                      items: [
                        "Streamlined digital platforms with automation, eliminating the need for manual intervention and enhancing efficiency.",
                      ],
                      delay: 0.2,
                    },
                    {
                      title: "Poor user adoption & outdated interfaces",
                      items: [
                        "Research-backed, intuitive UX/UI design that meets modern expectations and improves user engagement.",
                      ],
                      delay: 0.3,
                    },
                    {
                      title: "Lack of visibility across stakeholders",
                      items: [
                        "Real-time analytics & centralized control panels that provide all stakeholders with the insights and oversight needed to make informed decisions.",
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
          <div>
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-8">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Solutions
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
                      Innovating Education with Purpose-Built Solutions
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid md:grid-cols-12 mt-4">
                <div className="md:col-span-9">
                  <FadeUp delay={0.2}>
                    <Typo
                      tag="p"
                      size="lg"
                      className="text-pretty"
                      weight="normal"
                    >
                      Clarient's technology-driven solutions are designed to
                      meet the specific needs of the education sector.
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
                    image: "/images/industries/solutionsEducation/img0.jpg",
                    title: "AI-Powered Enrollment Platforms",
                    listItems: [
                      "Help students discover the right programs and enroll with ease through personalized guidance and mobile-first access.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/solutionsEducation/img1.jpg",
                    title: "Grant & Award Management Systems",
                    listItems: [
                      "Streamline applications, reviews, and decisions with integrated, data-driven platforms.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/solutionsEducation/img2.jpg",
                    title: "UX-Led App & Platform Development",
                    listItems: [
                      "Build responsive, intuitive platforms that work seamlessly across devices for students and staff.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/solutionsEducation/img3.jpg",
                    title: "Custom Portals for Student Services",
                    listItems: [
                      "Deliver secure, branded portals for admissions, counseling, and onboarding with efficient, student-friendly workflows.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/industries/educationCTA.jpg"
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
        id="clarientAdvantage"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECECEC 70.57%)",
        }}
      >
        <div className="md:pt-24 md:pb-20 pb-10 pt-10">
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
                    Transforming Education with Tailored Technology
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <Typo tag="p" size="xl" className="text-pretty mt-4">
                    At Clarient, our solutions are designed to address the
                    unique challenges of institutions, learners, and
                    administrators alike. Here's why Clarient is the partner you
                    need:
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:pt-[3.5rem] pt-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Deep Expertise in Education",
                    items: [
                      "Our understanding of education workflows and learner psychology enables us to create highly relevant, impactful solutions.",
                    ],
                  },
                  {
                    title: "Human-Centered Design",
                    items: [
                      "We combine design thinking with cutting-edge platform engineering to deliver user-friendly, scalable solutions.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Seamless Integration",
                    items: [
                      "Our solutions integrate effortlessly with your existing systems, ensuring smooth transitions and minimal disruption.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Scalable & Future-Proof",
                    items: [
                      "Built to grow with your institution, adapting to the evolving landscape of education.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Proven Results",
                    items: [
                      "We’ve driven measurable improvements in student engagement, retention, and administrative efficiency.",
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

export default Education;
