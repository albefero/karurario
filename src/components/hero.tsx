"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Trophy, Users, Target } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070')] bg-cover bg-center opacity-30">
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 text-center">
        {/* Logo prominente */}
        <div className="mb-8">
          <Image 
            src="/logo-karura.jpg" 
            alt="Karura Rio - Escuela de Boxeo y Artes Marciales" 
            width={400} 
            height={200}
            className="mx-auto h-auto w-[280px] md:w-[400px] object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <Badge variant="secondary" className="mb-6 text-sm py-2 px-4 bg-amber-500/20 text-amber-400 border-amber-500/30 backdrop-blur-sm">
          🥊 Matrícula GRATIS · Plazas Limitadas
        </Badge>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
          ENTRENA CON LOS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">MEJORES</span> DE MADRID
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Centro de alto rendimiento en artes marciales. Boxeo, Muay Thai, BJJ, MMA y más.
          <br className="hidden md:block" />
          <strong className="text-foreground">Grupos reducidos. Formamos campeones.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
          >
            <Link href="#contacto">
              🥊 Reserva tu Clase de Prueba GRATIS
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300"
          >
            <Link href="#disciplinas">
              Ver Disciplinas
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-colors">
            <Trophy className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
            <div className="text-xs md:text-sm text-zinc-400">Años de experiencia</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-colors">
            <Users className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
            <div className="text-xs md:text-sm text-zinc-400">Alumnos formados</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-colors">
            <Target className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
            <div className="text-xs md:text-sm text-zinc-400">Títulos ganados</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-amber-500 mx-auto" />
        </div>
      </div>
    </section>
  );
}
