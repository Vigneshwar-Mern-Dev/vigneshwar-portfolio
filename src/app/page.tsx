import { CinematicIntro } from "@/components/intro/cinematic-intro";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Hero } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <CinematicIntro />
      <Navigation />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
