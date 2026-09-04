"use client";

import Navbar from "@/components/rb/Navbar";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import CompanyInfo from "@/components/rb/CompanyInfo";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
            TRANSPARÊNCIA & DADOS INSTITUCIONAIS
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#071A3A] tracking-tight">
            INFORMAÇÕES EMPRESARIAIS
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Conheça os dados legais, cadastrais e a localização da Rede Brasilia News LTDA e da sua frente criativa RB Digital.
          </p>
        </div>
      </section>

      {/* Corporate Info & Location Section */}
      <CompanyInfo />

      <Footer />
      <WhatsAppPanel />
    </main>
  );
}
