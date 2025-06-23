import {
  AiFrameworkCardGrid,
  ChallengesCardGrid,
  Container,
  GetInTouch,
  SolutionCtaBg,
  Typo,
} from "@/components";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import React from "react";
import Image from "next/image";
import { FadeUp } from "@/components/animation";
import SolutionsSlider from "@/components/molecules/SolutionsSlider/SolutionsSlider";
import InformedSlider from "@/components/molecules/InformedSlider/InformedSlider";
import ExcitingRole from "@/components/molecules/ExcitingRole/ExcitingRole";
import PageBanner from "@/components/molecules/PageBanner/PageBanner";

// seo
import type { Metadata } from "next";
import { technologySaasAndConsultingSeo } from "@/data/seoData";
export const metadata: Metadata = technologySaasAndConsultingSeo;
// end seo

const TechnologySaasAndConsulting = () => {
  return (
    <>
      <PageBanner
        title="Powering Digital Transformation with Scalable & Secure Solutions"
        description="Technology is changing faster than ever—don’t get left behind. At Clarient, we help businesses harness the power of innovation with tailored solutions that drive efficiency, scalability, and long-term success."
        action={{
          typeForm: "contact",
          children: (
            <>
              <span className="uppercase">
                Let’s Build the <b>Future Together</b>
              </span>
            </>
          ),
        }}
        videoVimeoIframe={{
          videoId: "1077245827",
          className: "bg-[url(/images/technologySaasAndConsultingVideoBg.jpg)]",
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
        pageName="SaaS & Consulting"
        nav={[
          {
            id: "overview",
            label: "Overview",
          },
          {
            id: "ourpproach",
            label: "Our Approach",
          },
          {
            id: "solutions",
            label: "Solutions",
          },
          {
            id: "whyClarient",
            label: "Why Clarient?",
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
                  Technology Moves Fast. Strategy Moves You Forward.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-12 md:pt-16 pt-8 lg:gap-20 gap-10">
            <div className="md:col-span-7 flex items-end">
              <FadeUp delay={0.3} className="md:block hidden">
                <Image
                  src="/images/industries/services/overview.png"
                  alt="Image"
                  width={663}
                  height={438}
                  className="w-full h-auto object-cover"
                />
              </FadeUp>
            </div>
            <div className="md:col-span-5 md:pb-10 pb-0">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty mb-4">
                  The digital world doesn’t wait, and neither should you.
                  Businesses that don’t adapt risk obsolescence, while those
                  that embrace strategic innovation gain a competitive edge.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="2xl" className="text-pretty">
                  At Clarient, we don’t just implement technology—we craft
                  future-proof strategies that ensure seamless adoption, maximum
                  efficiency, and long-term scalability.
                </Typo>
              </FadeUp>
            </div>
            <div className="md:hidden block">
              <FadeUp delay={0.3}>
                <Image
                  src="/images/industries/services/overview.png"
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
          <div className="md:pt-20 pt-10" id="ourpproach">
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
                      Our Approach
                    </Typo>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      isTitle
                      className="text-pretty leading-none"
                    >
                      Strategically Transforming Concepts into Scalable Business
                      Solutions
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-9">
                  <FadeUp delay={0.2}>
                    <Typo tag="p" size="lg" className="text-pretty mt-2">
                      We devise strategies that align seamlessly with your
                      business vision. Our structured, end-to-end approach
                      guarantees the provision of appropriate solutions at
                      opportune moments.​
                    </Typo>
                  </FadeUp>
                </div>
              </div>
              <ChallengesCardGrid
                className="md:pt-20 pt-10"
                columns="4"
                cards={[
                  {
                    title: "Conceptualize",
                    items: [
                      "Crafting strategic plans, utilizing market insights, and outlining innovation pathways.​",
                    ],
                    delay: 0,
                  },
                  {
                    title: "Build",
                    items: [
                      "Developing agile, scalable, and future-proof systems customized to your needs.​",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Operate",
                    items: [
                      "Ensuring seamless integration, applying advanced analytics, and enhancing performance.​",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Optimize",
                    items: [
                      "Refining systems through ongoing enhancements to boost performance, eliminate inefficiencies, and sustain long-term value.",
                    ],
                    delay: 0.3,
                  },
                ]}
              />
            </Container>
          </div>
          <div className="md:pt-20 pt-10" id="solutions">
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
                      Innovate. Scale. Optimize.
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
                    image: "/images/industries/services/img0.jpg",
                    title: "Tech Stack Optimization",
                    listItems: [
                      "Upgrade from legacy systems to modern, high-performance architectures that ensure security, scalability, and efficiency.",
                    ],
                  },
                  {
                    id: 1,
                    image: "/images/industries/services/img1.jpg",
                    title: "Mixed Reality Frameworks",
                    listItems: [
                      "Develop immersive MR experiences that revolutionize training, collaboration, and customer interactions.",
                    ],
                  },
                  {
                    id: 2,
                    image: "/images/industries/services/img2.jpg",
                    title: "Application Development",
                    listItems: [
                      "Custom-built SaaS products designed to enhance business agility, user engagement, and operational effectiveness.",
                    ],
                  },
                  {
                    id: 3,
                    image: "/images/industries/services/img3.jpg",
                    title: "Cloud Consulting",
                    listItems: [
                      "Harness the power of AWS, IBM Cloud, and Azure to drive flexibility, security, and cost-efficiency at scale.",
                    ],
                  },
                  {
                    id: 4,
                    image: "/images/industries/services/img4.jpg",
                    title: "Digital Transformation",
                    listItems: [
                      "Leverage automation, AI, and next-gen technologies to streamline workflows and boost ROI.",
                    ],
                  },
                  {
                    id: 5,
                    image: "/images/industries/services/img5.jpg",
                    title: "Service Benchmarking & Optimization",
                    listItems: [
                      "Identify inefficiencies, remove bottlenecks, and maximize business performance through data-driven insights.",
                    ],
                  },
                ]}
              />
            </Container>
          </div>
        </div>
        <SolutionCtaBg
          image="/images/industries/technologySaSScta.jpg"
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
      </section>
      <section id="whyClarient">
        <div className="md:pt-20 pt-10">
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
                    Why Clarient?
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="lg:ps-24 md:ps-16 md:py-[3.5rem] py-10">
              <AiFrameworkCardGrid
                cards={[
                  {
                    title: "Industry Expertise",
                    items: [
                      "Decades of experience across SaaS, cloud, AI, and enterprise tech.",
                    ],
                  },
                  {
                    title: "Strategic Partnerships",
                    items: [
                      "Collaborating with Microsoft, AWS, Salesforce & more.",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Multi-Disciplinary Teams",
                    items: [
                      "A powerhouse of tech innovators, business strategists, and creative problem-solvers.",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "End-to-End Support",
                    items: [
                      "From ideation to execution, we’re with you at every step.",
                    ],
                    delay: 0.3,
                    className: "sm:!border-b md:!border-0",
                  },
                  {
                    title: "Proven Track Record",
                    items: [
                      "Results-driven solutions that maximize ROI and long-term value.",
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

export default TechnologySaasAndConsulting;
