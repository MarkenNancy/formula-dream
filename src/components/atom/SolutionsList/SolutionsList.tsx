import React, { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Icons from "../Icons/Icon";

export type ListProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  href: string;
  target?: string;
};
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  list: ListProps[];
};
const SolutionsList: FC<Props> = ({ className, style, list }) => {
  if (!list || list.length === 0) {
    return null;
  }
  return (
    <ul
      className={twMerge(
        `grid md:grid-cols-2 gap-x-6 lg:gap-x-28 gap-y-[0.625rem]`,
        className
      )}
      style={style}
    >
      {list.map((item, index) => (
        <li
          key={index}
          className="border-b border-black border-opacity-20 py-3"
        >
          <Link
            href={item.href}
            target={item.target}
            className="block font-title text-lg lg:text-xl pe-12 relative group transition-all hover:text-[#E78199]"
          >
            {item.children}
            <Icons
              name="triangle-right"
              size={0.625}
              className="absolute top-1/2 -translate-y-1/2 right-9 lg:opacity-0 transition-opacity group-hover:opacity-100"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SolutionsList;
