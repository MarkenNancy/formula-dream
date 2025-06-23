import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Typo } from "@/components";
import Image from "next/image";

export type Props = {
  className?: string;
  style?: React.CSSProperties;

  navTitle: string;
  cardTitle: string;
  content: string;
  bgColor: string;
  image: string;
  colSpanClass: string;
  id?: string;
};

const StickyCard: FC<Props> = ({
  className,
  style,
  cardTitle,
  content,
  bgColor,
  image,
  colSpanClass,
  id,
}) => {
  return (
    <div
      className={twMerge(
        `min-h-[20.625rem] w-full sticky z-20 mb-10 rounded-xl`,
        className
      )}
      style={{ backgroundColor: bgColor, ...style }}
      id={id}
    >
      <div className="grid md:grid-cols-12 gap-4">
        <div className="md:col-span-5 md:px-[3.5rem] px-10 md:py-16 py-10">
          <Typo
            tag="h3"
            size="h3"
            weight="bold"
            className="text-pretty lg:text-[2.25rem] mb-4"
            isTitle
          >
            {cardTitle}
          </Typo>
          <Typo tag="p" size="2xl" className="text-pretty">
            {content}
          </Typo>
        </div>
        <div className={`md:col-span-7 flex ${colSpanClass}`}>
          <Image
            src={image}
            alt={cardTitle}
            width={515}
            height={237}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyCard;
