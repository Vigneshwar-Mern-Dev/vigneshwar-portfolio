export const personal = {
  name: "Vigneshwar S",
  role: "Full-Stack Developer",
  location: "Erode, Tamil Nadu",
  email: "Vigneshwars.dev@gmail.com",
  github: "https://github.com/Vigneshwar-Mern-Dev",
  linkedin: "https://www.linkedin.com/in/vigneshwar-s-371b90373/",
  resumeUrl: "/resume.pdf",
  availability: "Open to work · Full-time & Contract",
  statement:
    "I build scalable SaaS platforms, CRM systems and AI-powered applications that solve real business problems.",
} as const;

export const socialLinks = [
  { label: "GitHub", href: personal.github },
  { label: "LinkedIn", href: personal.linkedin },
  { label: "Email", href: `mailto:${personal.email}` },
] as const;
