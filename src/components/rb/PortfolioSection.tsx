"use client";

import React, { useState } from "react";

const projects = [
  {
    id: "casamento",
    title: "CASAMENTO DIGITAL",
    description: "Uma experiência digital criada para transformar um casamento em uma plataforma completa de informações, interação e apresentação.",
    buttonText: "VER PROJETO",
    buttonType: "navy",
    link: "https://gabrielmenezesc.github.io/casamento-anny-e-gabriel/",
    mockup: (
      <div className="w-full h-44 bg-gradient-to-tr from-[#3b1d28] via-[#6d3049] to-[#d4af37] p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="flex justify-between items-center text-[10px] tracking-widest uppercase opacity-80">
          <span>Anny & Gabriel</span>
          <span>15.11.2025</span>
        </div>
        <div className="text-center my-auto">
          <div className="font-serif italic text-2xl font-bold tracking-wide">Anny & Gabriel</div>
          <div className="text-[9px] uppercase tracking-widest mt-1 opacity-90">Contagem regressiva para o grande dia</div>
        </div>
        <div className="flex justify-center gap-2">
          <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[9px]">Confirmar Presença</div>
          <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[9px]">Lista de Presentes</div>
        </div>
      </div>
    ),
  },
  {
    id: "municipal",
    title: "PORTAL INSTITUCIONAL MUNICIPAL",
    description: "Demonstração conceitual de portal para prefeituras e instituições.",
    buttonText: "VER DEMONSTRAÇÃO",
    buttonType: "gold",
    link: "#",
    mockup: (
      <div className="w-full h-44 bg-gradient-to-tr from-[#0F284E] via-[#1E4E8C] to-[#3B82F6] p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center text-[8px] font-bold">BR</div>
          <span className="text-[10px] font-bold tracking-wider uppercase">Prefeitura Municipal</span>
        </div>
        <div className="my-auto space-y-1">
          <div className="text-xs font-bold text-white">Transparência & Serviços Públicos</div>
          <div className="text-[9px] text-blue-100">Acesso rápido aos principais canais da cidade</div>
        </div>
        <div className="grid grid-cols-4 gap-1 text-[8px] text-center">
          <span className="bg-white/15 py-1 rounded">Serviços</span>
          <span className="bg-white/15 py-1 rounded">Notícias</span>
          <span className="bg-white/15 py-1 rounded">Ouvidoria</span>
          <span className="bg-white/15 py-1 rounded">Diário</span>
        </div>
      </div>
    ),
  },
  {
    id: "empresa",
    title: "EMPRESA LOCAL",
    description: "Site demonstrativo para empresas locais com apresentação de serviços, produtos e contato.",
    buttonText: "VER DEMONSTRAÇÃO",
    buttonType: "gold",
    link: "#",
    mockup: (
      <div className="w-full h-44 bg-gradient-to-tr from-[#111827] via-[#1F2937] to-[#374151] p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-300">
          <span>Soluções Industriais</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        </div>
        <div className="my-auto">
          <div className="text-xs font-extrabold text-white">Engenharia & Tecnologia</div>
          <div className="text-[9px] text-slate-300 mt-0.5">Soluções completas para seu negócio</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#B8860B] text-white text-[8px] font-bold px-2 py-1 rounded">Fazer Orçamento</div>
          <div className="text-[8px] text-slate-400">Atendimento 24h</div>
        </div>
      </div>
    ),
  },
  {
    id: "pessoal",
    title: "SITE PESSOAL",
    description: "Portfólio profissional com apresentação de serviços, projetos e experiência.",
    buttonText: "VER DEMONSTRAÇÃO",
    buttonType: "gold",
    link: "#",
    mockup: (
      <div className="w-full h-44 bg-gradient-to-tr from-[#1E293B] via-[#334155] to-[#475569] p-4 flex flex-col justify-between text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="font-bold">Gabriel Menezes</span>
          <span className="text-[8px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Desenvolvedor</span>
        </div>
        <div className="my-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-600 border border-slate-400 flex items-center justify-center font-bold text-xs">
            GM
          </div>
          <div>
            <div className="text-xs font-bold">Portfólio Profissional</div>
            <div className="text-[8px] text-slate-300">Fullstack Developer & Designer</div>
          </div>
        </div>
        <div className="flex gap-2 text-[8px] text-slate-300">
          <span>• 10+ Projetos</span>
          <span>• Contato Direto</span>
        </div>
      </div>
    ),
  },
];

export default function PortfolioSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const handleOpenDemo = (title: string) => {
    setActiveProject(title);
    setModalOpen(true);
  };

  return (
    <section id="projetos" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#071A3A] tracking-tight">
            PROJETOS QUE SAÍRAM DO PAPEL
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Mockup Preview */}
                <div className="relative overflow-hidden">
                  {proj.mockup}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-sm text-[#071A3A] tracking-wider uppercase mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                {proj.buttonType === "navy" ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-navy w-full py-2.5 text-center text-xs font-extrabold tracking-wider rounded-md"
                  >
                    {proj.buttonText}
                  </a>
                ) : (
                  <button
                    onClick={() => handleOpenDemo(proj.title)}
                    className="btn-gold-card w-full py-2.5 text-center text-xs font-extrabold tracking-wider rounded-md"
                  >
                    {proj.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Central Action */}
        <div className="text-center">
          <a
            href="https://wa.me/5538991621135?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20projetos%20do%20portf%C3%B3lio%20da%20RB%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light-outline py-3 px-8 text-xs font-extrabold tracking-wider rounded-md inline-flex items-center shadow-sm"
          >
            VER TODOS OS PROJETOS
          </a>
        </div>

      </div>

      {/* Demo Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-8 text-left shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold text-xl"
            >
              ✕
            </button>
            <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest">
              DEMONSTRAÇÃO CONCEITUAL
            </span>
            <h3 className="font-heading font-black text-xl text-[#071A3A] mt-1 mb-4">
              {activeProject}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Este projeto é um modelo demonstrativo de alta tecnologia desenvolvido pela equipe da <strong>RB Digital</strong>. Nós personalizamos a interface, fluxos, integrações e funcionalidades de acordo com a sua necessidade.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/5538991621135?text=Ol%C3%A1!%20Gostei%20do%20modelo%20${encodeURIComponent(activeProject || '')}%20e%20gostaria%20de%20um%20or%C3%A7amento%20personalizado.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy py-2.5 px-6 text-xs font-bold rounded-md flex-1 text-center"
              >
                SOLICITAR PROJETO SIMILAR
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="btn-light-outline py-2.5 px-4 text-xs font-bold rounded-md"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
