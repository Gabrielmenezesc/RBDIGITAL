"use client";

import Navbar from "@/components/rb/Navbar";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const values = [
  {
    title: "Tecnologia & Inovação",
    desc: "Utilizamos stacks modernas e performáticas para entregar soluções que não ficam obsoletas.",
  },
  {
    title: "Identidade Própria",
    desc: "Rejeitamos padrões genéricos. Cada projeto reflete a essência e a autoridade única do cliente.",
  },
  {
    title: "Atendimento Próximo",
    desc: "Acompanhamento transparente do briefing à publicação e evolução contínua do projeto.",
  },
  {
    title: "Soluções Práticas",
    desc: "Foco no que realmente gera valor: automação que economiza tempo e sites que geram conversão.",
  },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
            NOSSA HISTÓRIA & PROPÓSITO
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#071A3A] tracking-tight">
            SOBRE A RB DIGITAL
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            A frente digital e criativa da empresa Rede Brasilia News LTDA, unindo comunicação, autoridade e inovação tecnológica.
          </p>
        </div>
      </section>

      {/* Two Forces Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B3D91]">
                ECOSSISTEMA INTEGRADO
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#071A3A] tracking-tight">
                Uma empresa. Duas forças.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                A <strong>Rede Brasilia News LTDA</strong> atua na promoção, tecnologia, publicidade, projetos digitais, eventos e comunicação.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Dentro desse ecossistema, a <strong>RB Digital</strong> concentra a criação de experiências digitais, desenvolvimento de websites de alta performance, design estratégico, inteligência artificial, automação e soluções personalizadas.
              </p>
              
              <div className="pt-2 flex gap-4">
                <Link href="/empresa/" className="btn-navy py-3 px-6 text-xs font-bold rounded-md">
                  DADOS EMPRESARIAIS
                </Link>
                <Link href="/contato/" className="btn-light-outline py-3 px-6 text-xs font-bold rounded-md">
                  FALAR COM A EQUIPE
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-md w-full shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={assetPath("/logo-rb-digital.png")}
                    alt="RB Digital Emblem"
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-heading font-black text-lg text-[#071A3A]">RB DIGITAL</h3>
                    <p className="text-xs text-[#B8860B] font-bold">FRENTE DIGITAL & CRIATIVA</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Sede em Valparaíso de Goiás - GO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>Atuação em Brasília, Goiás e todo o Brasil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>CNPJ Regularizado: 43.209.040/0001-50</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-[#F8FAFC] py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B3D91]">
              O QUE NOS MOVE
            </span>
            <h2 className="font-heading text-3xl font-black text-[#071A3A] tracking-tight">
              NOSSOS PRINCÍPIOS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
                <span className="text-xs font-bold text-[#B8860B] block mb-2 font-mono">
                  0{i + 1}
                </span>
                <h3 className="font-heading font-bold text-sm text-[#071A3A] mb-2 uppercase">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPanel />
    </main>
  );
}
