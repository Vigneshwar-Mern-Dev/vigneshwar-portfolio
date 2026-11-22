"use client";

import { useState } from "react";
import { personal, socialLinks } from "@/data/personal";
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Layers,
  Server,
  Cpu,
  Workflow,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"architecture" | "stack" | "metrics">("architecture");

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-[100svh] pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden flex flex-col justify-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-violet-600/20 via-indigo-600/10 to-transparent blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 blur-[130px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>Open to Full-time & Contract Roles</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              <span className="text-violet-400">00 //</span>
              <span>{personal.name}</span>
              <span className="h-px w-6 bg-slate-700" />
              <span className="text-slate-300">{personal.role}</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance mb-6"
            >
              Engineering{" "}
              <span className="gradient-text-violet">scalable SaaS</span>,{" "}
              <span className="gradient-text-accent font-serif italic font-normal">
                AI automation
              </span>
              , and resilient web systems.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Full-Stack Developer transforming complex operational workflows into fast, maintainable applications using{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">Node.js</span>, and{" "}
              <span className="text-white font-medium">TypeScript</span>.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-violet-400/40 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Get in touch</span>
                <span className="text-violet-400">→</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  5<span className="text-violet-400">+</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Production Apps</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  1<span className="text-cyan-400">yr</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Agency Tenure</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  100<span className="text-emerald-400">%</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-medium">Full-Stack Scope</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-cyan-500/10 to-indigo-600/20 blur-2xl rounded-3xl -z-10" />

            <div className="glass-panel overflow-hidden border border-white/10">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">vigneshwar-core.sys</span>
                </div>

                <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/5">
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
                      activeTab === "architecture"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab("stack")}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
                      activeTab === "stack"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Tech Stack
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-all ${
                      activeTab === "metrics"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Reliability
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "architecture" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-white/5">
                      <span className="flex items-center gap-1.5 text-violet-300">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>System Pipeline Topology</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold tracking-wider">● LIVE SYNC</span>
                    </div>

                    <div className="p-3.5 rounded-xl border border-violet-500/20 bg-violet-950/20 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-600/30 border border-violet-400/30 text-violet-300">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Client & Presentation Tier</div>
                          <div className="text-[11px] text-slate-400">Next.js 16 App Router · React 19 · Tailwind v4</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">SSR / Edge</span>
                    </div>

                    <div className="flex justify-center -my-2">
                      <div className="h-4 w-px bg-gradient-to-b from-violet-500 to-cyan-500" />
                    </div>

                    <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-600/30 border border-cyan-400/30 text-cyan-300">
                          <Server className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Application & API Gateway</div>
                          <div className="text-[11px] text-slate-400">Node.js · Express · Webhooks · WhatsApp CRM & AI</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">REST / Async</span>
                    </div>

                    <div className="flex justify-center -my-2">
                      <div className="h-4 w-px bg-gradient-to-b from-cyan-500 to-emerald-500" />
                    </div>

                    <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-950/20 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600/30 border border-emerald-400/30 text-emerald-300">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Persistent Storage & Data Models</div>
                          <div className="text-[11px] text-slate-400">MongoDB Aggregations · MySQL · Prisma · Firebase</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">Distributed</span>
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-400">Core technologies used in production systems:</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { name: "Next.js 16", role: "SSR & Full-Stack", color: "text-white bg-white/10" },
                        { name: "React 19", role: "Concurrent UI", color: "text-cyan-300 bg-cyan-950/40" },
                        { name: "TypeScript", role: "End-to-End Safety", color: "text-blue-300 bg-blue-950/40" },
                        { name: "Node.js", role: "High-Throughput Runtime", color: "text-emerald-300 bg-emerald-950/40" },
                        { name: "MongoDB", role: "Document Databases", color: "text-green-300 bg-green-950/40" },
                        { name: "Tailwind v4", role: "Modern Responsive CSS", color: "text-sky-300 bg-sky-950/40" },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-violet-500/30 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{tech.name}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${tech.color}`}>{tech.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Production Uptime Consistency</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400">99.9%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span>API Response Target</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-400">&lt; 120ms</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-violet-400" />
                        <span>Security & Access Control</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-violet-400">RBAC + JWT</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span>Full Responsive & Mobile Fidelity</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-cyan-400">100% Score</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-5 py-3 border-t border-white/5 bg-black/20 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  <span>Featured: WhatsApp CRM & AI Suite</span>
                </span>
                <a
                  href="#project-01"
                  className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Quick view</span>
                  <ArrowDown className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -left-4 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-[#0c0822]/90 backdrop-blur-xl text-xs text-slate-200 shadow-xl animate-float-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              <span>Next.js 16 + React 19</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#0c0822]/90 backdrop-blur-xl text-xs text-slate-200 shadow-xl animate-float-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>Full-Stack MERN Depth</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-6">
            <span className="text-slate-500 uppercase tracking-widest font-mono text-[10px]">Connect:</span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-medium"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            ))}
          </div>

          <a
            href="#work"
            className="flex items-center gap-2 text-slate-400 hover:text-violet-300 transition-colors font-medium group"
          >
            <span>Scroll to see projects</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
