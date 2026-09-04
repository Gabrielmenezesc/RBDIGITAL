"use client";

import React from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14 text-xs">
          
          {/* Col 1: Brand & Social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src={assetPath("/logo-rb-digital.png")}
                alt="RB Digital Logo"
                className="w-10 h-10 object-contain mix-blend-multiply"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base text-[#071A3A] tracking-wider leading-none">
                  RB DIGITAL
                </span>
                <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                  DA SUA IDEIA PARA O DIGITAL
                </span>
              </div>
            </Link>

            <p className="text-slate-500 text-xs leading-relaxed font-normal">
              Tecnologia, criatividade e estratégia para projetos que merecem ser vistos.
            </p>

            {/* Social Icons with official brand colors */}
            <div className="flex items-center gap-2 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5538991621135"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="font-heading font-black text-xs text-[#071A3A] tracking-wider uppercase mb-4">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-slate-500 font-medium">
              <li><Link href="/" className="hover:text-[#071A3A] transition-colors">Início</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Soluções</Link></li>
              <li><Link href="/projetos/" className="hover:text-[#071A3A] transition-colors">Projetos</Link></li>
              <li><Link href="/rblab/" className="hover:text-[#071A3A] transition-colors">RB Lab</Link></li>
              <li><Link href="/sobre/" className="hover:text-[#071A3A] transition-colors">Sobre</Link></li>
              <li><Link href="/empresa/" className="hover:text-[#071A3A] transition-colors">Empresa</Link></li>
              <li><Link href="/contato/" className="hover:text-[#071A3A] transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div>
            <h4 className="font-heading font-black text-xs text-[#071A3A] tracking-wider uppercase mb-4">
              SOLUÇÕES
            </h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Criação de Sites</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Marketing Digital</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Redes Sociais</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Vídeos</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Design</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Chatbots</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Integrações</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Planilhas</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">Eventos</Link></li>
              <li><Link href="/solucoes/" className="hover:text-[#071A3A] transition-colors">PowerPoint</Link></li>
            </ul>
          </div>

          {/* Col 4: Empresa */}
          <div>
            <h4 className="font-heading font-black text-xs text-[#071A3A] tracking-wider uppercase mb-4">
              EMPRESA
            </h4>
            <ul className="space-y-2.5 text-slate-500 font-medium">
              <li><Link href="/sobre/" className="hover:text-[#071A3A] transition-colors">Sobre a Empresa</Link></li>
              <li><Link href="/empresa/" className="hover:text-[#071A3A] transition-colors">Informações</Link></li>
              <li><Link href="/empresa/" className="hover:text-[#071A3A] transition-colors">CNAES</Link></li>
              <li><Link href="/empresa/" className="hover:text-[#071A3A] transition-colors">Sócio-Administrador</Link></li>
              <li><Link href="/empresa/" className="hover:text-[#071A3A] transition-colors">Localização</Link></li>
            </ul>
          </div>

          {/* Col 5: Contato Oficial */}
          <div>
            <h4 className="font-heading font-black text-xs text-[#071A3A] tracking-wider uppercase mb-4">
              REDE BRASILIA NEWS LTDA
            </h4>
            <div className="space-y-3 text-slate-500 font-medium">
              <p>CNPJ: 43.209.040/0001-50</p>
              <p>Valparaíso de Goiás - GO</p>
              
              <div className="pt-2 flex items-center gap-2 text-[#071A3A] font-bold">
                <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>+55 38 99162-1135</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-4 h-4 text-slate-400 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" />
                  <polyline points="22,6 12,13 2,6" strokeWidth="2" />
                </svg>
                <span>reserva@rbdigital.com.br</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-normal">
          <div>
            © 2025 RB Digital - Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6">
            <Link href={`${basePath}/privacidade/`} className="hover:text-slate-700 transition-colors">
              Política de Privacidade
            </Link>
            <Link href={`${basePath}/privacidade/`} className="hover:text-slate-700 transition-colors">
              Termos de Uso
            </Link>
          </div>

          <div>
            Desenvolvido por <strong className="text-[#071A3A] font-bold">RB Digital</strong>
          </div>
        </div>

      </div>
    </footer>
  );
}
