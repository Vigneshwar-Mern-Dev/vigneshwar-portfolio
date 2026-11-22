"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import { GlowingLine } from "@/components/ui/glowing-line";
import {
  User,
  MapPin,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-10 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-300 text-xs font-mono font-medium mb-4">
            <User className="w-3.5 h-3.5" />
            <span>05 // PROFILE & PHILOSOPHY</span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance"
          >
            I think in <span className="gradient-text-violet">systems</span>, not just screens.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Building software with a relentless focus on business utility, clean architecture, and long-term maintainability.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 text-center flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-radial from-violet-600/20 via-transparent to-transparent opacity-50"
              />

              <div className="relative mb-6">
                <div className="h-28 w-28 rounded-3xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.5)] border border-violet-400/40">
                  <span className="text-4xl font-extrabold font-mono text-white tracking-tighter">
                    VS
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-black shadow-md">
                  DEV
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {personal.name}
              </h3>
              <p className="text-sm text-violet-400 font-medium mb-4">
                {personal.role}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personal.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 w-full pt-6 border-t border-white/10 text-left">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">Degree</div>
                  <div className="text-xs font-semibold text-white mt-0.5">B.Sc Information Tech</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">Focus</div>
                  <div className="text-xs font-semibold text-white mt-0.5">SaaS & Full-Stack MERN</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">Languages</div>
                  <div className="text-xs font-semibold text-white mt-0.5">English, Tamil</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono uppercase text-slate-500">Status</div>
                  <div className="text-xs font-semibold text-emerald-400 mt-0.5">Available Now</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-5 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-violet-600/20 border border-violet-400/20 flex items-center justify-center text-violet-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Direct Email</div>
                  <div className="text-xs font-medium text-white truncate">{personal.email}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-white transition-colors"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed border border-white/10">
              <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                I discovered my passion for software engineering when I realized that messy, manual business operations could be turned into clean, automated digital systems.
              </p>

              <p>
                My professional experience at <span className="text-violet-300 font-semibold">MAKT Solutions</span> proved that the greatest engineering challenge is never just writing code — it&apos;s thoroughly understanding what the business and end-user genuinely require before typing a single character.
              </p>

              <p>
                I thrive when owning end-to-end responsibilities: architecting the data schema, building high-throughput REST APIs, crafting pixel-perfect, accessible React interfaces, and ensuring the application holds up under real operational pressure.
              </p>

              <p>
                I prioritize code readability and maintainability. When other engineers review my pull requests, they find clear patterns, strict TypeScript types, and comprehensive architecture.
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                  <ArrowUpRight className="w-3 h-3 text-white/80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <GlowingLine className="mt-20" />
      </div>
    </section>
  );
}
