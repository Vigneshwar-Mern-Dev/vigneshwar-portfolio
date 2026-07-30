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
    image: "/projects/project-01.svg",
    liveUrl: "#",
    githubUrl: "#",
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
    image: "/projects/project-02.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 2,
  },
  {
    id: "project-03",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Commerce · Full-Stack",
    shortDescription:
      "A complete commerce workflow designed around reliable product, checkout and payment operations.",
    fullDescription:
      "A complete commerce application with product management, authentication, checkout and payment workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Payment API"],
    image: "/projects/project-03.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 3,
  },
  {
    id: "project-04",
    slug: "smart-expense-tracker",
    title: "Smart Expense Tracker",
    category: "Fintech · Data Visualisation",
    shortDescription:
      "Clear transaction categorisation and spending insights for better day-to-day decisions.",
    fullDescription:
      "A financial tracking application for recording expenses, categorising transactions and visualising spending patterns.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/project-04.svg",
    liveUrl: "#",
    githubUrl: "#",
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
      "A lead-generation and franchise operations website designed for the ATM business.",
    technologies: ["React", "TypeScript", "Node.js", "Responsive UI"],
    image: "/projects/project-05.svg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 5,
  },
];
