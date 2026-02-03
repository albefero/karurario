"use client";

import { Button } from "@/components/ui/button";

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="nosotros" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517438322307-e67111335449?w=800')` }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/20 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Somos Familia
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
              MÁS QUE UN GIMNASIO,<br />
              <span className="text-amber-500">UNA COMUNIDAD</span>
            </h2>
            
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                ¡Hola Madrid! Somos <strong className="text-white">Karura Rio</strong>, un gimnasio de artes marciales 
                nacido de la pasión por el combate y el respeto por las tradiciones marciales.
              </p>
              <p>
                Nuestro objetivo es crear un espacio <strong className="text-white">inclusivo, seguro y motivador</strong> donde 
                cualquier persona pueda descubrir su potencial. Da igual si nunca has dado un golpe o si llevas 
                años entrenando — aquí encontrarás tu lugar.
              </p>
              <p>
                Contamos con <strong className="text-white">entrenadores campeones de España</strong> que comparten 
                su conocimiento en grupos reducidos. Aquí no eres un número: conocemos a cada alumno, 
                su progreso y sus metas.
              </p>
              <p className="text-amber-400 font-medium">
                Ven a probar una clase gratis y descubre el ambiente que nos ha convertido en 
                la escuela de artes marciales nº1 de Madrid.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-6 text-lg"
              >
                Reservar Clase de Prueba
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
