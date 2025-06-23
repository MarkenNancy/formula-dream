import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Typo, Container, Icons, Button, GetInTouch } from "@/components";
import PositionsContent from "@/components/BlocksRenderer/PositionsContent";

import PositionsBlocksRenderer from "@/components/BlocksRenderer/PositionsBlocksRenderer";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import Video from "@/components/atom/Video/Video";
import { FadeUp } from "@/components/animation";
import {
  getOpenPositionsBySlug,
  getOpenPositionsMetaBySlug,
} from "@/data/loaders";
import DateFormat from "@/components/atom/DateFormat/DateFormat";

type Props = {
  params: Promise<{ slug: string }>;
};
// meta data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: metaData } = await getOpenPositionsMetaBySlug(slug);
  if (!metaData || metaData.length === 0) {
    notFound();
  }
  const jobData = metaData[0];
  const jobMeta = jobData.metaData;

  const mTitle = jobMeta?.title || jobData.title;
  const mDescription = jobMeta?.description || jobData.description;
  const mKeywords: string[] = [];
  jobMeta?.keywords?.map((keyword: { title: string }) =>
    mKeywords.push(keyword.title)
  );

  return {
    title: mTitle,
    description: mDescription,
    keywords: mKeywords,
  };
}

// meta data

const Positions: React.FC<Props> = async ({ params }) => {
  const { slug } = await params;

  const { data: openPositions } = await getOpenPositionsBySlug(slug);
  if (!openPositions || openPositions.length === 0) {
    notFound();
  }
  const positionsData = openPositions[0];
  const positionsContent = positionsData.content;
  const date = positionsData.createdAt;

  return (
    <>
      <section className="text-white md:pb-[14rem] md:pt-[18rem] py-[12rem] relative w-full">
        <Video
          source="/video/bannerCareer.mov"
          poster="/images/about/videoPoster.jpg"
          fallbackColor="#0B0824"
          className=""
        />
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat -z-[1} opacity-90"
          style={{
            background: "url('/images/home/bannerVideo.png')",
          }}
        ></div>
        <div className="relative z-10">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7">
                <FadeUp delay={0.2}>
                  <Typo
                    tag="h1"
                    size="h2"
                    weight="bold"
                    isTitle
                    className="text-balance lg:text-[3.125rem] lg:leading-none tracking-[-0.063rem]"
                  >
                    {positionsData.title}
                  </Typo>
                  <Typo tag="p" size="lg" className="text-pretty my-4">
                    <span className="uppercase inline-flex flex-wrap">
                      {positionsData.location && (
                        <span className="inline-flex gap-2 items-center">
                          <Icons name="location" size={1.375} />
                          {positionsData.location}
                        </span>
                      )}

                      {positionsData.job_type && (
                        <span>
                          &#160; ✦ &#160;{" "}
                          {positionsData.job_type.map(
                            (ty: string, index: number) => (
                              <React.Fragment key={index}>
                                <span>{ty}</span>
                                {index + 1 < positionsData.job_type.length && (
                                  <span className="px-1">/</span>
                                )}
                              </React.Fragment>
                            )
                          )}
                        </span>
                      )}

                      {positionsData.experience && (
                        <span> &#160; ✦ &#160; {positionsData.experience}</span>
                      )}
                    </span>
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <Typo
                    tag="div"
                    size="sm"
                    className="inline-flex items-center gap-1"
                  >
                    {date && <DateFormat dataSring={date} />}
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <div className="mt-4">
                    <Button
                      isRounded
                      size="large"
                      variant="primary"
                      className="uppercase"
                      typeForm="careers"
                      hiddenFields={{
                        source_website: "clarient",
                        job_title: positionsData.title,
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                </FadeUp>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section id="flexworkflexcampus" className="pb-10">
        <Container isSmall>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
              {positionsContent && positionsContent.length > 0 && (
                <div className="md:mb-6 mt-8">
                  {positionsContent.map(
                    (contentItm: {
                      title: string;
                      description: BlocksContent;
                      id: number | string;
                    }) => (
                      <div key={contentItm.id} className="pt-8 lg:pt-10">
                        <Typo tag="h3" size="h3" weight="bold" className="mb-2">
                          {contentItm.title}
                        </Typo>
                        <div className="grid grid-cols-12 gap-8">
                          <div className="col-span-11 lg:col-span-10">
                            <PositionsContent>
                              <PositionsBlocksRenderer
                                content={contentItm.description}
                              />
                              {/* <BlocksRenderer content={contentItm.description} /> */}
                            </PositionsContent>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="col-span-12 md:col-span-3 pt-10 lg:pt-16">
              {/* <div className="stickyUp sticky top-28 z-10 mb-10">
                <ContactCard
                  isHover={false}
                  className="mb-6 border-b border-[#41479b] border-opacity-20"
                  action={{
                    children: " Send us your Resume",
                    variant: "primary",
                    className: "text-white",
                    // dataTfPopup: "v2G9KeAb",
                    strapiModal: "careers",
                    hidden: {
                      source_website: "millipixels",
                    },
                  }}
                  description={
                    <>
                      As a growing organization that values talent, we are
                      always looking for uncommon talent. If you think you fit
                      the bill, regardless of any open positions, just send us
                      your resume. We’d love to talk and see where this takes
                      us.
                    </>
                  }
                  title="Apply for a position"
                />

                <ContactCard
                  className="pb-0 mb-6 border-b border-[#41479b] border-opacity-20"
                  content={
                    <>
                      <a
                        className="font-bold text-xl hover:text-[#ff4e33]"
                        href="tel:+917717306234"
                      >
                        +91 771 730 6234
                      </a>
                    </>
                  }
                  description={
                    <>
                      Call our Recruiting team for any clarifications,
                      questions, or to take the next steps with your
                      application.
                    </>
                  }
                  title="Call Millipixels HR
                "
                />
                <ContactCard
                  className="pb-0 mb-6 border-b border-[#41479b] border-opacity-20"
                  content={
                    <>
                      <a
                        className="font-bold text-xl hover:text-[#ff4e33]"
                        href="mailto:hr@millipixels.com"
                      >
                        hr@millipixels.com
                      </a>
                    </>
                  }
                  description={
                    <>
                      We’ll be happy to meet at any of our primary office
                      location at Mohali, India, or at any of our other offices
                      at New Delhi, Mumbai, Bangalore, Singapore, London or New
                      York with prior appointment.
                    </>
                  }
                  title="Meet us in person
                "
                />
              </div> */}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F5F5F5]">
        <Container isSmall>
          <GetInTouch />
        </Container>
      </section>
    </>
  );
};

export default Positions;
