"use client";
import { Typo } from "@/components";
import React from "react";
import { twMerge } from "tailwind-merge";
import Accordions from "@/components/molecules/Accordions/Accordions";
export type Props = {
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
};
const AddressAccordion: React.FC<Props> = ({ className, ...props }) => {
  const AddressData = [
    {
      title: "India",
      description: (
        <div>
          <div>
            <b className="text-sm md:text-lg block font-bold text-[#333] text-opacity-65 pt-1">
              Executive HQ
            </b>
            <Typo tag="p" className="text-[#333] text-opacity-65 py-2">
              D-256, Orbit Vision Tower - Level 5, Industrial Area - Phase 8A,
              Sector 75 Mohali, Punjab 160055, India
            </Typo>
          </div>
          <p className="flex gap-1 text-[#333] text-opacity-65">
            E
            <a className="font-bold" href="mailto:hello@cerebrent.com">
              hello@cerebrent.com
            </a>
          </p>
          <p className="flex gap-1 text-[#333] text-opacity-65">
            P
            <a className="font-bold" href="tel:+911724109254">
              +91 172 410-9254
            </a>
          </p>
        </div>
      ),
    },
    // {
    //   title: (
    //     <Typography variant="h4" weight="bold" className="text-black">
    //       United States
    //     </Typography>
    //   ),
    //   children: (
    //     <div>
    //       <div>
    //         <b className="block font-bold text-[#333] text-opacity-65 pt-1">
    //           One World Trade Center
    //         </b>
    //         <Typography
    //           variant="p"
    //           className="text-[#333] text-opacity-65 py-2"
    //         >
    //           85th Floor, Lower Manhattan, Suite 8500, New York, NY 10007
    //         </Typography>
    //       </div>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         E
    //         <a className="font-bold" href="mailto:hello@cerebrent.com">
    //           hello@cerebrent.com
    //         </a>
    //       </p>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         P
    //         <a className="font-bold" href="tel:+a212-220-5747">
    //           212-220-5747
    //         </a>
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   title: (
    //     <Typography variant="h4" weight="bold" className="text-black">
    //       United Kingdom
    //     </Typography>
    //   ),
    //   children: (
    //     <div>
    //       <div>
    //         <Typography
    //           variant="p"
    //           className="text-[#333] text-opacity-65 py-2"
    //         >
    //           Level 18, 40 Bank Street Canary Wharf London E14 5NR
    //         </Typography>
    //       </div>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         E
    //         <a className="font-bold" href="mailto:hello@cerebrent.com">
    //           hello@cerebrent.com
    //         </a>
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   title: (
    //     <Typography variant="h4" weight="bold" className="text-black">
    //       Singapore
    //     </Typography>
    //   ),
    //   children: (
    //     <div>
    //       <div>
    //         <Typography
    //           variant="p"
    //           className="text-[#333] text-opacity-65 py-2"
    //         >
    //           Level 39, Marina Bay Financial Centre Tower 210 Marina Boulevard,
    //           Singapore 018983
    //         </Typography>
    //       </div>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         E
    //         <a className="font-bold" href="mailto:hello@cerebrent.com">
    //           hello@cerebrent.com
    //         </a>
    //       </p>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         P
    //         <a className="font-bold" href="tel:+65 6818 6368">
    //           +65 6818 6368
    //         </a>
    //       </p>
    //     </div>
    //   ),
    // },
    // {
    //   title: (
    //     <Typography variant="h4" weight="bold" className="text-black">
    //       Dubai
    //     </Typography>
    //   ),
    //   children: (
    //     <div>
    //       <div>
    //         <Typography
    //           variant="p"
    //           className="text-[#333] text-opacity-65 py-2"
    //         >
    //           Levels 41 & 42, Emirates Towers, Sheikh Zayed Road, Dubai
    //         </Typography>
    //       </div>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         E
    //         <a className="font-bold" href="mailto:hello@cerebrent.com">
    //           hello@cerebrent.com
    //         </a>
    //       </p>
    //       <p className="flex gap-1 text-[#333] text-opacity-65">
    //         P
    //         <a className="font-bold" href="tel:971043132765">
    //           971 (0)4 313 2765
    //         </a>
    //       </p>
    //     </div>
    //   ),
    // },
  ];
  // const AddressData = [
  //   {
  //     title: (
  //       <Typography variant="h4" weight="bold" className="text-black">
  //         India
  //       </Typography>
  //     ),
  //     children: (
  //       <div>
  //         <div>
  //           <b className="text-sm md:text-lg block font-bold text-[#333] text-opacity-65 pt-1">
  //             Executive HQ
  //           </b>
  //           <Typography
  //             variant="p"
  //             className="text-[#333] text-opacity-65 py-2"
  //           >
  //             D-256, Orbit Vision Tower - Level 5, Industrial Area - Phase 8A,
  //             Sector 75 Mohali, Punjab 160055, India
  //           </Typography>
  //         </div>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           E
  //           <a className="font-bold" href="mailto:hello@cerebrent.com">
  //             hello@cerebrent.com
  //           </a>
  //         </p>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           P
  //           <a className="font-bold" href="tel:+911724109254">
  //             +91 172 410-9254
  //           </a>
  //         </p>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: (
  //       <Typography variant="h4" weight="bold" className="text-black">
  //         United States
  //       </Typography>
  //     ),
  //     children: (
  //       <div>
  //         <div>
  //           <b className="block font-bold text-[#333] text-opacity-65 pt-1">
  //             One World Trade Center
  //           </b>
  //           <Typography
  //             variant="p"
  //             className="text-[#333] text-opacity-65 py-2"
  //           >
  //             85th Floor, Lower Manhattan, Suite 8500, New York, NY 10007
  //           </Typography>
  //         </div>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           E
  //           <a className="font-bold" href="mailto:hello@cerebrent.com">
  //             hello@cerebrent.com
  //           </a>
  //         </p>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           P
  //           <a className="font-bold" href="tel:+a212-220-5747">
  //             212-220-5747
  //           </a>
  //         </p>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: (
  //       <Typography variant="h4" weight="bold" className="text-black">
  //         United Kingdom
  //       </Typography>
  //     ),
  //     children: (
  //       <div>
  //         <div>
  //           <Typography
  //             variant="p"
  //             className="text-[#333] text-opacity-65 py-2"
  //           >
  //             Level 18, 40 Bank Street Canary Wharf London E14 5NR
  //           </Typography>
  //         </div>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           E
  //           <a className="font-bold" href="mailto:hello@cerebrent.com">
  //             hello@cerebrent.com
  //           </a>
  //         </p>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: (
  //       <Typography variant="h4" weight="bold" className="text-black">
  //         Singapore
  //       </Typography>
  //     ),
  //     children: (
  //       <div>
  //         <div>
  //           <Typography
  //             variant="p"
  //             className="text-[#333] text-opacity-65 py-2"
  //           >
  //             Level 39, Marina Bay Financial Centre Tower 210 Marina Boulevard,
  //             Singapore 018983
  //           </Typography>
  //         </div>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           E
  //           <a className="font-bold" href="mailto:hello@cerebrent.com">
  //             hello@cerebrent.com
  //           </a>
  //         </p>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           P
  //           <a className="font-bold" href="tel:+65 6818 6368">
  //             +65 6818 6368
  //           </a>
  //         </p>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: (
  //       <Typography variant="h4" weight="bold" className="text-black">
  //         Dubai
  //       </Typography>
  //     ),
  //     children: (
  //       <div>
  //         <div>
  //           <Typography
  //             variant="p"
  //             className="text-[#333] text-opacity-65 py-2"
  //           >
  //             Levels 41 & 42, Emirates Towers, Sheikh Zayed Road, Dubai
  //           </Typography>
  //         </div>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           E
  //           <a className="font-bold" href="mailto:hello@cerebrent.com">
  //             hello@cerebrent.com
  //           </a>
  //         </p>
  //         <p className="flex gap-1 text-[#333] text-opacity-65">
  //           P
  //           <a className="font-bold" href="tel:971043132765">
  //             971 (0)4 313 2765
  //           </a>
  //         </p>
  //       </div>
  //     ),
  //   },
  // ];
  return (
    <div className={twMerge("py-2", className)} {...props}>
      <Accordions accordions={AddressData} />
      {/* <Typography variant="h4" weight="bold" className="text-black">
        India
      </Typography>
      <div>
        <b className="block font-bold text-[#333] text-opacity-65 pt-1">
          Executive HQ
        </b>
        <Typography variant="p" className="text-[#333] text-opacity-65 py-2">
          D-256, Orbit Vision Tower - Level 5, Industrial Area - Phase 8A,
          Sector 75 Mohali, Punjab 160055, India
        </Typography>
      </div>
      <p className="flex gap-1 text-[#333] text-opacity-65">
        E
        <a className="font-bold" href="mailto:hello@cerebrent.com">
          hello@cerebrent.com
        </a>
      </p>
      <p className="flex gap-1 text-[#333] text-opacity-65">
        P
        <a className="font-bold" href="tel:+911724109254">
          +91 172 410-9254
        </a>
      </p> */}
    </div>
  );
};

export default AddressAccordion;
