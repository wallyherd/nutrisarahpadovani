"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Excelência em Movimento e Cuidado",
    subtitle: "Instituto Sarah Padovani Oliboni",
    description: "Equilíbrio, Ciência e Bem-estar em um ambiente premium dedicado à sua saúde.",
    image: "/hero-institucional.png",
    cta: "Agendar Avaliação",
  },
  {
    id: 2,
    title: "Pilates Clínico e Funcional",
    subtitle: "Força e Mobilidade",
    description: "Consciência corporal e fortalecimento profundo com acompanhamento especializado.",
    image: "/hero-pilates.png",
    cta: "Conhecer o Método",
  },
  {
    id: 3,
    title: "Fisioterapia de Alta Performance",
    subtitle: "Reabilitação e Prevenção",
    description: "Tratamentos individualizados para alívio de dor e recuperação funcional.",
    image: "/hero-fisioterapia.png",
    cta: "Nossos Tratamentos",
  },
  {
    id: 4,
    title: "Sua Melhor Versão Todos os Dias",
    subtitle: "Qualidade de Vida",
    description: "Um espaço acolhedor focado em resultados reais para sua saúde e bem-estar.",
    image: "/hero-bem-estar.png",
    cta: "Fale Conosco",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">
                {SLIDES[current].subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-[1.1] text-balance">
                {SLIDES[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 font-sans leading-relaxed max-w-lg">
                {SLIDES[current].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/message/XDMXRDSU475RG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-8 py-4 rounded-none font-bold text-sm tracking-widest uppercase hover:bg-accent transition-all flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  {SLIDES[current].cta}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 right-4 md:right-8 flex gap-2 z-20">
        <button
          onClick={prev}
          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-primary transition-all rounded-none"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-primary transition-all rounded-none"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-4 md:left-8 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1 transition-all duration-500 rounded-none",
              current === i ? "w-12 bg-white" : "w-6 bg-white/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}
