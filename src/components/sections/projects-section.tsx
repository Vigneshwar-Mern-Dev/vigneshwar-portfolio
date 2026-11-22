"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/project/project-row";
import { GlowingLine } from "@/components/ui/glowing-line";
import { Sparkles, Filter } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "SaaS & CRM", "AI & Support", "E-Commerce", "Web Platforms"];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "SaaS & CRM") return project.category.includes("CRM") || project.category.includes("SaaS");
    if (selectedCategory === "AI & Support") return project.category.includes("AI");
    if (selectedCategory === "E-Commerce") return project.category.includes("Commerce");
    if (selectedCategory === "Web Platforms") return project.category.includes("Business") || project.category.includes("Corporate");
    return true;
  });

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-300 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // FEATURED WORK</span>
          </div>

          <h2
            id="work-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance"
          >
            Production platforms built for{" "}
            <span className="gradient-text-violet">real business scale</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Full-stack applications featuring automated communication pipelines, AI-assisted operations, robust e-commerce architectures, and conversion-focused systems.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/10">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-violet-600 text-white shadow-[0_0_16px_rgba(139,92,246,0.5)] border border-violet-400/40"
                  : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        <GlowingLine className="mt-20" />
      </div>
    </section>
  );
}
