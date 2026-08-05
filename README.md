# Vigneshwar S — Portfolio

> Personal portfolio of **Vigneshwar S**, a Full-Stack Developer building scalable SaaS platforms, CRM systems, automation workflows and AI-assisted applications.

**Live:** [vigneshwar.dev](https://vigneshwar.dev) &nbsp;|&nbsp; **GitHub:** [@Vigneshwar-Mern-Dev](https://github.com/Vigneshwar-Mern-Dev)

---

## ✨ Features

- **Interactive 3D Tech Orb** — WebGL constellation built with Three.js & React Three Fiber, responds to cursor movement
- **Comet cursor trail** — 12-dot animated trail that follows the mouse
- **Cinematic intro** — GSAP-animated developer profile reveal on first load
- **Project showcase** — Full-stack project cards with live demo & GitHub links
- **Skills / Capabilities section** — Animated tech stack display
- **Experience timeline** — Professional history layout
- **Contact section** — Direct reach-out form
- **Fully responsive** — Mobile-first, works across all screen sizes
- **Accessible** — Semantic HTML, skip-link, ARIA labels, `motion-reduce` support

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D Graphics | Three.js + React Three Fiber + Drei |
| Animations | GSAP |
| Smooth Scroll | Lenis |
| Fonts | Geist, Instrument Serif (Google Fonts) |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm / pnpm / yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Vigneshwar-Mern-Dev/vigneshwar-portfolio.git
cd vigneshwar-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, cursor)
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── canvas/
│   │   └── tech-orb.tsx    # Interactive 3D orb (Three.js)
│   ├── intro/
│   │   └── cinematic-intro.tsx
│   ├── layout/
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── projects-section.tsx
│   │   ├── capabilities-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── about-section.tsx
│   │   └── contact-section.tsx
│   └── ui/
│       ├── cursor-glow.tsx  # Comet cursor trail
│       └── icons.tsx
├── data/
│   ├── personal.ts          # Name, bio, links, availability
│   └── projects.ts          # Project list
└── types/
    └── project.ts
```

---

## 🔧 Customisation

All personal data lives in `src/data/`:

**`personal.ts`** — Update your name, bio, availability status, resume URL and social links.

**`projects.ts`** — Add / edit projects. Each project accepts:

```ts
{
  id: string
  slug: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  image: string          // Place images in /public/projects/
  liveUrl: string
  githubUrl: string
  featured: boolean
  order: number
}
```

---

## ☁️ Deployment — **Vercel (Recommended)**

Vercel is built by the Next.js team. Zero-config deployment, free tier, global CDN.

### Steps

1. Push your code to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com) → **Sign up / Log in** with GitHub
3. Click **"Add New Project"** → Import `vigneshwar-portfolio`
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Done — live in ~60 seconds 🚀

### Custom Domain

In Vercel dashboard → **Project → Settings → Domains** → add your domain (e.g. `vigneshwar.dev`).

> **Why Vercel?**
> - Native Next.js support (no config needed)
> - Automatic preview deployments on every push
> - Free SSL certificate
> - Global edge network
> - Free hobby plan handles personal portfolios easily

---

## 📸 Projects

| # | Project | Stack |
|---|---|---|
| 01 | WhatsApp CRM & AI Automation Suite | Next.js, Node.js, MongoDB, WhatsApp API |
| 02 | AI Customer Support System | React, Node.js, Express, MongoDB |
| 03 | CASEIOS E-Commerce Platform | Next.js, Prisma, TypeScript, Razorpay |
| 04 | MAKT Official Website | React 19, Vite, Tailwind CSS v4, Framer Motion |
| 05 | ATM Franchise Platform | Next.js, TypeScript, Tailwind CSS |

---

## 📄 License

MIT © [Vigneshwar S](https://github.com/Vigneshwar-Mern-Dev)
