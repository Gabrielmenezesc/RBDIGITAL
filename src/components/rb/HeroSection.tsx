"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "@/components/rb/ParticleField";

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20; // max 20px movement
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const logoPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo-rb-digital.png`;

  return (
    <section
      id="inicio"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#05070B] pt-20 pb-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#071A3A]/20 via-[#05070B] to-[#05070B] pointer-events-none z-0" />
      
      {/* Particle Field */}
      <ParticleField />

      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="relative z-10 flex flex-col items-center text-center container mx-auto px-6 w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          style={{ x: -mousePos.x, y: -mousePos.y }}
          className="mb-6 flex flex-col items-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoPath}
            alt="RB Digital Logo"
            className="w-[100px] md:w-[150px] h-auto object-contain drop-shadow-[0_0_15px_rgba(200,205,213,0.2)]"
          />
          <h2 className="font-heading font-bold text-2xl md:text-3xl mt-4 text-gradient-silver tracking-widest">
            RB DIGITAL
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-gradient-premium">
            DA SUA IDEIA<br />
            PARA O DIGITAL.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-[#C8CDD5] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Sites, marketing, automacao, conteudo, tecnologia e solucoes digitais para pessoas, negocios e projetos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <a
            href="#orcamento"
            className="btn-primary px-8 py-4 rounded-full font-bold text-white bg-[#0B3D91] hover:bg-[#071A3A] transition-all duration-300 shadow-[0_0_20px_rgba(11,61,145,0.4)] w-full sm:w-auto text-center"
          >
            CRIAR MEU PROJETO
          </a>
          <a
            href="https://wa.me/5538991621135"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-4 rounded-full font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            FALAR NO WHATSAPP
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-8"
        >
          <p className="text-[#6F7785] text-sm">
            Brasilia, Goias e projetos para todo o Brasil.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-[#6F7785]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
