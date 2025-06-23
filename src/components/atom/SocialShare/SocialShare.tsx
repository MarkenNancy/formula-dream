"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import { usePathname } from "next/navigation";

import { Typo } from "@/components";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
// import Icons from "../Icons/Icon";

import { globalConstants } from "../../../globalvariables";

const DOMAIN = globalConstants.DOMAIN;

const SocialShare = () => {
  const pathname = usePathname();
  const currentUrl = `${DOMAIN}/${pathname}`;
  return (
    <div className="mt-8">
      <Typo tag="h6" size="h6" weight="bold">
        Share
      </Typo>
      <div className="flex flex-wrap gap-3 mt-3 [&>button]:grayscale [&>button:hover]:grayscale-0">
        {/* <span className="w-9 h-9 bg-[#ededed] rounded-full flex items-center justify-center">
          <Icons name="facebook" size={2} />
        </span> */}
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon
            size={32}
            round
            style={{
              width: "2rem",
              height: "2rem",
            }}
          />
        </FacebookShareButton>
        <LinkedinShareButton url={currentUrl}>
          <LinkedinIcon
            size={32}
            round
            style={{
              width: "2rem",
              height: "2rem",
            }}
          />
        </LinkedinShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon
            size={32}
            round
            style={{
              width: "2rem",
              height: "2rem",
            }}
          />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
