"use client";

import React from "react";
import Link from "next/link";
import ThreeHeroBadge from "@/components/rb/ThreeHeroBadge";

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      
      {/* Subtle architecture line art in background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" stroke="currentColor">
          <path d="M100 500 L600 100 L1100 500 Z" strokeWidth="2" />
          <path d="M300 500 Q 600 200 900 500" strokeWidth="2" />
          <path d="M400 500 L600 50 L800 500" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag / Eyebrow */}
            <div className="inline-block">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8860B]">
                RB DIGITAL
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A3A] tracking-tight leading-[1.08]">
              DA SUA IDEIA <br />
              <span className="text-[#B8860B]">PARA</span> O DIGITAL.
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Sites, marketing, automação, conteúdo, tecnologia e soluções digitais para pessoas, negócios e projetos que querem crescer.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contato/"
                className="btn-navy py-3.5 px-7 text-xs font-extrabold tracking-wider rounded-md shadow-md"
              >
                CRIAR MEU PROJETO
              </Link>
              
              <a
                href="https://wa.me/5538991621135"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-outline py-3.5 px-6 text-xs font-extrabold tracking-wider rounded-md flex items-center shadow-sm"
              >
                <WhatsAppIcon />
                FALAR NO WHATSAPP
              </a>
            </div>

            {/* Location Indicator */}
            <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <svg className="w-4 h-4 text-[#B8860B] fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Brasília, Goiás e projetos para todo o Brasil.</span>
            </div>

          </div>

          {/* Right Column: 3D Interactive WebGL Canvas Badge */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <ThreeHeroBadge />
          </div>

        </div>
      </div>
    </section>
  );
}
