import { SectionHeading } from "@/components/ui/section-heading";
import { workExperience, education } from "@/data/experience";
import { GlowingLine } from "@/components/ui/glowing-line";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#070414] py-14 text-[#F7F5FF] sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-[78%] opacity-60 [background-image:linear-gradient(rgba(168,118,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,118,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_left,transparent_0%,rgba(0,0,0,0.3)_30%,black_68%,black_100%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-12%] top-[8%] h-[600px] w-[600px] rounded-full bg-[#7C3CFF]/10 blur-[150px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#070414_0%,transparent_18%,transparent_82%,#070414_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div id="experience-heading" className="pb-10 sm:pb-12 lg:pb-16">
          <SectionHeading
            index="04"
            eyebrow="Background"
            title="Experience and education."
            description="Where I have worked, what I studied, and what shaped the way I build."
          />
          <GlowingLine className="mt-8" />
        </div>

        <div className="mt-10 grid gap-16 sm:mt-12 lg:mt-14 lg:grid-cols-[1fr_380px] lg:gap-20 xl:gap-28">
          <div>
            <p className="mb-10 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#A876FF]">Work Experience</p>

            {workExperience.map((job) => (
              <article key={job.id} className="group relative border-l-2 border-[#A876FF]/20 pl-7 pb-2 transition-colors duration-300 hover:border-[#A876FF]/70">
                <span aria-hidden="true" className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#A876FF]/40 ring-4 ring-[#070414] transition-colors duration-300 group-hover:bg-[#A876FF]" />

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#F7F5FF] sm:text-2xl">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-[#A876FF]">{job.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="rounded-full border border-[#A876FF]/20 bg-[#7C3CFF]/[0.08] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#A876FF]">{job.type}</span>
                    <span className="text-[0.65rem] uppercase tracking-[0.12em] text-[#777088]">{job.duration} - {job.period}</span>
                  </div>
                </div>

                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[#555068]">{job.location}</p>

                <ul className="mt-5 space-y-3">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-6 text-[#AAA5BD]">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#A876FF]/50" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul aria-label={job.company + " technologies"} className="mt-6 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <li key={tech} className="rounded-full border border-white/[0.09] bg-[#0D091C]/75 px-3 py-1.5 text-[0.65rem] font-medium tracking-[0.04em] text-[#B8B2C7]">{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div>
            <p className="mb-10 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#72E7FF]">Education</p>

            {education.map((edu) => (
              <article key={edu.id} className="rounded-2xl border border-white/[0.08] bg-[#0D0921]/60 p-7 backdrop-blur-sm">
                <div aria-hidden="true" className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#72E7FF]/20 bg-[#72E7FF]/5 text-[0.6rem] font-bold tracking-widest text-[#72E7FF]">BSc</div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#F7F5FF] leading-snug">{edu.degree}</h3>
                <p className="mt-2 text-sm font-medium text-[#72E7FF]">{edu.institution}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-[#555068]">{edu.location}</p>
                <div className="my-5 h-px bg-white/[0.07]" />
                <p className="text-xs leading-6 text-[#8F88A5]">{edu.description}</p>
                <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#444057]">{edu.period}</p>
              </article>
            ))}

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#72E7FF]/15 bg-[#72E7FF]/5 px-5 py-4">
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#72E7FF] shadow-[0_0_12px_rgba(114,231,255,0.9)]" />
              <p className="text-xs font-medium text-[#AAA5BD]">Currently open to full-time and contract opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}