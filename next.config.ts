import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: [
    //   "localhost",
    //   "millipixels-strapi.millipixels.in",
    //   "stream-api.millipixels.in",
    //   "stream-qa.millipixels.in",
    // ],
    // unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "localhost", pathname: "**" },
      {
        protocol: "https",
        hostname: "clarient-starpi-qa.millipixels.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.clarient.us",
        pathname: "**",
      },
    ],
  },
  compiler: {
    // reactStrictMode: true,
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/ai-services",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/solutions/esg-solutions",
        permanent: true,
      },
      {
        source: "/industries",
        destination: "/industries/media-entertainment-and-publishing",
        permanent: true,
      },
      // Wildcard path matching
      // {
      //   source: '/blog/:slug',
      //   destination: '/news/:slug',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
