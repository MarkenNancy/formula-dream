"use client";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Typo from "../Typo/Typo";
import Link from "next/link";
import Icons from "../Icons/Icon";
import {
  Modal,
  ModalBody,
  ModalHeader,
} from "@/components/molecules/Modal/Modal";
import LeaderInfo, { Props as LeaderInfoProps } from "./LeaderInfo";

export type Props = {
  style?: React.CSSProperties;
  className?: string;
  name: string;
  designation: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  // description?: React.ReactNode;
  description?: LeaderInfoProps["description"];
  driection?: LeaderInfoProps["driection"];
  leaderInfoClassName?: string;
};

const Leader: FC<Props> = ({
  className,
  style,
  image,
  name,
  designation,
  linkedin,
  twitter,
  description,
  driection,
  leaderInfoClassName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const handleModalOpen = () => {
    if (window.innerWidth <= 1023.9) {
      setIsModalOpen(true);
    }
  };
  // border-b border-[#E8E8E8]
  // border border-[#E8E8E8] border-collapse
  return (
    <div className="relative flex-grow border-b border-[#E8E8E8] md:border-l md:[&:nth-child(1)]:border-l-0 md:[&:nth-child(4)]:border-l-0 md:[&:nth-child(7)]:border-l-0 md:[&:nth-child(10)]:border-l-0 md:[&:nth-child(11)]:border-b-0 last:border-b-0">
      <div
        onMouseEnter={() => setIsShowInfo(true)}
        onMouseLeave={() => setIsShowInfo(false)}
        className={twMerge(
          "bg-white h-full flex-grow p-4 lg:ps-12 lg:pt-9 flex flex-col hover:bg-[#3F1B7E] hover:border-[#3F1B7E] hover:text-white group transition-all duration-500 ease-in-out",
          className
        )}
        style={style}
      >
        <div className="grid grid-cols-[5rem_1fr] md:grid-cols-[3.4rem_1fr] lg:grid-cols-[5rem_1fr] gap-4 lg:mb-4">
          {image && (
            <Image
              src={image}
              alt={name}
              width={81}
              height={81}
              className="w-full h-auto object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              quality={100}
            />
          )}
          <div className="flex-1 pt-2">
            <Typo
              tag="p"
              size="lg"
              weight="bold"
              className="text-pretty"
              isTitle
            >
              {name}
            </Typo>
            <Typo
              tag="p"
              size="sm"
              className="text-pretty leading-none"
              isTitle
            >
              {designation}
            </Typo>
            <ul className="flex items-center flex-wrap gap-1 mt-1 -ms-1.5">
              <li>
                {linkedin && (
                  <Link href={linkedin} className="block" target="_blank">
                    <Icons name="linkedin" size={1.8} className="block" />
                  </Link>
                )}
              </li>
              <li>
                {twitter && (
                  <Link href={twitter} className="block" target="_blank">
                    <Icons name="twitter" size={1.5} className="block" />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="flex justify-end items-center gap-2 text-sm font-normal transition-opacity duration-300 ease-in-out cursor-pointer lg:cursor-auto"
            onClick={handleModalOpen}
          >
            <span>Read More</span>
            <Icons name="arrow-right" size={0.688} className="mt-0.5" />
          </button>
        </div>
      </div>
      {description && (
        <LeaderInfo
          description={description}
          driection={driection}
          // className={`${isShowInfo ? "hidden lg:block" : "hidden lg:hidden"}`}
          className={twMerge(
            `${isShowInfo ? "hidden lg:block" : "hidden lg:hidden"}`,
            leaderInfoClassName
          )}
        />
      )}
      {isModalOpen && (
        <Modal isOpen={true} onClose={() => setIsModalOpen(false)}>
          <ModalHeader>
            <Typo tag="h4" size="2xl" weight="bold" className="text-pretty">
              {name}
            </Typo>
          </ModalHeader>
          <ModalBody>
            <div className="sm:grid sm:grid-cols-12 gap-5">
              <div className="col-span-4 sm:order-2">
                {image && (
                  <Image
                    src={image}
                    alt="Leader"
                    width={240}
                    height={240}
                    className="w-full h-auto object-cover rounded-full sticky top-5 max-w-40 mb-7"
                    quality={100}
                  />
                )}
              </div>
              <div className="col-span-8  sm:order-1">
                <Typo
                  tag="p"
                  size="sm"
                  weight="bold"
                  className="text-pretty leading-none"
                >
                  {designation}
                </Typo>
                <Typo tag="div" size="lg" className="text-pretty mt-4">
                  {description}
                </Typo>
              </div>
            </div>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};

export default Leader;
