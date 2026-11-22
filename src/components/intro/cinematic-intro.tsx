"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vigneshwar-intro-seen";

export function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      seen = false;
    }

    if (seen || reducedMotion) return;

    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const timer = window.setTimeout(() => setLeaving(true), 1400);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {}
    }, 1800);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(timer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  function skipIntro() {
    setLeaving(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    window.setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05030e] text-white transition-opacity duration-400 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Portfolio Introduction"
    >
      <button
        type="button"
        onClick={skipIntro}
        className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] font-mono tracking-widest uppercase text-slate-400 hover:text-white hover:border-white/40 transition-colors"
      >
        Skip [ESC]
      </button>

      <div className="w-full max-w-sm px-6 text-center space-y-4">
        {/* Monogram pulse */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 font-mono font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.6)]">
          VS
        </div>

        <div className="text-[11px] font-mono tracking-widest text-violet-400 uppercase">
          ● Initializing System Core
        </div>

        {/* Progress bar */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 w-full animate-[travelingLine_1.4s_ease-in-out_infinite]" />
        </div>

        <div className="text-sm font-semibold tracking-tight text-slate-200">
          Vigneshwar S · Full-Stack Developer
        </div>
      </div>
    </div>
  );
}
