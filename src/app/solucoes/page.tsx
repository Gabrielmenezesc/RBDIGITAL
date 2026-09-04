"use client";

import Navbar from "@/components/rb/Navbar";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import ServicesGrid from "@/components/rb/ServicesGrid";
import ProcessFlow from "@/components/rb/ProcessFlow";
import Link from "next/link";

export default function SolucoesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
            CATÁLOGO DE SERVIÇOS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#071A3A] tracking-tight">
            SOLUÇÕES DIGITAIS
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Desenvolvemos tecnologia sob medida para pessoas, comércios, empresas e instituições que buscam presença digital forte e resultados concretos.
          </p>
        </div>
      </section>

      {/* The 12 Services Grid */}
      <ServicesGrid />

      {/* Nosso Processo */}
      <ProcessFlow />

      {/* Bottom CTA */}
      <section className="bg-[#071A3A] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Converse com nossa equipe e receba uma proposta personalizada para seu projeto digital.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/contato/" className="btn-gold-card py-3 px-8 text-xs font-bold rounded-md">
              SOLICITAR PROPOSTA
            </Link>
            <a
              href="https://wa.me/5538991621135"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light-outline py-3 px-6 text-xs font-bold rounded-md text-[#071A3A]"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPanel />
    </main>
  );
}
