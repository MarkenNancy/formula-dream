"use client";
import React from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { twMerge } from "tailwind-merge";
import { Typo } from "@/components";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  content: BlocksContent;
};

const PositionsBlocksRenderer: React.FC<Props> = ({
  className,
  content,
  ...props
}) => {
  return (
    <div className={twMerge(``, className)} {...props}>
      <BlocksRenderer
        content={content}
        blocks={{
          // You can use the default components to set class names...
          paragraph: ({ children }) => <Typo tag="p">{children}</Typo>,
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return (
                  <Typo tag="h1" size="h1">
                    {children}
                  </Typo>
                );
              case 2:
                return (
                  <Typo tag="h2" size="h2">
                    {children}
                  </Typo>
                );
              case 3:
                return (
                  <Typo tag="h3" size="h3">
                    {children}
                  </Typo>
                );
              case 4:
                return (
                  <Typo tag="h4" size="h4">
                    {children}
                  </Typo>
                );
              case 5:
                return (
                  <Typo tag="h5" size="h5">
                    {children}
                  </Typo>
                );
              case 6:
                return (
                  <Typo tag="h6" size="h6">
                    {children}
                  </Typo>
                );
              default:
                return (
                  <Typo tag="h1" size="h1">
                    {children}
                  </Typo>
                );
            }
          },
        }}
      />
    </div>
  );
};

export default PositionsBlocksRenderer;
