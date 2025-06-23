import ContactCard, {
  Props as ContactCardProps,
} from "../../molecules/ContactCard/ContactCard";
import React from "react";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  cards: ContactCardProps[];
};
const ContactCardGrid: React.FC<Props> = ({ className, cards, ...props }) => {
  return (
    <div
      className={twMerge(
        `grid md:grid-cols-[45%_45%] lg:grid-cols-[17.5rem_17.5rem_17.5rem] justify-between gap-x-6 gap-y-8 md:gap-y-14`,
        className
      )}
      {...props}
    >
      {cards.map((card, index) => (
        <ContactCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ContactCardGrid;
