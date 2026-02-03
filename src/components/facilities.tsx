"use client";

import { Check } from "lucide-react";

const features = [
  "Sala de boxeo con ring profesional",
  "Tatami de 200m² para BJJ y MMA",
  "Zona de musculación y funcional",
  "Equipamiento Fairtex y Venum",
  "Vestuarios con duchas",
  "Aparcamiento gratuito",
  "Wifi en todas las instalaciones",
  "Tienda de material de combate",
];

const images = [
  "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600",
  "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
];

export function Facilities() {
  return (
    <section id="instalaciones" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Nuestras Instalaciones
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            TU NUEVO <span className="text-amber-500">HOGAR</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Más de 500m² equipados con lo mejor para tu entrenamiento. 
            Instalaciones modernas, limpias y con todo lo que necesitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div 
                className="h-64 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${images[0]})` }}
              />
            </div>
            <div 
              className="h-48 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${images[1]})` }}
            />
            <div 
              className="h-48 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${images[2]})` }}
            />
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Todo lo que necesitas bajo un mismo techo
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
                >
                  <div className="p-1.5 rounded-full bg-amber-500/20">
                    <Check className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-500/10 to-transparent rounded-xl border border-amber-500/20">
              <p className="text-amber-400 font-medium">
                Ubicados en el corazón de Madrid, con fácil acceso en metro y parking gratuito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
