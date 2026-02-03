"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Swords, Flame, Shield, Trophy, Zap, Users } from "lucide-react";

const disciplines = [
  {
    id: "boxeo",
    name: "Boxeo",
    tagline: "El arte del pugilismo",
    description: "Aprende técnica, velocidad y potencia con entrenadores profesionales. Clases para adultos y juveniles. El programa de boxeo más completo de Madrid.",
    Icon: Swords,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600",
  },
  {
    id: "muaythai",
    name: "Muay Thai / Kick Boxing",
    tagline: "El arte de los 8 miembros",
    description: "Puños, codos, rodillas y piernas. Entrenamiento completo de striking tailandés con instructores certificados. Clases para todos los niveles.",
    Icon: Flame,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
  },
  {
    id: "bjj",
    name: "BJJ / Jiu-Jitsu",
    tagline: "El arte suave",
    description: "Sumisiones, control y técnica en el suelo. Programa completo con Gi y No-Gi. Clases infantil, juvenil y adultos. Preparación para competición IBJJF.",
    Icon: Shield,
    image: "https://images.unsplash.com/photo-1564415637254-92c6e4b0a8e9?w=600",
  },
  {
    id: "mma",
    name: "MMA",
    tagline: "La disciplina más completa",
    description: "Combina striking, wrestling y grappling. Para fighters que quieren llevar su entrenamiento al siguiente nivel. Ground & pound, takedowns y cage work.",
    Icon: Trophy,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600",
  },
  {
    id: "jkd",
    name: "Defensa Personal",
    tagline: "Jeet Kune Do - El camino del puño interceptor",
    description: "Filosofía de Bruce Lee aplicada a la defensa personal moderna. Sin patrones fijos, adaptabilidad total. Aprende a defenderte en situaciones reales.",
    Icon: Zap,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600",
  },
  {
    id: "infantil",
    name: "Clases Infantiles",
    tagline: "Los campeones del futuro",
    description: "Boxeo, Kick Boxing y Jiu-Jitsu para niños de 4 a 14 años. Disciplina, técnica y diversión en un ambiente seguro. ¡Dale a tus hijos habilidades para toda la vida!",
    Icon: Users,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
  },
];

export function Disciplines() {
  return (
    <section id="disciplinas" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Nuestras Disciplinas
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            TENEMOS ALGO PARA <span className="text-amber-500">TODOS</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Más de 50 clases semanales. Boxeo, Muay Thai, BJJ, MMA y mucho más. 
            Ven a entrenar con los mejores instructores de Madrid.
          </p>
        </div>

        {/* Discipline Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline) => (
            <Card 
              key={discipline.id} 
              className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-amber-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${discipline.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-2 rounded-lg bg-amber-500/20 backdrop-blur-sm inline-block">
                    <discipline.Icon className="h-6 w-6 text-amber-500" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Tagline */}
                <p className="text-amber-500 text-xs font-semibold tracking-widest uppercase mb-2">
                  {discipline.tagline}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {discipline.name}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {discipline.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
