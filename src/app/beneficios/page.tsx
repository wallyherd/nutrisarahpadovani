"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Star, TrendingUp, ShieldCheck, HeartPulse, UserCheck } from "lucide-react";

export default function Beneficios() {
  const benefits = [
    { title: "Saúde da Coluna", icon: <ShieldCheck size={32} />, text: "Prevenção de hérnias, alívio de escolioses e melhora da postura estrutural." },
    { title: "Performance Física", icon: <TrendingUp size={32} />, text: "Aumento da força muscular e da capacidade respiratória para o dia a dia." },
    { title: "Equilíbrio Mental", icon: <HeartPulse size={32} />, text: "Redução do estresse e melhora da concentração através da respiração no Pilates." },
    { title: "Recuperação Ágil", icon: <UserCheck size={32} />, text: "Protocolos de fisioterapia que aceleram a volta às atividades sem dor." },
    { title: "Qualidade de Vida", icon: <Star size={32} />, text: "Longevidade e independência funcional em todas as fases da vida." },
    { title: "Cuidado Individual", icon: <CheckCircle2 size={32} />, text: "Cada sessão é planejada especificamente para o seu biotipo e necessidades." },
  ];

  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 text-balance">
             <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Vantagens do Instituto</span>
             <h1 className="text-3xl md:text-5xl font-serif text-primary mb-6">Por que escolher o nosso método?</h1>
             <p className="text-slate-500">Unimos a tradição do Pilates com o rigor técnico da Fisioterapia moderna.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 p-10 bg-off-white hover:bg-white border border-transparent hover:border-slate-100 transition-all shadow-sm">
                 <div className="text-accent">{benefit.icon}</div>
                 <h3 className="text-xl font-serif font-bold text-primary">{benefit.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
