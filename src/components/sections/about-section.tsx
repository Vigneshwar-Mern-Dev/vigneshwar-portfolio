import { ArrowUpRight } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { personal } from "@/data/personal";
import { GlowingLine } from "@/components/ui/glowing-line";

export function AboutSection() {
  const details = [
    ["Location", personal.location],
    ["Availability", personal.availability],
    ["Email", personal.email],
  ];

  return (
    <section
      id="about"
      className="section section-about relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large section number */}
        <span className="absolute right-[5%] top-[-60px] font-mono text-[240px] font-bold leading-none tracking-[-0.08em] text-white/[0.025]">
          05
        </span>

        {/* Glow */}
        <div className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute right-[-100px] bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Lines */}
        <div className="absolute right-[8%] top-[26%] h-px w-[42%] rotate-[-6deg] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

        <div className="absolute right-[18%] top-[54%] h-px w-[30%] rotate-[5deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Nodes */}
        <span className="absolute right-[39%] top-[25%] h-2 w-2 rotate-45 bg-violet-400 shadow-[0_0_18px_rgba(168,118,255,.8)]" />

        <span className="absolute right-[19%] top-[52%] h-2 w-2 rotate-45 bg-cyan-400 shadow-[0_0_18px_rgba(114,231,255,.8)]" />

        {/* Label */}
        <div className="absolute right-[7%] top-[12%] flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
          <span>Personal Profile</span>
          <span className="h-px w-8 bg-white/10" />
          <span>ABOUT-05</span>
        </div>
      </div>

      <div className="page-shell relative z-10">
        <SectionHeading
          index="05"
          eyebrow="About"
          title="Building practical software for real business problems."
        />
        <GlowingLine className="my-8" />

        <div className="about-layout">
          <div className="about-monogram" aria-hidden="true">
            <span>V</span>
            <span>S</span>
            <i>FULL / STACK</i>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Vigneshwar S — I think in systems, not screens.
            </p>

            <p>
              Based in Erode, Tamil Nadu, I got serious about software when I
              realised I could turn messy business workflows into clean,
              automated systems. My time at MAKT Solutions taught me that
              the hardest problems aren&apos;t technical — they&apos;re understanding
              what a business actually needs before writing a single line of code.
            </p>

            <p>
              I gravitate toward projects where I can own the full picture:
              designing the data model, building the API layer, crafting the
              frontend, and making sure the whole thing holds up under real
              usage. I care about code that other developers can read six
              months later without wanting to rewrite it.
            </p>

            <p>
              Outside of work, I&apos;m usually exploring new frameworks, refining
              my deployment workflows, or reverse-engineering products I
              admire to understand why they feel so good to use.
            </p>

            <dl>
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>

              <a href={personal.resumeUrl} download>
                Resume <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}