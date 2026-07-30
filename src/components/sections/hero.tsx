import Image from "next/image";
import { RobotAssistant } from "@/components/canvas/robot-assistant";
import {
  ArrowDown,
  ArrowUpRight,
} from "@/components/ui/icons";
import { personal, socialLinks } from "@/data/personal";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 5);

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] scroll-mt-24 overflow-hidden bg-[#070414] text-[#F7F5FF]"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70
        [background-image:linear-gradient(rgba(168,118,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.045)_1px,transparent_1px)]
        [background-size:48px_48px]"
      />

      {/* Main violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[58%] top-[46%] h-[760px] w-[760px]
        -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3CFF]/20 blur-[140px]"
      />

      {/* Cyan ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[28%] h-52 w-52
        rounded-full bg-[#72E7FF]/5 blur-[100px]"
      />

      {/* Horizontal edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
        bg-[linear-gradient(90deg,#070414_0%,transparent_28%,transparent_74%,#070414_100%)]"
      />

      {/* Vertical edge fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
        bg-[linear-gradient(180deg,#070414_0%,transparent_18%,transparent_78%,#070414_100%)]"
      />

      

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-5 pb-6 pt-28 sm:px-8 sm:pt-32 lg:px-12 xl:px-16">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] xl:gap-14">
          {/* Hero content */}
          <div className="relative z-20 max-w-[680px]">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
              <span className="text-[#F7F5FF]">
                Vigneshwar S
              </span>

              <span
                aria-hidden="true"
                className="h-px w-5 bg-[#A876FF]/50"
              />

              <span className="text-[#8F88A5]">
                Full-Stack Developer
              </span>
            </div>

            <p className="mb-7 flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#AAA5BD]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#72E7FF]
                shadow-[0_0_14px_rgba(114,231,255,0.8)]"
              />

              {personal.availability}
            </p>

            <h1
              id="hero-title"
              className="max-w-[680px] text-balance text-[clamp(3.4rem,5.9vw,6.9rem)]
              font-semibold leading-[0.9] tracking-[-0.065em] text-[#F7F5FF]"
            >
              I engineer{" "}
              <em className="[font-family:var(--font-instrument-serif),serif] font-normal tracking-[-0.035em] text-[#A876FF]">
                digital products
              </em>{" "}
              from idea to production.
            </h1>

            <p className="mt-7 max-w-[570px] text-[0.95rem] leading-7 text-[#AAA5BD] sm:text-base sm:leading-8">
              I build scalable SaaS platforms, CRM systems,
              automation workflows and AI-assisted applications
              using React, Next.js, Node.js and TypeScript.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full
                bg-[#7C3CFF] px-6 text-sm font-semibold text-white
                shadow-[0_0_32px_rgba(124,60,255,0.28)]
                transition duration-300
                hover:-translate-y-0.5 hover:bg-[#8B52FF]
                hover:shadow-[0_0_42px_rgba(124,60,255,0.4)]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#72E7FF] focus-visible:ring-offset-4
                focus-visible:ring-offset-[#070414]
                motion-reduce:transform-none motion-reduce:transition-none"
              >
                View selected work

                <span className="transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transform-none">
                  <ArrowDown />
                </span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Vigneshwar S resume in a new tab"
                className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full
                border border-white/15 bg-white/[0.025] px-6
                text-sm font-semibold text-[#F7F5FF] backdrop-blur-md
                transition duration-300
                hover:-translate-y-0.5 hover:border-[#A876FF]/45
                hover:bg-[#A876FF]/10
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#72E7FF] focus-visible:ring-offset-4
                focus-visible:ring-offset-[#070414]
                motion-reduce:transform-none motion-reduce:transition-none"
              >
                View resume

                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
                  <ArrowUpRight />
                </span>
              </a>
            </div>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-xs
              tracking-[0.05em] text-[#8F88A5]
              transition-colors duration-300 hover:text-[#F7F5FF]
              focus-visible:outline-none focus-visible:text-[#72E7FF]"
            >
              Open to full-time and contract opportunities

              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
                <ArrowUpRight />
              </span>
            </a>
          </div>

          {/* Interactive Spline robot */}
          <RobotAssistant />
        </div>

        {/* Mobile project previews */}
        <div
          aria-label="Featured project previews"
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden [&::-webkit-scrollbar]:hidden"
        >
          {featuredProjects.map((project, index) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              aria-label={`View ${project.title}`}
              className="group w-[82vw] max-w-[350px] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#A876FF]/15 bg-[#14102D]/70"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="82vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#070414] via-transparent to-transparent"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-4 py-4">
                <span className="text-xs font-medium text-[#F7F5FF]">
                  {project.title}
                </span>

                <span className="text-[0.62rem] tracking-[0.15em] text-[#A876FF]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom metadata */}
        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.07] pt-6 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[#777088] md:flex-row md:items-center md:justify-between">
          <div
            aria-label="Social profiles"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {socialLinks.map((link) => {
              const isEmail = link.href.startsWith("mailto:");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#F7F5FF] focus-visible:outline-none focus-visible:text-[#72E7FF]"
                >
                  {link.label}

                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
                    <ArrowUpRight />
                  </span>
                </a>
              );
            })}
          </div>

          <p className="hidden items-center gap-3 xl:flex">
            Vigneshwar S

            <span className="text-[#A876FF]">/</span>

            Full-Stack Developer
          </p>

          <a
            href="#work"
            aria-label="Scroll to selected projects"
            className="group inline-flex items-center gap-3 self-start transition-colors duration-300 hover:text-[#F7F5FF] focus-visible:outline-none focus-visible:text-[#72E7FF] md:self-auto"
          >
            Scroll to explore

            <span className="transition-transform duration-300 group-hover:translate-y-1 motion-reduce:transform-none">
              <ArrowDown />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}