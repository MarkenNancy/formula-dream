"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Icons, Typo, Container } from "@/components";
import ContentCard from "@/components/atom/ContentCard/ContentCard";
import SpyNavBlog from "@/components/molecules/SpyNavBlog/SpyNavBlog";

export type CardProps = {
  title: string;
  target: string;
  content: React.ReactNode;
};
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  showContactCard?: boolean;
  cards?: CardProps[];
  description?: React.ReactNode;
};
const ContentPage: React.FC<Props> = ({
  className,
  cards = [],
  showContactCard = true,
  description,
  style,
}) => {
  const navsArry = cards?.map((itm: { title: string; target: string }) => {
    return { label: itm.title, id: itm.target };
  });
  return (
    <section
      className={twMerge(
        `pb-10 md:pb-[6.25rem] md:pt-8 bg-gradientEnd`,
        className
      )}
      style={style}
    >
      <Container>
        <div className="md:grid md:grid-cols-12">
          <div className="col-span-12 md:col-span-9 lg:col-span-9">
            <div className="grid md:grid-cols-12">
              <div className="col-span-12 lg:col-span-8">
                <div className={`pt-9`}>
                  {description && (
                    <div className="">
                      <div className="pb-9">
                        <div className="text-sm ps-8 md:ps-11 relative">
                          {/* <span className="absolute md:left-3 left-1 top-1">
                            <Icons name="list" variant="stroke" />
                          </span>
                          <Typo
                          tag="h2"
                          weight="bold"
                          className="mb-[.625rem] text-pretty"
                          size="md"
                        >
                          {itm.title}
                        </Typo> */}
                          <div className="pb-3 border-b border-[#d9d9d9] text-pretty">
                            <ContentCard>{description}</ContentCard>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cards.map((itm, index) => (
                    <div key={index} id={`${itm.target}`} className="pb-9">
                      <div className="text-sm ps-8 md:ps-11 relative">
                        <span className="absolute md:left-3 left-1 top-1">
                          <Icons name="list" variant="stroke" />
                        </span>
                        <Typo
                          tag="h2"
                          weight="bold"
                          className="mb-[.625rem] text-pretty"
                          size="md"
                        >
                          {itm.title}
                        </Typo>
                        <div className="pb-3 border-b border-[#d9d9d9] text-pretty">
                          <ContentCard>{itm.content}</ContentCard>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 md:-order-1">
            <div className="md:sticky md:top-16 md:pt-9 max-w-56">
              <div className="hidden md:block">
                <SpyNavBlog nav={navsArry} />
              </div>

              <div>
                {showContactCard && (
                  <div className="mt-8">
                    <Typo tag="h6" size="h6" weight="bold" className="mb-2">
                      Contact
                    </Typo>
                    <Typo tag="p" size="sm" className="mb-4 text-pretty">
                      If you have any questions about this Privacy Policy,
                      please contact us:
                    </Typo>
                    <div className="grid grid-cols-[1.5rem_1fr] gap-3">
                      <Icons
                        size={1.5}
                        name="email"
                        className="text-[#9B9B9B]"
                      />
                      <a
                        href="mailto:hello@clarient.us"
                        className="text-secondary font-medium"
                      >
                        {/* legal@millipixels.com */}
                        hello@clarient.us
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentPage;
