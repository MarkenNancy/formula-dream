"use client";
import React, { FC } from "react";
import type { ServicesLinksType } from "@/data/navData";
import { twMerge } from "tailwind-merge";
import Icons from "@/components/atom/Icons/Icon";
import NavLink from "@/components/atom/NavLink/NavLink";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  link: ServicesLinksType;
}

const MenuItem: FC<Props> = ({ className, style, link }) => {
  return (
    <li
      className={twMerge(
        `relative group text-white ${link.subNav ? "pe-6" : ""}`,
        className
      )}
      style={style}
    >
      <NavLink
        href={link.href}
        isHighlight={link.isHighlight}
        isParent={link.isParent || link.subNav ? true : false}
        isHidden={link.isHidden}
        className="py-1 leading-6 hover:text-white font-bold"
      >
        {link.children}
      </NavLink>
      {link.subNav && link.subNav.length > 0 && (
        <>
          <Icons
            name="arrow-right"
            className="rotate-90 absolute right-0 top-1/2 -translate-y-1/2"
            size={0.8}
          />
          <div className="absolute top-[99%] hidden group-hover:block w-72 pt-[1.04rem] max-h-[80vh] overflow-auto">
            <ul className="bg-black bg-opacity-90 backdrop-blur-2xl text-white py-3 shadow">
              {link.subNav.map((subLink, index) => (
                <li key={index} className={` ${index === 0 ? "" : ""}`}>
                  <NavLink
                    href={subLink.href}
                    className="py-2 px-5 leading-6 hover:text-secondary text-sm hover:before:content-none"
                    activeClassName=""
                  >
                    {subLink.children}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

export default MenuItem;
