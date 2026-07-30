import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/skills";
import { GlowingLine } from "@/components/ui/glowing-line";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#070414] py-14 text-[#F7F5FF] sm:py-16 lg:py-20"
    >
      {/* Grid: visible on the right and fading toward the centre */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-0 top-0 h-full w-[78%] opacity-70
          [background-image:linear-gradient(rgba(168,118,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.055)_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.35)_32%,black_65%,black_100%)]
        "
      />

      {/* Right-side violet glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[5%] h-[720px] w-[720px] rounded-full bg-[#7C3CFF]/12 blur-[150px]"
      />

      {/* Small cyan highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[16%] top-[30%] h-64 w-64 rounded-full bg-[#72E7FF]/5 blur-[120px]"
      />

      {/* Fade the grid at the top and bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#070414_0%,transparent_18%,transparent_80%,#070414_100%)]"
      />

      {/* Strengthen the clean left side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#070414_0%,#070414_23%,transparent_65%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div id="process-heading" className="pb-10 sm:pb-12 lg:pb-16">
          <SectionHeading
            index="03"
            eyebrow="Development process"
            title="A clear path from ambiguity to production."
            description="A structured workflow that keeps product goals, engineering quality and delivery aligned from the first decision to release."
          />
          <GlowingLine className="mt-8" />
        </div>

        {/* Process steps */}
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.09] sm:mt-12 md:grid-cols-2 lg:mt-14 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="
                group relative min-h-[300px] bg-[#0B0719]/90 p-7
                backdrop-blur-sm transition-colors duration-300
                hover:bg-[#120A29]/95
                sm:p-8 lg:min-h-[340px]
              "
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-x-0 top-0 h-px
                  origin-left scale-x-0 bg-gradient-to-r
                  from-[#7C3CFF] via-[#A876FF] to-transparent
                  transition-transform duration-500
                  group-hover:scale-x-100
                  motion-reduce:transition-none
                "
              />

              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-[#A876FF]">
                    {step.number}
                  </span>

                  <span className="text-[0.62rem] uppercase tracking-[0.16em] text-[#625B73]">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(processSteps.length).padStart(2, "0")}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="
                    mt-8 h-10 w-10 rounded-full border
                    border-[#A876FF]/20 bg-[#7C3CFF]/5
                    transition duration-300
                    group-hover:border-[#A876FF]/55
                    group-hover:bg-[#7C3CFF]/15
                    group-hover:shadow-[0_0_30px_rgba(124,60,255,0.18)]
                    motion-reduce:transition-none
                  "
                >
                  <span className="grid h-full w-full place-items-center text-xs text-[#A876FF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em] text-[#F7F5FF] lg:text-[1.7rem]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#AAA5BD]">
                  {step.description}
                </p>

                <div className="mt-auto pt-10">
                  <span
                    aria-hidden="true"
                    className="
                      block h-px w-8 bg-[#A876FF]/25
                      transition-all duration-300
                      group-hover:w-16 group-hover:bg-[#A876FF]/70
                      motion-reduce:transition-none
                    "
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}