export const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that stay clear, fast and resilient across devices.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
      "State management",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Secure application logic and dependable service integrations.",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Role-based access",
      "Webhooks",
    ],
  },
  {
    number: "03",
    title: "Data",
    description: "Practical models that make complex workflows manageable.",
    skills: ["MongoDB", "MySQL", "Firebase", "Database modelling"],
  },
  {
    number: "04",
    title: "Engineering",
    description: "The practices that turn a build into a production-ready product.",
    skills: [
      "Git",
      "GitHub",
      "Deployment",
      "Debugging",
      "Performance optimisation",
      "API integration",
    ],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyse the user, business problem and technical requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design the application structure, data model and integration boundaries.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop reusable, maintainable and responsive functionality.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Test edge cases, errors, performance and responsive behaviour.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Release, monitor and improve the product based on real feedback.",
  },
] as const;
