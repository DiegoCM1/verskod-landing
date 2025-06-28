"use client";

export default function Header() {
  return (
    <header className="z-30 w-full md:mt-5 flex sticky top-0 items-center justify-between gap-3 rounded-b-2xl bg-gray-950/80 ore:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
      <div className="mx-auto w-full">
        <div className="justify-center text-center py-4 bg-gray-900/ border border-b-gray-800">
          <a
            href="/"
            className="text-2xl font-semibold text-gray-300 hover:text-white"
          >
            VERSKOD
          </a>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex-1 text-center">
            <a
              href="#servicios"
              className="text-lg font-semibold text-gray-300 hover:text-white"
            >
              Servicios
            </a>
          </div>
          <div className="flex-1 text-center">
            <a
              href="#proposito"
              className="text-lg font-semibold text-gray-300 hover:text-white"
            >
              Propósito
            </a>
          </div>
          <div className="flex-1 text-center">
            <a
              href="#cta"
              className="text-lg font-semibold text-gray-300 hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
