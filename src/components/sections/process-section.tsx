import { processSteps } from "@/data/skills";
import { GlowingLine } from "@/components/ui/glowing-line";
import {
  GitCommit,
  Search,
  LayoutTemplate,
  Cpu,
  CheckCheck,
  Rocket,
  Sparkles,
} from "lucide-react";

export function ProcessSection() {
  const stepIcons: Record<string, React.ReactNode> = {
    "01": <Search className="w-5 h-5 text-violet-400" />,
    "02": <LayoutTemplate className="w-5 h-5 text-cyan-400" />,
    "03": <Cpu className="w-5 h-5 text-emerald-400" />,
    "04": <CheckCheck className="w-5 h-5 text-amber-400" />,
    "05": <Rocket className="w-5 h-5 text-violet-300" />,
  };

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative scroll-mt-24 py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-300 text-xs font-mono font-medium mb-4">
            <GitCommit className="w-3.5 h-3.5" />
            <span>03 // SYSTEM METHODOLOGY</span>
          </div>

          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance"
          >
            A clear path from idea to{" "}
            <span className="gradient-text-violet">production release</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminating guesswork with a structured engineering lifecycle that delivers reliable software on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {processSteps.map((step, index) => {
            const icon = stepIcons[step.number] || <Sparkles className="w-5 h-5 text-violet-400" />;

            return (
              <div
                key={step.number}
                className="glass-panel p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group relative border border-white/10 hover:border-violet-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-violet-500/30 transition-transform">
                      {icon}
                    </span>
                    <span className="font-mono text-xs font-bold text-violet-400/80 group-hover:text-violet-300 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Phase {index + 1} of 5</span>
                  <span className="group-hover:translate-x-1 transition-transform text-violet-400">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <GlowingLine className="mt-20" />
      </div>
    </section>
  );
}
