"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
  onClick?: (tabId: string) => void;
  classNameNav?: string;
  classNamePane?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  className,
  classNameNav,
  classNamePane,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className={twMerge(``, className)}>
      <div
        className={twMerge(`flex gap-11 text-gray-300 text-200`, classNameNav)}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer text-xl lg:text-2xl transition-all ${
              activeTab === tab.id
                ? "active font-bold text-black"
                : " text-[#666]"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={twMerge(`pt-5 lg:pt-10`, classNamePane)}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
