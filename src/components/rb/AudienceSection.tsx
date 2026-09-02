"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const audiences = [
  {
    id: "pf",
    title: "Pessoa Fisica",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    items: ["Profissionais", "Autonomos", "Criadores", "Artistas", "Projetos pessoais"]
  },
  {
    id: "empresas",
    title: "Empresas",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: ["Pequenos negocios", "Comercios", "Prestadores de servicos", "Empresas locais"]
  },
  {
    id: "eventos",
    title: "Eventos",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    items: ["Casamentos", "Festas", "Eventos corporativos", "Projetos especiais"]
  },
  {
    id: "instituicoes",
    title: "Instituicoes",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: ["Igrejas", "Associacoes", "Projetos sociais", "Organizacoes"]
  },
  {
    id: "publicos",
    title: "Projetos Publicos",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    items: ["Prefeituras", "Projetos municipais", "Portais institucionais", "Campanhas informativas"]
  }
];

export default function AudienceSection() {
  const [activeId, setActiveId] = useState(audiences[0].id);

  return (
    <section className="section-padding bg-[#0A1020] relative border-y border-[#1A2642]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6 uppercase tracking-wider">
            PARA QUEM TRABALHAMOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs Sidebar */}
          <div className="md:w-1/3 flex flex-col gap-2">
            {audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => setActiveId(aud.id)}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all ${
                  activeId === aud.id
                    ? "bg-[#0E1830] border border-[#3A4E7A] text-white shadow-[0_0_15px_rgba(11,61,145,0.3)]"
                    : "bg-transparent border border-transparent text-[#6F7785] hover:text-[#C8CDD5] hover:bg-[#0E1830]/50"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeId === aud.id ? "bg-blue-600/20 text-blue-400" : "bg-[#1A2642] text-[#6F7785]"}`}>
                  {aud.icon}
                </div>
                <span className="font-heading font-medium tracking-wide">{aud.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:w-2/3">
            <div className="glass-card rounded-2xl p-8 min-h-[300px] border border-[#1A2642] flex flex-col justify-center relative overflow-hidden bg-[#05070B]/50">
              <AnimatePresence mode="wait">
                {audiences.map(
                  (aud) =>
                    activeId === aud.id && (
                      <motion.div
                        key={aud.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                            {aud.icon}
                          </div>
                          <h3 className="text-2xl font-heading text-white">{aud.title}</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {aud.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
                              <span className="text-[#C8CDD5] text-lg">{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
