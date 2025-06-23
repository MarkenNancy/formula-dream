"use client";
import React, { FC } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";
import { twMerge } from "tailwind-merge";
/* eslint-disable */

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  valueIndex?: number;
};

const Subscribe: FC<Props> = ({ className, style, valueIndex }) => {
  // const postUrl = `https://millipixels.us21.list-manage.com/subscribe/post?u=c8b3ec541f6c8a7b2d8d65584&amp;id=b486f3f4c3&amp;f_id=003ef4e6f0`;
  const postUrl = `https://millipixels.us21.list-manage.com/subscribe/post?u=c8b3ec541f6c8a7b2d8d65584&amp;id=b486f3f4c3&amp;f_id=00529ee6f0`;
  return (
    <div className={twMerge(`relative mt-4 md:mt-0`, className)} style={style}>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }: any) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
            valueIndex={valueIndex}
          />
        )}
      />
    </div>
  );
};

export default Subscribe;
