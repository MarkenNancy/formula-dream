"use client";
import React, { FC } from "react";

import Button, { Props as ButtonProps } from "@/components/atom/Button/Button";

export interface Props extends ButtonProps {
  scrollId: string;
}

const ScrollToId: FC<Props> = ({ scrollId, ...props }) => {
  const clickToScroll = () => {
    const element = document.getElementById(scrollId);
    if (element) {
      /*
            element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            });
            */
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - 100,
      });
    }
  };
  return <Button {...props} onClick={clickToScroll} />;
};

export default ScrollToId;
