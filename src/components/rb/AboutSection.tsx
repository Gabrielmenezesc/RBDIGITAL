"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-center font-bold mb-16 text-white"
        >
          Uma empresa. Duas forcas.
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card flex-1 w-full md:w-auto p-8 rounded-2xl flex items-center justify-center min-h-[160px] text-center"
          >
            <h3 className="text-xl font-bold text-gray-200 tracking-wide">REDE BRASILIA NEWS LTDA</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-[#C9A227] font-light hidden md:block"
          >
            +
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl text-[#C9A227] font-light block md:hidden"
          >
            +
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-gold flex-1 w-full md:w-auto p-8 rounded-2xl flex items-center justify-center min-h-[160px] text-center"
          >
            <h3 className="text-xl font-bold text-white tracking-wide">RB DIGITAL</h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center">
            A Rede Brasilia News LTDA atua em comunicacao, promocao, tecnologia, publicidade, projetos digitais, eventos e iniciativas relacionadas ao turismo e conteudo. Dentro desse ecossistema, a RB Digital concentra a criacao de experiencias digitais, tecnologia, design, automacao e solucoes personalizadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
