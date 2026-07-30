"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [active, setActive] = useState("home");
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  // Navbar compact state and active-section tracking
  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > window.innerHeight * 0.72);
    };

    const sections = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55%",
        threshold: [0, 0.2, 0.5],
      },
    );

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close mobile navigation using Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close mobile navigation when desktop layout becomes active
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigationClick = (sectionId: string) => {
    setActive(sectionId);
    setOpen(false);
  };

  return (
    <header
      className={`nav-shell ${compact ? "is-compact" : ""}`}
      data-menu-open={open}
    >
      <nav className="site-nav" aria-label="Primary navigation">
        <a
          href="#home"
          className="nav-mark"
          aria-label="Vigneshwar S — Home"
          onClick={() => handleNavigationClick("home")}
        >
          VS<span aria-hidden="true">.</span>
        </a>

        <div className="nav-links" aria-label="Page sections">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = active === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={() => handleNavigationClick(sectionId)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          className="nav-resume"
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Vigneshwar S resume in a new tab"
        >
          Resume
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="nav-menu-button"
          type="button"
          onClick={() => setOpen((currentValue) => !currentValue)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map((link, index) => {
          const sectionId = link.href.slice(1);
          const isActive = active === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? "is-active" : undefined}
              aria-current={isActive ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => handleNavigationClick(sectionId)}
            >
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              {link.label}
            </a>
          );
        })}

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true">06</span>
          View resume
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}