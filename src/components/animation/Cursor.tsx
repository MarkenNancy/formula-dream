"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [isAction, setIsAction] = useState(false);
  const [isGrab, setIsGrab] = useState(false);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const cursor = window.getComputedStyle(target).cursor;
    if (cursor === "grab") {
      setIsGrab(true);
    } else if (cursor === "pointer") {
      setIsAction(true);
      setIsGrab(false);
    } else {
      setIsGrab(false);
      setIsAction(false);
    }

    /*
    if (target.tagName === "A" || target.tagName === "BUTTON") {
      // document.body.classList.add("cursor-pointer");
      setIsAction(true);
    } else {
      // document.body.classList.remove("cursor-pointer");
      setIsAction(false);
    }
    */
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  return (
    <div>
      {/* 
      ${
          isGrab
            ? "!size-16 bg-transparent bg-[url('/images/cursor.png')] opacity-60"
            : ""
        }
      */}
      <motion.div
        className={`hidden xl:block bg-black size-2 rounded-full pointer-events-none fixed z-[9999] bg-no-repeat bg-cover translate-x-[-50%] translate-y-[-50%] ${
          isAction ? "size-4 opacity-50" : "opacity-80"
        }  ${isGrab ? "" : ""}`}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
      ></motion.div>
    </div>
  );
};

export default Cursor;
