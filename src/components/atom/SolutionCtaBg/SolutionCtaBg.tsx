import React, { FC } from "react";
import type { Props as ButtonProps } from "@/components/atom/Button/Button";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Button, Container, Typo } from "@/components";
import { FadeUp } from "@/components/animation";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  image: string;
  title: string;
  description?: string;
  action?: ButtonProps;
  cardClass?: string;
  titleClass?: string;
  descriptionClass?: string;
};

const SolutionCtaBg: FC<Props> = ({
  className,
  style,
  image,
  title,
  description,
  action,
  cardClass,
  titleClass,
  descriptionClass,
}) => {
  return (
    <div
      className={twMerge(
        `relative xl:-mt-[19rem] after:bg-black after:bg-opacity-50 after:absolute after:w-full after:h-full after:inset-0`,
        className
      )}
      style={style}
    >
      <Image
        src={image}
        alt="Button Image"
        width={1920}
        height={400}
        className="w-full h-auto object-cover min-h-[20rem]"
        quality={100}
      />
      <div
        className={twMerge(
          `absolute left-0 xl:bottom-10 bottom-auto xl:top-auto top-1/2 -translate-y-1/2 text-white w-full z-10`,
          cardClass
        )}
      >
        <Container isSmall>
          {/* <div className="lg:flex xl:gap-24 lg:gap-16 md:gap-10 min-w-full justify-center">
            <FadeUp delay={0.1}>
              <Typo
                tag="h2"
                size="h1"
                weight="normal"
                className={twMerge(
                  `text-balance text-white font-bold leading-[4.875rem] lg:max-w-[16rem] w-full md:mb-4`,
                  titleClass
                )}
                isTitle
              >
                {title}
              </Typo>
            </FadeUp>
            <div
              className={twMerge(
                `lg:max-w-[32rem] max-w-full`,
                rightContentClass
              )}
            >
              <FadeUp delay={0.2}>
                <Typo tag="p" size="sm" weight="normal" className="text-pretty">
                  {description}
                </Typo>
              </FadeUp>
              {action && (
                <FadeUp delay={0.3}>
                  <div className="mt-8">
                    <Button isRounded {...action} />
                  </div>
                </FadeUp>
              )}
            </div>
          </div> */}
          <div className="grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="bold"
                  className={twMerge(`text-balance`, titleClass)}
                  isTitle
                >
                  {title}
                </Typo>
              </FadeUp>
            </div>
            <div className="lg:col-span-5 xl:ps-10">
              <FadeUp delay={0.2}>
                <Typo
                  tag="p"
                  size="sm"
                  className={twMerge(
                    `mt-5 lg:max-w-[22.188rem] w-full`,
                    descriptionClass
                  )}
                >
                  {description}
                </Typo>
                {action && (
                  <div className="mt-8">
                    <Button isRounded {...action} />
                  </div>
                )}
              </FadeUp>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SolutionCtaBg;
