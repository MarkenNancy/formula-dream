"use client";
import React, { FC, useState } from "react";
import type { ServicesLinksType } from "@/data/navData";
import { twMerge } from "tailwind-merge";
import Icons from "@/components/atom/Icons/Icon";
import NavLink from "@/components/atom/NavLink/NavLink";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  link: ServicesLinksType;
}

const MenuAssideItem: FC<Props> = ({ className, style, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className={twMerge(`relative ${link.subNav ? "pe-6" : ""}`, className)}
      style={style}
    >
      <NavLink
        href={link.href}
        className={twMerge(
          `py-0 text-white leading-6 hover:text-white font-bold text-lg`,
          className
        )}
        style={link.style}
        isParent={link.subNav ? true : false}
      >
        {link.children}
      </NavLink>
      {link.subNav && (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white absolute right-0 top-0"
          >
            <Icons
              name="arrow-right"
              className={` ${isOpen ? "-rotate-90" : "rotate-90"}`}
              size={0.8}
            />
          </button>
          {isOpen && (
            <div className="-me-6">
              <ul className="my-2 py-2 bg-white bg-opacity-5">
                {link.subNav.map((subLink, index) => (
                  <li key={index} className={``}>
                    <NavLink
                      href={subLink.href}
                      className="py-2 px-3 text-white leading-6 hover:text-white text-lg"
                    >
                      {subLink.children}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </li>
  );
};

export default MenuAssideItem;
