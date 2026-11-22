import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Vigneshwar S — Full-Stack Developer";
const description =
  "Portfolio of Vigneshwar S, a full-stack developer building scalable SaaS platforms, web applications and automation systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vigneshwar.dev"),
  title,
  description,
  applicationName: "Vigneshwar S Portfolio",
  authors: [{ name: "Vigneshwar S" }],
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "MERN Developer",
    "SaaS Developer",
    "React Developer",
    "Node.js Developer",
    "Tamil Nadu Developer",
    "Vigneshwar S",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Vigneshwar S",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vigneshwar S — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme');
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#8B5CF6]/30 selection:text-white">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
