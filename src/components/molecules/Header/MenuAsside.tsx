"use client";
import React, { FC, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Icons from "@/components/atom/Icons/Icon";
import Logo from "@/components/atom/Logo/Logo";
import { navLinks, servicesLinks } from "@/data/navData";
import { twMerge } from "tailwind-merge";
// import { useLenis } from "lenis/react";
import MenuAssideItem from "./MenuAssideItem";
import { ReactLenis } from "@/utils/lenis";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
  handleClose: () => void;
};
const MenuAsside: FC<Props> = ({ className, style, handleClose }) => {
  const pathname = usePathname();
  // const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(true);
    // lenis?.stop();
    // }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.remove("modalOpen");
      // window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      closeMenu();
    }
  }, [pathname]);

  const closeMenu = () => {
    // lenis?.start();
    setIsMenuOpen(false);
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  return (
    <div
      className={twMerge(
        `fixed inset-0 z-[51] flex flex-col lg:hidden overflow-hidden`,
        className
      )}
      style={style}
    >
      <div
        className="fixed inset-0 bg-black opacity-75 backdrop-blur-3xl"
        onClick={closeMenu}
      ></div>
      <ReactLenis
        className={`bg-gradient-to-b from-[#301401] to-[#ff6600] opacity-90 rounded-l-3xl h-full w-64 max-w-full relative z-10 ms-auto ps-6 px-4 py-5 overflow-auto transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pe-2">
          <div className="flex items-center justify-between">
            <Logo className="max-w-24" />
            <button className="lg:hidden text-white" onClick={closeMenu}>
              <Icons name="cross" size={1.5} />
            </button>
          </div>
          <ul className="grid gap-y-4 mt-10">
            {servicesLinks.map((link, index) => (
              <MenuAssideItem key={index} link={link} />
            ))}
          </ul>
          <span className="block bg-white opacity-30 h-px my-5"></span>
          <ul className="grid gap-y-4">
            {navLinks.map((link, index) => (
              <MenuAssideItem key={index} link={link} />
            ))}
          </ul>
        </div>
      </ReactLenis>
    </div>
  );
};

export default MenuAsside;
