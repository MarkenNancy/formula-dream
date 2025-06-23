"use client";
import React, { useEffect } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { twMerge } from "tailwind-merge";
import { Container, Typo } from "@/components";
import ContentCard from "@/components/atom/ContentCard/ContentCard";
import SocialShare from "@/components/atom/SocialShare/SocialShare";
import AuthorCard, {
  Props as AuthorCardProps,
} from "@/components/molecules/AuthorCard/AuthorCard";
import SpyNavBlog from "@/components/molecules/SpyNavBlog/SpyNavBlog";
export type CardProps = {
  title: string;
  target: string;
  content: React.ReactNode;
};
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  authorId?: string;
  author?: AuthorCardProps;
  pageType?: "blog" | "cms";
  content?: {
    title: string;
    content: BlocksContent;
  }[];
};
const ContentBlog: React.FC<Props> = ({
  className,
  author,
  pageType = "cms",
  style,
  content,
}) => {
  type ContentPageProps = {
    title: string;
    description?: BlocksContent;
  };
  const cards = content?.map((itm: ContentPageProps, index: number) => {
    const content = itm.description;
    return {
      title: itm.title,
      target: `secIds-${index}`,
      content: content ? <BlocksRenderer content={content} /> : null,
    };
  });

  const navsArry = cards?.map((itm: { title: string; target: string }) => {
    return { label: itm.title, id: itm.target };
  });
  // console.log("navsArry", navsArry);

  useEffect(() => {
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
      if (links[i].hostname != window.location.hostname) {
        links[i].target = "_blank";
      }
    }
  }, []);

  return (
    <section
      className={twMerge(`pb-10 md:pb-[6.25rem] pt-5 md:pt-8`, className)}
      style={style}
    >
      <Container isSmall>
        <div className="md:grid md:grid-cols-12">
          <div className="col-span-12 md:col-span-9 lg:col-span-9">
            <div className="grid md:grid-cols-12">
              <div className="col-span-12 lg:col-span-8">
                <div
                  className={`${pageType === "blog" ? "md:pe-8" : "pt-9"}
                  `}
                >
                  {(cards ?? []).map((itm, index) => (
                    <div key={index} id={itm.target} className="pb-9">
                      <div className="text-sm ps-8 md:ps-11 relative">
                        <span className="absolute md:left-3 left-1 top-1">
                          {/* <Icons name="list-icon" variant="stroke" /> */}
                        </span>
                        <Typo
                          tag="h2"
                          weight="bold"
                          className="mb-[.625rem] text-pretty"
                          size="md"
                        >
                          {itm.title}
                        </Typo>
                        {itm.content && (
                          <div className="pb-3 border-b border-[#d9d9d9]">
                            <ContentCard>{itm.content}</ContentCard>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div
                  className={`${
                    pageType === "blog"
                      ? "bg-white relative z-[1] sm:ps-12 lg:ps-0"
                      : ""
                  }`}
                >
                  {author && <AuthorCard {...author} />}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 md:-order-1">
            <div className="md:sticky md:top-16 md:pt-9 max-w-56">
              {navsArry && navsArry.length > 0 && (
                <div className="hidden md:block">
                  <SpyNavBlog nav={navsArry} />
                </div>
              )}
              {pageType === "blog" && <SocialShare />}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentBlog;
