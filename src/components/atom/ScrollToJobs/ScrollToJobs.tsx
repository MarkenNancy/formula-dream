"use client";
import React, { FC } from "react";

import Button, { Props } from "@/components/atom/Button/Button";

const ScrollToJobs: FC<Props> = ({ ...props }) => {
  const clickToScroll = () => {
    const element = document.getElementById("jobs");
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

export default ScrollToJobs;
