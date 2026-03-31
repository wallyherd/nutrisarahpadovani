"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Star, Heart, Shield } from "lucide-react";

export default function Sobre() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Nossa História
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            O Instituto Sarah Padovani
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl font-sans"
          >
            Comprometimento com a excelência técnica e o bem-estar de cada indivíduo.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 border-2 border-accent -rotate-6 scale-105 z-0"></div>
                <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-pilates.png"
                    alt="Especialista Clínica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-serif text-primary">Dra. Sarah Padovani Oliboni</h2>
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed font-sans">
                <p>
                  Com sólida formação clínica e anos de dedicação ao movimento humano, a Dra. Sarah Padovani Oliboni fundou o Instituto com um propósito claro: elevar o padrão do atendimento em fisioterapia e pilates em Sorriso-MT.
                </p>
                <p>
                  Nossa abordagem não se limita ao tratamento de sintomas, mas busca compreender a biomecânica e o estilo de vida de cada paciente, promovendo uma recuperação sustentável e preventiva.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                <div className="flex items-start gap-4">
                  <Award className="text-accent shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Especialista</h4>
                    <p className="text-xs text-slate-500 mt-1">Fisioterapia Clínica e Traumato-Ortopédica.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="text-accent shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Formação</h4>
                    <p className="text-xs text-slate-500 mt-1">Sólida base acadêmica com especializações constantes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Nossos Pilares</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Heart size={32} />, title: "Humanização", text: "Tratamento baseado no respeito e na escuta ativa de cada paciente." },
              { icon: <Star size={32} />, title: "Excelência", text: "Busca incessante pelas melhores técnicas e evidências científicas." },
              { icon: <Shield size={32} />, title: "Ética", text: "Compromisso com a transparência e a integridade profissional." },
            ].map((pilar, i) => (
              <div key={i} className="text-center flex flex-col items-center gap-6 p-8 bg-white shadow-sm border border-slate-100">
                <div className="text-secondary">{pilar.icon}</div>
                <h3 className="font-serif font-bold text-xl text-primary">{pilar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">{pilar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
