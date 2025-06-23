import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Typo, CustomLink } from "@/components";
import ImageStrapi, {
  Props as ImageStrapiProps,
} from "@/components/atom/ImageStrapi/ImageStrapi";

export type Props = {
  id?: string | number;
  className?: string;
  style?: React.CSSProperties;
  slug: string;
  name: string;
  description: string;
  image?: ImageStrapiProps;
  subTitle: string;
  isModal?: boolean;
};
const BlogPost: React.FC<Props> = ({
  image,
  name,
  description,
  subTitle,
  className,
  slug,
  style,
}) => {
  // console.log("image", image);
  return (
    <div className={twMerge("", className)} style={style}>
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
                alt={name}
              />
            )}
          </figure>
        </div>
        <div className="-mt-10 ms-10 bg-white p-3 relative">
          <Typo weight="bold" className="text-black text-opacity-25 text-xs">
            {subTitle}
          </Typo>
          <Typo weight="bold" className="text-black pt-1 pb-2 !text-sm">
            {name}
          </Typo>
          <Typo className="text-xs text-[#525252]">{description}</Typo>
          <div className="mt-4">
            {/* {action.type === "button" && action.caseStudy ? (
              <>
                <OpenCaseStudyModal
                  closeVariant={
                    action.caseStudy === "sepsis-treatment" ||
                    action.caseStudy === "covid"
                      ? "dark"
                      : "light"
                  }
                  isArrow
                  variant="link"
                  {...action}
                >
                  Learn more
                </OpenCaseStudyModal>
              </>
            ) : (
              <Button isArrow variant="link" {...action}>
                Learn more
              </Button>
            )} */}
            <CustomLink
              className="transition-all text-sm hover:text-primary"
              href={`/insights/${slug}`}
            >
              Learn more
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
