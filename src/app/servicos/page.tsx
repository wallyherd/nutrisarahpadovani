"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Activity, Shield, Thermometer, UserCheck, Star } from "lucide-react";

export default function Servicos() {
  const allServices = [
    { title: "Pilates", icon: <Activity size={24} />, description: "Reformer e solo focados em precisão e controle." },
    { title: "Fisioterapia", icon: <Shield size={24} />, description: "Reabilitação clínica especializada." },
    { title: "Ventosaterapia", icon: <Thermometer size={24} />, description: "Alívio de tensões e melhora da circulação." },
    { title: "RPG", icon: <UserCheck size={24} />, description: "Reeducação Postural Global para alinhamento." },
    { title: "Liberação Miofascial", icon: <Heart size={24} />, description: "Manobras manuais para relaxamento muscular." },
    { title: "Acompanhamento Preventivo", icon: <Star size={24} />, description: "Prevenção de lesões de longo prazo." },
  ];

  return (
    <>
      <Navbar />
      <section className="pt-40 pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 text-balance">
             <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Portfólio de Cuidado</span>
             <h1 className="text-3xl md:text-5xl font-serif text-primary mb-6">Nossos Serviços</h1>
             <p className="text-slate-500">Oferecemos um leque de tratamentos que se integram para um resultado mais completo e duradouro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <div key={i} className="p-8 border border-slate-100 hover:border-accent transition-all group hover:bg-off-white">
                 <div className="mb-6 p-4 bg-off-white inline-block group-hover:bg-accent/10 transition-colors text-secondary">{service.icon}</div>
                 <h3 className="text-xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed font-sans">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
