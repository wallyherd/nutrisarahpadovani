"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Send, Mail, Clock } from "lucide-react";

export default function Contato() {
  return (
    <>
      <Navbar />
      <section className="pt-40 py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Fale Conosco</span>
                <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">Estamos prontos para atender você.</h1>
                
                <div className="flex flex-col gap-8 mb-12">
                   <div className="flex items-start gap-4 p-6 bg-off-white">
                      <MapPin className="text-accent" size={28} />
                      <div className="flex flex-col">
                         <span className="font-bold text-primary mb-2">Localização</span>
                         <p className="text-slate-600 text-sm leading-relaxed">
                            Avenida Natalino João Brescansin, N° 1968.<br />
                            CEP 78890-179 - Centro. Sorriso, Mato Grosso.
                         </p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4 p-6 bg-off-white">
                      <Phone className="text-accent" size={28} />
                      <div className="flex flex-col">
                         <span className="font-bold text-primary mb-2">Telefone & WhatsApp</span>
                         <a href="https://wa.me/message/XDMXRDSU475RG1" className="text-slate-600 hover:text-primary transition-colors">(66) 99665-XXXX</a>
                      </div>
                   </div>

                   <div className="flex items-start gap-4 p-6 bg-off-white">
                      <Clock className="text-accent" size={28} />
                      <div className="flex flex-col">
                         <span className="font-bold text-primary mb-2">Horário de Funcionamento</span>
                         <p className="text-slate-600 text-sm leading-relaxed">Segunda a Sexta: 07h às 19h<br />Sábados: Sob agendamento</p>
                      </div>
                   </div>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.instagram.com/p/DFvzMSGRWh1/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-4 hover:bg-secondary transition-all shadow-lg active:scale-95">
                        <Instagram size={24} />
                    </a>
                    <a href="https://wa.me/message/XDMXRDSU475RG1" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-4 hover:bg-secondary transition-all shadow-lg active:scale-95 flex items-center gap-2">
                        <Send size={24} />
                        <span className="font-bold text-sm tracking-widest uppercase px-2 text-white">Enviar Mensagem</span>
                    </a>
                </div>
            </div>

            <div className="lg:w-1/2">
               {/* Google Maps Section */}
               <div className="w-full h-full min-h-[400px] bg-slate-100 flex items-center justify-center relative overflow-hidden border border-slate-200 shadow-xl">
                  {/* Real Google Maps Embed Placeholder - User can swap for their specific key */}
                  <iframe 
                    src="https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=Avenida+Natalino+Jo%C3%A3o+Brescansin+1968+Sorriso+MT"
                    className="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                    frameBorder="0"
                  ></iframe>
                  {/* Fallback image if no key */}
                  <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-8 text-center gap-4">
                     <MapPin className="text-primary/20" size={64} />
                     <p className="text-sm font-bold text-primary/40 uppercase tracking-widest">Mini Mapa do Google Maps</p>
                     <a 
                       href="https://www.google.com/maps/search/Avenida+Natalino+Jo%C3%A3o+Brescansin,+N%C2%B0+1968.Sorriso,+Mato+Grosso" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-primary text-white px-6 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-secondary transition-all z-10"
                     >
                       Abrir no Google Maps Oficial
                     </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
