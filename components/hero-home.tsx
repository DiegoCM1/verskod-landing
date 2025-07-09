import diseñoDeInterfaces from "@/public/images/VERSKOD-DISEN╠âO-IMG-01.webp";
import asesoriaEmpresarial from "@/public/images/VERSKOD-CONSULTORI╠üA-IMG-01.webp";
import programador from "@/public/images/VERSKOD-DESARROLLO-IMG-02.webp";

// import ModalVideo from "@/components/modal-video";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-8 pb-12 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl/snug font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Desarrollo de software y capacitación personalizada de IA para tu
              empresa.
            </h1>
            <div className="mx-auto max-w-2xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Somos tu socio estratégico en la era digital. Impulsamos el
                crecimiento de tu empresa con soluciones tecnológicas
                innovadoras.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-button-primary/40 to-button-primary bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Contáctanos
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Solicitar demostración
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-button-primary/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-button-primary after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
            <Image
              className="mx-auto shadow-lg overflow-hidden rounded-l-2xl"
              src={diseñoDeInterfaces}
              alt="Hero image"
            />
            <Image
              className="mx-auto shadow-lg overflow-hidden rounded-r-2xl"
              src={asesoriaEmpresarial}
              alt="Hero image"
            />
            <Image
              className="mx-auto shadow-lg overflow-hidden hidden md:block"
              src={programador}
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
