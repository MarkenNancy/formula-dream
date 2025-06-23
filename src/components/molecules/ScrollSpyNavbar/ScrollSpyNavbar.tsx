"use client";
import { useEffect, useState, useRef } from "react";
// import { motion, useScroll } from "framer-motion";
// import Lenis from "@studio-freight/lenis";
import Lenis from "lenis";
import { Container, Typo } from "@/components";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  offset?: number;
  pageName?: string;
  nav: {
    id: string;
    label: string;
  }[];
}

export default function ScrollSpyNavbar({
  nav,
  className,
  style,
  pageName,
  offset = 120,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  //   const [activeId, setActiveId] = useState<string>(ids[0]);
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
      //   let currentId = ids[0];

      if (animatedScroll > scrollOffset - offset) {
        // ref.current?.classList.add("!bg-opacity-100");
        setIsSticky(true);
      } else {
        // ref.current?.classList.remove("!bg-opacity-100");
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

  // const { scrollYProgress } = useScroll();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      /*
        element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        });
        */
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - offset,
      });
    }
  };
  // top-[4.188rem]
  return (
    <nav
      ref={ref}
      className={twMerge(
        `sticky  top-[4.46rem] shadow z-30 w-full transition-all duration-300 border-t border-white max-lg:hidden`,
        isSticky
          ? "bg-black bg-opacity-90 border-opacity-20 backdrop-blur-2xl"
          : "bg-[#171720] bg-opacity-40 border-opacity-0",
        className
      )}
      style={style}
      // style={{
      //   ...style,
      //   ...(isSticky && {
      //     background: `linear-gradient(180deg, #000 8.02%, rgba(0, 0, 0, 0.00) 98.11%), linear-gradient(267deg, rgba(0, 0, 0, 0.00) 25.14%, rgba(0, 0, 0, 0.50) 70.05%)`,
      //   }),
      // }}
    >
      <Container isSmall>
        <div className="inline-flex items-center gap-10 xl:gap-[6.25rem] w-full">
          {/* {isSticky && (
            <div className="h-full relative after:bg-secondary after:absolute after:-right-full after:top-0 after:h-full after:w-px">
              <Typo
                tag="p"
                weight="bold"
                size="sm"
                className="text-secondary whitespace-nowrap"
              >
                {pageName}
              </Typo>
            </div>
          )} */}
          {isSticky && (
            <div
              className={twMerge(
                "h-full relative transition-all duration-500 after:bg-white after:bg-opacity-30 after:absolute after:left-[125%] after:top-0 after:h-full after:w-px",
                isSticky ? "opacity-100 w-auto h-full" : "opacity-0 w-0 h-full"
              )}
            >
              <Typo
                tag="p"
                weight="bold"
                size="sm"
                className="text-white whitespace-nowrap"
              >
                {pageName}
              </Typo>
            </div>
          )}
          <ul className="inline-flex justify-between items-center gap-2 xl:gap-[4.25rem] text-white W-full grow">
            {nav.map((navItm, index) => (
              <li
                className={twMerge(
                  "transition-all duration-300 border-b-4 border-secondary",
                  activeId === navItm.id
                    ? "border-opacity-100"
                    : "border-opacity-0",
                  isSticky ? "py-3.5 px-3" : "py-3.5 px-5"
                )}
                key={index}
              >
                <button
                  className={`h-full w-full ${
                    activeId === navItm.id
                      ? "text-secondary font-bold"
                      : isSticky
                      ? "text-white"
                      : "text-white"
                  }`}
                  onClick={() => handleClick(navItm.id)}
                >
                  <Typo
                    tag="p"
                    size={isSticky ? "sm" : "md"}
                    className="text-pretty capitalize"
                  >
                    {navItm.label}
                  </Typo>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      {/* <div className="w-full h-[0.188rem] bg-[#922CEC]">
        <div className="w-1/3 h-full bg-[#D65335]"></div>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
          }}
          className="origin-left bg-[#D65335] h-full"
        />
      </div> */}
    </nav>
  );
}
