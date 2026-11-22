import { workExperience, education, certifications } from "@/data/experience";
import { GlowingLine } from "@/components/ui/glowing-line";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  Award,
} from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full"
      />

      <div className="page-shell relative z-10 w-full">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-300 text-xs font-mono font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // CAREER & EDUCATION</span>
          </div>

          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance"
          >
            Engineering track record &{" "}
            <span className="gradient-text-violet">academic foundations</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hands-on agency engineering experience building and deploying production SaaS, CRM, and cloud platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              <Building2 className="w-4 h-4 text-violet-400" />
              <span>Professional Employment & Internships</span>
            </div>

            {workExperience.map((job) => (
              <div
                key={job.id}
                className="glass-panel p-6 sm:p-8 border border-white/10 hover:border-violet-500/30 transition-all duration-300 relative group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold text-violet-400 mt-1">
                      {job.company}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="px-3 py-1 rounded-full text-xs font-medium font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{job.period} · {job.duration}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{job.location}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {job.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                    Technologies in production
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-300 bg-white/[0.03] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Academic Education</span>
            </div>

            {education.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel p-6 sm:p-7 border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-bold text-xs font-mono">
                    {edu.degree.includes("Bachelor") ? "B.Sc" : "HSC"}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-mono text-slate-400 block">{edu.period}</span>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">{edu.grade}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-cyan-300 mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{edu.location}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-white/10">
                  {edu.description}
                </p>
              </div>
            ))}

            <div className="glass-panel p-6 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Specialized Training & Certifications</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-sm font-semibold text-white">{cert.title}</div>
                    <div className="text-xs text-violet-400 font-medium mt-0.5">{cert.institution} · {cert.location}</div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">{cert.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 border border-emerald-500/20 bg-emerald-950/20">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                  Open For Hire
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Available for full-time software engineering roles and high-impact contractual projects across remote and hybrid environments.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Initiate conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <GlowingLine className="mt-20" />
      </div>
    </section>
  );
}
