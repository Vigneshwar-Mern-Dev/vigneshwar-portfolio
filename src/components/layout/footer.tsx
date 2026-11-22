import { personal, socialLinks } from "@/data/personal";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04020a] py-12 relative z-10 text-xs text-slate-400">
      <div className="page-shell flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-mono font-bold text-white text-sm">Vigneshwar S</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="text-slate-500 font-mono text-[11px]">{personal.location}</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <a
          href="#home"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
        </a>
      </div>
    </footer>
  );
}
