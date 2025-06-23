"use client";
import React, { useEffect, useState, useRef, FC } from "react";
import Lenis from "lenis";
import { twMerge } from "tailwind-merge";
import { Typo } from "@/components";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  offset?: number;
  nav: {
    id: string;
    label: string;
  }[];
};

const SpyNavBlog: FC<Props> = ({ nav, className, style, offset = 100 }) => {
  const ref = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>("");
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const ids = nav.map((item) => item.id);
  useEffect(() => {
    const refTop = ref.current?.offsetTop;
    setScrollOffset(refTop || 0);
  }, []);

  useEffect(() => {
    const sectionEls = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      orientation: "vertical",
      wheelMultiplier: 1.5,
    });

    function onScroll({ animatedScroll }: { animatedScroll: number }) {
      if (animatedScroll > scrollOffset - offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      let currentId = "";
      for (const section of sectionEls) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          currentId = section.id;
        }
      }
      setActiveId(currentId);
    }

    lenis.on("scroll", onScroll);

    // Start lenis RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [ids, scrollOffset, offset]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - offset,
      });
    }
  };
  return (
    <nav
      ref={ref}
      className={twMerge(
        `sticky top-[4.188rem]`,
        isSticky ? "bg-transparent" : "",
        className
      )}
      style={style}
    >
      <ul className="border-l border-l-[#DDD]">
        {nav.map((navItm, index) => (
          <li
            className={twMerge(
              "transition-all duration-300 relative",
              activeId === navItm.id ? "border-opacity-100" : "border-opacity-0"
            )}
            key={index}
          >
            {activeId === navItm.id && (
              <span className="transition-all duration-300 w-[0.313rem] rounded-full absolute left-0 top-0 bottom-0 bg-[#DDD] -translate-x-[50%]"></span>
            )}
            <button
              className={`transition-all h-full w-full text-left text-black text-xs leading-6 ps-7 py-2 pe-5 ${
                activeId === navItm.id
                  ? "text-opacity-100"
                  : "text-opacity-50 hover:text-opacity-100"
              }`}
              onClick={() => handleClick(navItm.id)}
            >
              <Typo tag="p" size="sm" className="text-pretty">
                {navItm.label}
              </Typo>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SpyNavBlog;
