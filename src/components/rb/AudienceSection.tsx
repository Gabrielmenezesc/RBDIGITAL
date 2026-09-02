"use client";

import React, { useState } from "react";
import { assetPath } from "@/lib/assetPath";

const audiences = [
  {
    title: "Pessoa Física",
    description: "Profissionais, autônomos, criadores e projetos pessoais.",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="1.75" />
        <circle cx="12" cy="7" r="4" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Empresas",
    description: "Pequenos negócios, comércios e prestadores de serviços.",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="1.75" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Eventos",
    description: "Casamentos, festas, eventos corporativos e projetos especiais.",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.75" />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.75" />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.75" />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Instituições",
    description: "Igrejas, associações, projetos sociais e organizações.",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 2l9 8H3l9-8z" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Projetos Públicos",
    description: "Prefeituras, portais institucionais e campanhas informativas.",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="1.75" />
      </svg>
    ),
  },
];

const labItems = [
  "Chatbots e automações",
  "Dashboards e sistemas",
  "Aplicações web e PWA",
  "Integrações e APIs",
  "Ferramentas com IA",
];

export default function AudienceSection() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    tipoPessoa: "Pessoa Física",
    tipoProjeto: "Site Institucional",
    whatsapp: "",
    prazo: "1 a 2 semanas",
    investimento: "R$ 1.000 a R$ 3.000",
    descricao: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `*Solicitação de Proposta - RB Digital*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Empresa:* ${formData.empresa || "Não informado"}\n` +
      `*Tipo:* ${formData.tipoPessoa}\n` +
      `*Projeto:* ${formData.tipoProjeto}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Prazo:* ${formData.prazo}\n` +
      `*Investimento:* ${formData.investimento}\n` +
      `*Ideia:* ${formData.descricao}`;
    return `https://wa.me/5538991621135?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="rblab" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Grid matching reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: RB LAB (span 4) */}
          <div className="lg:col-span-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between h-full shadow-sm">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-black text-2xl text-[#071A3A] tracking-tight">
                    RB LAB
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Laboratório de ideias, experiências e tecnologia.
                  </p>
                </div>
              </div>

              {/* Check items */}
              <ul className="space-y-3.5 my-6">
                {labItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-[#071A3A]">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[#0B3D91] shrink-0">
                      <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Graphic element */}
              <div className="my-6 p-4 rounded-xl bg-gradient-to-br from-blue-900 via-slate-900 to-[#071A3A] text-white flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="w-20 h-20 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-2xl">
                  <span className="font-heading font-black text-2xl tracking-widest text-[#B8860B]">RB</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5538991621135?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20inova%C3%A7%C3%B5es%20do%20RB%20Lab."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light-outline w-full py-2.5 text-xs font-extrabold text-center rounded-md"
            >
              EXPLORAR RB LAB
            </a>
          </div>

          {/* Column 2: PARA QUEM TRABALHAMOS (span 4) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            <h3 className="font-heading font-black text-lg text-[#071A3A] tracking-wider uppercase mb-6 pb-2 border-b border-slate-100">
              PARA QUEM TRABALHAMOS
            </h3>

            <div className="space-y-5">
              {audiences.map((aud, index) => (
                <div key={index} className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#0B3D91] group-hover:bg-blue-50/50 transition-colors">
                    {aud.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-xs text-[#071A3A] uppercase tracking-wide">
                      {aud.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5 font-normal">
                      {aud.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: CONTE SUA IDEIA (span 4 - Navy Dark Card) */}
          <div id="orcamento" className="lg:col-span-4 card-navy p-7 shadow-xl">
            <h3 className="font-heading font-black text-lg text-white tracking-wider uppercase mb-1">
              CONTE SUA IDEIA
            </h3>
            <p className="text-xs text-slate-300 mb-5">
              Preencha o formulário e receba uma proposta.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Nome completo *"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-white text-slate-900 text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                />
                <input
                  type="text"
                  placeholder="Empresa (opcional)"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full bg-white text-slate-900 text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={formData.tipoPessoa}
                  onChange={(e) => setFormData({ ...formData, tipoPessoa: e.target.value })}
                  className="w-full bg-white text-slate-900 text-xs px-2.5 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                >
                  <option>Pessoa Física</option>
                  <option>Pessoa Jurídica</option>
                </select>
                <select
                  value={formData.tipoProjeto}
                  onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                  className="w-full bg-white text-slate-900 text-xs px-2.5 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                >
                  <option>Site / Landing Page</option>
                  <option>Marketing Digital</option>
                  <option>Chatbot WhatsApp</option>
                  <option>Vídeo / Audiovisual</option>
                  <option>Design e Cartazes</option>
                  <option>Planilha Inteligente</option>
                  <option>Outro Projeto</option>
                </select>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp *"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full bg-white text-slate-900 text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                />
                <select
                  value={formData.prazo}
                  onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                  className="w-full bg-white text-slate-900 text-xs px-2.5 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
                >
                  <option>Prazo: Urgente</option>
                  <option>1 a 2 semanas</option>
                  <option>1 mês</option>
                  <option>A definir</option>
                </select>
              </div>

              {/* Row 4 */}
              <select
                value={formData.investimento}
                onChange={(e) => setFormData({ ...formData, investimento: e.target.value })}
                className="w-full bg-white text-slate-900 text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
              >
                <option>Investimento: Até R$ 1.000</option>
                <option>R$ 1.000 a R$ 3.000</option>
                <option>R$ 3.000 a R$ 5.000</option>
                <option>Acima de R$ 5.000</option>
              </select>

              {/* Row 5: Textarea */}
              <textarea
                rows={3}
                required
                placeholder="Descreva sua ideia *"
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                className="w-full bg-white text-slate-900 text-xs p-3 rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-gold-card w-full py-3 text-xs font-black tracking-wider uppercase rounded shadow-lg mt-2"
              >
                SOLICITAR PROPOSTA
              </button>

              {/* WhatsApp Redirect after Submit */}
              {submitted && (
                <div className="pt-3 border-t border-white/10 space-y-2 text-center animate-fade-in">
                  <span className="text-[11px] text-emerald-400 font-semibold block">
                    Recebemos sua solicitação!
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-light-outline w-full py-2.5 text-[11px] font-bold rounded flex items-center justify-center text-[#071A3A]"
                  >
                    CONTINUAR PELO WHATSAPP →
                  </a>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
