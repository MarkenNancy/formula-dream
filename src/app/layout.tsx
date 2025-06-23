import type { Metadata } from "next";
import { ReactLenis } from "@/utils/lenis";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { globalConstants } from "@/globalvariables";
const DOMAIN = globalConstants.DOMAIN;

import { Albert_Sans, IBM_Plex_Sans, Inter } from "next/font/google";
// import { Header, Footer } from "@/components";
import PasswordProtect from "@/components/atom/PasswordProtect/PasswordProtect";
// import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import dynamic from "next/dynamic";
import CanonicalSeo from "@/components/atom/CanonicalSeo/CanonicalSeo";
import ScrollToTop from "@/components/atom/ScrollToTop/ScrollToTop";
import GradientBackground from "@/components/animation/GradientBackground";
// import { getGlobalsData } from "@/data/loaders";
// import LoaderVideo from "@/components/molecules/LoaderVideo/LoaderVideo";
const LoaderVideo = dynamic(
  () => import("@/components/molecules/LoaderVideo/LoaderVideo"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const AlbertSans = Albert_Sans({
  variable: "--font-albert-sans",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
const IBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
const InterFont = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
});
/*
import localFont from "next/font/local";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

// export const metadata: Metadata = {
//   title: "Infinite Intelligence. At Your Fingertips.",
//   description: "Infinite Intelligence. At Your Fingertips.",
// };

const gpImage = `/favicon.ico`;

export const metadata: Metadata = {
  title: {
    template: "%s | Formula Dream",
    default: "Formula Dream",
  },
  description:
    "Clarient drives enterprise growth through AI-first solutions, digital transformation services, and scalable tech partnerships built for long-term success.",
  openGraph: {
    images: [gpImage],
  },
  // icons: ["https://narrate.blog/favicon.ico"],
  // icons: ["favicon.ico"],
  // keywords: [],
  /*
  openGraph: {
    title: "Clarient",
    description: "What’s next",
    // images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: "Clarient",
      description: "What’s next",
      // images: [image],
      creator: "@eersnington",
      },
      */
  metadataBase: new URL(DOMAIN),
};

const schemaJsonData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Formula Dream",
  url: "https://clarient.us",
  logo: "https://clarient.us/logo.svg",
  sameAs: "https://www.linkedin.com/company/clarient1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*
  let address = {};
  try {
    const { address: gAddress } = await getGlobalsData();
    address = gAddress;
  } catch (error) {
    console.error("Error fetching global data:", error);
    // throw error; // or return null;
  }

  console.dir(address);

  */

  return (
    <ReactLenis root>
      <html lang="en" className="2xl:text-root">
        <head>
          {/* {process.env.NEXT_PUBLIC_ENV !== "Production" && (
            <>
              <meta name="robots" content="noindex" />
            </>
          )}
          {process.env.NEXT_PUBLIC_ENV === "Production" && (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(schemaJsonData),
                }}
              />
            </>
          )} */}
        </head>
        <body
          className={`${AlbertSans.className} ${IBMPlexSans.variable} ${InterFont.variable} antialiased flex flex-col min-h-screen`}
        >
          <CanonicalSeo>
            {/* <PasswordProtect> */}
              {/* <Header /> */}
              {children}
              {/* <Footer /> */}
              {/* <ScrollToTop /> */}
              {/* <LoaderVideo /> */}
            {/* </PasswordProtect> */}
            {/* <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color="0, 0, 0"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              {
                target: ".custom",
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: "255, 255, 255",
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5,
                },
              },
            ]}
          /> */}
            {/* <Cursor /> */}
            {/* <SmokeCursor /> */}
            <GradientBackground />
          </CanonicalSeo>
        </body>
        {process.env.NEXT_PUBLIC_ENV === "Production" && (
          <>
            <GoogleAnalytics gaId="G-J6CV93FDZ7" />
            {/* <GoogleTagManager gtmId="GTM-52BK74GB" /> */}
          </>
        )}
      </html>
    </ReactLenis>
  );
}
