import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MergeSection from "@/components/about/MergeSection/MergeSection";

// import {
//   BlocksRenderer,
//   type BlocksContent,
// } from "@strapi/blocks-react-renderer";
import BannerBlogDetail from "@/components/molecules/BannerBlogDetail/BannerBlogDetail";
import { Container, GetInTouch } from "@/components";
import ExcitingRole from "@/components/molecules/ExcitingRole/ExcitingRole";
import ContentBlog from "@/components/templates/ContentBlog/ContentBlog";
import { getBlogBySlug, getBlogMetaBySlug } from "@/data/loaders";
import { getStrapiMedia } from "@/utils";

// meta data
const defImage = `/images/blogFiller.jpg`;

type Props = {
  params: Promise<{ slug: string }>;
};
// meta data
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: metaData } = await getBlogMetaBySlug(slug);
  if (!metaData || metaData.length === 0) {
    notFound();
  }
  const blogData = metaData[0];
  const blogMeta = blogData.metaData;

  const mTitle = blogMeta?.title || blogData.title;
  const mDescription = blogMeta?.description || blogData.description;
  const mKeywords: string[] = [];
  blogMeta?.keywords?.map((keyword: { title: string }) =>
    mKeywords.push(keyword.title)
  );
  const mImage = blogData.image ? getStrapiMedia(blogData.image.url) : defImage;

  return {
    title: mTitle,
    description: mDescription,
    keywords: mKeywords,
    openGraph: {
      images: [mImage || defImage],
    },
  };
}
// meta data

const BlogDetail = async ({ params }: Props) => {
  const { slug } = await params;
  const { data: blogData } = await getBlogBySlug(slug);
  if (!blogData || blogData.length === 0) {
    notFound();
  }
  const blog = blogData[0];
  // console.dir(blog);
  const author = blog.author;
  const imageUrl = blog.image ? getStrapiMedia(blog.image.url) : defImage;
  return (
    <>
      <BannerBlogDetail
        className="md:pb-28"
        tag={blog.category}
        title={blog.title}
        description={blog.description}
        date={blog.updatedAt}
        type="blog"
      />
      <section className="">
        <Container isSmall>
          <MergeSection className="md:mb-0">
            <div className="relative">
              <Image
                src={imageUrl || defImage}
                alt={blog.title}
                width={1300}
                height={500}
                className="w-full h-auto block rounded-md"
                quality={100}
              />
              <div className="w-full absolute top-[101%] right-0 -translate-y-full">
                <div className="grid md:grid-cols-12">
                  <div className="col-span-3"></div>
                  <div className="col-span-9">
                    <svg
                      className="md:-ml-14 md:opacity-100 opacity-0"
                      width="9.4375rem"
                      height="5.0625rem"
                      viewBox="0 0 151 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.8"
                        x="0.269531"
                        y="40.375"
                        width="40"
                        height="40"
                        fill="white"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="40.2695"
                        y="0.375"
                        width="110.492"
                        height="40"
                        fill="white"
                      ></rect>
                    </svg>
                    <div className="md:bg-white md:h-10 md:-ms-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </MergeSection>
        </Container>
      </section>
      <section>
        <ContentBlog author={author} pageType="blog" content={blog.content} />
      </section>
      <section className="pt-10 md:pt-20 bg-[#F5F5F5]">
        <Container isSmall>
          <ExcitingRole />
          <GetInTouch />
        </Container>
      </section>
    </>
  );
};

export default BlogDetail;
/*
export async function generateStaticParams() {
  const blogs = await fetch(`${APIBASEURL}/blogs`).then((res) => res.json());
  return blogs?.data?.map((blog: any) => ({
    blog: blog.attributes.slug,
  }));
}
*/
