"use client";

import React, { useState } from "react";

export default function CompanyInfo() {
  const [modalCertidoes, setModalCertidoes] = useState(false);

  return (
    <section id="empresa" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Informações Empresariais (span 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading font-black text-xl text-[#071A3A] tracking-wider uppercase mb-6 pb-3 border-b border-slate-100">
              INFORMAÇÕES EMPRESARIAIS
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4 text-xs">
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">CNPJ</span>
                <span className="font-bold text-[#071A3A]">43.209.040/0001-50</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Porte</span>
                <span className="font-bold text-[#071A3A]">Microempresa</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Situação Cadastral</span>
                <span className="font-bold text-emerald-700">Ativa</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Período Simples</span>
                <span className="font-bold text-[#071A3A]">20/08/2021 a 31/12/2023</span>
              </div>

              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Razão Social</span>
                <span className="font-bold text-[#071A3A]">Rede Brasilia News LTDA</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Natureza Jurídica</span>
                <span className="font-bold text-[#071A3A]">Sociedade Empresária Limitada</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Data da Situação</span>
                <span className="font-bold text-[#071A3A]">25/01/2025</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Sócio-Administrador</span>
                <span className="font-bold text-[#071A3A]">Gabriel de Menezes Cardoso</span>
              </div>

              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Nome Fantasia</span>
                <span className="font-bold text-[#071A3A]">RB Digital</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Capital Social</span>
                <span className="font-bold text-[#071A3A]">R$ 50.000,00</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Optante pelo MEI</span>
                <span className="font-bold text-[#071A3A]">Não</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Qualificação</span>
                <span className="font-bold text-[#071A3A]">Sócio-Administrador</span>
              </div>

              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Data de Abertura</span>
                <span className="font-bold text-[#071A3A]">20/08/2021</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Tipo</span>
                <span className="font-bold text-[#071A3A]">Matriz</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold mb-0.5">Optante pelo Simples</span>
                <span className="font-bold text-[#071A3A]">Não</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => setModalCertidoes(true)}
                className="btn-light-outline py-2.5 px-6 text-xs font-extrabold tracking-wider rounded-md"
              >
                VER CERTIDÕES E DOCUMENTOS
              </button>
            </div>
          </div>

          {/* Right: Onde Estamos (span 5) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading font-black text-xl text-[#071A3A] tracking-wider uppercase mb-6 pb-3 border-b border-slate-100">
              ONDE ESTAMOS
            </h3>

            <div className="space-y-4 mb-6 text-xs text-slate-700">
              <p className="font-semibold text-sm text-[#071A3A]">
                Rua 3, S/N <br />
                Quadra 03, Casa 09 <br />
                Parque Rio Branco <br />
                Valparaíso de Goiás - GO <br />
                CEP 72870-055
              </p>
            </div>

            <div className="mb-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+3+Parque+Rio+Branco+Valparaíso+de+Goiás+GO+72870-055"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-outline w-full py-2.5 text-xs font-extrabold text-center rounded-md"
              >
                ABRIR LOCALIZAÇÃO
              </a>
            </div>

            {/* Visual Map Snapshot */}
            <div className="w-full h-44 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center">
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
              
              {/* Road lines simulation */}
              <svg className="absolute inset-0 w-full h-full stroke-amber-200/80 stroke-2" fill="none">
                <path d="M0 80 Q 150 40 300 120 T 600 60" />
                <path d="M120 0 L 220 200" />
                <path d="M280 0 L 180 200" strokeWidth="3" className="stroke-slate-300" />
              </svg>

              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="w-8 h-8 rounded-full bg-[#071A3A] text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-400 mt-1" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Certidões Modal */}
      {modalCertidoes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-8 text-left shadow-2xl relative">
            <button
              onClick={() => setModalCertidoes(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 font-bold text-xl"
            >
              ✕
            </button>
            <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest">
              DOCUMENTAÇÃO JURÍDICA
            </span>
            <h3 className="font-heading font-black text-xl text-[#071A3A] mt-1 mb-4">
              Certidões e Atos Constitutivos
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              A <strong>Rede Brasilia News LTDA (RB Digital)</strong> é uma empresa devidamente registrada perante a Receita Federal do Brasil e a Junta Comercial sob o CNPJ <strong>43.209.040/0001-50</strong>, com situação cadastral <strong>ATIVA</strong> e regularizada.
            </p>
            <div className="space-y-2 mb-6 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span>Comprovante de Inscrição e Situação Cadastral (CNPJ)</span>
                <span className="text-emerald-700 font-bold">Regular</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded flex justify-between items-center">
                <span>Certidão Negativa de Débitos Federais</span>
                <span className="text-emerald-700 font-bold">Disponível</span>
              </div>
            </div>
            <button
              onClick={() => setModalCertidoes(false)}
              className="btn-navy w-full py-2.5 text-xs font-bold rounded-md"
            >
              FECHAR
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
