"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";
export type Props = {
  id?: string;
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  isHidden?: boolean;
  scroll?: boolean;
  className?: string;
  activeClassName?: string;
  style?: React.CSSProperties;
  isParent?: boolean;
  isHighlight?: boolean;
  // onClick?: (e: any) => void;
};

const NavLink: React.FC<Props> = ({
  children,
  href,
  isParent = false,
  isExternal = false,
  isHidden = false,
  scroll = true,
  className,
  activeClassName,
  isHighlight = false,
  // onClick = () => {},
  ...props
}) => {
  const pathname = usePathname();
  const pathArrat = pathname.split("/");
  const parentPage = `/${pathArrat[1]}`;
  const activeClassList = `active !font-semibold !text-secondary [&+span]:!text-secondary ${activeClassName}`;
  // console.log("parentPage", parentPage);
  let activeClass = "";
  if (isParent) {
    if (pathname === href || parentPage == href) {
      activeClass = activeClassList;
    }
  } else {
    if (pathname === href) {
      activeClass = activeClassList;
    }
  }
  // const router = useRouter();
  // const handleLink = (href: string) => {
  //   router.push(href, { scroll: false });
  // };
  if (isHidden) {
    return null;
  }
  /*
  const handleClick = (e: any) => {
    onClick(e);
    // if (scroll) {
    //   setTimeout(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //   }, 200);
    // }
  };
  */
  return (
    <>
      <Link
        // prefetch={true}
        scroll={scroll}
        href={href}
        target={isExternal ? "_blank" : "_self"}
        className={twMerge(
          `transition-all block hover:text-primary relative ${
            href === "#" ? "pointer-events-none" : "pointer-events-auto"
          } ${
            isHighlight
              ? "py-2 px-5 rounded-full hover:bg-white hover:!text-black"
              : "before:w-0 before:h-[0.063rem]"
          } ${activeClass}`,
          className
        )}
        // onClick={(e) => handleClick(e)}
        // onClick={(e) => {
        //   if (isParent) {
        //     e.preventDefault();
        //   }
        // }}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
