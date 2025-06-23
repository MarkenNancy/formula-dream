import { Suspense } from "react";
import { Button, Container, GetInTouch, Typo } from "@/components";
import { FadeUp, Parallax, RotateOnScroll } from "@/components/animation";
import ImageGallery from "@/components/atom/ImageGallery/ImageGallery";
import EmployeeSpeakSlider from "@/components/molecules/EmployeeSpeakSlider/EmployeeSpeakSlider";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import OpenInternships from "@/components/ServerComp/OpenInternships";
import OpenPositions from "@/components/ServerComp/OpenPositions";
import Image from "next/image";
import ExcitingRole from "@/components/molecules/ExcitingRole/ExcitingRole";
import PageBanner from "@/components/molecules/PageBanner/PageBanner";

import type { Props as OpenPositionsCardProps } from "@/components/molecules/OpenPositionsCard/OpenPositionsCard";
// seo
import type { Metadata } from "next";
import { careersPageSeo } from "@/data/seoData";
import { getOpenPositions } from "@/data/loaders";
export const metadata: Metadata = careersPageSeo;
// end seo

export default async function Careers() {
  let jobs = [];
  let internships = [];
  try {
    const { data: openPositionsData } = await getOpenPositions();
    jobs = openPositionsData.filter(
      (job: OpenPositionsCardProps) => job.type === "job"
    );
    internships = openPositionsData.filter(
      (job: OpenPositionsCardProps) => job.type === "internship"
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error; // or return null;
  }

  // console.dir(jobs);
  // console.dir(internships);

  const navBarData = [
    {
      id: "overview",
      label: "overview",
    },
    {
      id: "life",
      label: "life @clarient",
    },
    {
      id: "beyond",
      label: "beyond work",
    },
  ];

  if (jobs && jobs.length > 0) {
    navBarData.push({
      id: "jobs",
      label: "openings",
    });
  }
  if (internships && internships.length > 0) {
    navBarData.push({
      id: "internships",
      label: "internships",
    });
  }

  return (
    <>
      <PageBanner
        title="Shape the Future. Build Yours Here."
        description="We empower bold thinkers, innovators, and problem-solvers to turn big ideas into real impact. Join us and build something extraordinary."
        action={{
          children: (
            <>
              Explore <b className="ms-1">Opportunities</b>
            </>
          ),
        }}
        video={{
          source: "/video/bannerCareer.mov",
        }}
        className="bg-[url(/images/careerVideoBg.jpg)]"
        isScrollToJobs
      />

      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Careers"
        nav={navBarData}
      />
      <section
        id="overview"
        style={{
          background: "linear-gradient(0deg, #ECECEC 0%, #ECECEC 100%)",
        }}
      >
        <div className="md:pt-24 pt-12 md:pb-16 pb-10">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-4">
                <FadeUp>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    isTitle
                    className="text-balance leading-none"
                  >
                    Careers at
                    <span className="ps-1 relative lg:after:block after:hidden after:absolute after:h-2 after:rounded-full after:w-2 after:bg-[#9C2FFB] after:left-[86px] after:top-3">
                      clarient
                    </span>
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="grid md:grid-cols-12 lg:pt-10 pt-4">
              <div className="md:col-span-8 md:col-start-4">
                <FadeUp delay={0.2}>
                  <Typo tag="p" size="2xl" className="text-pretty mb-4">
                    We’re not just building technology. We’re building a future
                    where creativity, innovation, and impact come together. At
                    Clarient, every idea counts, every voice matters, and every
                    day is a chance to make a difference.
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <Typo tag="p" size="2xl" className="text-pretty">
                    Ready to make your mark? Here’s your chance to be part of
                    something extraordinary.
                  </Typo>
                </FadeUp>
              </div>
            </div>
          </Container>
        </div>
        <div id="life">
          <Container>
            <div
              className="bg-white rounded-lg relative z-10"
              style={{
                background: "linear-gradient(0deg, #FFF 0%, #FFF 100%)",
              }}
            >
              <div className="md:ps-20 ps-8 p-5">
                <FadeUp delay={0.4}>
                  <ImageGallery />
                </FadeUp>
              </div>
              <div className="md:pt-11 pt-6 pb-10 md:pb-20 md:ps-20 ps-8 md:pe-16 pe-8 relative z-10">
                <div className="grid lg:grid-cols-12 relative z-20">
                  <div className="lg:col-span-9 grid md:grid-cols-3 sm:grid-cols-2">
                    <FadeUp
                      delay={0.1}
                      className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] relative h-full sm:min-h-[17.5rem]"
                      style={{
                        backdropFilter: "blur(0.281rem)",
                      }}
                    >
                      <Typo
                        tag="p"
                        size="xl"
                        weight="bold"
                        className="text-balance !leading-tight text-secondary mb-4"
                      >
                        Collaborative
                        <br />
                        Spirit
                      </Typo>
                      <Typo tag="p" size="sm" className="text-pretty">
                        We bring together diverse minds to create bold
                        solutions. Teamwork makes everything possible.
                      </Typo>
                      <div className="absolute w-full h-[0.188rem] bg-secondary left-0 top-0"></div>
                    </FadeUp>
                    <FadeUp
                      delay={0.2}
                      className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] sm:border-l-0 relative h-full sm:min-h-[17.5rem]"
                      style={{
                        backdropFilter: "blur(0.281rem)",
                      }}
                    >
                      <Typo
                        tag="p"
                        size="xl"
                        weight="bold"
                        className="text-balance text-secondary mb-4 !leading-tight"
                      >
                        Flexibility &<br /> Freedom
                      </Typo>
                      <Typo tag="p" size="sm" className="text-pretty">
                        Remote-first, hybrid, or in-office—you decide. Your
                        work, your way.
                      </Typo>
                      <div className="absolute w-full h-[0.188rem] bg-secondary left-0 top-0"></div>
                    </FadeUp>
                    <FadeUp
                      delay={0.3}
                      className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] md:border-l-0 border-l relative h-full sm:min-h-[17.5rem]"
                      style={{
                        backdropFilter: "blur(0.281rem)",
                      }}
                    >
                      <Typo
                        tag="p"
                        size="xl"
                        weight="bold"
                        className="text-balance text-secondary mb-4 !leading-tight"
                      >
                        Diversity &<br /> Inclusion
                      </Typo>
                      <Typo tag="p" size="sm" className="text-pretty">
                        Different perspectives fuel innovation. We embrace it,
                        encourage it, and thrive on it.
                      </Typo>
                      <div className="absolute w-full h-[0.188rem] bg-secondary left-0 top-0"></div>
                    </FadeUp>
                    <FadeUp
                      delay={0.4}
                      className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] min-sm:max-md:border-l-0 relative h-full sm:min-h-[17.5rem]"
                      style={{
                        backdropFilter: "blur(0.281rem)",
                      }}
                    >
                      <Typo
                        tag="p"
                        size="xl"
                        weight="bold"
                        className="text-balance text-secondary mb-4 !leading-tight"
                      >
                        Continuous
                        <br /> Learning
                      </Typo>
                      <Typo tag="p" size="sm" className="text-pretty">
                        Growth never stops here. From workshops to mentorships,
                        we help you stay ahead.
                      </Typo>
                      <div className="absolute w-full h-[0.188rem] bg-secondary left-0 top-0"></div>
                    </FadeUp>
                  </div>
                </div>
                <div className="absolute lg:right-20 right-0 lg:bottom-14 bottom-10 md:block hidden">
                  <RotateOnScroll>
                    <Image
                      // src="/images/careers/bg.png"
                      src="/images/careers/bgNew.png"
                      alt="Image"
                      width={686}
                      height={718}
                      className="max-w-xl h-auto object-cover"
                    />
                  </RotateOnScroll>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="lg:-mt-32 md:-mt-16 -mt-8 relative">
          <Image
            src="/images/careers/groupImage.png"
            alt="Image"
            width={1920}
            height={400}
            quality={100}
            className="w-full h-auto object-cover min-h-[24rem]"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center w-full">
            <Container isSmall>
              <Parallax startOffset={-80} endOffset={80}>
                <div className="md:max-w-2xl max-w-full mx-auto">
                  {/* <FadeUp> */}
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="bold"
                    isTitle
                    className="text-balance leading-none"
                  >
                    Reimagine what’s possible.  Create what’s next.
                  </Typo>
                  {/* </FadeUp> */}
                  {/* <FadeUp delay={0.2}> */}
                  <div className="mt-6">
                    <Button
                      isRounded
                      size="large"
                      variant="primary"
                      className="uppercase"
                      typeForm="contact"
                    >
                      Contact US
                    </Button>
                  </div>
                  {/* </FadeUp> */}
                </div>
              </Parallax>
            </Container>
          </div>
        </div>
      </section>
      <section
        id="beyond"
        className="md:pt-20 pt-10"
        style={{
          background: "linear-gradient(180deg, #ECECEC 0%, #FFF 46.14%)",
        }}
      >
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-5">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  className="text-pretty leading-none mb-4"
                  isTitle
                >
                  Beyond Work
                </Typo>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty md:pe-5">
                  We care about more than just the work you do. We care
                  about you.
                </Typo>
              </FadeUp>
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 md:pt-[3.5rem] pt-10">
            <FadeUp
              delay={0.1}
              className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] border-t-[0.188rem] border-t-secondary relative h-full sm:min-h-[17.5rem]"
              style={{
                backdropFilter: "blur(0.281rem)",
              }}
            >
              <Typo
                tag="p"
                size="xl"
                weight="bold"
                className="text-balance !leading-tight text-secondary mb-4"
              >
                Wellness
                <br /> Programs
              </Typo>
              <Typo tag="p" size="sm" className="text-pretty">
                From mental health support to fitness initiatives, your
                well-being matters to us.
              </Typo>
            </FadeUp>
            <FadeUp
              delay={0.2}
              className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] sm:border-l-0 border-t-[0.188rem] border-t-secondary relative h-full sm:min-h-[17.5rem]"
              style={{
                backdropFilter: "blur(0.281rem)",
              }}
            >
              <Typo
                tag="p"
                size="xl"
                weight="bold"
                className="text-balance text-secondary mb-4 !leading-tight"
              >
                Celebrations & Recognition
              </Typo>
              <Typo tag="p" size="sm" className="text-pretty">
                Achievements, big and small, are meant to be celebrated.
              </Typo>
            </FadeUp>
            <FadeUp
              delay={0.3}
              className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] md:border-l-0 border-t-[0.188rem] border-t-secondary relative h-full sm:min-h-[17.5rem]"
              style={{
                backdropFilter: "blur(0.281rem)",
              }}
            >
              <Typo
                tag="p"
                size="xl"
                weight="bold"
                className="text-balance text-secondary mb-4 !leading-tight"
              >
                Giving
                <br /> Back
              </Typo>
              <Typo tag="p" size="sm" className="text-pretty">
                Our CSR initiatives include donations to a nursing college,
                supporting aspiring healthcare professionals.
              </Typo>
            </FadeUp>
            <FadeUp
              delay={0.4}
              className="p-8 md:px-10 md:py-20 bg-white border border-[#CCC] sm:border-l-0 border-t-[0.188rem] border-t-secondary relative h-full sm:min-h-[17.5rem]"
              style={{
                backdropFilter: "blur(0.281rem)",
              }}
            >
              <Typo
                tag="p"
                size="xl"
                weight="bold"
                className="text-balance text-secondary mb-4 !leading-tight"
              >
                Community
                <br /> Impact
              </Typo>
              <Typo tag="p" size="sm" className="text-pretty">
                We engage in initiatives that create real, positive change.
              </Typo>
            </FadeUp>
          </div>
        </Container>
        <Container isSmall>
          <div className="md:grid md:grid-cols-12">
            <div className="md:col-span-4 md:ps-10 md:pt-16 p-8 bg-[url('/images/services/coutBg.jpg')] bg-repeat bg-cover bg-center">
              <FadeUp>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="normal"
                  className="text-balance text-white"
                  isTitle
                >
                  Employees Speak
                </Typo>
              </FadeUp>
            </div>
            <div className="md:col-span-8">
              <EmployeeSpeakSlider
                slides={[
                  {
                    id: 0,
                    name: "Deepak Sharma",
                    designation: "VP of Creative Services",
                    description:
                      "“During one of the most challenging times of my life, the flexibility Clarient offered allowed me to work remotely while supporting my family. It’s more than a workplace—it’s a community.” ",
                    image: "/images/careers/deepak.png",
                  },
                  {
                    id: 1,
                    name: "Jaismeen Kaur",
                    designation: "VP of Delivery",
                    description:
                      "“Balancing new motherhood and my career was possible only because of Clarient’s commitment to flexibility. I never felt like I had to choose between my family and my goals.” ",
                    image: "/images/careers/jaismeen.png",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </section>
      {jobs && jobs.length > 0 && (
        <Suspense>
          <OpenPositions jobs={jobs} />
        </Suspense>
      )}
      {internships && internships.length > 0 && (
        <Suspense>
          <OpenInternships internships={internships} />
        </Suspense>
      )}
      <section className="bg-[#F5F5F5] pt-10 md:pt-20">
        <Container isSmall>
          <ExcitingRole />
          <GetInTouch />
        </Container>
      </section>
    </>
  );
}
