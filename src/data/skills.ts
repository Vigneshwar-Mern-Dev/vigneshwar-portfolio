export const capabilities = [
  {
    number: "01",
    title: "Frontend & UI",
    description: "Responsive, dynamic interfaces built with modern React ecosystems and component architectures.",
    skills: [
      "React.js",
      "Next.js",
      "React 19",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Three.js",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Scalable server-side logic, high-throughput REST endpoints, and automated webhook listeners.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Webhook Integration",
      "WhatsApp Business API",
      "AI APIs",
      "Razorpay",
      "Role-Based Access (RBAC)",
    ],
  },
  {
    number: "03",
    title: "Database & ORM",
    description: "Document and relational data modeling with high-performance querying and integrity.",
    skills: [
      "MongoDB",
      "Mongoose",
      "Prisma",
      "Database Schema Design",
      "Aggregation Pipelines",
    ],
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    description: "Production infrastructure, container management, and continuous delivery to the cloud.",
    skills: [
      "AWS (EC2 / S3)",
      "Vercel",
      "Cloudflare",
      "CloudPanel",
      "cPanel",
      "Render",
      "Git & GitHub",
      "Postman",
      "Figma",
      "Slack / Notion",
    ],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyse the user, business problem, and technical requirements before writing code.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design the application structure, data model, and integration boundaries.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop reusable, maintainable, and type-safe frontend and backend functionality.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Test edge cases, performance, security protocols, and responsive fidelity.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Ship to AWS, Cloudflare, or Vercel, and monitor production reliability.",
  },
] as const;
