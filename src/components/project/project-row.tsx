import Image from "next/image";
import type { Project } from "@/types/project";
import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 === 1;

  const highlightsMap: Record<string, string[]> = {
    "project-01": [
      "End-to-end WhatsApp messaging automation & webhook listeners",
      "Multi-tenant lead management pipeline with role-based access",
      "AI-driven customer inquiry routing and fast agent handoff",
    ],
    "project-02": [
      "Real-time AI conversational workflows and ticket tracking",
      "Administrative dashboard for monitoring conversation quality",
      "Robust Node.js & Express REST API with MongoDB persistence",
    ],
    "project-03": [
      "Production Next.js storefront with Razorpay checkout integration",
      "Prisma ORM schema with relational product and order management",
      "Fully responsive mobile-first cart and secure payment flow",
    ],
    "project-04": [
      "Official corporate website for MAKT India with high-conversion UI",
      "Optimized animations with smooth scroll and clean asset delivery",
      "Interactive component design powered by modern React 19",
    ],
    "project-05": [
      "Targeted lead qualification and franchise onboarding funnel",
      "Clean responsive typography with conversion rate optimization",
      "Type-safe form workflows and lead capture integrations",
    ],
  };

  const highlights = highlightsMap[project.id] || [
    "Full-stack architecture with production reliability",
    "Responsive design across mobile, tablet, and desktop",
    "Clean, maintainable TypeScript and component structure",
  ];

  return (
    <article
      id={project.id}
      className="scroll-mt-28 glass-panel p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
    >
      <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? "lg:direction-rtl" : ""}`}>
        <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#090618] shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-3 py-0.5 rounded-md truncate max-w-[200px] sm:max-w-[260px]">
                {project.liveUrl.replace("https://", "")}
              </div>
              <div className="text-[10px] font-mono text-violet-400 font-bold">
                0{index + 1}
              </div>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${project.title}`}
              className="block relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06040e] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-semibold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20">
                <span>View Live System</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        <div className={`lg:col-span-5 flex flex-col items-start ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-semibold px-2.5 py-0.5 rounded-md bg-violet-950/40 border border-violet-500/20">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-950/30 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
            {project.fullDescription}
          </p>

          <div className="space-y-2 mb-6 w-full">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/10 hover:border-violet-400/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 transition-all"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:text-white hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
