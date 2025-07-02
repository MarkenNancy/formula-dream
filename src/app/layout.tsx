import type { Metadata } from "next";
import { ReactLenis } from "@/utils/lenis";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-fade";

import { Albert_Sans, IBM_Plex_Sans, Inter } from "next/font/google";

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

const gpImage = `/favicon.ico`;

export const metadata: Metadata = {
  title: {
    template: "%s | Formula Dream",
    default: "Formula Dream",
  },
  description: "",
  openGraph: {
    images: [gpImage],
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en" className="2xl:text-root">
        <head></head>
        <body
          className={`${AlbertSans.className} ${IBMPlexSans.variable} ${InterFont.variable} antialiased flex flex-col min-h-screen`}
        >
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
