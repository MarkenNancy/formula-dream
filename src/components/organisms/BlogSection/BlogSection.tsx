"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "@/components";
import PostCategories from "@/components/molecules/PostCategories/PostCategories";

import BlogPostCard, {
  Props as BlogPostCardProps,
} from "@/components/molecules/BlogPostCard/BlogPostCard";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";

export type SectionProps = {
  className?: string;
  style?: React.CSSProperties;
  id: number;
  title: string;
  description?: string;
  bgColor?: string;
  blogs?: BlogPostCardProps[];
};

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  sections: SectionProps[];
};

const BlogSection: FC<Props> = ({ className, style, sections }) => {
  const navsArry = sections.map((itm) => {
    return { label: itm.title, id: `sec-${itm.id}` };
  });
  return (
    <div className={twMerge("bg-gradientEnd", className)} style={style}>
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="Insights"
        nav={navsArry}
      />
      <div className="pt-7 pb-16">
        {sections.map((section) => (
          <section
            key={section.id}
            className={twMerge(``, section.className)}
            style={section.style}
            id={`sec-${section.id}`}
          >
            <Container>
              <div className="grid md:grid-cols-12 gap-11">
                <div className="md:col-span-5">
                  <PostCategories
                    className="sticky top-36 pt-12"
                    title={section.title}
                    description={section.description}
                    bg={section.bgColor}
                  />
                </div>
                <div className="md:col-span-7">
                  <div className="lg:columns-2 gap-x-7">
                    {section.blogs &&
                      section.blogs.length > 0 &&
                      section.blogs.map((blog, index) => (
                        <div key={index} className="inline-block pt-12">
                          <BlogPostCard {...blog} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
