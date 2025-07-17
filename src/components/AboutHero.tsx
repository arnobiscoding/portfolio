import { Button } from "@/components/ui/button";

export default function AboutHero() {
  // Smooth scroll handler with offset using window.scrollTo
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const anchor = document.getElementById("skills-anchor");
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offset = 100; // px
      const top = rect.top + scrollTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header role="banner" aria-label="About Sadman Biazid Arnob" className="min-h-screen flex flex-col items-center justify-center text-center gap-6 animate-in fade-in duration-1000 px-4">
      <img
        src="/arnob.jpg"
        alt="Sadman Biazid Arnob portrait"
        className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-background mb-4"
        loading="lazy"
      />
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
        Sadman Biazid Arnob
      </h1>
      
      <p className="max-w-xl text-muted-foreground mb-4">
        Welcome to my website! I'm passionate about solving real world problems with technology. Scroll down to see my skills, projects, and get in touch.
      </p>
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll to skills section"
          onClick={handleScroll}
          className="rounded-full p-2 hover:bg-primary/10 transition-colors"
        >
          <span className="sr-only">Scroll Down</span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>
    </header>
  );
} 