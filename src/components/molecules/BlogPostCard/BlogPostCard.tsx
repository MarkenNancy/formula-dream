import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Typo, CustomLink } from "@/components";
import ImageStrapi, {
  Props as ImageStrapiProps,
} from "@/components/atom/ImageStrapi/ImageStrapi";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  id: number;
  slug: string;
  title: string;
  description?: string;
  image?: ImageStrapiProps;
  category: string;
};
const BlogCard: React.FC<Props> = ({
  id,
  image,
  title,
  description,
  category,
  className,
  slug,
  style,
}) => {
  return (
    <article
      className={twMerge("", className)}
      style={style}
      id={`blogCard-${id}`}
    >
      <div className="flex flex-col">
        <div>
          <figure className="block [&>img]:w-full relative">
            <svg
              className="absolute bottom-10 left-7"
              width="4.75rem"
              height="2.5rem"
              viewBox="0 0 76 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect opacity="0.8" y="20" width="20" height="20" fill="white" />
              <rect
                opacity="0.3"
                x="20.2793"
                width="55.2461"
                height="20"
                fill="white"
              />
            </svg>
            {image && image.url ? (
              <ImageStrapi className="w-full h-auto" {...image} />
            ) : (
              <Image
                className="w-full h-auto"
                src="/images/blogFiller.jpg"
                height={200}
                width={300}
                alt={title}
              />
            )}
          </figure>
        </div>
        <div className="-mt-10 ms-10 bg-white p-3 relative">
          <Typo weight="bold" className="text-black text-opacity-25 text-xs">
            {category}
          </Typo>
          <Typo
            weight="bold"
            tag="h3"
            className="text-black pt-1 pb-2 !text-sm"
          >
            {title}
          </Typo>
          {description && (
            <Typo className="text-xs text-[#525252]">{description}</Typo>
          )}
          <div className="mt-4">
            <CustomLink
              className="transition-all text-sm hover:text-primary"
              href={`/insights/${slug}`}
            >
              Learn more
            </CustomLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
