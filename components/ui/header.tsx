/* Header.tsx – versión corregida y tipada */
import { useState, useEffect, useRef } from "react";

/* -------------------- Tipos auxiliares -------------------- */
interface SectionInfo {
  id: string;
  offsetTop: number;
  offsetBottom: number;
}

export default function Header() {
  /* -------------------- State & refs -------------------- */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navbarHeight = 64;

  /**  Mapa de secciones para el fallback por scroll */
  const sectionMapRef = useRef<SectionInfo[]>([]);
  /**  Último activeSection disponible dentro de callbacks */
  const activeSectionRef = useRef<string>("");

  /* -------------------- 1. Observer + offsets -------------------- */
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section")
    );

    const buildSectionMap = () => {
      sectionMapRef.current = sections.map((sec) => ({
        id: sec.id,
        offsetTop: sec.offsetTop,
        offsetBottom: sec.offsetTop + sec.offsetHeight,
      }));
    };
    buildSectionMap();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          const id = (visible[0].target as HTMLElement).id;
          if (id !== activeSectionRef.current) setActiveSection(id);
        }
      },
      { threshold: 0.3, rootMargin: `-${navbarHeight}px 0px 0px 0px` }
    );
    sections.forEach((sec) => observer.observe(sec));

    const handleScroll = () => {
      const y = window.scrollY + navbarHeight + 1;
      const current = sectionMapRef.current.find(
        (sec) => y >= sec.offsetTop && y < sec.offsetBottom
      );
      if (current && current.id !== activeSectionRef.current) {
        setActiveSection(current.id);
      }
    };

    const handleResize = () => buildSectionMap();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  /* -------------------- 2. Scroll manual -------------------- */
  const manualScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: "smooth",
    });
    setActiveSection(id);
    setIsOpen(false);
  };

  const navLinks = [
    { id: "servicios", label: "Servicios" },
    { id: "proposito", label: "Propósito" },
    { id: "cta", label: "Contacto" },
  ];

  /* -------------------- 3. JSX -------------------- */
  return (
    <header className="z-30 sticky top-0 w-full bg-gray-950/80 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border-b before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* ---------- Logo ---------- */}
          <a
            href="/"
            className="text-2xl font-semibold text-gray-300 hover:text-white"
          >
            VERSKOD
          </a>

          {/* ---------- Desktop nav ---------- */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => manualScroll(e, id)}
                className={`text-sm font-semibold transition-colors hover:text-white ${
                  activeSection === id ? "text-white" : "text-gray-400"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ---------- Hamburger button ---------- */}
          <button
            className="md:hidden relative z-10 flex h-10 w-10 items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* ---------- Mobile menu ---------- */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => manualScroll(e, id)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-gray-800/50 hover:text-white ${
                  activeSection === id
                    ? "text-white bg-gray-800/30"
                    : "text-gray-400"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
