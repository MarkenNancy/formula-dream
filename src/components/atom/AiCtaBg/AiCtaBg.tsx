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
  rightContentClass?: string;
};

const AiCtaBg: FC<Props> = ({
  className,
  style,
  image,
  title,
  description,
  action,
  cardClass,
  titleClass,
  rightContentClass,
}) => {
  return (
    <div
      className={twMerge(
        `xl:-mt-[17.5rem] lg:-mt-[10rem] relative z-10`,
        className
      )}
      style={style}
    >
      <Image
        src={image}
        alt="Button Image"
        width={1140}
        height={701}
        className="w-full h-auto max-md:min-h-96 object-cover"
        quality={100}
      />
      <div
        className={twMerge(
          `absolute left-1/2 -translate-x-1/2 top-1/2 max-lg:-translate-y-1/2 text-white w-full`,
          cardClass
        )}
      >
        <Container>
          <div className="lg:flex xl:gap-24 lg:gap-16 md:gap-10 min-w-full justify-center">
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AiCtaBg;
