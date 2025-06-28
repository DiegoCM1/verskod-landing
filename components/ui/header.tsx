import { useState, useEffect, useRef } from "react";

export default function Header() {
  /* ──────────────────────────────────────────
     State & refs
  ────────────────────────────────────────── */
  const [isOpen, setIsOpen] = useState(false);          //  menú móvil (no implementado aquí)
  const [activeSection, setActiveSection] = useState(""); //  id de la sección visible
  const navbarHeight = 64;                                //  alto fijo del navbar en px
  const sectionMapRef = useRef([]);                       //  guardamos offsets entre renders

  /* ──────────────────────────────────────────
     1. Calcula offsets + IntersectionObserver
  ────────────────────────────────────────── */
  useEffect(() => {
    // 1) Obtenemos todas las <section> «vivientes»
    const sections = Array.from(document.querySelectorAll("section"));

    // 2) Mapeamos sus posiciones (top y bottom) y las guardamos en un ref
    const buildSectionMap = () => {
      sectionMapRef.current = sections.map((sec) => ({
        id: sec.id,
        offsetTop: sec.offsetTop,
        offsetBottom: sec.offsetTop + sec.offsetHeight,
      }));
    };
    buildSectionMap(); // inicial

    // 3) Observamos la intersección con el viewport (compensada por el navbar)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { threshold: 0.3, rootMargin: `-${navbarHeight}px 0px 0px 0px` }
    );
    sections.forEach((sec) => observer.observe(sec));

    /* 4) Fallback: si el usuario hace scroll muy rápido o
          el observer falla, calculamos la sección manualmente */
    const handleScroll = () => {
      const pos = window.scrollY + navbarHeight + 1;
      const current = sectionMapRef.current.find(
        (sec) => pos >= sec.offsetTop && pos < sec.offsetBottom
      );
      if (current && current.id !== activeSection) setActiveSection(current.id);
    };

    /* 5) Recalcular offsets al cambiar el tamaño de la ventana */
    const handleResize = () => buildSectionMap();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    /* 6) Cleanup */
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // ← sólo una vez al montar

  /* ──────────────────────────────────────────
     2. Scroll manual cuando haces click en un link
  ────────────────────────────────────────── */
  const manualScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - navbarHeight, // compensamos el navbar
      behavior: "smooth",
    });
    setActiveSection(id);  // marcamos activa inmediatamente
    setIsOpen(false);      // cerrar menú móvil (si existiera)
  };

  /* ──────────────────────────────────────────
     3. JSX
  ────────────────────────────────────────── */
  return (
    <header className="z-30 w-full md:mt-5 flex sticky top-0 items-center justify-between gap-3 rounded-b-2xl bg-gray-950/80 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
      <div className="mx-auto w-full">
        {/* ——— Logo ——— */}
        <div className="justify-center text-center py-4 bg-gray-900/ border border-b-gray-800">
          {/* link normal; al ser / cambia de página, así que SIN manualScroll */}
          <a
            href="/"
            className="text-2xl font-semibold text-gray-300 hover:text-white"
          >
            VERSKOD
          </a>
        </div>

        {/* ——— Links a secciones ——— */}
        <div className="flex items-center justify-between py-2">
          {[
            { id: "servicios", label: "Servicios" },
            { id: "proposito", label: "Propósito" },
            { id: "cta", label: "Contacto" },
          ].map(({ id, label }) => (
            <div key={id} className="flex-1 text-center">
              <a
                href={`#${id}`}
                onClick={(e) => manualScroll(e, id)}
                className={`text-lg font-semibold hover:text-white ${
                  activeSection === id
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}