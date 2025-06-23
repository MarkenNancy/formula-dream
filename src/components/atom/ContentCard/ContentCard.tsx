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
    text-wrap: pretty;
  }
  ul,
  ol {
    margin: 0 0 0 1.2rem;
    li {
      margin: 0.5rem 0;
      text-wrap: pretty;
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

  p,
  span,
  li {
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
const ContentCard: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <ContentCardsStyled
      className={twMerge(`text-pretty`, className)}
      {...props}
    >
      {children}
    </ContentCardsStyled>
  );
};

export default ContentCard;
