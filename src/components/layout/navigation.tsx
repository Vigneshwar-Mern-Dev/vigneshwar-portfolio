"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const sectionElements = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -50%",
        threshold: [0, 0.25, 0.5],
      }
    );

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 site-nav-bar ${
          scrolled
            ? "scrolled-nav"
            : "unscrolled-nav"
        }`}
      >
        {/* Monogram Brand */}
        <a
          href="#home"
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-2 font-bold tracking-tight text-white hover:text-violet-300 transition-colors"
          aria-label="Vigneshwar S - Home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-xs font-mono font-bold text-white shadow-[0_0_12px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
            VS
          </span>
          <span className="text-sm tracking-tight font-medium hidden sm:inline nav-brand-text">
            Vigneshwar<span className="text-violet-400">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 nav-link-item ${
                  isActive
                    ? "is-active text-white bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions: Theme Toggle & Resume */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_28px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto glass-panel p-4 flex flex-col gap-1 border border-violet-500/30 animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl">
          <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 px-3 py-1 flex items-center justify-between">
            <span>Navigation Menu</span>
            <ThemeToggle className="scale-90" />
          </div>
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(id)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />}
              </a>
            );
          })}
          <div className="pt-2 mt-1 border-t border-white/10 flex gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15"
            >
              Email Me
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-xl text-xs font-semibold bg-violet-600 text-white hover:bg-violet-500 flex items-center justify-center gap-1"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
