"use client";
import React, { FC } from "react";
import EarlyAccess from "./EarlyAccess";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const SignupPage: FC<Props> = ({  }) => {
  return (
    <>
      <EarlyAccess />
    </>
  );
};

export default SignupPage;
