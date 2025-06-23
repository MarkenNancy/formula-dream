"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import styled from "styled-components";
const ContentCardsStyled = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 180%;
  span,
  b {
    display: block;
  }
  a {
    text-decoration: underline;
    word-break: break-all;
    // font-weight: 700;
  }
  span,
  ul,
  ol {
    margin-bottom: 0.9375rem;
  }
  ul,
  ol {
    margin: 0 0 0 1.2rem;
    li {
      margin: 0.5rem 0;
    }
  }
  ol {
    list-style: decimal;
    li {
      &::marker {
        font-weight: 700;
      }
    }
  }
  ul {
    list-style: disc;
    li {
      &::marker {
        font-weight: 700;
      }
      // strong {
      //   display: block;
      // }
    }
  }
  ul + h1,
  ul + h2,
  ul + h3,
  ul + h4,
  ul + h5,
  ul + h6,
  ol + h1,
  ol + h2,
  ol + h3,
  ol + h4,
  ol + h5,
  ol + h6 {
    margin-top: 1rem;
  }

  p,
  span {
    a {
      &:hover {
        color: #f97865;
      }
    }
  }

  p:not(:last-child) {
    margin-bottom: 0.85rem;
  }
  blockquote {
    margin-bottom: 1rem;
    padding-left: 1.125rem;
    position: relative;
    &:before {
      content: "";
      width: 0.125rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
          262deg,
          rgba(254, 152, 0, 0.79) 4.62%,
          rgba(255, 75, 172, 0.56) 96.08%
        ),
        linear-gradient(100deg, #dc0101 26.99%, rgba(90, 1, 160, 0.28) 65.94%);
    }
  }
`;
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};
const PositionsContent: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ContentCardsStyled className={twMerge(``, className)} {...props}>
      {children}
    </ContentCardsStyled>
  );
};

export default PositionsContent;
