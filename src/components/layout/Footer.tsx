import React from "react";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, ExternalLink, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif font-bold text-2xl tracking-tighter">Instituto Sarah Padovani</h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Equilíbrio, Ciência e Bem-estar em Sorriso-MT. Clínica premium especializada em Pilates e Fisioterapia.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/p/DFvzMSGRWh1/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/message/XDMXRDSU475RG1" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/60">Menu</h4>
            <div className="grid grid-cols-1 gap-3">
              {["Início", "Sobre", "Pilates", "Fisioterapia", "Serviços", "Benefícios", "Contato"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item === "Início" ? "" : item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/60">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Endereço</span>
                  <a 
                    href="https://maps.app.goo.gl/uXv7oY5Y5Y5Y5Y5Y5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    Av. Natalino João Brescansin, 1968<br />
                    Sorriso, MT - 78890-179
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+5566996651234" className="text-sm text-slate-300 hover:text-white transition-colors">(66) 99665-XXXX</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:contato@institutosarahpadovani.com" className="text-sm text-slate-300 hover:text-white transition-colors">contato@institutosarah.com</a>
              </div>
            </div>
          </div>

          {/* Maps Preview Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/60">Localização</h4>
            <div className="relative group w-full h-40 bg-slate-800 rounded-none overflow-hidden border border-white/10">
              {/* Fake Map Placeholder - to be swapped with iframe later or static image */}
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(-55.70,-12.55)/-55.70,-12.55,15,0/400x300?access_token=pk.placeholder')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps/search/Avenida+Natalino+Jo%C3%A3o+Brescansin,+N%C2%B0+1968.Sorriso,+Mato+Grosso" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-4 py-2 text-xs font-bold flex items-center gap-2 hover:bg-accent transition-colors"
                >
                  <MapPin size={12} />
                  Ver no Google Maps
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-medium">
          <span>© {currentYear} Instituto Sarah Padovani Oliboni</span>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
          <span>Desenvolvido com Antigravity Kit</span>
        </div>
      </div>
    </footer>
  );
}
