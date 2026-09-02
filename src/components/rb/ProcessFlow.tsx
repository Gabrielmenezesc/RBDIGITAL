"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", label: "IDEIA" },
  { id: "02", label: "ESTRATÉGIA" },
  { id: "03", label: "DESIGN" },
  { id: "04", label: "TECNOLOGIA" },
  { id: "05", label: "PUBLICAÇÃO" },
  { id: "06", label: "RESULTADO", isFinal: true }
];

export default function ProcessFlow() {
  return (
    <section className="section-padding bg-[#05070B] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0B3D91]/10 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-wider"
          >
            NÃO ENTREGAMOS APENAS <span className="text-[#0B3D91]">UM SITE.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#C8CDD5] max-w-3xl mx-auto"
          >
            Entendemos o objetivo. Pensamos a experiência. Criamos a solução.
          </motion.p>
        </div>

        <div className="relative max-w-lg mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#0B3D91]/20 via-[#0B3D91]/60 to-[#C9A227]/60" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-center justify-center group"
              >
                {/* Connecting glowing line for active state effect */}
                {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "100%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 bg-[#0B3D91] shadow-[0_0_8px_rgba(11,61,145,0.6)] origin-top z-0"
                    style={{ height: 'calc(100% + 2rem)' }}
                  />
                )}

                <div className={`
                  relative z-10 flex items-center justify-center w-24 h-24 rounded-full 
                  glass-card border-2 transition-all duration-300
                  ${step.isFinal 
                    ? 'border-[#C9A227] bg-[#0E1830] shadow-[0_0_25px_rgba(201,162,39,0.2)]' 
                    : 'border-[#0B3D91]/50 bg-[#0A1020] hover:border-[#0B3D91] hover:shadow-[0_0_20px_rgba(11,61,145,0.3)]'}
                `}>
                  <div className="text-center">
                    <span className={`block text-xs font-bold mb-1 ${step.isFinal ? 'text-[#C9A227]' : 'text-[#6F7785]'}`}>
                      {step.id}
                    </span>
                    <span className={`block text-sm font-bold tracking-widest ${step.isFinal ? 'text-white' : 'text-[#C8CDD5]'}`}>
                      {step.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
