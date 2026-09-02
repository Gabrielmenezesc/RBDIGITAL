"use client";

import { motion } from "framer-motion";

export default function CompanyInfo() {
  const secondaryCnaes = [
    { code: "62.03-1-00", desc: "Desenvolvimento e licenciamento de programas de computador" },
    { code: "82.30-0-01", desc: "Servicos de organizacao de feiras e congressos" },
    { code: "73.11-4-00", desc: "Agencias de publicidade" },
    { code: "73.20-3-00", desc: "Pesquisas de mercado e de opiniao publica" },
    { code: "79.11-2-00", desc: "Agencias de viagens" },
    { code: "79.12-1-00", desc: "Operadores turisticos" },
    { code: "79.90-2-00", desc: "Servicos de reservas e outros servicos de turismo" },
    { code: "90.01-9-01", desc: "Producao teatral" },
    { code: "90.01-9-05", desc: "Producao musical" },
  ];

  return (
    <section id="empresa" className="section-padding relative bg-[#05070B]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-center font-bold mb-16 text-white uppercase tracking-wider"
        >
          Informacoes Empresariais
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Dados Cadastrais</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">CNPJ</span>
                  <span className="text-gray-200 font-medium">43.209.040/0001-50</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Razao Social</span>
                  <span className="text-gray-200 font-medium">Rede Brasilia News LTDA</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Nome Fantasia</span>
                  <span className="text-gray-200 font-medium">RB Digital</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Data de abertura</span>
                  <span className="text-gray-200 font-medium">20/08/2021</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Porte</span>
                  <span className="text-gray-200 font-medium">Microempresa</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Natureza Juridica</span>
                  <span className="text-gray-200 font-medium">Sociedade Empresaria Limitada</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Capital Social</span>
                  <span className="text-gray-200 font-medium">R$ 50.000,00</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Situacao cadastral</span>
                  <span className="text-[#25D366] font-medium">Ativa</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Quadro Societario</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">Socio-Administrador</span>
                  <span className="text-gray-200 font-medium">Gabriel de Menezes Cardoso</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Qualificacao</span>
                  <span className="text-gray-200 font-medium">Socio-Administrador</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-gold p-8 rounded-2xl"
            >
              <h3 className="text-lg font-bold text-white mb-4">CNAE Principal</h3>
              <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                <span className="text-[#C9A227] font-bold text-xl block mb-2">73.19-0-02</span>
                <span className="text-gray-200 text-sm font-medium">Promocao de vendas</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider text-gray-400">Atividades Secundarias</h3>
              <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {secondaryCnaes.map((cnae, i) => (
                  <div key={i} className="surface-card p-3 rounded-lg border border-white/5">
                    <span className="text-[#0B3D91] font-bold text-sm block mb-1">{cnae.code}</span>
                    <span className="text-gray-400 text-xs">{cnae.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
