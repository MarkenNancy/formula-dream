import { FadeUp } from "@/components/animation";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  id: number;
  image?: string;
  title: string;
  slug: string;
  date: string;
  type: string;
};

const BlogCard: FC<Props> = ({
  className,
  style,
  slug,
  image,
  title,
  type,
  date,
}) => {
  return (
    <Link
      href={slug}
      className={twMerge(
        `pb-10 bg-white flex flex-col flex-grow h-full rounded-lg group transition-all hover:text-primary group overflow-hidden`,
        className
      )}
      style={style}
    >
      <FadeUp className="overflow-hidden">
        <Image
          src={image ? image : "/images/services/blog1.jpg"}
          alt={title}
          width={500}
          height={500}
          quality={100}
          className="w-full h-auto max-h-[20rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-t-[0.625rem] group-hover:scale-[1.05] origin-bottom"
        />
      </FadeUp>
      <div className="inline-flex items-center gap-3 mt-7 px-5">
        <FadeUp delay={0.2}>
          <Typo
            tag="p"
            size="lg"
            className="text-pretty uppercase"
            weight="bold"
            isTitle
          >
            {type}
          </Typo>
        </FadeUp>
        <FadeUp delay={0.3}>
          <Typo
            tag="p"
            size="lg"
            className="text-pretty uppercase opacity-70"
            weight="normal"
            isTitle
          >
            {date}
          </Typo>
        </FadeUp>
      </div>
      <FadeUp delay={0.4} className="flex-grow">
        <Typo
          tag="p"
          size="xl"
          className="text-pretty px-5"
          weight="bold"
          isTitle
        >
          {title}
        </Typo>
      </FadeUp>
    </Link>
  );
};

export default BlogCard;
