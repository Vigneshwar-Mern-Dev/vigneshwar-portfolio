import { capabilities } from "@/data/skills";
import { GlowingLine } from "@/components/ui/glowing-line";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function CapabilitiesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "01": <Code2 className="w-5 h-5 text-violet-400" />,
    "02": <Server className="w-5 h-5 text-cyan-400" />,
    "03": <Database className="w-5 h-5 text-emerald-400" />,
    "04": <Terminal className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24 py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-300 text-xs font-mono font-medium mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL MATRIX</span>
          </div>

          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance"
          >
            Full-stack depth, organised around{" "}
            <span className="gradient-text-violet">outcomes</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I don&apos;t just write syntax; I structure resilient systems from user interaction down to persistent storage and background workers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability) => {
            const icon = iconMap[capability.number] || <Layers className="w-5 h-5 text-violet-400" />;

            return (
              <div
                key={capability.number}
                className="glass-panel p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                      CAPABILITY // {capability.number}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {capability.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {capability.description}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-2.5">
                    Core Toolkit
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {capability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.03] border border-white/5 hover:border-violet-500/40 hover:text-white hover:bg-violet-950/30 transition-all duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass-panel p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 border border-violet-500/30 text-white">
              <ShieldCheck className="w-6 h-6 text-violet-300" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-semibold text-white">
                Philosophy: Engineering for Long-Term Maintainability
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                I select frameworks and database models based on business requirements, team scalability, and zero-downtime reliability.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-lg"
          >
            <span>Discuss your stack</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <GlowingLine className="mt-20" />
      </div>
    </section>
  );
}
