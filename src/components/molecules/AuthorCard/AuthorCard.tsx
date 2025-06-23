import React from "react";
import Image from "next/image";
import { Typo } from "@/components";
import { twMerge } from "tailwind-merge";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import ImageStrapi from "@/components/atom/ImageStrapi/ImageStrapi";
export type Props = {
  className?: string;
  placeholder?: string;
  title: string;
  designation: React.ReactNode;
  description?: BlocksContent;
  style?: React.CSSProperties;
  image?: {
    url: string;
    alternativeText?: string;
    width: number;
    height: number;
  };
};

const AuthorCard: React.FC<Props> = ({
  className,
  image,
  title,
  designation,
  description,
  style,
}) => {
  return (
    <div className={twMerge("py-2", className)} style={style}>
      <div className="flex gap-4">
        <div className="min-w-12">
          <figure className="block [&>img]:w-12">
            {image ? (
              <ImageStrapi
                {...image}
                url={image.url}
                id="author-image"
                className="rounded-full size-12 object-cover object-center grayscale"
                alternativeText={image.alternativeText ?? title}
                width={48}
                height={48}
                quality={100}
              />
            ) : (
              <Image
                className="rounded-full size-12 object-cover object-center grayscale"
                src="/images/blogFiller.jpg"
                width={48}
                height={48}
                alt={title}
                // priority
                loading="lazy"
                quality={100}
              />
            )}
          </figure>
        </div>
        <div className="lg:max-w-96 text-[#454545]">
          {title && (
            <Typo tag="h5" size="h5" weight="bold">
              {title}
            </Typo>
          )}
          <Typo tag="div" size="xs">
            {designation}
          </Typo>
          {description && (
            <Typo tag="div" size="xs" className="mt-2">
              <BlocksRenderer content={description} />
            </Typo>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
