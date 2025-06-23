"use client";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Container, Typo } from "@/components";
import { FadeUp } from "@/components/animation";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const ClientStat: FC<Props> = ({ className, style }) => {
  return (
    <div className={twMerge("", className)} style={style}>
      <Container isSmall>
        <div className="grid md:grid-cols-11">
          <div className="md:col-span-5">
            <div
              className="border border-[#E7E7E7] lg:py-[6.875rem] md:py-20 py-10 lg:px-[4.375rem] md:px-14 px-6 flex flex-col gap-[4.875rem]"
              style={{
                background: "rgba(255, 255, 255, 0.40)",
                backdropFilter: "blur(4.5px)",
              }}
            >
              <FadeUp delay={0.2}>
                <div>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="bold"
                    className="text-pretty text-secondary"
                  >
                    16+
                  </Typo>
                  <Typo
                    tag="h3"
                    size="h3"
                    weight="normal"
                    className="text-pretty lg:text-[1.75rem] leading-none"
                  >
                    Countries Served
                  </Typo>
                  <Typo
                    tag="p"
                    size="lg"
                    className="text-pretty mt-4 sm:max-w-[20rem]"
                  >
                    Our distributed delivery model blends global reach with
                    regional intelligence, enabling agile execution and
                    contextual precision across every market we serve.
                  </Typo>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="bold"
                    className="text-pretty text-secondary"
                  >
                    350+
                  </Typo>
                  <Typo
                    tag="h3"
                    size="h3"
                    weight="normal"
                    className="text-pretty text-[1.75rem] leading-none"
                  >
                    Satisfied clients
                  </Typo>
                  <Typo
                    tag="p"
                    size="lg"
                    className="text-pretty mt-4 max-w-[20rem]"
                  >
                    We partner with enterprises to co-create solutions that
                    don’t just meet objectives — they evolve business models,
                    customer value, and growth velocity.
                  </Typo>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClientStat;
