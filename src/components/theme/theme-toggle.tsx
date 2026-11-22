"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function applyTheme(t: "dark" | "light") {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (t === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
    root.setAttribute("data-theme", "light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  }
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      const stored = localStorage.getItem("theme") as "dark" | "light" | null;
      if (stored) {
        setTheme(stored);
        applyTheme(stored);
      } else {
        setTheme("dark");
        applyTheme("dark");
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <div className={`h-8 w-8 rounded-full border border-white/10 bg-white/5 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative flex items-center justify-center h-8 w-8 rounded-full border transition-all duration-300 ${
        theme === "dark"
          ? "border-violet-500/30 bg-violet-950/40 text-violet-300 hover:text-white hover:border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
          : "border-amber-400/40 bg-amber-50 text-amber-600 hover:bg-amber-100 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
      } ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-violet-600 hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
