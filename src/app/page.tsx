"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Activity, Heart, Shield, Users, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Pilates Clínico",
    description: "Foco em reabilitação, correção postural e fortalecimento com acompanhamento de fisioterapeuta.",
    icon: <Activity className="text-secondary" size={32} />,
    href: "/pilates",
  },
  {
    title: "Fisioterapia",
    description: "Tratamento especializado para dores agudas e crônicas, pós-operatório e prevenção de lesões.",
    icon: <Shield className="text-secondary" size={32} />,
    href: "/fisioterapia",
  },
  {
    title: "Ventosaterapia",
    description: "Melhora da circulação, relaxamento muscular profundo e alívio de tensões miofasciais.",
    icon: <Heart className="text-secondary" size={32} />,
    href: "/servicos",
  },
  {
    title: "RPG e Postura",
    description: "Reeducação Postural Global para alinhamento da coluna e equilíbrio biomecânico.",
    icon: <Users className="text-secondary" size={32} />,
    href: "/servicos",
  },
];

const REVIEWS = [
  { name: "Mariana Silva", comment: "O atendimento da Dra. Sarah é impecável. Em poucas sessões de fisioterapia já senti uma melhora absurda na minha dor lombar.", stars: 5 },
  { name: "Carlos Eduardo", comment: "O estúdio de Pilates é super moderno e o acompanhamento é realmente individualizado. Sinto-me muito mais disposto.", stars: 5 },
  { name: "Ana Paula", comment: "Profissionalismo e dedicação definem o Instituto. Recomendo a todos em Sorriso que buscam qualidade de vida.", stars: 5 },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />

      {/* Intro Section - Apresentação */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border-8 border-off-white shadow-2xl">
                <Image
                  src="/hero-institucional.png" // Using the clinic image as placeholder for professional photo
                  alt="Dr. Sarah Padovani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 text-white hidden md:block">
                <span className="text-4xl font-serif font-bold block mb-1">10+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Anos de Experiência</span>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-8">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs">Sobre o Instituto</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight text-balance">
                Ciência aplicada ao cuidado e bem-estar integral.
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-lg">
                O Instituto Sarah Padovani Oliboni nasceu do desejo de oferecer um atendimento humanizado e técnico de alto nível em Sorriso-MT. Nossa missão é proporcionar saúde através do movimento inteligente e da fisioterapia baseada em evidência.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Equipe Especializada",
                  "Atendimento Individualizado",
                  "Ambiente Terapêutico Premium",
                  "Tecnologia e Evidência",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={20} />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a href="/sobre" className="group flex items-center gap-3 text-primary font-bold uppercase text-xs tracking-widest hover:text-secondary transition-colors">
                  Saiba mais sobre nossa história
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs">Nossos Serviços</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6 leading-tight">
              Especialidades focadas no seu equilíbrio e recuperação.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 border border-slate-100 hover:border-accent transition-all group flex flex-col h-full"
              >
                <div className="mb-8 p-4 bg-off-white inline-block group-hover:bg-accent/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <a href={service.href} className="text-xs font-bold uppercase tracking-tighter text-primary flex items-center gap-2 group-hover:text-secondary transition-colors">
                  Ver detalhes
                  <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Banner - Pilates com Fisioterapeuta */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                A precisão da fisioterapia<br />unida à fluidez do pilates.
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl font-sans">
                Diferente do pilates convencional, aqui todas as aulas são ministradas por fisioterapeutas. Isso garante que cada movimento seja adaptado às suas necessidades clínicas, prevenindo lesões e maximizando resultados.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-bold font-serif text-accent text-xl">01</div>
                  <span className="text-sm font-semibold tracking-wide uppercase">Diagnóstico Funcional</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-bold font-serif text-accent text-xl">02</div>
                  <span className="text-sm font-semibold tracking-wide uppercase">Acompanhamento Clínico</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center font-bold font-serif text-accent text-xl">03</div>
                  <span className="text-sm font-semibold tracking-wide uppercase">Resultados Duradouros</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <a 
                href="https://wa.me/message/XDMXRDSU475RG1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent text-primary px-10 py-5 font-bold uppercase text-sm tracking-widest hover:bg-white transition-all block text-center shadow-2xl active:scale-95"
              >
                Inicie sua jornada hoje
              </a>
            </div>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl -mr-48 -mt-48 rounded-full"></div>
      </section>

      {/* Reviews/Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs">Experiências</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mt-4">O que nossos pacientes dizem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.name} className="p-8 border border-slate-100 bg-off-white relative flex flex-col gap-6">
                <div className="flex gap-1 text-accent">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic font-sans text-sm leading-relaxed flex-1">
                  "{review.comment}"
                </p>
                <div>
                  <span className="font-bold text-primary block text-sm">{review.name}</span>
                  <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Paciente do Instituto</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-10 leading-tight">Pronto para transformar sua saúde através do movimento?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/message/XDMXRDSU475RG1" className="bg-primary text-white px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-secondary transition-all shadow-xl">
              Agendar Avaliação agora
            </a>
            <a href="/contato" className="border-2 border-primary text-primary px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all">
              Falar com a recepção
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
