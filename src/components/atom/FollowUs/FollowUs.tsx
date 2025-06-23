import React, { FC } from "react";
import { Typo } from "@/components";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import Icons, { IconProps } from "../Icons/Icon";

export type FollowLinkProps = {
  className?: string;
  style?: React.CSSProperties;
  href: string;
  icon: IconProps["name"];
};

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const followUsLinks: FollowLinkProps[] = [
  {
    href: "https://www.linkedin.com/company/clarient1",
    icon: "linkedin",
  },
  // {
  //   href: "#",
  //   icon: "facebook",
  // },
  // {
  //   href: "#",
  //   icon: "twitter",
  // },
  // {
  //   href: "#",
  //   icon: "instagram",
  // },
];

const FollowUs: FC<Props> = ({ className, style }) => {
  return (
    <div className={twMerge(``, className)} style={style}>
      <Typo tag="h4" size="sm" isTitle weight="bold" className="opacity-80">
        Follow Us
      </Typo>
      <ul className="flex items-center gap-4 mt-4">
        {followUsLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              target="_blank"
              className={twMerge(
                `size-9 bg-white text-black rounded-full hover:bg-secondary hover:text-white tramsition-all flex items-center justify-center`,
                link.className
              )}
              style={link.style}
            >
              <Icons name={link.icon} size={2} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUs;
