import React from "react";
import Tabs, { Tab as TabProps } from "./../../atom/Tabs/Tab";
import { twMerge } from "tailwind-merge";
import AddressAccordion from "../AddressAccordion/AddressAccordion";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  locations: TabProps[];
};

const LocationsTabs: React.FC<Props> = ({ className, locations, ...props }) => {
  return (
    <div className={twMerge(``, className)} {...props}>
      <Tabs className="hidden lg:block" tabs={locations} />
      <AddressAccordion className="lg:hidden" />
    </div>
  );
};

export default LocationsTabs;
