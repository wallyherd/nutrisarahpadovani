"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Pilates", href: "/pilates" },
  { name: "Fisioterapia", href: "/fisioterapia" },
  { name: "Serviços", href: "/servicos" },
  { name: "Benefícios", href: "/beneficios" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg">
            <Image
              src="/logo.png"
              alt="Instituto Sarah Padovani Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold text-lg leading-tight transition-colors",
              isScrolled ? "text-primary" : "text-primary"
            )}>
              Instituto Sarah Padovani
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium font-sans">
              Oliboni • Sorriso MT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors hover:underline decoration-accent underline-offset-8"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/message/XDMXRDSU475RG1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-none font-semibold text-sm hover:bg-secondary transition-all shadow-md active:scale-95"
          >
            <Phone size={16} />
            Agendar Agora
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-fade-in-down">
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/message/XDMXRDSU475RG1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-none font-bold text-lg mt-4 shadow-lg"
            >
              <Phone size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
