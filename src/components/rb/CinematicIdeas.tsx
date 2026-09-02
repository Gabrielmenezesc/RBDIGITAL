"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const concepts = [
  { title: "Site Cinematográfico", gradient: "from-[#071A3A] to-[#0A1020]" },
  { title: "Landing Page Interativa", gradient: "from-[#0B3D91] to-[#05070B]" },
  { title: "Portal Institucional", gradient: "from-[#112240] to-[#0A1020]" },
  { title: "Site de Casamento", gradient: "from-[#2A1B0C] to-[#05070B]" },
  { title: "Site de Empresa", gradient: "from-[#071A3A] to-[#0B3D91]" },
  { title: "Portfólio Profissional", gradient: "from-[#0E1830] to-[#05070B]" },
  { title: "Página de Evento", gradient: "from-[#261E10] to-[#0A1020]" },
  { title: "Comércio Local", gradient: "from-[#071A3A] to-[#112240]" },
  { title: "Campanha Digital", gradient: "from-[#0B3D91] to-[#071A3A]" },
  { title: "Apresentação Empresarial", gradient: "from-[#1a1c23] to-[#05070B]" }
];

export default function CinematicIdeas() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="py-24 bg-[#05070B] overflow-hidden border-y border-white/5" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-7xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">
            IDEIAS QUE <span className="text-[#C9A227]">GANHAM VIDA</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#C9A227]/50 to-transparent hidden md:block" />
        </motion.div>
      </div>

      <div className="w-full relative">
        <motion.div 
          className="flex gap-6 px-4 md:px-8 cursor-grab active:cursor-grabbing w-max"
          drag="x"
          dragConstraints={{ right: 0, left: -2000 }}
          style={{ x }}
        >
          {concepts.map((concept, idx) => (
            <motion.div 
              key={idx}
              className={`w-[280px] h-[360px] md:w-[320px] md:h-[420px] shrink-0 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group`}
            >
              {/* Abstract Visual Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl group-hover:bg-white/10 transition-colors duration-500" />
              
              {/* Decorational geometric elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#C9A227]/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:border-[#C9A227]/50 transition-colors">
                  <span className="text-white/70 text-xs font-bold">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                  {concept.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 flex justify-center md:hidden">
        <span className="text-xs text-[#6F7785] tracking-widest uppercase flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          Deslize para ver mais
        </span>
      </div>
    </section>
  );
}
