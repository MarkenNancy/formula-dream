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
  // onClick?: (e: any) => void;
};

const CustomLink: React.FC<Props> = ({
  children,
  href,
  isParent = false,
  isExternal = false,
  isHidden = false,
  scroll = true,
  className,
  activeClassName,
  // onClick = () => {},
  ...props
}) => {
  const pathname = usePathname();
  const pathArrat = pathname.split("/");
  const parentPage = `/${pathArrat[1]}`;
  const activeClassList = `active ${activeClassName}`;
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
  if (isHidden) {
    return null;
  }
  return (
    <>
      <Link
        // prefetch={true}
        scroll={scroll}
        href={href}
        target={isExternal ? "_blank" : "_self"}
        className={twMerge(
          `transition-all block relative ${
            href === "#" ? "pointer-events-none" : "pointer-events-auto"
          } ${activeClass}`,
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
