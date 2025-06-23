"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import StickyCard, {
  Props as StickyCardProps,
} from "@/components/molecules/StickyCard/StickyCard";

const sections: StickyCardProps[] = [
  {
    navTitle: "AI Strategy",
    cardTitle: "Personalized AI Strategy Session",
    content: "Meet with a Clarient AI Lead to explore your goals.",
    bgColor: "#FFF4F5",
    image: "/images/bluePrint/ai1.png",
    colSpanClass: "justify-end items-center md:pt-6",
  },
  {
    navTitle: "AI Blueprint",
    cardTitle: "A Custom Blueprint Aligned with Your Business Goals",
    content: "Get a roadmap designed for your unique business needs.",
    bgColor: "#E3D3FA",
    image: "/images/bluePrint/ai2.png",
    colSpanClass: "justify-end items-end md:pt-6",
  },
  {
    navTitle: "Execution Roadmap",
    cardTitle: "Clear, Actionable Next Steps",
    content: "Start transforming with confidence and clarity.",
    bgColor: "#EBF3FF",
    image: "/images/bluePrint/ai3.png",
    colSpanClass: "justify-end items-end md:pt-6",
  },
];

export default function StickyScrollPage() {
  const lenis = useLenis();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(idx);
          }
        }
      },
      { threshold: 0.6 }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((el) => el && observer.observe(el));
    return () => {
      currentRefs.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const handleNavClick = (idx: number) => {
    const el = sectionRefs.current[idx];
    if (el) {
      // console.log("el", el.offsetTop);
      // const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      // window.scrollTo({ top: y, behavior: "smooth" });
      const y = el.offsetTop;
      // window.scrollTo({ top: y, behavior: "smooth" });
      // el.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
      if (lenis) {
        lenis.scrollTo(0, {
          offset: y - 150,
          duration: 0.5,
          easing: (t) => t,
        });
      }
    }
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="sticky top-20 z-10 bg-white grid grid-cols-3 text-center py-5 mb-5">
        {sections.map((sec, idx) => (
          <button
            key={idx}
            onClick={() => handleNavClick(idx)}
            className={`lg:text-xl sm:text-lg text-xs font-bold transition duration-200 ${
              active === idx ? "opacity-100" : "opacity-40"
            }`}
          >
            {sec.navTitle}
          </button>
        ))}
      </nav>

      {/* Scrollable Sections */}
      <>
        {sections.map((sec, idx) => {
          let scale = 1;
          if (idx !== active) {
            const scaleStep = 0.05;
            const distance = Math.abs(active - idx);
            if (scrollDir === "down") {
              scale =
                idx < active ? Math.max(0.9, 1 - distance * scaleStep) : 1;
            } else {
              scale =
                idx > active ? Math.max(0.9, 1 - distance * scaleStep) : 1;
            }
          }

          const opacity = active === idx ? 1 : 1;
          const zIndex = active === idx ? 1 : 1;

          return (
            <motion.section
              key={idx}
              data-index={idx}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              className="min-h-[20.625rem] w-full sticky z-20 mb-10 rounded-xl"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity, scale, zIndex }}
              transition={{
                scale: { duration: 0.9, ease: "easeOut" },
                zIndex: { duration: 0.9, ease: "easeOut" },
              }}
              style={{
                backgroundColor: sec.bgColor,
                top: 168 + idx * 40,
                backdropFilter: "blur(4.5px)",
              }}
            >
              <StickyCard {...sec} id={`sectionID-${idx}`} />
            </motion.section>
          );
        })}
      </>
    </>
  );
}
