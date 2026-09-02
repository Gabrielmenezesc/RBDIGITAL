"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Criação de Sites",
    description: "Criamos sites institucionais, comerciais, landing pages, portais, portfólios, páginas pessoais, projetos para eventos e experiências digitais.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre a Criação de Sites."
  },
  {
    title: "Marketing Digital",
    description: "Estratégia de posicionamento, divulgação, presença digital e campanhas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Marketing Digital."
  },
  {
    title: "Engajamento para Redes Sociais",
    description: "Estratégias de conteúdo, planejamento e ações para fortalecer a presença digital.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Engajamento para Redes Sociais."
  },
  {
    title: "Produção de Vídeos",
    description: "Vídeos institucionais, promocionais, reels, apresentações e vídeos com conceito cinematográfico.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Produção de Vídeos."
  },
  {
    title: "Design e Cartazes",
    description: "Cartazes, banners, flyers, apresentações e materiais digitais.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Design e Cartazes."
  },
  {
    title: "Chatbots para WhatsApp",
    description: "Atendimento automatizado, captação de contatos, respostas automáticas e organização de atendimento.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Chatbots para WhatsApp."
  },
  {
    title: "Integrações",
    description: "Conectamos ferramentas, formulários, sistemas, APIs, páginas, automações e canais digitais.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Integrações."
  },
  {
    title: "Blogs e Sites Pessoais",
    description: "Blogs profissionais, portfólios, páginas pessoais e presença digital.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Blogs e Sites Pessoais."
  },
  {
    title: "Planilhas Inteligentes",
    description: "Planilhas de gestão, indicadores, dashboards, controles financeiros e relatórios.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="3" x2="21" y1="9" y2="9" />
        <line x1="3" x2="21" y1="15" y2="15" />
        <line x1="9" x2="9" y1="3" y2="21" />
        <line x1="15" x2="15" y1="3" y2="21" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Planilhas Inteligentes."
  },
  {
    title: "Orçamentos para Eventos",
    description: "Sistemas e planilhas para controle de custos, fornecedores, convidados e orçamento de eventos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Orçamentos para Eventos."
  },
  {
    title: "PowerPoint Profissional",
    description: "Apresentações comerciais, empresariais, acadêmicas e institucionais.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre PowerPoint Profissional."
  },
  {
    title: "Soluções Digitais Personalizadas",
    description: "Projetos criados de acordo com a necessidade específica de cada cliente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    message: "Olá, gostaria de saber mais sobre Soluções Digitais Personalizadas."
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesGrid() {
  const whatsappNumber = "5538991621135";

  return (
    <section id="solucoes" className="section-padding bg-[#05070B] relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-gradient-premium mb-6"
          >
            Tecnologia para transformar ideias em realidade.
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-card p-6 flex flex-col h-full rounded-2xl group hover:border-[#C9A227]/40 hover:shadow-[0_0_20px_rgba(201,162,39,0.15)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 text-[#C9A227] opacity-90 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h3>
              <p className="text-[#C8CDD5] text-sm flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center text-sm font-semibold text-[#0B3D91] hover:text-[#C9A227] transition-colors"
                aria-label={`Entrar em contato sobre ${service.title}`}
              >
                Conhecer solução
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
