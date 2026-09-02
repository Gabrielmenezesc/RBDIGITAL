"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Casamento Digital",
    description:
      "Uma experiencia digital criada para transformar um casamento em uma plataforma completa de informacoes, interacao e apresentacao.",
    link: "https://gabrielmenezesc.github.io/casamento-anny-e-gabriel/",
    isReal: true,
    badge: "",
    preview: (
      <div className="h-full w-full bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/30 dark:to-amber-900/30 p-4 flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 rounded-full border-2 border-rose-300 dark:border-rose-700/50 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-amber-300 dark:border-amber-700/50" />
        </div>
        <div className="w-24 h-4 bg-rose-200 dark:bg-rose-800/50 rounded-full" />
        <div className="w-32 h-3 bg-rose-100 dark:bg-rose-900/30 rounded-full" />
        <div className="flex gap-2 w-full max-w-[80%] mt-4">
          <div className="flex-1 h-20 bg-white/50 dark:bg-black/20 rounded-md" />
          <div className="flex-1 h-20 bg-white/50 dark:bg-black/20 rounded-md" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Portal Institucional Municipal",
    description:
      "Demonstracao conceitual de um portal digital para administracao publica municipal.",
    link: "#",
    isReal: false,
    badge: "DEMONSTRACAO CONCEITUAL",
    preview: (
      <div className="h-full w-full bg-slate-100 dark:bg-slate-900 flex flex-col">
        <div className="h-8 bg-blue-600 dark:bg-blue-800 flex items-center px-4 gap-2">
          <div className="w-6 h-6 bg-white/30 rounded-full" />
          <div className="w-16 h-2 bg-white/50 rounded-full" />
          <div className="ml-auto flex gap-1">
            <div className="w-8 h-2 bg-white/30 rounded-full" />
            <div className="w-8 h-2 bg-white/30 rounded-full" />
          </div>
        </div>
        <div className="flex-1 p-4 grid grid-cols-3 gap-3">
          <div className="col-span-2 space-y-3">
            <div className="h-24 bg-white dark:bg-slate-800 rounded-md p-2 flex flex-col justify-end">
              <div className="w-1/2 h-3 bg-slate-200 dark:bg-slate-700 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 bg-white dark:bg-slate-800 rounded-md" />
              <div className="h-16 bg-white dark:bg-slate-800 rounded-md" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-10 bg-blue-100 dark:bg-blue-900/30 rounded-md" />
            <div className="h-10 bg-blue-100 dark:bg-blue-900/30 rounded-md" />
            <div className="h-10 bg-blue-100 dark:bg-blue-900/30 rounded-md" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Empresa Local",
    description:
      "Demonstracao de site empresarial para negocios locais.",
    link: "#",
    isReal: false,
    badge: "DEMONSTRACAO",
    preview: (
      <div className="h-full w-full bg-gray-50 dark:bg-gray-900 flex flex-col">
        <div className="h-6 flex items-center px-4 justify-between border-b border-gray-200 dark:border-gray-800">
          <div className="w-12 h-2 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div className="flex gap-2">
            <div className="w-4 h-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <div className="w-4 h-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <div className="w-4 h-1 bg-gray-300 dark:bg-gray-700 rounded-full" />
          </div>
        </div>
        <div className="h-20 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
        <div className="flex-1 p-3 grid grid-cols-2 gap-2">
          <div className="h-12 bg-white dark:bg-gray-800 rounded shadow-sm" />
          <div className="h-12 bg-white dark:bg-gray-800 rounded shadow-sm" />
          <div className="h-12 bg-white dark:bg-gray-800 rounded shadow-sm" />
          <div className="h-12 bg-white dark:bg-gray-800 rounded shadow-sm" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Portfolio Profissional",
    description:
      "Demonstracao de um site pessoal e portfolio digital.",
    link: "#",
    isReal: false,
    badge: "DEMONSTRACAO",
    preview: (
      <div className="h-full w-full bg-zinc-100 dark:bg-zinc-950 flex flex-col p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-zinc-300 dark:bg-zinc-800 flex-shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="w-24 h-3 bg-zinc-300 dark:bg-zinc-800 rounded-full" />
            <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800/50 rounded-full" />
            <div className="w-3/4 h-2 bg-zinc-200 dark:bg-zinc-800/50 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1">
          <div className="bg-zinc-200 dark:bg-zinc-900 rounded" />
          <div className="bg-zinc-200 dark:bg-zinc-900 rounded" />
          <div className="bg-zinc-200 dark:bg-zinc-900 rounded" />
          <div className="bg-zinc-200 dark:bg-zinc-900 rounded" />
          <div className="bg-zinc-200 dark:bg-zinc-900 rounded" />
          <div className="bg-zinc-200 dark:bg-zinc-900 rounded" />
        </div>
      </div>
    ),
  },
];

export default function PortfolioSection() {
  return (
    <section id="projetos" className="section-padding bg-[#05070B] relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6 uppercase tracking-wider">
            PROJETOS QUE SAIRAM DO PAPEL.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-[#C9A227] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border border-[#1A2642] hover:border-[#3A4E7A] transition-colors flex flex-col"
            >
              <div className="h-64 bg-[#0A1020] relative p-4 border-b border-[#1A2642]">
                <div className="w-full h-full rounded-lg overflow-hidden border border-[#1A2642] bg-black shadow-lg relative">
                  {/* Browser frame */}
                  <div className="h-6 bg-[#1A2642]/50 flex items-center px-2 gap-1.5 border-b border-[#1A2642]">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  {/* Preview content */}
                  <div className="h-[calc(100%-1.5rem)] w-full">
                    {project.preview}
                  </div>
                  {project.badge && (
                    <div className="absolute top-8 right-2 bg-black/80 backdrop-blur-md text-xs font-bold px-2 py-1 rounded text-white border border-white/10 uppercase tracking-wider">
                      {project.badge}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-heading text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[#C8CDD5] text-sm mb-6 flex-1">
                  {project.description}
                </p>
                <div>
                  {project.isReal ? (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="btn-primary w-full sm:w-auto uppercase text-sm tracking-wider py-2.5">
                        VER PROJETO
                      </button>
                    </Link>
                  ) : (
                    <button className="btn-outline w-full sm:w-auto uppercase text-sm tracking-wider py-2.5 cursor-default opacity-80 hover:opacity-100">
                      VER CONCEITO
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
