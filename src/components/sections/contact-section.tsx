"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import {
  FileText,
  ArrowUpRight,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<string>("Full-time Engineering Role");

  const intents = [
    "Full-time Engineering Role",
    "Contract / SaaS Build",
    "AI / Automation Workflow",
    "General Tech Inquiry",
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Opportunity Inquiry] ${selectedIntent} - Vigneshwar S`);
    return `mailto:${personal.email}?subject=${subject}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 py-24 sm:py-32 overflow-hidden flex flex-col justify-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-b from-violet-600/15 via-indigo-600/10 to-transparent blur-[160px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full max-w-4xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 lg:p-16 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-cyan-400 to-indigo-600" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>06 // READY FOR NEW CHALLENGES</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text-accent font-serif italic font-normal">valuable</span> together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m currently open to full-stack software developer opportunities (Full-time or High-Impact Contract). Reach out directly — I typically respond within 24 hours.
          </p>

          <div className="mb-8 text-left max-w-xl mx-auto">
            <label className="block text-xs font-mono text-slate-400 mb-3 text-center sm:text-left">
              Select inquiry context:
            </label>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {intents.map((intent) => (
                <button
                  key={intent}
                  type="button"
                  onClick={() => setSelectedIntent(intent)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedIntent === intent
                      ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-violet-400/40"
                      : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
                  }`}
                >
                  {intent}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={getMailtoLink()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Send Email Now</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-violet-400/40 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>Message on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-300 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:text-white transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </a>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/10">
            <span className="text-xs font-mono text-slate-400">{personal.email}</span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs font-medium text-violet-400 hover:text-violet-300 transition-colors"
              aria-label="Copy email"
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
      </div>
    </section>
  );
}
