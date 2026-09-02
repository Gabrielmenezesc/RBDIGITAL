"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "VOCÊ APRESENTA SUA IDEIA",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "ENTENDEMOS SEU OBJETIVO",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="6" strokeWidth="1.75" />
        <circle cx="12" cy="12" r="2" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "CRIAMOS A ESTRATÉGIA",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "DESENVOLVEMOS A SOLUÇÃO",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "COLOCAMOS O PROJETO NO AR",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="1.75" />
        <polyline points="12 12 12 16" strokeWidth="1.75" />
        <polyline points="9 13 12 10 15 13" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "ACOMPANHAMOS A EVOLUÇÃO",
    icon: (
      <svg className="w-5 h-5 text-[#071A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeWidth="1.75" />
        <circle cx="9" cy="7" r="4" strokeWidth="1.75" />
        <polyline points="16 11 18 13 22 9" strokeWidth="1.75" />
      </svg>
    ),
  },
];

export default function ProcessFlow() {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="font-heading text-3xl font-black text-[#071A3A] tracking-tight">
            NOSSO PROCESSO
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Você tem a ideia. Nós construímos o caminho.
          </p>
        </div>

        {/* 6 Steps Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          
          {/* Subtle connecting line across cards on large screens */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 border-t border-dashed border-slate-200 -z-0" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 shadow-sm group-hover:border-[#0B3D91] group-hover:bg-blue-50/50 transition-all">
                {step.icon}
              </div>

              {/* Step Number */}
              <span className="text-[11px] font-extrabold text-[#B8860B] tracking-wider mb-1">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-heading font-extrabold text-xs text-[#071A3A] tracking-wider uppercase leading-snug max-w-[140px]">
                {step.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
