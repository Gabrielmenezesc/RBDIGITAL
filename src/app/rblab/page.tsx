"use client";

import Navbar from "@/components/rb/Navbar";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import ThreeLabCube from "@/components/rb/ThreeLabCube";
import Link from "next/link";

const labFeatures = [
  {
    title: "Chatbots Inteligentes para WhatsApp",
    desc: "Fluxos de atendimento 24/7 com inteligência artificial, qualificação de leads, agendamento e encaminhamento humanizado.",
    tag: "Automação",
  },
  {
    title: "Dashboards & Sistemas de Gestão",
    desc: "Painéis visuais dinâmicos para controle financeiro, métricas operacionais, KPIs de vendas e indicadores em tempo real.",
    tag: "Business Intelligence",
  },
  {
    title: "Aplicações Web & PWA",
    desc: "Plataformas instaláveis no smartphone sem necessidade de app store, com funcionamento offline e alta velocidade.",
    tag: "Web Apps",
  },
  {
    title: "Integrações & APIs Customizadas",
    desc: "Conexão de gateways de pagamento, CRMs, formulários, bancos de dados e ferramentas de terceiros em um só ecossistema.",
    tag: "Integração",
  },
  {
    title: "Ferramentas com Inteligência Artificial",
    desc: "Soluções personalizadas com modelos de linguagem para geração de conteúdo, atendimento ao cliente e processamento de dados.",
    tag: "IA & Inovação",
  },
  {
    title: "Sites Experimentais & 3D Interativo",
    desc: "Criação de experiências imersivas em WebGL, Three.js, visualizações de produtos em 3D e interfaces de última geração.",
    tag: "3D & WebGL",
  },
];

export default function RBLabPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Lab Hero Header */}
      <section className="bg-gradient-to-b from-[#071A3A] to-[#0A224E] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#C9A227]">
                LABORATÓRIO DE INOVAÇÃO
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-tight">
                RB LAB
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
                Onde experimentamos o futuro da tecnologia. Desenvolvemos protótipos, automações avançadas, inteligência artificial e interfaces 3D imersivas.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/5538991621135?text=Ol%C3%A1!%20Tenho%20um%20projeto%20inovador%20e%20gostaria%20de%20conversar%20com%20o%20RB%20Lab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-card py-3 px-7 text-xs font-bold rounded-md inline-flex items-center"
                >
                  DESENVOLVER PROJETO INOVADOR
                </a>
              </div>
            </div>

            {/* 3D Holographic Lab Cube */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center">
                <ThreeLabCube />
                <span className="text-[10px] font-mono tracking-widest text-[#C9A227] uppercase mt-2">
                  WebGL 3D Core Active
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lab Features Grid */}
      <section className="bg-[#F8FAFC] py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B3D91]">
              TECNOLOGIAS EM DESENVOLVIMENTO
            </span>
            <h2 className="font-heading text-3xl font-black text-[#071A3A] tracking-tight">
              O QUE CRIAMOS NO RB LAB
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-wider block mb-3">
                    {feat.tag}
                  </span>
                  <h3 className="font-heading font-extrabold text-base text-[#071A3A] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/5538991621135?text=Ol%C3%A1!%20Gostaria%20de%20desenvolver%20${encodeURIComponent(feat.title)}%20com%20o%20RB%20Lab.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0B3D91] hover:text-[#071A3A] transition-colors inline-flex items-center"
                  >
                    CONSULTAR VIABILIDADE →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lab CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="font-heading text-2xl font-bold text-[#071A3A]">
            Tem um desafio tecnológico complexo?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Nossa equipe analisa a viabilidade, desenha a arquitetura e implementa a solução.
          </p>
          <div className="pt-2">
            <Link href="/contato/" className="btn-navy py-3 px-8 text-xs font-bold rounded-md">
              FALAR COM NOSSO TIME
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPanel />
    </main>
  );
}
