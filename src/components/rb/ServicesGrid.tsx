"use client";

import React from "react";
import Link from "next/link";

const featuredSolutions = [
  {
    title: "Desenvolvimento Web",
    desc: "Sites institucionais, lojas virtuais e portais personalizados.",
    icon: (
      <svg className="w-6 h-6 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.75" />
        <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.75" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Marketing Digital",
    desc: "Gestão de redes sociais, tráfego pago e estratégias que geram resultado.",
    icon: (
      <svg className="w-6 h-6 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15M18 8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8z" strokeWidth="1.75" />
        <path d="M22 10v4" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Automação",
    desc: "Automatize processos, reduza erros e ganhe mais tempo para focar no que importa.",
    icon: (
      <svg className="w-6 h-6 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="1.75" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Conteúdo & Design",
    desc: "Identidade visual, design gráfico e produção de conteúdo que conecta.",
    icon: (
      <svg className="w-6 h-6 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3z" strokeWidth="1.75" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeWidth="1.75" />
        <path d="M2 2l7.586 7.586" strokeWidth="1.75" />
        <circle cx="11" cy="11" r="2" strokeWidth="1.75" />
      </svg>
    ),
  },
];

const allServices = [
  {
    id: 1,
    title: "CRIAÇÃO DE SITES",
    description: "Sites institucionais, comerciais, landing pages, portais, portfólios e páginas personalizadas.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "MARKETING DIGITAL",
    description: "Estratégia de posicionamento, divulgação, presença digital e campanhas.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "ENGAJAMENTO PARA REDES SOCIAIS",
    description: "Estratégias de conteúdo, planejamento e ações para fortalecer sua presença digital.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
        <circle cx="9" cy="7" r="4" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "PRODUÇÃO DE VÍDEOS",
    description: "Vídeos institucionais, promocionais, reels e apresentações com conceito cinematográfico.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "DESIGN E CARTAZES",
    description: "Cartazes, banners, flyers, apresentações e materiais digitais profissionais.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3z" strokeWidth="2" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeWidth="2" />
        <path d="M2 2l7.586 7.586" strokeWidth="2" />
        <circle cx="11" cy="11" r="2" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "CHATBOTS PARA WHATSAPP",
    description: "Atendimento automatizado, captação de contatos e organização de atendimento.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "INTEGRAÇÕES",
    description: "Conectamos ferramentas, sistemas, APIs, formulários e canais digitais.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "BLOGS E SITES PESSOAIS",
    description: "Blogs profissionais, portfólios, páginas pessoais e presença digital.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "PLANILHAS INTELIGENTES",
    description: "Planilhas de gestão, indicadores, dashboards, controles e relatórios.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
        <polyline points="14 2 14 8 20 8" strokeWidth="2" />
        <line x1="8" y1="13" x2="16" y2="13" strokeWidth="2" />
        <line x1="8" y1="17" x2="16" y2="17" strokeWidth="2" />
        <line x1="10" y1="9" x2="10" y2="9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "ORÇAMENTOS PARA EVENTOS",
    description: "Sistemas e planilhas para controle de custos, fornecedores e convidados.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 11,
    title: "POWERPOINT PROFISSIONAL",
    description: "Apresentações comerciais, empresariais, acadêmicas e institucionais.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M2 3h20v14H2z" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" strokeWidth="2" />
        <path d="M7 8h4a2 2 0 0 1 0 4H7z" strokeWidth="2" />
        <path d="M7 8v6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "SOLUÇÕES DIGITAIS PERSONALIZADAS",
    description: "Projetos criados de acordo com a necessidade específica de cada negócio.",
    icon: (
      <svg className="w-6 h-6 text-[#0B3D91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="solucoes" className="bg-[#F8FAFC] py-20 lg:py-24 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Featured Section Matching User's Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title Block */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8860B]">
              NOSSAS SOLUÇÕES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#071A3A] tracking-tight leading-tight">
              Soluções completas para o seu <span className="text-[#B8860B]">crescimento.</span>
            </h2>
          </div>

          {/* Right 4 Featured Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredSolutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:bg-blue-50/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xs text-[#071A3A] tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* The 12 Detailed Services Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B3D91]">
              TECNOLOGIA PARA TRANSFORMAR IDEIAS EM REALIDADE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-[#071A3A] tracking-tight">
              O QUE FAZEMOS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allServices.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-100/70 transition-colors">
                    {item.icon}
                  </div>

                  <h4 className="font-heading font-extrabold text-xs text-[#071A3A] tracking-wider uppercase mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100">
                  <a
                    href={`https://wa.me/5538991621135?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider text-[#B8860B] hover:text-[#996F08] transition-colors"
                  >
                    CONHECER SOLUÇÃO <span className="ml-1 text-xs font-bold">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
