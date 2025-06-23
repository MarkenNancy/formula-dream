"use client";
import { useEffect, useRef } from "react";

export default function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    /* eslint-disable */

    const particles: any[] = [];

    function createParticle(x: number, y: number) {
      return {
        x,
        y,
        alpha: 0.5,
        radius: Math.random() * 10 + 5,
        speedY: Math.random() * -1 - 0.5,
        speedX: (Math.random() - 0.5) * 2,
      };
    }

    function drawParticles() {
      if (!ctx) return;
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
        // gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
        // gradient.addColorStop(0.4, `rgba(200, 200, 200, ${p.alpha * 0.6})`);
        // gradient.addColorStop(1, `rgba(100, 100, 100, 0)`);

        gradient.addColorStop(0, `rgba(215, 83, 114, ${p.alpha})`);
        gradient.addColorStop(0.15, `rgba(63, 27, 126, ${p.alpha * 0.6})`);
        gradient.addColorStop(0.2, `rgba(79, 29, 192, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha -= 0.01;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    let mouseX = 0;
    let mouseY = 0;

    function animate() {
      drawParticles();
      requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle(mouseX, mouseY));
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
    />
  );
}
