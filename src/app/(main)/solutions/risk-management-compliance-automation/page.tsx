import {
  BeyondCard,
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
import { FadeUp } from "@/components/animation";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";

// seo
import type { Metadata } from "next";
import { riskManagementComplianceAutomationSeo } from "@/data/seoData";
export const metadata: Metadata = riskManagementComplianceAutomationSeo;
// end seo

const RiskManagementComplianceAutomation = () => {
  return (
    <>
      <PageBanner
        title="Compliance, Without the Complexity."
        description="Automate compliance tracking, streamline workflows and reduce risk with an intuitive GRC platform."
        action={{
          children: (
            <>
              <span className="uppercase">
                Request a <b>Demo</b>
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
        pageName="Risk Management"
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
                  tag="p"
                  size="2xl"
                  weight="bold"
                  isTitle
                  className="text-pretty uppercase"
                >
                  Challenges & Needs
                </Typo>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  className="text-pretty leading-none mb-4"
                  isTitle
                >
                  Why Compliance Still Feels Hard
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  Even with tools, compliance is often a manual, reactive
                  process—spread across spreadsheets, emails, and outdated
                  systems. Businesses face
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
                    description="Siloed regulatory information"
                    delay={0.1}
                    className="sm:min-h-32 min-h-20"
                  />
                  <BeyondCard
                    description="Missed deadlines and rising penalties"
                    delay={0.2}
                    className="sm:min-h-32 min-h-20"
                  />
                  <BeyondCard
                    description="Inconsistent audit trails"
                    delay={0.3}
                    className="sm:min-h-32 min-h-20"
                  />
                  <BeyondCard
                    description="Limited visibility across departments"
                    delay={0.4}
                    className="sm:min-h-32 min-h-20"
                  />
                  <BeyondCard
                    description="Burnout among compliance teams"
                    delay={0.5}
                    className="sm:min-h-32 min-h-20"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-12 md:pt-12 pt-6">
              <div className="md:col-span-10">
                <FadeUp delay={0.3}>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    className="text-pretty text-secondary"
                    isTitle
                  >
                    Our platform addresses these challenges—turning chaos into
                    control.
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
              <div className="md:col-span-9">
                <FadeUp>
                  <Typo
                    tag="p"
                    size="2xl"
                    weight="bold"
                    className="uppercase !leading-tight mb-1"
                  >
                    How It Works
                  </Typo>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-pretty leading-none"
                  >
                    Compliance, Without the Hassle
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="md:pt-16 pt-8">
              <ChallengesCardGrid
                columns="4"
                cards={[
                  {
                    title: "All-in-One Compliance Dashboard",
                    items: [
                      "Manage every regulatory obligation from one place.",
                    ],
                    delay: 0,
                  },
                  {
                    title: "Intelligent Alerts",
                    items: [
                      "Automated notifications keep you ahead of deadlines.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Predictive Risk Monitoring",
                    items: ["Identify compliance risks before they escalate."],
                    delay: 0.2,
                  },
                  {
                    title: "Collaborative & Secure",
                    items: [
                      "Controlled access for teams, auditors, and clients.",
                    ],
                    delay: 0.3,
                  },
                ]}
              />
            </div>
          </Container>
        </div>
        <div className="md:pt-20 pt-10" id="features">
          <div className="">
            <Container isSmall>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-6">
                  <FadeUp>
                    <Typo
                      tag="p"
                      size="2xl"
                      weight="bold"
                      className="text-pretty uppercase mb-1"
                      isTitle
                    >
                      Features
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
                      Everything You Need, Nothing You Don’t.
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid md:grid-cols-12 mt-4">
                <div className="md:col-span-6">
                  <FadeUp delay={0.2}>
                    <Typo
                      tag="p"
                      size="lg"
                      className="text-pretty"
                      weight="normal"
                    >
                      Manage compliance effortlessly with automation, real-time
                      tracking, and intelligent reporting.
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
                    image:
                      "/images/solutions/riskManagement/centralisedcompliance.jpg",
                    title: "Centralized Compliance Control",
                    listItems: [
                      "<b>Eliminate Complexity:</b> Consolidate all regulatory requirements, filings, and audits in a single dashboard.",
                      "<b>Seamless Multi-Entity Oversight: </b> Manage multiple clients, business units, and teams without switching platforms.",
                      "<b>Instant Status Checks: </b> Always know what’s pending, completed, or at risk.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/solutions/riskManagement/realtimerisk.jpg",
                    title: "Real-Time Risk Insights & Analytics",
                    listItems: [
                      "<b>Predictive Risk Monitoring: </b>Identify potential compliance risks before they escalate.",
                      "<b>Automated Compliance Health Checks: </b> Get real-time insights into regulatory gaps.",
                      "<b>Dynamic Dashboards: </b> Tailored reports that evolve based on your organization’s needs.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/solutions/riskManagement/automation.jpg",
                    title: "Automation That Works for You",
                    listItems: [
                      "<b>Auto-Generated Compliance Reports: </b> Eliminate human error with structured, audit-ready reports.",
                      "<b>Smart Notifications & Task Automation: </b> Never miss a deadline with system-driven alerts.",
                      "<b>Workflow Automation: </b> Create approval chains, manage filings, and reduce administrative load.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/solutions/riskManagement/rolebased.jpg",
                    title: "Role-Based Access & Secure Collaboration",
                    listItems: [
                      "<b>Granular User Permissions: </b> Define access based on role, function, or responsibility.",
                      "<b>Multi-User, Multi-Client Capabilities: </b> Perfect for firms handling multiple entities.",
                      "<b>Encrypted Data Exchange: </b> Keep compliance data secure with enterprise-grade encryption.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
          <SolutionCtaBg
            image="/images/solutions/riskManagement/cta.jpg"
            title="The Future of Compliance is Veriquent: Smart, Simple, Scalable."
            description="Managing compliance shouldn’t be overwhelming. Automate regulatory tracking, streamline workflows, and stay audit-ready—all in one intuitive platform designed for professionals."
            action={{
              className: "uppercase",
              size: "large",
              children: (
                <>
                  See How&nbsp; <b>It Works</b>
                </>
              ),
              typeForm: "contact",
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

export default RiskManagementComplianceAutomation;
