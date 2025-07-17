import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Course Craft",
    link: "https://www.coursecraft.xyz",
    description:
      "UIU Class Scheduler App — intelligent scheduling, faculty reviews, gamification, bKash payments, analytics, and more.",
    tech: ["React.js", "Node.js", "Supabase", "Material UI", " Custom bKash payment integration"],
    live: true,
  },
  {
    title: "Exam Routine Extractor",
    link: "https://github.com/arnobiscoding/Exam-Routine-Extractor",
    description:
      "Extracts exam routines from Google Sheets HTML exports, outputs machine-readable lists, supports multiple departments.",
    tech: ["Python", "BeautifulSoup", "lxml"],
    live: false,
  },
  {
    title: "UCAM Results Notifier",
    link: "https://github.com/arnobiscoding/UCAM-Results-Notifier",
    description:
      "Notifies via Telegram when grades are published in UCAM, with automation and scheduling.",
    tech: ["Python", "Telegram Bot API", "Automation"],
    live: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="projects"
      ref={ref}
      aria-label="Project Portfolio"
      className={`min-h-[60vh] flex flex-col items-center justify-center py-16 transition-all duration-1000
        ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl" role="list" aria-label="Project List">
        {projects.map((project) => (
          <div
            key={project.title}
            role="listitem"
            className="bg-card border border-border rounded-xl shadow-md p-6 flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg transition-transform duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-secondary rounded px-2 py-0.5 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-2"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
              >
                {project.live ? "Visit Site" : "View on GitHub"}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
} 