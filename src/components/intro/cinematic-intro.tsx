"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vigneshwar-intro-seen";

export function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = window.matchMedia("(max-width: 640px)").matches &&
      (navigator.hardwareConcurrency ?? 8) <= 4;
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      seen = false;
    }

    if (seen || reducedMotion || lowPower) return;
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const timer = window.setTimeout(() => setLeaving(true), 3500);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {}
    }, 4100);
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
    window.setTimeout(() => setVisible(false), 500);
  }

  if (!visible) return null;

  return (
    <div className={`cinematic-intro ${leaving ? "is-leaving" : ""}`} aria-label="Portfolio introduction">
      <div className="intro-grid" aria-hidden="true" />
      <button type="button" onClick={skipIntro} className="intro-skip">
        Skip intro
      </button>
      <div className="intro-sequence" aria-live="polite">
        <div className="intro-system"><span /> Initialising developer profile</div>
        <div className="intro-progress"><span /></div>
        <div className="intro-name">Vigneshwar S</div>
        <div className="intro-role">Full-Stack Developer</div>
      </div>
      <div className="intro-index" aria-hidden="true">SYS / VS-001</div>
    </div>
  );
}
