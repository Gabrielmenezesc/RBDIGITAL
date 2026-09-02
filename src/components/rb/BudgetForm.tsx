"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BudgetForm() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    tipo: "Pessoa Fisica",
    tipoProjeto: "",
    objetivo: "",
    prazo: "",
    investimento: "",
    descricao: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsApp = () => {
    const text = `Ola! Gostaria de solicitar um orcamento.%0A%0A*Nome:* ${formData.nome}%0A*Empresa:* ${formData.empresa || "Nao informado"}%0A*Tipo:* ${formData.tipo}%0A*Projeto:* ${formData.tipoProjeto}%0A*Prazo:* ${formData.prazo}%0A*Investimento:* ${formData.investimento}%0A*Descricao:* ${formData.descricao}`;
    const url = `https://wa.me/5538991621135?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section id="orcamento" className="section-padding bg-[#0A1020] relative border-t border-[#1A2642]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6 uppercase tracking-wider">
            CONTE SUA IDEIA.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-[#C9A227] mx-auto rounded-full" />
          <p className="text-[#C8CDD5] mt-6 text-lg max-w-2xl mx-auto">
            Preencha o formulario abaixo para entendermos melhor o seu projeto. Retornaremos com uma proposta personalizada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-10 border border-[#1A2642] shadow-2xl bg-[#05070B]/80"
        >
          {isSuccess ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white">Recebemos sua solicitacao.</h3>
              <p className="text-[#C8CDD5]">
                Para agilizar o atendimento, envie os dados diretamente pelo WhatsApp.
              </p>
              <button onClick={handleWhatsApp} className="btn-whatsapp px-8 py-3 w-full md:w-auto mt-4 inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                CONTINUAR PELO WHATSAPP
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#C8CDD5]">Nome completo</label>
                  <input
                    required
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#C8CDD5]">Empresa (opcional)</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Sua empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#C8CDD5]">WhatsApp</label>
                  <input
                    required
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#C8CDD5]">Tipo</label>
                  <div className="flex gap-4 h-[50px] items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tipo"
                        value="Pessoa Fisica"
                        checked={formData.tipo === "Pessoa Fisica"}
                        onChange={handleChange}
                        className="text-blue-600 focus:ring-blue-500 bg-[#0A1020] border-[#1A2642]"
                      />
                      <span className="text-white">Pessoa Fisica</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tipo"
                        value="PJ"
                        checked={formData.tipo === "PJ"}
                        onChange={handleChange}
                        className="text-blue-600 focus:ring-blue-500 bg-[#0A1020] border-[#1A2642]"
                      />
                      <span className="text-white">Empresa (PJ)</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#C8CDD5]">Tipo de projeto</label>
                  <select
                    required
                    name="tipoProjeto"
                    value={formData.tipoProjeto}
                    onChange={handleChange}
                    className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="" disabled>Selecione...</option>
                    <option value="Site">Site / Landing Page</option>
                    <option value="Marketing">Marketing Digital</option>
                    <option value="Chatbot">Chatbot / Automacao</option>
                    <option value="Video">Edicao de Video</option>
                    <option value="Design">Design / Identidade Visual</option>
                    <option value="Planilha">Planilha / Dashboard</option>
                    <option value="Apresentacao">Apresentacao</option>
                    <option value="Evento">Evento / Casamento Digital</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#C8CDD5]">Prazo desejado</label>
                  <select
                    required
                    name="prazo"
                    value={formData.prazo}
                    onChange={handleChange}
                    className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="" disabled>Selecione...</option>
                    <option value="Urgente">Urgente</option>
                    <option value="1-2 semanas">1-2 semanas</option>
                    <option value="1 mes">1 mes</option>
                    <option value="2-3 meses">2-3 meses</option>
                    <option value="Sem prazo definido">Sem prazo definido</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#C8CDD5]">Faixa de investimento</label>
                <select
                  required
                  name="investimento"
                  value={formData.investimento}
                  onChange={handleChange}
                  className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  <option value="" disabled>Selecione...</option>
                  <option value="Ate R$ 500">Ate R$ 500</option>
                  <option value="R$ 500 - R$ 1.000">R$ 500 - R$ 1.000</option>
                  <option value="R$ 1.000 - R$ 3.000">R$ 1.000 - R$ 3.000</option>
                  <option value="R$ 3.000 - R$ 5.000">R$ 3.000 - R$ 5.000</option>
                  <option value="Acima de R$ 5.000">Acima de R$ 5.000</option>
                  <option value="A definir">A definir</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#C8CDD5]">Descricao da ideia ou objetivo</label>
                <textarea
                  required
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#0A1020] border border-[#1A2642] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                  placeholder="Conte um pouco mais sobre o que voce precisa..."
                />
              </div>

              <div className="pt-4 text-center">
                <button type="submit" className="btn-gold w-full md:w-auto px-10 py-4 uppercase tracking-wider font-bold">
                  SOLICITAR PROPOSTA
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
