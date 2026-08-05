import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-01",
    slug: "whatsapp-crm-ai-automation",
    title: "WhatsApp CRM & AI Automation Suite",
    category: "SaaS · CRM · Automation",
    shortDescription:
      "Lead management, campaign workflows and AI-assisted support in one operational workspace.",
    fullDescription:
      "A customer engagement platform combining lead management, automated messaging, campaign workflows and AI-assisted support.",
    technologies: ["Next.js", "Node.js", "MongoDB", "TypeScript", "WhatsApp API"],
    image: "/projects/project-01.png",
    liveUrl: "https://crm.planie.com",
    githubUrl: "https://github.com/Vigneshwar-Mern-Dev/crm-automation-platform",
    featured: true,
    order: 1,
  },
  {
    id: "project-02",
    slug: "ai-customer-support-system",
    title: "AI Customer Support System",
    category: "AI · Support Operations",
    shortDescription:
      "Structured chat workflows, ticket management and human-in-the-loop administration.",
    fullDescription:
      "An AI-assisted support platform with chat workflows, ticket management and administrative controls.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    image: "/projects/project-02.png",
    liveUrl: "https://personal-ai-assist.duckdns.org",
    githubUrl: "https://github.com/Vigneshwar-Mern-Dev/personal-ai-assist",
    featured: true,
    order: 2,
  },
  {
    id: "project-03",
    slug: "caseios-ecommerce-platform",
    title: "CASEIOS E-Commerce Platform",
    category: "Commerce · Full-Stack",
    shortDescription:
      "A complete commerce workflow designed around reliable product, checkout and payment operations.",
    fullDescription:
      "Modern full-stack ecommerce platform with secure payments, product management, authentication, and responsive storefront experience.",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS", "Razorpay"],
    image: "/projects/project-03.png",
    liveUrl: "https://casios-ecommerce.vercel.app/",
    githubUrl: "https://github.com/Vigneshwar-Mern-Dev/caseios-ecommerce-platform",
    featured: true,
    order: 3,
  },
  {
    id: "project-04",
    slug: "makt-official-website",
    title: "MAKT Official Website",
    category: "Business · Corporate Website",
    shortDescription:
      "A modern corporate platform with dynamic animations, interactive 3D elements, and a smooth user experience.",
    fullDescription:
      "Official web platform for MAKT India — crafted with dynamic animations, modern UI components, interactive 3D elements, and smooth user experience.",
    technologies: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Three.js"],
    image: "/projects/project-04.png",
    liveUrl: "https://makt.in/",
    githubUrl: "https://github.com/Vigneshwar-Mern-Dev/makt-offical-page",
    featured: true,
    order: 4,
  },
  {
    id: "project-05",
    slug: "atm-franchise-platform",
    title: "ATM Franchise Platform",
    category: "Business Platform · Lead Generation",
    shortDescription:
      "A responsive lead-generation experience built around clarity, qualification and conversion.",
    fullDescription:
      "Lead generation and franchise management platform built for ATM business operations, customer inquiries, and franchise onboarding workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    image: "/projects/project-05.png",
    liveUrl: "https://atmfranchise.in/",
    githubUrl: "https://github.com/Vigneshwar-Mern-Dev/atm-franchise-website",
    featured: true,
    order: 5,
  },
];
