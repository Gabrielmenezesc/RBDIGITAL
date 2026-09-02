"use client";

import Navbar from "@/components/rb/Navbar";
import HeroSection from "@/components/rb/HeroSection";
import ServicesGrid from "@/components/rb/ServicesGrid";
import ProcessFlow from "@/components/rb/ProcessFlow";
import PortfolioSection from "@/components/rb/PortfolioSection";
import CinematicIdeas from "@/components/rb/CinematicIdeas";
import RBLab from "@/components/rb/RBLab";
import AudienceSection from "@/components/rb/AudienceSection";
import HowItWorks from "@/components/rb/HowItWorks";
import BudgetForm from "@/components/rb/BudgetForm";
import AboutSection from "@/components/rb/AboutSection";
import CompanyInfo from "@/components/rb/CompanyInfo";
import LocationSection from "@/components/rb/LocationSection";
import BrasiliaSection from "@/components/rb/BrasiliaSection";
import CredibilitySection from "@/components/rb/CredibilitySection";
import ContactSection from "@/components/rb/ContactSection";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import ScrollReveal from "@/components/rb/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070B] text-[#E8ECF1] overflow-hidden">
      <Navbar />

      {/* Hero - Cinematic Opening */}
      <HeroSection />

      {/* Services Grid */}
      <div className="section-divider" />
      <ScrollReveal>
        <ServicesGrid />
      </ScrollReveal>

      {/* Process Flow - "Nao entregamos apenas um site" */}
      <div className="section-divider" />
      <ScrollReveal>
        <ProcessFlow />
      </ScrollReveal>

      {/* Portfolio */}
      <div className="section-divider" />
      <ScrollReveal>
        <PortfolioSection />
      </ScrollReveal>

      {/* Cinematic Ideas */}
      <div className="section-divider" />
      <ScrollReveal>
        <CinematicIdeas />
      </ScrollReveal>

      {/* RB Lab */}
      <div className="section-divider" />
      <ScrollReveal>
        <RBLab />
      </ScrollReveal>

      {/* Audience Section */}
      <div className="section-divider" />
      <ScrollReveal>
        <AudienceSection />
      </ScrollReveal>

      {/* How It Works */}
      <div className="section-divider" />
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      {/* Budget Form */}
      <div className="section-divider" />
      <ScrollReveal>
        <BudgetForm />
      </ScrollReveal>

      {/* About Section */}
      <div className="section-divider" />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* Company Info */}
      <ScrollReveal>
        <CompanyInfo />
      </ScrollReveal>

      {/* Brasilia + Goias Section */}
      <div className="section-divider" />
      <ScrollReveal>
        <BrasiliaSection />
      </ScrollReveal>

      {/* Location */}
      <ScrollReveal>
        <LocationSection />
      </ScrollReveal>

      {/* Credibility */}
      <div className="section-divider" />
      <ScrollReveal>
        <CredibilitySection />
      </ScrollReveal>

      {/* Contact */}
      <div className="section-divider" />
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Panel */}
      <WhatsAppPanel />
    </main>
  );
}
