import { Props as BlogType } from "@/components/atom/BlogCard/BlogCard";

export const blogs: BlogType[] = [
  {
    id: 1,
    image: "/images/blog/blog_1.jpg",
    title: "How AI, Quantum, and Edge Are Converging to Shape the Future",
    slug: "/insights/the-future-of-enterprise-tech-powered-by-ai-quantum-computing-and-edge",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 2,
    image: "/images/blog/blog_2.jpg",
    title:
      "Building Ethical AI. Innovation, Responsibility and Compliance in Focus",
    slug: "/insights/building-ethical-ai-innovation-responsibility-and-compliance-in-focus",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 3,
    image: "/images/blog/blog_3.jpg",
    title:
      "Governing AI at Scale. Finding the Balance Between Progress and Protection",
    slug: "/insights/governing-ai-at-scale-finding-the-balance-between-progress-and-protection",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 4,
    image: "/images/blog/blog_4.jpg",
    title: "How Cloud 3.0 Brings Together AI Workloads FinOps and GreenOps",
    slug: "/insights/how-cloud-3-0-brings-together-ai-workloads-fin-ops-and-green-ops",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 5,
    image: "/images/blog/blog_5.jpg",
    title:
      "The Circular Economy and the Future of Sustainable Business Beyond Net Zero",
    slug: "/insights/the-circular-economy-and-the-future-of-sustainable-business-beyond-net-zero",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 6,
    image: "/images/blog/blog_6.jpg",
    title: "The Co Innovation Approach to Creating Value with Clients",
    slug: "/insights/the-co-innovation-approach-to-creating-value-with-clients",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 7,
    image: "/images/blog/blog_7.jpg",
    title:
      "How AI Is Transforming the Sourcing Deployment and Retention of Tech Talent",
    slug: "/insights/how-ai-is-transforming-the-sourcing-deployment-and-retention-of-tech-talent",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 8,
    image: "/images/blog/blog_8.jpg",
    title:
      "The Future of Media with Generative AI Content Creation Curation and Monetization",
    slug: "/insights/the-future-of-media-with-generative-ai-content-creation-curation-and-monetization",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 9,
    image: "/images/blog/blog_9.jpg",
    title: "Building a Scalable Digital Core with Platform Engineering for AI",
    slug: "/insights/building-a-scalable-digital-core-with-platform-engineering-for-ai",
    date: "April 2025",
    type: "BLOG",
  },
  {
    id: 10,
    image: "/images/blog/blog_10.jpg",
    title:
      "How to Measure Outsourcing Success by Focusing on Business KPIs Not Just SLAs",
    slug: "/insights/how-to-measure-outsourcing-success-by-focusing-on-business-kp-is-not-just-sl-as",
    date: "April 2025",
    type: "Article",
  },
];

// export const getBlogById = (id: number) => {
//   const blog = blogs.find((blog) => blog.id === id);
//   if (!blog) {
//     throw new Error("Blog not found");
//   }
//   return blog;
// };

export const getBlogsById = (id: number[]) => {
  const filteredBlogs = blogs.filter((blog) => id.includes(blog.id));
  if (filteredBlogs.length === 0) {
    // throw new Error("Blogs not found");
    return [];
  }
  return filteredBlogs;
};
