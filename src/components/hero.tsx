"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-12 text-center">
        {/* Tagline */}
        <p className="text-amber-500 text-sm md:text-base font-semibold tracking-widest uppercase mb-6">
          El gimnasio con mejor ambiente de Madrid
        </p>

        {/* Logo */}
        <div className="mb-8">
          <Image 
            src="/logo-karura.jpg" 
            alt="Karura Rio" 
            width={400} 
            height={200}
            className="mx-auto h-auto w-[250px] md:w-[350px] object-contain"
            priority
          />
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-tight">
          LA ESCUELA DE ARTES MARCIALES
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Nº1 DE MADRID
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-4">
          Clases de <strong className="text-white">Boxeo</strong>, <strong className="text-white">Muay Thai</strong>, <strong className="text-white">BJJ</strong>, <strong className="text-white">MMA</strong> y más para niños, jóvenes y adultos de todos los niveles.
        </p>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
          Entrenadores campeones de España. Grupos reducidos. Ambiente familiar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection("contacto")}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-10 py-7 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
          >
            Prueba una Clase GRATIS
          </Button>
          <Button
            onClick={() => scrollToSection("disciplinas")}
            variant="outline"
            size="lg"
            className="text-lg px-10 py-7 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300"
          >
            Ver Disciplinas
          </Button>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "50+", label: "Clases semanales" },
            { value: "500+", label: "Alumnos formados" },
            { value: "30+", label: "Títulos nacionales" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-3xl md:text-4xl font-black text-amber-500">{stat.value}</div>
              <div className="text-xs md:text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("disciplinas")}
          className="animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-amber-500 mx-auto" />
        </button>
      </div>
    </section>
  );
}
