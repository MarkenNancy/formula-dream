import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  name:
    | "AIStrategy"
    | "cloudSolutions"
    | "customAppDev"
    | "digitalTransformation"
    | "enterprisePlatform"
    | "enterpriseSolutions"
    | "productEngineering"
    | "strategicOutsourcing"
    | "servicesAccordion";
  className?: string;
  iconClassName?: string;
  style?: React.CSSProperties;
}

const ServicesIcons: React.FC<Props> = ({
  name,
  className,
  iconClassName,
  ...props
}) => {
  let icon = null;

  switch (name) {
    case "AIStrategy":
      icon = (
        <Image
          src="/images/servicesIcons/aIStrategyIcon.png"
          alt="Clarient AI Strategy"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "cloudSolutions":
      icon = (
        <Image
          src="/images/servicesIcons/cloudSolutions.png"
          alt="Clarient Cloud Solutions"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "customAppDev":
      icon = (
        <Image
          src="/images/servicesIcons/customAppDev.png"
          alt="Clarient Custom App Dev"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "digitalTransformation":
      icon = (
        <Image
          src="/images/servicesIcons/digitalTransformation.png"
          alt="Clarient Digital Transformation"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "enterprisePlatform":
      icon = (
        <Image
          src="/images/servicesIcons/enterprisePlatform.png"
          alt="Clarient Enterprise Platform"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "enterpriseSolutions":
      icon = (
        <Image
          src="/images/servicesIcons/enterpriseSolutions.png"
          alt="Clarient Enterprise Solutions"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "productEngineering":
      icon = (
        <Image
          src="/images/servicesIcons/productEngineering.png"
          alt="Clarient Product Engineering"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "strategicOutsourcing":
      icon = (
        <Image
          src="/images/servicesIcons/strategicOutsourcing.png"
          alt="Clarient Strategic Outsourcing"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    case "servicesAccordion":
      icon = (
        <Image
          src="/images/servicesIcons/servicesAccordion.png"
          alt="Clarient Services Accordion"
          width={206}
          height={132}
          className={twMerge(`w-[12.875rem] h-auto max-w-full`, iconClassName)}
        />
      );
      break;
    default:
      icon = null;
  }

  return (
    <span className={twMerge(`inline-block`, className)} {...props}>
      {icon}
    </span>
  );
};

export default ServicesIcons;
