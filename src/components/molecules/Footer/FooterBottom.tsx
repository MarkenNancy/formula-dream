import { Typo, Container } from "@/components";
import { Orbitron } from "next/font/google";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};
 const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
  })
const FooterBottom: FC<Props> = ({ className, style }) => {
 
  return (
    <div className={twMerge(``, className)} style={style}>
      <Container>
        <div className={`${orbitron.className} px-4 text-white`}>
          <div className="flex flex-row justify-between items-center">
            {/* <div className="leading-6 border-e border-black border-opacity-10 pe-6">
              <Typo size="sm" className="opacity-60">
                Copyright
              </Typo>
              <Typo tag="p" size="h3" weight="black" className="opacity-60">
             
                {new Date().getFullYear()}
              </Typo>
            </div> */}
            <Typo size="sm" className="px-6 ps-5 pb-5">
              © {new Date().getFullYear()} Formula Dream. All rights reserved.
              {/* Clarient- A <b>Cerebrent Group</b> of company */}
              {/* <br />
              All Rights Reserved */}
            </Typo>
             <Typo size="sm" className="px-6 ps-5 pb-5">
              INSTAGRAM
            </Typo>
              <Typo size="sm" className="px-6 ps-5 pb-5">
              CONTACT@FORMULADREAM.COM
            </Typo>
          </div>
          {/* <div className="">
            <Typo size="sm" className="px-6 ps-5 pb-5">
              INSTAGRAM
            </Typo>
          </div> */}
          {/* <div className="">
            <Typo size="sm" className="px-6 ps-5 pb-5">
              CONTACT@FORMULADREAM.COM
            </Typo> */}
            {/* <Typo
              tag="div"
              size="sm"
              className="pt-6 flex flex-wrap gap-y-3 gap-x-6"
            >
              {cmsLinks.map((link, index) => (
                <CustomLink
                  key={index}
                  className="transition-all opacity-50 hover:opacity-100"
                  activeClassName="!opacity-100 text-primary"
                  {...link}
                />
              ))}
            </Typo> */}
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
