"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { PopupButton } from "@typeform/embed-react";

export type Props = {
  children?: React.ReactNode;
  title?: string;
  isScrole?: boolean;
  isExternal?: boolean;
  disabled?: boolean;
  isRounded?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "link" | "outline";
  type?: "button" | "submit" | "link";
  size?: "small" | "medium" | "large";
  href?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  typeForm?:
    | "contact"
    | "careers"
    | "partner"
    | "media"
    | "business"
    | "cs-ambrygen"
    | "cs-bayesian-sepsis"
    | "cs-distil"
    | "cs-eurofin"
    | "cs-crosscope";
  // dataTfPopup?: string;
  hiddenFields?: Record<string, string>;
};

const Button: React.FC<Props> = ({
  children,
  className,
  isScrole = false,
  isExternal = false,
  variant = "primary",
  type = "button",
  href = "/",
  size = "medium",
  isRounded = false,
  typeForm,
  hiddenFields,
  ...props
}) => {
  const classes = `font-medium transition-all inline-flex items-center 
  ${isRounded ? "rounded-full" : ""}
  ${size === "medium" ? "text-sm leading-6 py-2 px-5" : ""}
  ${size === "large" ? "text-sm leading-6 py-3 px-5 md:px-11" : ""}
  // ${variant === "link" ? "text-primary text-sm hover:text-black" : ""}
  ${
    variant === "primary"
      ? "text-white bg-gradient-to-l from-primary to-secondary hover:bg-[length:150%_150%] hover:animate-gradientMove"
      : ""
  }
  ${
    variant === "outline"
      ? "hover:bg-gradient-to-l from-primary to-secondary hover:bg-[length:150%_150%] hover:animate-gradientMove hover:border-transparent hover:text-white border border-secondary"
      : ""
  }
  ${
    variant === "secondary"
      ? "bg-secondary border border-secondary text-white hover:bg-white hover:text-secondary"
      : ""
  }
`;

  let dataTfForm = null;

  switch (typeForm) {
    case "contact":
      dataTfForm = "CtnO0nK0";
      break;
    case "careers":
      dataTfForm = "ukIC1XB0";
      break;
    case "business":
      dataTfForm = "wwMNo3kd";
      break;
    case "partner":
      dataTfForm = "wwMNo3kd";
      break;
    case "media":
      dataTfForm = "YlWX9ERH";
      break;
    case "cs-distil":
      dataTfForm = "rYF3PU9M";
      break;
    case "cs-bayesian-sepsis":
      dataTfForm = "mts3ZSzM";
      break;
    case "cs-ambrygen":
      dataTfForm = "UWmvDu8D";
      break;
    case "cs-eurofin":
      dataTfForm = "F6KRCSMq";
      break;
    case "cs-crosscope":
      dataTfForm = "ZQ0lTU0g";
      break;
    default:
      dataTfForm = null;
  }

  if (dataTfForm) {
    return (
      <PopupButton
        id={dataTfForm}
        className={twMerge(classes, className)}
        hidden={hiddenFields}
        {...props}
      >
        {children}
      </PopupButton>
    );
  }

  return (
    <>
      {type === "link" ? (
        <>
          <Link
            href={href}
            prefetch={true}
            scroll={isScrole}
            className={twMerge(classes, className)}
            target={isExternal ? "_blank" : "_self"}
            {...props}
          >
            {children}
          </Link>
        </>
      ) : (
        <>
          <button
            className={twMerge(classes + "", className)}
            type={type}
            {...props}
          >
            {children}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
