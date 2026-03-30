import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

// import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Verskod - Desarrollo de software y capacitación en IA",
  description:
    "Somos tu socio estratégico en la era digital. Impulsamos el crecimiento de tu empresa con desarrollo de software personalizado, capacitación en IA y transformación digital.",
  openGraph: {
    title: "Verskod - Desarrollo de software y capacitación en IA",
    description:
      "Somos tu socio estratégico en la era digital. Impulsamos el crecimiento de tu empresa con desarrollo de software personalizado, capacitación en IA y transformación digital.",
    url: "https://www.verskod.com",
    siteName: "Verskod",
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verskod - Desarrollo de software y capacitación en IA",
    description:
      "Somos tu socio estratégico en la era digital. Impulsamos el crecimiento de tu empresa con soluciones tecnológicas innovadoras.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
