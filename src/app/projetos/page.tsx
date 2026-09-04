"use client";

import Navbar from "@/components/rb/Navbar";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import PortfolioSection from "@/components/rb/PortfolioSection";
import Link from "next/link";

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
            CASES & EXPERIÊNCIAS DIGITAIS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#071A3A] tracking-tight">
            PROJETOS QUE SAÍRAM DO PAPEL
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Conheça algumas das plataformas, portais, landing pages e experiências interativas desenvolvidas pela RB Digital.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <PortfolioSection />

      {/* Interactive Quality Pillars */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl font-bold text-[#071A3A]">
              Padrão de Excelência em Cada Entrega
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B3D91] flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-heading font-bold text-sm text-[#071A3A] mb-2 uppercase">
                Performance e Velocidade
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sites construídos com código limpo, carregamento instantâneo e otimização total para dispositivos móveis.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B3D91] flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-heading font-bold text-sm text-[#071A3A] mb-2 uppercase">
                Design com Identidade
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nada de modelos genéricos. Cada layout é pensado para refletir a autoridade e o posicionamento da sua marca.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B3D91] flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-heading font-bold text-sm text-[#071A3A] mb-2 uppercase">
                Foco em Conversão
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integração nativa com WhatsApp, botões estratégicos de contato e fluxos que transformam visitantes em clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#071A3A] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Quer ver seu projeto no ar?
          </h2>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/contato/" className="btn-gold-card py-3 px-8 text-xs font-bold rounded-md">
              CRIAR MEU PROJETO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPanel />
    </main>
  );
}
