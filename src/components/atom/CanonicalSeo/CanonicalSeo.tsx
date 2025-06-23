"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { globalConstants } from "@/globalvariables";
const DOMAIN = globalConstants.DOMAIN;
type Props = {
  children: React.ReactNode;
};
const CanonicalSeo: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const canonicalUrl = `${DOMAIN}${pathname}`;
  //   console.log("canonicalUrl", canonicalUrl);
  //   const pathnameBase = pathname.split("/")[1];
  //   console.log("pathnameBase", pathnameBase);
  return (
    <>
      <link rel="canonical" href={canonicalUrl} key="canonical" />
      {/* {process.env.NEXT_PUBLIC_ENV === "Production" && (
      )} */}
      {children}
    </>
  );
};

export default CanonicalSeo;
