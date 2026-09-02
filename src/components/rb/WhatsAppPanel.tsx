"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "5538991621135";

const options = [
  "Criar um site",
  "Marketing digital",
  "Chatbot para WhatsApp",
  "Vídeo institucional",
  "Design e cartazes",
  "Planilhas inteligentes",
  "Projeto para empresa",
  "Projeto para evento",
  "Projeto institucional",
  "Solicitar orçamento",
];

export default function WhatsAppPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    const text = encodeURIComponent(`Olá! Tenho interesse em: ${option}. Gostaria de saber mais.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200 mb-4 w-80 max-w-[calc(100vw-3rem)] rounded-2xl p-5 shadow-2xl text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading text-base font-extrabold text-[#071A3A]">
                Fale com a RB Digital
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-700 font-bold p-1"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Olá. Como podemos ajudar a transformar sua ideia em um projeto digital?
            </p>

            <div className="flex flex-col gap-1.5 max-h-[50vh] overflow-y-auto pr-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-200 rounded-lg py-2 px-3 text-xs text-left text-slate-700 font-semibold transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Abrir atendimento no WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </div>
  );
}
