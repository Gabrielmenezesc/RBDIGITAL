"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Voce apresenta sua ideia." },
  { num: "02", title: "Entendemos seu objetivo." },
  { num: "03", title: "Criamos a estrategia." },
  { num: "04", title: "Desenvolvemos a solucao." },
  { num: "05", title: "Colocamos o projeto no ar." },
  { num: "06", title: "Acompanhamos a evolucao." },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-[#05070B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6 uppercase tracking-wider">
            Voce tem a ideia.<br />Nos construimos o caminho.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop horizontal */}
          <div className="hidden md:block absolute top-[40px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#0B3D91] via-[#1A2642] to-[#C9A227] opacity-30" />
          
          {/* Connecting line - mobile vertical */}
          <div className="md:hidden absolute top-4 bottom-4 left-[39px] w-0.5 bg-gradient-to-b from-[#0B3D91] via-[#1A2642] to-[#C9A227] opacity-30" />

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 flex-1"
              >
                <div className="w-20 h-20 rounded-full glass-card border border-[#3A4E7A] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(11,61,145,0.2)] bg-[#0A1020]">
                  <span className="text-2xl font-heading text-[#C9A227] font-bold">
                    {step.num}
                  </span>
                </div>
                <div className="md:px-2">
                  <p className="text-[#C8CDD5] font-medium text-lg leading-tight">
                    {step.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
