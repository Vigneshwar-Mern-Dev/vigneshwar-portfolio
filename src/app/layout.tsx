import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
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
  keywords: ["Full-Stack Developer", "Next.js Developer", "MERN Developer", "SaaS Developer", "React Developer", "Node.js Developer", "Tamil Nadu Developer", "Vigneshwar S"],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Vigneshwar S",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070414",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
