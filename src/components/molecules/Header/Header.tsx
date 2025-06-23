"use client";
import { FC, useEffect, useState } from "react";
import { Container, Icons, Logo } from "@/components";
import { servicesLinks, navLinks } from "@/data/navData";
import MenuAsside from "./MenuAsside";
import MenuItem from "./MenuItem";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const Header: FC<Props> = ({ className, style }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //

  const params = useParams();

  useEffect(() => {
    // console.log("Hash:", window.location.hash);
    setTimeout(() => {
      const elId = window.location.hash.slice(1);
      if (elId) {
        const element = document.getElementById(elId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 120,
            behavior: "smooth",
          });
          // element.scrollIntoView({
          //   behavior: "smooth",
          //   block: "nearest",
          // });
        }
      }
    }, 400);
  }, [params]);

  return (
    <>
      <header
        className={twMerge(
          `no-ripple fixed top-0 left-0 z-50 w-full transition-all duration-500 py-2 lg:py-2 bg-opacity-50  ${scrolled ? "" : "lg:pt-2"
          }`,
          className
        )}
        style={style}
      >
        <Container>
          {/* <div className="lg:flex items-center bg-gradient-to-r from-[#1f0e00] to-[#2c1500] lg:px-6 lg:rounded-lg lg:rounded justify-between "> */}
          <div
            className={twMerge(
              `lg:flex items-center justify-between
    bg-gradient-to-r from-[#]/60 to-[#2c1500]/60
    backdrop-blur-3xl
    drop-shadow-[0_0_30px_rgba(255,122,0,0.3)]
    lg:px-6 lg:rounded-lg py-5 lg:py-2 transition-all duration-300`,
              scrolled ? "backdrop-blur bg-opacity-50" : ""
            )}
          >
            <div className="lg:pe-7 xl:12 flex justify-between items-center ">
              <Logo
                className={`max-lg:max-w-24 ${scrolled ? "lg:w-[8rem]" : "lg:w-[10.25rem]"
                  }`}
                size={scrolled ? "sm" : "md"}
              />
              <button
                className="lg:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="toggle menu"
              >
                <Icons name={isOpen ? "cross" : "menu"} size={1.5} />
              </button>
            </div>
            <div className="items-center relative justify-between grow hidden lg:flex lg:pl-40">
              {/* <div>
                <ul className="flex items-center gap-3 lg:gap-4 xl:gap-9">
                  {servicesLinks.map((link, index) => (
                    <MenuItem key={index} link={link} />
                  ))}
                </ul>
              </div> */}
              <ul className="flex items-center gap-1 px-1 py-1 rounded-full bg-orange-500 text-white">
                {servicesLinks.map((link, index) => {
                  const isActive = link.children === "HOME"; // <- Adjust based on active route
                  return (
                    <MenuItem
                      key={index}
                      link={link}
                      className={twMerge(
                        "text-sm font-bold px-6 rounded-full transition-colors duration-200",
                        isActive
                          ? "bg-white text-orange-500"
                          : "text-white hover:bg-orange-600"
                      )}
                    />
                  );
                })}
              </ul>

              {/* Divider and Auth Links */}
              <div className="flex items-center ps-4 border-s border-white/10 h-[3.5rem]">
                <ul className="flex items-center gap-4">
                  {navLinks.map((link, index) => {
                    const isLogin = link.children === "LOGIN";
                    return (
                      <MenuItem
                        key={index}
                        link={link}
                        className={twMerge(
                          "text-xs font-bold px-6 rounded-full transition-colors duration-200",
                          isLogin
                            ? "bg-orange-500 text-white"
                            : "text-white hover:text-orange-400"
                        )}
                      />
                    );
                  })}
                </ul>
              </div>
              {/* <ul className="hidden lg:flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500 text-white">
                {servicesLinks.map((link, index) => (
                  <MenuItem
                    key={index}
                    link={link}
                    className={twMerge(
                      "text-lg font-bold px-4 py-1 rounded-full text-white",
                      // link.children === "HOME"
                      //   ? " text-white"
                      //   : "text-white "
                    )}
                  />
                ))}
              </ul>
              <div className="ps-4 lg:ps-5 relative">
                <span className="w-px bg-white opacity-10 absolute -top-[4rem] bottom-0 left-0  h-[5.813rem]"></span>
                <ul className="flex items-center gap-2 lg:gap-5 xl:gap-8">
                  {navLinks.map((link, index) => (
                    // <MenuItem
                    //   key={index}
                    //   link={link}
                    //   className="py-2 text-white leading-6 hover:text-white text-sm"
                    // />
                    <MenuItem
                    key={index}
                    link={link}
                    className={twMerge(
                      "text-xs font-bold px-6 py-1 rounded-full",
                      link.children === "LOGIN"
                        ? "bg-orange-500 text-white"
                        : "text-white hover:text-orange-400"
                    )}
                  />
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </Container>
      </header>
      {isOpen && <MenuAsside handleClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
