"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/assetPath";

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const navLinks = [
  { name: "INÍCIO", href: "/" },
  { name: "SOLUÇÕES", href: "/solucoes/" },
  { name: "PROJETOS", href: "/projetos/" },
  { name: "RB LAB", href: "/rblab/" },
  { name: "SOBRE", href: "/sobre/" },
  { name: "EMPRESA", href: "/empresa/" },
  { name: "CONTATO", href: "/contato/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "/RBDIGITAL/")) return true;
    if (href !== "/" && pathname?.includes(href.replace(/\//g, ""))) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={assetPath("/logo-rb-digital.png")}
              alt="RB Digital Logo"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl text-[#071A3A] tracking-wider leading-none">
              RB DIGITAL
            </span>
            <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
              DA SUA IDEIA PARA O DIGITAL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = isCurrent(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-wider transition-all relative py-1 ${
                  active
                    ? "text-[#071A3A] border-b-2 border-[#B8860B]"
                    : "text-slate-600 hover:text-[#071A3A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://wa.me/5538991621135"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy py-2.5 px-5 text-xs font-bold rounded-md flex items-center shadow-sm"
          >
            <WhatsAppIcon />
            FALAR NO WHATSAPP
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#071A3A]"
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const active = isCurrent(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-bold ${
                  active ? "text-[#071A3A] font-black pl-2 border-l-2 border-[#B8860B]" : "text-slate-700 hover:text-[#071A3A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href="https://wa.me/5538991621135"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy w-full py-3 text-xs font-bold rounded-md flex items-center justify-center"
            >
              <WhatsAppIcon />
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
