"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient Cursor Glow
 * Creates a subtle, elegant ambient light following the mouse on desktop without
 * hiding the native cursor or incurring lag.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop with fine pointers
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = -200;
    let mouseY = -200;
    let currentX = -200;
    let currentY = -200;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.opacity = "1";
    };

    const onMouseLeave = () => {
      glow.style.opacity = "0";
    };

    const animate = () => {
      // Smooth lerp follow
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      glow.style.transform = `translate3d(${currentX - 150}px, ${currentY - 150}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-violet-500/10 via-cyan-400/5 to-transparent blur-3xl opacity-0 transition-opacity duration-300 will-change-transform"
    />
  );
}
