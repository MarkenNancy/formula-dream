import React, { FC, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Typo, Icons, Button } from "@/components";
import { ServicesDataProps } from "@/data/services";
import LinkList from "@/components/atom/LinkList/LinkList";
// export type Props = {
//   className?: string;
//   style?: React.CSSProperties;
//   id?: string | number;
//   title: string;
//   description?: React.ReactNode;
//   isActive?: boolean;
//   isLats?: boolean;
//   handleActive?: () => void;
//   delay?: number;
// };
export interface Props extends ServicesDataProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string | number;
  isActive?: boolean;
  isLats?: boolean;
  handleActive?: () => void;
  delay?: number;
}
const ServicesAccordionItm: FC<Props> = ({
  className,
  style,
  title,
  description,
  links,
  action,
  isActive = false,
  isLats = false,
  handleActive,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <div className={twMerge(``, className)} style={style}>
      <button
        onClick={handleActive}
        className="relative pe-14 w-full text-left border-none outline-none"
      >
        <Typo tag="h4" size="h4" weight="bold" isTitle>
          {title}
        </Typo>
        <Icons
          // name={isActive ? "arrow-left" : "arrow-right"}
          name="arrow-right"
          className={`transition-all absolute right-0 top-[0.375rem] rotate-90 ${
            isActive ? "-rotate-90 " : "rotate-90 "
          }`}
          size={0.9}
        />
      </button>
      {description && (
        <div
          ref={contentHeight}
          className={`transition-all overflow-hidden duration-700`}
          style={
            isActive
              ? { maxHeight: contentHeight.current?.scrollHeight }
              : { maxHeight: "0" }
          }
        >
          <Typo tag="div" className="mt-4 text-pretty md:pe-10">
            {description}
            <LinkList list={links} />
            <div className="mt-9">
              <Button variant="outline" isRounded {...action} isScrole />
            </div>
          </Typo>
        </div>
      )}
      {!isLats && <div className="border-b-2 border-[##EDEDE] my-4"></div>}
    </div>
  );
};

export default ServicesAccordionItm;
