"use client";

import { motion } from "framer-motion";

export default function BrasiliaSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#05070B]">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0B3D91]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <svg className="w-full max-w-2xl mx-auto h-auto opacity-80" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M100 150 L200 50 L300 150 M400 150 C400 150, 450 50, 500 150 C550 50, 600 150, 600 150 M700 50 V150 M650 100 H750" 
              stroke="url(#paint0_linear)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              d="M0 180 H800"
              stroke="#1A2B4C"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="100" y1="100" x2="750" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0B3D91" />
                <stop offset="0.5" stopColor="#C9A227" />
                <stop offset="1" stopColor="#0B3D91" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight"
        >
          DE BRASILIA E GOIAS <br className="hidden md:block"/> PARA O DIGITAL.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Uma empresa com identidade regional e visao digital para atender projetos em diferentes regioes do Brasil.
        </motion.p>
      </div>
    </section>
  );
}
