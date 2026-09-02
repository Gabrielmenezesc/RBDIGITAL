"use client";

import { motion } from "framer-motion";

const labItems = [
  "Chatbot",
  "Automação",
  "Dashboard",
  "PWA",
  "Sistema de Orçamento",
  "Landing Pages",
  "Sites Experimentais",
  "Integrações",
  "Ferramentas com IA"
];

export default function RBLab() {
  return (
    <section id="rblab" className="section-padding bg-[#05070B] relative overflow-hidden">
      {/* High-tech background grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C8CDD5] via-white to-[#6F7785] tracking-tighter mb-4"
            >
              RB LAB
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#0B3D91] font-bold text-xl tracking-wide uppercase"
            >
              Laboratório de ideias, experiências e tecnologia.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full border border-[#0B3D91] flex items-center justify-center animate-pulse-slow"
          >
            <div className="w-2 h-2 bg-[#C9A227] rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-40 glass-card bg-[#0A1020]/80 border-white/5 hover:border-[#0B3D91]/50 transition-all duration-500 overflow-hidden rounded-xl cursor-default"
            >
              {/* Animated abstract geometric pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`pattern-${idx}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#0B3D91]" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pattern-${idx})`} />
                </svg>
              </div>

              {/* Glowing edge on hover */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0B3D91] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[#6F7785] text-xs font-mono">0{idx + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#0B3D91] transition-colors" />
                </div>
                <h3 className="text-white font-heading text-lg font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#C8CDD5] transition-all">
                  {item}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
