export const personal = {
  name: "Vigneshwar S",
  role: "Full Stack Developer",
  tagline: "MERN · Next.js · TypeScript · Cloud Deployments",
  location: "Namakkal, Tamil Nadu",
  phone: "+91 9025808894",
  email: "vigneshwars.dev@gmail.com",
  github: "https://github.com/Vigneshwar-Mern-Dev",
  linkedin: "https://www.linkedin.com/in/vigneshwar-s-371b90373/",
  resumeUrl: "/resume.pdf",
  availability: "Open to work · Full-time & Contract",
  statement:
    "Full stack developer with hands-on production experience across SaaS, CRM automation, e-commerce, and internal business tools. Builds end-to-end with the MERN stack, Next.js, and TypeScript, and ships to production using AWS, Cloudflare, and Vercel.",
} as const;

export const socialLinks = [
  { label: "GitHub", href: personal.github },
  { label: "LinkedIn", href: personal.linkedin },
  { label: "Email", href: `mailto:${personal.email}` },
] as const;
