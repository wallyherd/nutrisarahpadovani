"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

const PILATES_BENEFITS = [
  "Fortalecimento do 'Core' e coluna",
  "Aumento da flexibilidade e mobilidade",
  "Correção de vícios posturais",
  "Consciência corporal profunda",
  "Alívio de dores musculares crônicas",
  "Melhora da capacidade respiratória",
];

export default function Pilates() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block"
              >
                Método Sarah Padovani
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                Pilates Clínico:<br />O Movimento Inteligente
              </h1>
              <p className="text-slate-600 text-lg md:text-xl font-sans mb-10 max-w-lg leading-relaxed">
                Muito mais que exercícios, o Pilates no Instituto é uma ferramenta terapêutica de precisão para sua saúde física.
              </p>
              <a href="https://wa.me/message/XDMXRDSU475RG1" className="bg-primary text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-secondary transition-all flex items-center gap-2 w-fit">
                <Phone size={18} />
                Agendar Aula Experimental
              </a>
            </div>
            <div className="lg:w-1/2 relative">
               {/* Image Placeholder */}
               <div className="relative aspect-[16/9] w-full overflow-hidden shadow-2xl">
                 <Image src="/hero-pilates.png" alt="Pilates Studio" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="aspect-square relative w-full overflow-hidden bg-off-white">
                   <div className="absolute inset-10 border border-slate-200"></div>
                   <div className="absolute inset-0 flex items-center justify-center p-12">
                      <p className="text-3xl font-serif text-primary/50 text-center italic">"O Pilates desenvolve um corpo uniforme, corrige posturas erradas e restaura a vitalidade física."</p>
                   </div>
                </div>
             </div>
             <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">Por que o Pilates Clinico?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                  {PILATES_BENEFITS.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-slate-100">
                      <CheckCircle2 className="text-accent" size={20} />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
