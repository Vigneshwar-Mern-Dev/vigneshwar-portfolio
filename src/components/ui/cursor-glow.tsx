"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12; // number of trailing dots
const DOT_SIZE = 6;      // px — size of the lead dot

/**
 * CursorTrail
 * A small white lead dot + a comet tail of smaller fading dots
 * that follow the cursor. Zero React state, pure rAF DOM mutation.
 */
export function CursorGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const historyRef = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })),
  );
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    /* Build dots once into the container */
    const container = containerRef.current;
    if (!container) return;

    const dots: HTMLDivElement[] = [];

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const el = document.createElement("div");
      // Lead dot (i=0) is largest & brightest; tail dots shrink & fade
      const progress = i / (TRAIL_LENGTH - 1); // 0 = lead, 1 = tail end
      const size = Math.round(DOT_SIZE * (1 - progress * 0.65));
      const opacity = 1 - progress * 0.85;

      Object.assign(el.style, {
        position: "absolute",
        left: "0px",
        top: "0px",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        // Lead = white, tail fades to purple
        background:
          i === 0
            ? "#ffffff"
            : `rgba(${Math.round(168 - (168 - 124) * progress)}, ${Math.round(118 - (118 - 60) * progress)}, 255, ${opacity})`,
        boxShadow:
          i === 0
            ? "0 0 6px rgba(255,255,255,0.9), 0 0 12px rgba(168,118,255,0.6)"
            : "none",
        opacity: "0",
        willChange: "transform, opacity",
        pointerEvents: "none",
        transform: "translate(-100px, -100px)",
        transition: "opacity 0.2s ease",
      });

      container.appendChild(el);
      dots.push(el);
    }

    dotsRef.current = dots;

    /* Track mouse */
    const onMove = (e: PointerEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (!isVisible.current) {
        isVisible.current = true;
        dots.forEach((d) => (d.style.opacity = "1"));
      }
    };

    const onLeave = () => {
      dots.forEach((d) => (d.style.opacity = "0"));
      isVisible.current = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    /* rAF loop — shift history array, position each dot */
    const tick = () => {
      const history = historyRef.current;

      // Prepend current mouse pos into history
      history.unshift({ x: mouseRef.current.x, y: mouseRef.current.y });
      history.length = TRAIL_LENGTH; // keep fixed length

      dots.forEach((dot, i) => {
        const pos = history[i];
        const size = parseInt(dot.style.width);
        dot.style.transform = `translate(${pos.x - size / 2}px, ${pos.y - size / 2}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      dots.forEach((d) => d.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    />
  );
}
