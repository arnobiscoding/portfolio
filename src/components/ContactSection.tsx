import { useEffect, useRef, useState } from "react";

const contacts = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/sadmanbarnob",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
    aria: "Open Facebook profile in a new tab"
  },
  {
    label: "GitHub",
    href: "https://github.com/arnobiscoding",
    icon: (
      <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
    ),
    aria: "Open GitHub profile in a new tab"
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801540046875",
    icon: (
      <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.455-4.437 9.89-9.893 9.89m8.413-18.304A11.815 11.815 0 0 0 12.05.001C5.495 0 .002 5.491 0 12.244c0 2.159.566 4.268 1.637 6.13L.057 23.925a1 1 0 0 0 1.225 1.225l5.553-1.584a11.93 11.93 0 0 0 5.184 1.236h.005c6.555 0 11.848-5.491 11.85-12.244a11.82 11.82 0 0 0-3.477-8.651"/></svg>
    ),
    aria: "Open WhatsApp chat in a new tab"
  },
  {
    label: "Email",
    href: "mailto:sadmanbarnob@gmail.com",
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M22 6 12 13 2 6" />
      </svg>
    ),
    aria: "Send an email to sadmanbarnob@gmail.com"
  },
];

function debounce<T extends unknown[]>(fn: (...args: T) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleIntersect = debounce(([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setHasAnimated(true);
      } else {
        setHasAnimated(false);
      }
    }, 60);

    const observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact Information"
      className={`min-h-[60vh] flex flex-col items-center justify-center py-24 mt-36 transition-opacity transition-transform duration-1000 ease-out
        ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-14">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 w-full max-w-4xl px-6 mb-10" role="list" aria-label="Contact Methods">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            className="flex flex-col items-center justify-center bg-card border border-border rounded-xl shadow-md p-10 hover:scale-105 hover:bg-secondary hover:shadow-lg transition-transform duration-300 group min-h-[180px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={contact.aria}
          >
            <span className="mb-5 text-primary transition-colors">{contact.icon}</span>
            <span className="text-lg font-medium transition-colors">{contact.label}</span>
          </a>
        ))}
      </div>
      <p className="text-muted-foreground mt-8">Feel free to reach out via any platform!</p>
    </section>
  );
} 