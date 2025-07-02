"use client";
import React, { FC, Suspense, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, Container, Typo } from "@/components";
import dynamic from "next/dynamic";
import { FadeUp, Parallax, ScaleOnHover } from "@/components/animation";
import Countdown from "@/components/atom/CountDown/Countdown";
import Link from "next/link";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import Signup from "./Signup";
import EarlyAccess from "./EarlyAccess";


export type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const SignupPage: FC<Props> = ({ className, style }) => {

  return (
    <>
      {/* <Signup/> */}
      <EarlyAccess/>
      {/* <WelcomePage/> */}

    </>
  );
};

export default SignupPage;
