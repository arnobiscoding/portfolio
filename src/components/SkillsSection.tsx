import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMui,
  SiShadcnui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Scroll to Projects handler
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const anchor = document.getElementById("projects-anchor");
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offset = 100; // px
      const top = rect.top + scrollTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      aria-label="Skills and Technologies"
      className={`min-h-[60vh] flex flex-col items-center justify-center py-16 transition-all duration-1000
        ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-2">
        <div>
          <h3 className="text-xl font-semibold mb-2">Languages</h3>
          <ul className="flex flex-wrap gap-2 text-muted-foreground" role="list" aria-label="Programming Languages">
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiC className="text-blue-700" />C</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiCplusplus className="text-blue-700" />C++</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><FaJava className="text-orange-600" />Java</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiPython className="text-blue-500" />Python</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiJavascript className="text-yellow-400" />JavaScript</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="flex flex-wrap gap-2 text-muted-foreground" role="list" aria-label="Frontend Technologies">
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiReact className="text-cyan-500" />React.js</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiHtml5 className="text-orange-500" />HTML</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiCss3 className="text-blue-500" />CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <ul className="flex flex-wrap gap-2 text-muted-foreground" role="list" aria-label="Backend Technologies">
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiNodedotjs className="text-green-600" />Node.js</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiExpress className="text-gray-700" />Express.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Databases</h3>
          <ul className="flex flex-wrap gap-2 text-muted-foreground" role="list" aria-label="Databases">
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiMysql className="text-blue-600" />MySQL</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiPostgresql className="text-blue-800" />PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">UI Libraries</h3>
          <ul className="flex flex-wrap gap-2 text-muted-foreground" role="list" aria-label="UI Libraries">
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiMui className="text-blue-400" />Material UI</li>
            <li className="bg-secondary rounded px-3 py-1 flex items-center gap-1"><SiShadcnui className="text-black dark:text-white" />shadcn/ui</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Scripting & Automation</h3>
          <ul className="flex flex-wrap gap-2 text-muted-foreground" role="list" aria-label="Scripting and Automation">
            <li className="bg-secondary rounded px-3 py-1">Web Automation</li>
            <li className="bg-secondary rounded px-3 py-1">Custom bKash Payment Integrations</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 animate-bounce mt-12">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll to projects section"
          onClick={handleScrollToProjects}
          className="rounded-full p-2 hover:bg-primary/10 transition-colors"
        >
          <span className="sr-only">Scroll Down to Projects</span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </div>
    </section>
  );
} 