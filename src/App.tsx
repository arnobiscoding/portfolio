import AboutHero from "@/components/AboutHero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Sadman Biazid Arnob";
  }, []);

  // Scroll to Contact handler
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const anchor = document.getElementById("contact-anchor");
    if (anchor) {
      requestAnimationFrame(() => {
        const rect = anchor.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offset = 100; // px
        const top = rect.top + scrollTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
      <AboutHero />
      <div id="skills-anchor" />
      <SkillsSection />
      {/* SVG Wave Divider */}
      <div aria-hidden="true" className="w-full overflow-hidden -mb-2">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path
            fill="currentColor"
            className="text-secondary"
            d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
      <div id="projects-anchor" />
      <ProjectsSection />
      <div className="flex flex-col items-center gap-2 animate-bounce mt-12">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll to contact"
          onClick={handleScrollToContact}
          className="rounded-full p-2 hover:bg-primary/10 transition-colors"
        >
          <span className="sr-only">Scroll Down to Contact</span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>
      <div id="contact-anchor" />
      <ContactSection />
    </div>
  );
}

export default App;
