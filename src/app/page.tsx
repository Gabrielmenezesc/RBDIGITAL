"use client";

import Navbar from "@/components/rb/Navbar";
import HeroSection from "@/components/rb/HeroSection";
import ServicesGrid from "@/components/rb/ServicesGrid";
import ProcessFlow from "@/components/rb/ProcessFlow";
import PortfolioSection from "@/components/rb/PortfolioSection";
import AudienceSection from "@/components/rb/AudienceSection";
import CompanyInfo from "@/components/rb/CompanyInfo";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A] selection:bg-[#071A3A] selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section with Interactive 3D WebGL Badge */}
      <HeroSection />

      {/* 3. O Que Fazemos (Services Overview) */}
      <ServicesGrid />

      {/* 4. Nosso Processo (01 - 06) */}
      <ProcessFlow />

      {/* 5. Projetos Que Saíram do Papel */}
      <PortfolioSection />

      {/* 6. Tri-Block: RB Lab 3D + Para Quem Trabalhamos + Formulário */}
      <AudienceSection />

      {/* 7. Informações Empresariais & Onde Estamos */}
      <CompanyInfo />

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating WhatsApp Widget */}
      <WhatsAppPanel />
    </main>
  );
}
