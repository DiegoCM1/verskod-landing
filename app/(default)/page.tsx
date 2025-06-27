export const metadata = {
  title: "Verskod",
  description: "Verskod - Desarrollo de software y capacitación personalizada de IA para tu empresa.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/servicios";
import Features from "@/components/proposito";
// import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
