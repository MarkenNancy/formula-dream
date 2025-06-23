import Link from "next/link";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  list: {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    href: string;
  }[];
};

const LinkList: FC<Props> = ({ list, className, style }) => {
  return (
    <ul
      className={twMerge(`text-secondary text-sm mt-5 space-y-2`, className)}
      style={style}
    >
      {list.map((item, index) => (
        <li
          key={index}
          className={twMerge(``, item.className)}
          style={item.style}
        >
          <Link
            href={item.href}
            className="transition-all hover:text-primary"
            scroll
          >
            {item.children}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
