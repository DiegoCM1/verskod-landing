import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import XIcon from "../icons/XIcon";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="flex flex-col items-center justify-between pt-16 pb-8">
          <h3 className="mb-4 font-nacelle text-[1rem] font-semibold text-gray-200 md:mb-6">
            Siguenos en nuestras redes:
          </h3>{" "}
          {/* Social media links */}
          <div className="flex items-center justify-center mb-4 md:mb-6 md:gap-4">
            <a
              href="https://www.instagram.com/verskodoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Instagram className="inline-block w-8 h-8" />
            </a>
            <a
              href="https://www.instagram.com/verskodoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Linkedin className="inline-block w-8 h-8" />
            </a>
            <a
              href="https://x.com/Verskod"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <XIcon className="inline-block w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561229710590"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Facebook className="inline-block w-8 h-8" />
            </a>
          </div>
          <div className="md:flex md:flex-row md:justify-between md:items-center md:w-3/5 md:mb-6">
            <p className="text-indigo-200/65 mb-2">
              311 521 6216 / 301 3190819 / 601 765 3016
            </p>
            <p className="text-indigo-200/65 mb-2">
              contacto@verskod.com / www.verskod.com
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} Verskod. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
