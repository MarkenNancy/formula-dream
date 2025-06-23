import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { CustomLink, Icons, Typo } from "@/components";
import Image from "next/image";
import { FadeIn, FadeUp } from "@/components/animation";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};
const ExcitingRole: FC<Props> = ({ className, style }) => {
  return (
    <div
      className={twMerge(
        `rounded-lg grid md:grid-cols-12 items-center`,
        className
      )}
      style={{
        background: "linear-gradient(0deg, #FFF 0%, #FFF 100%)",
        ...style,
      }}
    >
      <div className="md:col-span-5 py-8 md:py-20 px-8 md:ps-12 md:pe-0">
        <FadeUp>
          <Typo
            tag="h2"
            size="h2"
            weight="normal"
            className="text-pretty max-w-lg"
          >
            Are you seeking an exciting role that will challenge and inspire
            you?
          </Typo>
        </FadeUp>
        <FadeUp delay={0.2}>
          <ul className="mt-14 flex flex-col gap-5">
            <li>
              <CustomLink
                href="/careers"
                className="flex items-center justify-start gap-2.5 text-[#4F1CBD] hover:text-secondary group"
              >
                <Typo tag="span" size="lg" className="">
                  Careers
                </Typo>
                <Icons
                  // name="triangle-right"
                  name="arrow-right"
                  size={0.8}
                  className="text-black group-hover:text-secondary"
                />
              </CustomLink>
            </li>
            <li>
              <CustomLink
                href="/careers#jobs"
                // scroll={false}
                className="flex items-center justify-start gap-2.5 text-[#4F1CBD] hover:text-secondary group"
              >
                <Typo tag="p" size="lg" className="">
                  Search Jobs
                </Typo>
                <Icons
                  // name="triangle-right"
                  // size={0.625}
                  name="arrow-right"
                  size={0.8}
                  className="text-black group-hover:text-secondary"
                />
              </CustomLink>
            </li>
          </ul>
        </FadeUp>
      </div>
      <FadeIn delay={0.4} className="md:col-span-7 md:pt-14 self-end">
        <Image
          src="/images/about/excitingRole.png"
          alt="Clarient Are you seeking an exciting role that will challenge and inspire you?"
          width={1440}
          height={607}
          className="w-full h-auto object-cover"
          quality={100}
        />
      </FadeIn>
    </div>
  );
};

export default ExcitingRole;
