import React from "react";
import { Typo, Button } from "@/components";
import { twMerge } from "tailwind-merge";
import type { Props as ButtonProps } from "@/components/atom/Button/Button";
export type Props = {
  title?: string;
  description?: React.ReactNode;
  content?: React.ReactNode;
  isHover?: boolean;
  action?: ButtonProps;
  className?: string;
  style?: React.CSSProperties;
};
const ContactCard: React.FC<Props> = ({
  title,
  description,
  content,
  action,
  isHover = true,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        `relative group flex flex-col grow pb-[2.125rem]`,
        className
      )}
      {...props}
    >
      <div className="text-[#4a4a4a]">
        {title && (
          <Typo tag="h2" weight="bold" className="mb-2">
            {title}
          </Typo>
        )}
        {description && (
          <Typo tag="p" size="sm" className="mb-6">
            {description}
          </Typo>
        )}
        {content && <div className="mb-6">{content}</div>}
      </div>
      {action && (
        <div className="mt-auto">
          <Button variant="outline" isRounded {...action} />
        </div>
      )}
      {action && isHover && (
        <span className="bg-secondary h-px absolute left-0 bottom-0 w-full lg:max-w-0 transition-all ease-in-out duration-500 group-hover:max-w-full"></span>
      )}
    </div>
  );
};

export default ContactCard;
