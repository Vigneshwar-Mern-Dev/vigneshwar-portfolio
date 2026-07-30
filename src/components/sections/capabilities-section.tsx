import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/data/skills";
import { GlowingLine } from "@/components/ui/glowing-line";

export function CapabilitiesSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#070414] py-14 text-[#F7F5FF] sm:py-16 lg:py-20"
    >
      {/* Right-side grid */}
    {/* Diagonal technical blueprint grid */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-y-0 right-[-5%] w-[86%] overflow-hidden"
>
  {/* Small glowing dot matrix */}
  <div
    className="
      absolute inset-0 opacity-80
      [background-image:radial-gradient(circle,rgba(168,118,255,0.32)_1px,transparent_1.5px)]
      [background-size:28px_28px]
      [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_22%,black_58%,black_100%)]
      [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_22%,black_58%,black_100%)]
    "
  />

  {/* Large diagonal architecture grid */}
  <div
    className="
      absolute inset-[-15%]
      origin-center rotate-[-6deg]
      opacity-70
      [background-image:linear-gradient(rgba(168,118,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.11)_1px,transparent_1px)]
      [background-size:112px_112px]
      [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_26%,black_62%,black_100%)]
      [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_26%,black_62%,black_100%)]
    "
  />

  {/* Secondary fine diagonal lines */}
  <div
    className="
      absolute inset-[-10%]
      rotate-[7deg]
      opacity-35
      [background-image:repeating-linear-gradient(90deg,transparent_0px,transparent_95px,rgba(114,231,255,0.12)_96px,transparent_97px)]
      [-webkit-mask-image:linear-gradient(to_right,transparent_5%,black_55%,black_100%)]
      [mask-image:linear-gradient(to_right,transparent_5%,black_55%,black_100%)]
    "
  />

  {/* Technical focus frame */}
  <div className="absolute right-[10%] top-[17%] h-[62%] w-[58%] rotate-[-4deg] rounded-[42px] border border-[#A876FF]/[0.13]" />

  <div className="absolute right-[16%] top-[24%] h-[48%] w-[44%] rotate-[5deg] rounded-[32px] border border-white/[0.06]" />

  {/* Horizontal highlight */}
  <div className="absolute right-0 top-[42%] h-px w-[72%] bg-gradient-to-r from-transparent via-[#A876FF]/35 to-transparent shadow-[0_0_18px_rgba(168,118,255,0.25)]" />

  {/* Vertical highlight */}
  <div className="absolute right-[31%] top-[10%] h-[78%] w-px bg-gradient-to-b from-transparent via-[#72E7FF]/25 to-transparent shadow-[0_0_16px_rgba(114,231,255,0.2)]" />

  {/* Bright connection nodes */}
  <span className="absolute right-[31%] top-[42%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#72E7FF] shadow-[0_0_14px_rgba(114,231,255,0.9)]" />

  <span className="absolute right-[48%] top-[28%] h-1.5 w-1.5 rotate-45 bg-[#A876FF] shadow-[0_0_14px_rgba(168,118,255,0.9)]" />

  <span className="absolute right-[18%] top-[67%] h-1.5 w-1.5 rotate-45 bg-[#A876FF] shadow-[0_0_14px_rgba(168,118,255,0.9)]" />

  {/* Edge fade */}
  <div className="absolute inset-0 bg-[linear-gradient(180deg,#070414_0%,transparent_13%,transparent_84%,#070414_100%)]" />
</div>

      {/* Violet ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[8%] h-[700px] w-[700px] rounded-full bg-[#7C3CFF]/10 blur-[150px]"
      />

      {/* Cyan secondary glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-[52%] h-64 w-64 rounded-full bg-[#72E7FF]/5 blur-[120px]"
      />

      {/* Keep the left side dark and clean */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#070414_0%,#070414_20%,transparent_66%)]"
      />

      {/* Top and bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#070414_0%,transparent_18%,transparent_82%,#070414_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div id="skills-heading" className="pb-10 sm:pb-12 lg:pb-16">
          <SectionHeading
            index="02"
            eyebrow="Technical capabilities"
            title="Full-stack depth, organised around outcomes."
            description="From interface systems to production services, I work across the application stack without losing sight of the user."
          />
          <GlowingLine className="mt-8" />
        </div>

        {/* Capability rows */}
        <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="
                group relative grid gap-8 py-12
                transition-colors duration-300
                hover:bg-white/[0.015]
                sm:py-14
                lg:grid-cols-[90px_minmax(280px,0.9fr)_minmax(380px,1.1fr)]
                lg:gap-12 lg:px-4 lg:py-16
              "
            >
              {/* Hover accent */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute left-0 top-0 h-full w-px
                  origin-top scale-y-0
                  bg-gradient-to-b from-[#7C3CFF] via-[#A876FF] to-transparent
                  transition-transform duration-500
                  group-hover:scale-y-100
                  motion-reduce:transition-none
                "
              />

              {/* Number */}
              <div>
                <span className="inline-flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#A876FF]">
                  {capability.number}

                  <span
                    aria-hidden="true"
                    className="
                      h-px w-7 bg-[#A876FF]/35
                      transition-all duration-300
                      group-hover:w-11 group-hover:bg-[#A876FF]/70
                      motion-reduce:transition-none
                    "
                  />
                </span>
              </div>

              {/* Title and description */}
              <div>
                <h3 className="max-w-md text-2xl font-semibold tracking-[-0.035em] text-[#F7F5FF] sm:text-3xl lg:text-[2.1rem]">
                  {capability.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#AAA5BD] sm:text-base sm:leading-8">
                  {capability.description}
                </p>
              </div>

              {/* Skills */}
              <ul
                aria-label={`${capability.title} technologies`}
                className="flex flex-wrap content-start gap-2.5"
              >
                {capability.skills.map((skill) => (
                  <li
                    key={skill}
                    className="
                      rounded-full border border-white/[0.1]
                      bg-[#0D091C]/75 px-4 py-2
                      text-xs font-medium text-[#B8B2C7]
                      backdrop-blur-sm
                      transition duration-300
                      hover:-translate-y-0.5
                      hover:border-[#A876FF]/50
                      hover:bg-[#7C3CFF]/10
                      hover:text-[#F7F5FF]
                      sm:text-sm
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Supporting statement */}
        <div className="mt-12 flex flex-col gap-6 border-l border-[#A876FF]/40 pl-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pl-7">
          <p className="max-w-2xl text-sm leading-7 text-[#AAA5BD] sm:text-base">
            I choose technologies based on product requirements,
            maintainability, scalability and delivery outcomes—not trends
            alone.
          </p>

          <a
            href="#contact"
            className="
              group inline-flex shrink-0 items-center gap-3 self-start
              text-xs font-semibold uppercase tracking-[0.14em]
              text-[#A876FF]
              transition-colors duration-300
              hover:text-[#F7F5FF]
              focus-visible:outline-none
              focus-visible:text-[#72E7FF]
            "
          >
            Discuss an opportunity

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}