"use client";

import React, { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  radius: number;
  hue: number;
  alpha: number;
  speed: number;
};

const GradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripples = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const shouldBlockRipple = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 👇 Detect if hovered element or parent has `.no-ripple`
    const checkBlockClass = (e: MouseEvent) => {
      let el = e.target as HTMLElement | null;
      while (el) {
        if (el.classList?.contains("no-ripple")) {
          shouldBlockRipple.current = true;
          return;
        }
        el = el.parentElement;
      }
      shouldBlockRipple.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      checkBlockClass(e);
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (shouldBlockRipple.current) return;

      for (let i = 0; i < 3; i++) {
        ripples.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          hue: (Math.random() * 360 + i * 45) % 360,
          alpha: 0.08,
          speed: 1.5 + Math.random() * 0.5,
        });
      }

      if (ripples.current.length > 100) {
        ripples.current.splice(0, ripples.current.length - 100);
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((ripple, index) => {
        ripple.radius += ripple.speed;
        ripple.alpha *= 0.97;
        ripple.hue = (ripple.hue + 0.6) % 360;

        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        gradient.addColorStop(
          0,
          `hsla(${ripple.hue}, 100%, 70%, ${ripple.alpha})`
        );
        gradient.addColorStop(
          1,
          `hsla(${(ripple.hue + 60) % 360}, 100%, 50%, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fill();

        if (ripple.alpha < 0.01 || ripple.radius > 300) {
          ripples.current.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="z-[99]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    />
  );
};

export default GradientBackground;
