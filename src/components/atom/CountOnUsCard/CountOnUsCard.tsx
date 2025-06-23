import { Typo } from "@/components";
import { FadeUp } from "@/components/animation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  description?: string;
  author?: string;
  designation?: string;
  authorImage: string;
};

const CountOnUsCard: FC<Props> = ({
  className,
  style,
  title,
  description,
  author,
  designation,
  authorImage
}) => {
  return (
    <div
      className={twMerge(
        ``,
        className
      )}
      style={style}
    >
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-4 md:ps-10 md:pt-16 p-8 bg-[url('/images/services/countBg.jpg')] bg-repeat bg-cover bg-center">
          <FadeUp>
            <Typo
              tag="h2"
              size="h2"
              weight="normal"
              className="text-balance text-white"
              isTitle
            >
              {title}
            </Typo>
          </FadeUp>
        </div>
        <div className="md:col-span-8 md:pt-16 pt-8 bg-[url('/images/services/countBg1.jpg')] bg-repeat bg-cover bg-center relative">
          <div className="grid grid-cols-12 w-full md:ps-16 ps-8">
            <div className="col-span-8 md:pb-60 pb-20 h-full">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="lg" className="text-pretty text-white">
                  {description}
                </Typo>
              </FadeUp>
            </div>
            <div className="col-span-4 h-full">
              <FadeUp
                delay={0.3}
                className="relative z-10 h-full flex items-end"
              >
                <Image
                  src={authorImage}
                  alt="Author"
                  width={262}
                  height={339}
                  className="w-full h-auto block"
                  quality={100}
                />
              </FadeUp>
            </div>
          </div>
          <div className="w-full md:px-16 px-8 md:pt-[1.875rem] pt-5 md:pb-11 pb-5 bg-[#3F1B7E] text-white absolute left-0 bottom-0">
            <FadeUp delay={0.3}>
              <Typo
                tag="p"
                size="lg"
                className="text-pretty"
                weight="bold"
                isTitle
              >
                {author}
              </Typo>
              <Typo
                tag="p"
                size="sm"
                className="text-pretty"
                weight="normal"
                isTitle
              >
                {designation}
              </Typo>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountOnUsCard;
