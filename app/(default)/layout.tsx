"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import WhatsAppButton from "@/components/whatsapp-button";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />

      {/* Main content */}
      <main className="relative flex grow flex-col">{children}</main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
