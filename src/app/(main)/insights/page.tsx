import { getBlogPageData } from "@/data/loaders";

import NotData from "@/components/molecules/NoData/NoData";
import { Container } from "@/components";
import PageBanner from "@/components/molecules/PageBanner/PageBanner";
// seo
import type { Metadata } from "next";
import { insightsPageSeo } from "@/data/seoData";
import BlogSection from "@/components/organisms/BlogSection/BlogSection";
export const metadata: Metadata = insightsPageSeo;
// end seo

const BlogListingPage = async () => {
  let sections = [];
  try {
    const { sections: sectionsData } = await getBlogPageData();
    sections = sectionsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error; // or return null;
  }
  // const { sections } = await getBlogPageData();
  // console.dir(sections);
  return (
    <>
      <PageBanner
        title="Built on Perspective. Sharpened by Experience."
        description="We build, we solve, we scale. But we also think. These are the questions we’re asking, the frameworks we trust, and the stories that have taught us the most — across AI, infrastructure, experience, and innovation."
        video={{
          source: "/video/bannerAbout.mov",
        }}
      />

      {sections && sections.length > 0 ? (
        <BlogSection sections={sections} />
      ) : (
        <section className="bg-gradientEnd">
          <Container>
            <NotData />
          </Container>
        </section>
      )}
    </>
  );
};

export default BlogListingPage;
