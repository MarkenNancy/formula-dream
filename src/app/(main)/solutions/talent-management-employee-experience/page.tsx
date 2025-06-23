import { FadeUp } from "@/components/animation";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import {
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

// seo
import type { Metadata } from "next";
import { talentManagementEmployeeExperienceSeo } from "@/data/seoData";
export const metadata: Metadata = talentManagementEmployeeExperienceSeo;
// end seo

const TalentManagementEmployeeExperience = () => {
  return (
    <>
      <PageBanner
        title="Reimagine the Employee Journey with One Intelligent Platform."
        description="Give your people the seamless experiences they expect—automated, AI-powered, and built for scale."
        action={{
          children: (
            <>
              <span className="uppercase">
                Experience <b>AI-Powered HR</b>
              </span>
            </>
          ),
          typeForm: "contact",
        }}
        videoVimeoIframe={{
          videoId: "1077233029",
          className:
            "scale-[1.3] bg-[url(/images/talentManagementEmployeeExperienceVideoBg.jpg)]",
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
        pageName="Talent Management"
        nav={[
          {
            id: "obstacles",
            label: "Strategic Obstacles",
          },
          {
            id: "works",
            label: "How it works",
          },
          {
            id: "features",
            label: "Features",
          },
          {
            id: "insights",
            label: "Insights",
          },
        ]}
      />
      <section id="obstacles" className="md:pt-28 pt-14 md:pb-20 pb-10">
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
                  The Employee Experience Has Evolved. Have Your Tools?
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  Today’s employees expect more—more connection, more clarity,
                  more purpose. But most HR systems were built for policy, not
                  people. As expectations rise and workforce dynamics shift,
                  organizations face persistent gaps in how they attract,
                  retain, and empower talent.
                </Typo>
              </FadeUp>
            </div>
          </div>
        </Container>
        <div className="md:pt-12 pt-8">
          <Container isSmall>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-10">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "Disjointed Tools",
                      items: [
                        "Multiple systems lead to inconsistent experiences and increased overhead.",
                      ],
                      delay: 0,
                      className: "md:min-h-48 px-6 md:py-10",
                    },
                    {
                      title: "Low Engagement, High Turnover",
                      items: [
                        "Without personalization and continuous feedback, employees disconnect and churn.",
                      ],
                      delay: 0.1,
                      className: "md:min-h-48 px-6 md:py-10",
                    },
                    {
                      title: "Manual Processes at Scale",
                      items: [
                        "HR teams are buried in administrative tasks, leaving little room for strategic work.",
                      ],
                      delay: 0.2,
                      className: "md:min-h-48 px-6 md:py-10",
                    },
                    {
                      title: "Poor Lifecycle Visibility",
                      items: [
                        "From onboarding to offboarding, disconnected workflows obscure trends and patterns.",
                      ],
                      delay: 0.3,
                      className: "md:min-h-48 px-6 md:py-10",
                    },
                    {
                      title: "Lack of Personalization",
                      items: [
                        "Employees crave tailored growth journeys—but static systems can’t keep up.",
                      ],
                      isLarge: true,
                      delay: 0.4,
                      className: "md:min-h-48 px-6 md:py-10",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 md:pt-12 pt-6">
              <div className="col-span-12">
                <FadeUp delay={0.2}>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    className="text-pretty text-secondary"
                    isTitle
                  >
                    To build a resilient, engaged, and future-ready workforce,
                    you need more than a system—you need a seamless, intelligent
                    experience platform.
                  </Typo>
                </FadeUp>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section
        style={{
          background: "linear-gradient(180deg, #EEE 27.25%, #FFF 100%)",
        }}
      >
        <div className="md:pt-20 pt-10 relative" id="works">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-6">
                <FadeUp>
                  <Typo
                    tag="p"
                    size="2xl"
                    weight="bold"
                    className="uppercase !leading-tight mb-1"
                  >
                    HOW IT WORKS
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    Built for Seamless Employee Journeys
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-9">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="lg" className="text-pretty mt-2">
                    A platform that streamlines every critical HR touchpoint
                    across the employee lifecycle—from onboarding and engagement
                    to performance and offboarding—by combining intelligent
                    automation, real-time data, and intuitive workflows.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid lg:grid-cols-12 md:pt-20 pt-10">
              <div className="lg:col-span-10 lg:col-start-2">
                <ChallengesCardGrid
                  cards={[
                    {
                      title: "Onboarding & First 90 Days",
                      items: [
                        "Automate welcomes, equipment provisioning, and task tracking.",
                      ],
                      delay: 0,
                    },
                    {
                      title: "Engagement & Communication",
                      items: [
                        "Build stronger connections with pulse surveys, feedback loops, and personalized check-ins.",
                      ],
                      delay: 0.1,
                    },
                    {
                      title: "Performance Management",
                      items: [
                        "Set goals, track progress, and calibrate performance with transparency.",
                      ],
                      delay: 0.2,
                    },
                    {
                      title: "Career Development",
                      items: [
                        "Support internal mobility and learning journeys with contextual nudges and learning paths.",
                      ],
                      delay: 0.3,
                    },
                    {
                      title: "Offboarding & Alumni",
                      items: [
                        "Create structured, compliant exits with sentiment tracking and automated transitions.",
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
        <div className="md:pt-20 pt-10" id="features">
          <div className="">
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
                      FEATURES
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
                      Smarter Tools for Every Stage of the Employee Journey
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
                      From compliance to culture, our all-in-one HR platform
                      brings together intelligent automation, real-time
                      insights, and secure infrastructure to help you manage,
                      engage, and grow your workforce.
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
                      "/images/solutions/talentmanagement/smartOnboarding.jpg",
                    title: "Smart Onboarding",
                    listItems: [
                      "Deliver great first impressions—automate onboarding, set role-based expectations, and fast-track early engagement.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/solutions/talentmanagement/coreHRHub.jpg",
                    title: "CoreHR Hub",
                    listItems: [
                      "Manage employee records, benefits, lifecycle events, and compliance-ready documentation in one secure system.",
                    ],
                  },
                  {
                    id: 2,
                    image:
                      "/images/solutions/talentmanagement/timeandAttendance.jpg",
                    title: "Time & Attendance Management",
                    listItems: [
                      "Track hours, manage shifts, and simplify leave management with real-time accuracy and geo-enabled flexibility.",
                    ],
                  },
                  {
                    id: 3,
                    image:
                      "/images/solutions/talentmanagement/skillInventory.jpg",
                    title: "Skill Inventory & Growth Insights",
                    listItems: [
                      "Map skills, identify gaps, and personalize development pathways to support growth and succession planning.",
                    ],
                  },
                  {
                    id: 4,
                    image:
                      "/images/solutions/talentmanagement/hrAutomation.jpg",
                    title: "HR Automation & Analytics",
                    listItems: [
                      "Automate repetitive tasks, get real-time workforce insights, and spot attrition or engagement risks before they impact performance.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/solutions/talentmanagement/cta.jpg"
            title="Designed for Efficiency. Built for Engagement."
            description="Deliver consistent, high-touch employee experiences
                        while simplifying your backend workflows and reducing
                        overhead."
            action={{
              className: "uppercase",
              size: "large",
              type: "link",
              isExternal: true,
              href: "https://circleshr.com/",
              children: (
                <>
                  Experience&nbsp; <b>Circles</b>
                </>
              ),
            }}
          />
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

export default TalentManagementEmployeeExperience;
