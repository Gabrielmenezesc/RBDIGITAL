"use client";

import Navbar from "@/components/rb/Navbar";
import Footer from "@/components/rb/Footer";
import WhatsAppPanel from "@/components/rb/WhatsAppPanel";
import React, { useState } from "react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    tipoPessoa: "Pessoa Física",
    tipoProjeto: "Site / Landing Page",
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
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
            ATENDIMENTO DIRETO
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#071A3A] tracking-tight">
            VAMOS TIRAR SUA IDEIA DO PAPEL?
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Preencha os detalhes do seu projeto abaixo ou inicie uma conversa diretamente no WhatsApp.
          </p>
        </div>
      </section>

      {/* Form & Direct Contact Channels */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info Channels (span 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
                <h2 className="font-heading font-black text-xl text-[#071A3A] tracking-wide uppercase pb-3 border-b border-slate-100">
                  CANAIS DE ATENDIMENTO
                </h2>

                <div className="space-y-4 text-xs">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5538991621135"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60 hover:bg-emerald-100/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-[#071A3A] block text-sm">WhatsApp Direto</span>
                      <span className="text-slate-600 font-semibold">+55 38 99162-1135</span>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0B3D91] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" />
                        <polyline points="22,6 12,13 2,6" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-[#071A3A] block text-sm">E-mail Comercial</span>
                      <span className="text-slate-600 font-semibold">reserva@rbdigital.com.br</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-[#B8860B] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-[#071A3A] block text-sm">Localização</span>
                      <span className="text-slate-600">Valparaíso de Goiás - GO (Atendimento Nacional)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Navy Form (span 7) */}
            <div className="lg:col-span-7 card-navy p-8 sm:p-10 shadow-2xl">
              <h2 className="font-heading font-black text-2xl text-white tracking-wide uppercase mb-1">
                SOLICITAR PROPOSTA
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Preencha os dados abaixo e responderemos prontamente com um diagnóstico preliminar.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Nome *</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-white text-slate-900 text-xs px-3.5 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-white text-slate-900 text-xs px-3.5 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Tipo de Contratante</label>
                    <select
                      value={formData.tipoPessoa}
                      onChange={(e) => setFormData({ ...formData, tipoPessoa: e.target.value })}
                      className="w-full bg-white text-slate-900 text-xs px-3 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    >
                      <option>Pessoa Física</option>
                      <option>Pessoa Jurídica (Empresa)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Tipo de Projeto</label>
                    <select
                      value={formData.tipoProjeto}
                      onChange={(e) => setFormData({ ...formData, tipoProjeto: e.target.value })}
                      className="w-full bg-white text-slate-900 text-xs px-3 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    >
                      <option>Site Institucional / Landing Page</option>
                      <option>Marketing Digital / Redes Sociais</option>
                      <option>Chatbot para WhatsApp / IA</option>
                      <option>Produção de Vídeo</option>
                      <option>Design e Identidade Visual</option>
                      <option>Planilha Inteligente / Dashboard</option>
                      <option>Solução Personalizada</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">WhatsApp com DDD *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white text-slate-900 text-xs px-3.5 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Prazo Desejado</label>
                    <select
                      value={formData.prazo}
                      onChange={(e) => setFormData({ ...formData, prazo: e.target.value })}
                      className="w-full bg-white text-slate-900 text-xs px-3 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    >
                      <option>Urgente (imediato)</option>
                      <option>1 a 2 semanas</option>
                      <option>1 mês</option>
                      <option>Sem prazo rígido</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Faixa de Investimento Estimada</label>
                  <select
                    value={formData.investimento}
                    onChange={(e) => setFormData({ ...formData, investimento: e.target.value })}
                    className="w-full bg-white text-slate-900 text-xs px-3.5 py-2.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  >
                    <option>Até R$ 1.000</option>
                    <option>R$ 1.000 a R$ 3.000</option>
                    <option>R$ 3.000 a R$ 5.000</option>
                    <option>Acima de R$ 5.000</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1 block">Descreva seu objetivo ou necessidade *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte o que você gostaria de construir..."
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    className="w-full bg-white text-slate-900 text-xs p-3.5 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold-card w-full py-3.5 text-xs font-black tracking-wider uppercase rounded shadow-lg"
                >
                  SOLICITAR PROPOSTA
                </button>

                {submitted && (
                  <div className="pt-4 border-t border-white/10 space-y-2 text-center animate-fade-in">
                    <span className="text-xs text-emerald-400 font-bold block">
                      Recebemos sua solicitação com sucesso!
                    </span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-light-outline w-full py-3 text-xs font-bold rounded flex items-center justify-center text-[#071A3A]"
                    >
                      FINALIZAR PELO WHATSAPP →
                    </a>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPanel />
    </main>
  );
}
