"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Shield, Heart, Phone, ArrowLeft } from "lucide-react";

export default function Fisioterapia() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">Reabilitação & Prevenção</span>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Fisioterapia Especializada</h1>
              <p className="text-slate-300 text-lg md:text-xl font-sans mb-10 max-w-lg leading-relaxed">
                Tratamentos baseados em evidência científica para recuperar sua mobilidade e qualidade de vida.
              </p>
              <a href="https://wa.me/message/XDMXRDSU475RG1" className="bg-accent text-primary px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white transition-all inline-flex items-center gap-2">
                <Phone size={18} />
                Agendar Consulta
              </a>
            </div>
            <div className="lg:w-1/2 relative bg-white/5 p-4 rounded-none h-full">
               <div className="aspect-[16/9] relative overflow-hidden shadow-2xl">
                 <Image src="/hero-fisioterapia.png" alt="Clinical Treatment" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Grid */}
      <section className="py-24 bg-white font-sans">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 text-balance">
             <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Áreas de Atuação Clínica</h2>
             <p className="text-slate-500 leading-relaxed">Atuamos em diversas frentes para garantir que você retome suas atividades diárias sem limitações físicas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Activity size={32} />, title: "Traumato-Ortopedia", text: "Tratamento de fraturas, entorses, tendinites e lesões osteoarticulares." },
              { icon: <Shield size={32} />, title: "Pós-Operatório", text: "Reabilitação acelerada e segura após procedimentos cirúrgicos." },
              { icon: <Heart size={32} />, title: "Dor Crônica", text: "Protocolos especializados para alívio de dores complexas e persistentes." },
              { icon: <Activity size={32} />, title: "Gerontologia", text: "Acompanhamento focado na manutenção da independência funcional no idoso." },
              { icon: <Shield size={32} />, title: "Prevenção Esportiva", text: "Análise biomecânica para evitar lesões em atletas amadores e profissionais." },
              { icon: <Heart size={32} />, title: "Reumatologia", text: "Manejo conservador para condições inflamatórias e autoimunes." },
            ].map((specialty, i) => (
              <div key={i} className="flex flex-col items-start gap-6 p-10 border border-slate-100 hover:border-accent transition-all hover:bg-off-white">
                <div className="text-secondary">{specialty.icon}</div>
                <h3 className="font-serif font-bold text-xl text-primary">{specialty.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{specialty.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
