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
  const [isOpen, setIsOpen] = useState<boolean>(false);   // futuro menú móvil
  const [activeSection, setActiveSection] = useState<string>("");

  const navbarHeight = 64;                                // alto fijo del navbar

  /**  Mapa de secciones para el fallback por scroll */
  const sectionMapRef = useRef<SectionInfo[]>([]);
  /**  Último activeSection disponible dentro de callbacks */
  const activeSectionRef = useRef<string>("");

  /* -------------------- 1. Observer + offsets -------------------- */
  useEffect(() => {
    // 1) Todas las <section> vivas:
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section")
    );

    // 2) Construir mapa {id, top, bottom}
    const buildSectionMap = () => {
      sectionMapRef.current = sections.map((sec) => ({
        id: sec.id,
        offsetTop: sec.offsetTop,
        offsetBottom: sec.offsetTop + sec.offsetHeight,
      }));
    };
    buildSectionMap(); // inicial

    // 3) IntersectionObserver → primaria
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

    /* 4) Fallback: scroll muy rápido */
    const handleScroll = () => {
      const y = window.scrollY + navbarHeight + 1;
      const current = sectionMapRef.current.find(
        (sec) => y >= sec.offsetTop && y < sec.offsetBottom
      );
      if (current && current.id !== activeSectionRef.current) {
        setActiveSection(current.id);
      }
    };

    /* 5) Re-calcular offsets al redimensionar */
    const handleResize = () => buildSectionMap();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    /* 6) Cleanup */
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Mantener ref sincronizado (sin re-renders extra) */
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

  /* -------------------- 3. JSX -------------------- */
  return (
    <header className="z-30 sticky top-0 flex w-full items-center justify-between rounded-b-2xl bg-gray-950/80 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
      <div className="w-full">
        {/* ---------- Logo ---------- */}
        <div className="flex justify-center py-4 bg-gray-900/80 border border-b-gray-800">
          <a
            href="/"
            className="text-2xl font-semibold text-gray-300 hover:text-white"
          >
            VERSKOD
          </a>
        </div>

        {/* ---------- Links ---------- */}
        <nav className="flex items-center justify-between py-2">
          {[
            { id: "servicios", label: "Servicios" },
            { id: "proposito", label: "Propósito" },
            { id: "cta", label: "Contacto" },
          ].map(({ id, label }) => (
            <div key={id} className="flex-1 text-center">
              <a
                href={`#${id}`}
                onClick={(e) => manualScroll(e, id)}
                className={`flex h-full w-full items-center justify-center text-lg font-semibold hover:text-white ${
                  activeSection === id ? "text-white" : "text-gray-400"
                }`}
              >
                {label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
