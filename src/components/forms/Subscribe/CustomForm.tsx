"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button, TextInput, Typo } from "@/components";
// import Dropdown from "@/components/atom/DropDown/DropDown";
const Dropdown = dynamic(() => import("@/components/atom/DropDown/DropDown"), {
  ssr: false,
});
/* eslint-disable */
const CustomForm = ({ onValidated, status, message, valueIndex }: any) => {
  const [email, setEmail] = useState("");
  const [sType, setSType] = useState("AI Services");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MMERGE7: sType,
        MMERGE8: "Clarient - Website",
      });
  };
  useEffect(() => {
    const statusSubscribe = document.getElementById("statusSubscribe");
    if (statusSubscribe) {
      statusSubscribe.style.display = "block";
    }
    function removeMsg() {
      if (statusSubscribe) {
        statusSubscribe.style.display = "none";
      }
    }
    if (status === "success") {
      setEmail("");
      const interval = setInterval(removeMsg, 10000);
      return () => clearInterval(interval);
    }
  }, [status]);

  type DropOptionType = {
    label: string;
    value: string;
  };
  const handleDropdownChange = (e: DropOptionType) => {
    setSType(e.value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="grid md:grid-cols-2">
      <div className="flex flex-col justify-end md:pe-10">
        <Typo isTitle tag="div" size="2xl" className="mb-4">
          <b>I want to talk to your experts in:</b>
        </Typo>
        <div className="sm:max-w-[26rem] w-full">
          <Dropdown
            onChange={(e: any) => handleDropdownChange(e)}
            valueIndex={valueIndex}
            options={[
              {
                label: "AI Services",
                value: "AI Services",
              },
              {
                label: "AI at the Core",
                value: "AI at the Core",
              },
              {
                label: "Digital Transformation Consulting",
                value: "Digital Transformation Consulting",
              },
              {
                label: "Strategic Outsourcing & Staff Augmentation",
                value: "Strategic Outsourcing & Staff Augmentation",
              },
              {
                label: "Cloud & Infrastructure",
                value: "Cloud & Infrastructure",
              },
              {
                label: "Product Engineering",
                value: "Product Engineering",
              },
              {
                label: "Enterprise Platforms",
                value: "Enterprise Platforms",
              },
              {
                label: "Custom Application Development",
                value: "Custom Application Development",
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <Typo size="lg" className="text-[#4A4A4A]">
          We work with ambitious leaders who want to define the future, not hide
          from it. Together, we achieve extraordinary outcomes.
        </Typo>
        <div className="relative mt-5 sm:mt-10">
          <TextInput value={email} onChange={setEmail} />
          <Button
            className="text-center min-h-12 block w-full sm:w-auto mt-2 sm:mt-0 sm:absolute sm:right-[.4rem] sm:top-[.4rem] sm:bottom-[.4rem] text-white font-bold px-12 uppercase"
            isRounded
            type="submit"
          >
            {/* <Icons name="arrow-right" size={1} /> */}
            Contact US
          </Button>
        </div>
        <div id="statusSubscribe">
          {status && (
            <div className="text-sm [&>*]:mt-2">
              {/* {status === "sending" && (
              <div className="text-black">sending...</div>
            )} */}
              {status === "error" && (
                <div
                  className="text-red-500 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: message.replace("0 - ", ""),
                  }}
                />
              )}
              {status === "success" && (
                <div
                  className="text-green-800"
                  dangerouslySetInnerHTML={{
                    __html: message.replace("0 - ", ""),
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CustomForm;
