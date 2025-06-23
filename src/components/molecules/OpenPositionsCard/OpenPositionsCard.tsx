import { twMerge } from "tailwind-merge";
import { Typo, Icons } from "@/components";
import Link from "next/link";
import React from "react";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  slug: string;
  title: string;
  location: string;
  job_type?: string[];
  experience?: string;
  type: "job" | "internship";
};

const OpenPositionsCard: React.FC<Props> = ({
  title,
  slug,
  className,
  location,
  job_type,
  experience,
  style,
}) => {
  return (
    <Link
      href={slug}
      title={title}
      className={twMerge(
        `group relative md:p-10 p-6 md:even:border-l-0 border border-[#EAEAEA] bg-white group`,
        className
      )}
      style={style}
      scroll
    >
      <Typo
        tag="p"
        size="2xl"
        weight="bold"
        className="text-pretty group-hover:text-secondary"
      >
        {title}
      </Typo>
      <Typo
        tag="div"
        weight="normal"
        className="text-[#4A4A4A] flex flex-wrap text-pretty md:grid-rows-1 grow"
        size="lg"
      >
        {location && (
          <span className="inline-flex gap-1 items-center text-pretty">
            {/* <Icons name="location" size={1.375} /> */}
            <Icons name="location-tick" size={1.125} />
            {location}
          </span>
        )}
        {job_type && (
          <span className="inline-flex items-center gap-1 text-pretty">
            &#160;&#160; <Icons name="home" size={1.125} />{" "}
            {job_type.map((ty, index) => (
              <div key={index} className="inline-block">
                <span key={index}>{ty}</span>
                {index + 1 < job_type.length && <span className="px-1">/</span>}
              </div>
            ))}
          </span>
        )}
        {/* {type && <span> &#160; ✦ &#160; {type}</span>} */}
        &#160;&#160;
        {experience && (
          <span className="inline-flex gap-1 items-center text-pretty">
            {" "}
            <Icons name="award" size={1.125} /> {experience}
          </span>
        )}
      </Typo>
      <div className="absolute left-0 top-0 bg-secondary h-[0.188rem] w-0 transition-all ease-in-out duration-700 group-hover:w-full"></div>
      {/* <Icons
        className="absolute right-0 top-0 group-hover:text-[#dd7d5f] transition-all"
        name="arrow-right"
        size={1.25}
        variant="stroke"
      /> */}
      {/* <span className="h-1 absolute left-0 right-0 top-0 bg-[#C0C0C033]">
        <span
          style={{
            background:
              "linear-gradient(262deg, rgba(254, 152, 0, 0.79) 4.62%, rgba(255, 75, 172, 0.56) 96.08%), linear-gradient(100deg, #DC0101 26.99%, rgba(90, 1, 160, 0.28) 65.94%)",
          }}
          className="transition-all ease-in-out duration-500 absolute top-0 bottom-0 left-0 w-full max-w-0 bg-black group-hover:max-w-full"
        ></span>
      </span> */}
    </Link>
  );
};

export default OpenPositionsCard;
