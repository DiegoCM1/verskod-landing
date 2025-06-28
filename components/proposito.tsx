import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import { PersonStanding } from "lucide-react";
import { FolderKanban } from 'lucide-react';
import { HeartPlus } from 'lucide-react';



export default function Features() {
  return (
    <section className="relative" id="proposito">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Estamos comprometidos a:
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Nuestra Misión
            </h2>
            <p className="text-lg text-indigo-200/65">
              Transformar tu equipo combinando formación de
              vanguardia y aplicaciones prácticas de tecnologías emergentes, para
              que trabajen en proyectos disruptivos, alcancen niveles de
              eficiencia superiores y disfruten de un equilibrio real entre
              rendimiento y bienestar.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <PersonStanding color="oklch(58.5% 0.233 277.117)" size={24} />

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Desarrollo Profesional y Cognitivo
              </h3>
              <p className="text-indigo-200/65">
                Potenciar el desarrollo profesional y cognitivo de cada miembro
                de tu equipo.
              </p>
            </article>
            <article>
              <FolderKanban color="oklch(58.5% 0.233 277.117)" size={24} />

              {/* <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg> */}
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Proyectos de Innovación Tecnológica
              </h3>
              <p className="text-indigo-200/65">
                Aplicar el conocimiento dado a los equipos de trabajo con
                proyectos innovadores que utilicen tecnologías emergentes.
              </p>
            </article>
            <article>
              <HeartPlus color="oklch(58.5% 0.233 277.117)" size={24}/>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Productividad y Bienestar
              </h3>
              <p className="text-indigo-200/65">
                Mejorar la productividad y la calidad de vida de las personas a
                través de nuestras iniciativas.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
