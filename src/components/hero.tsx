"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Trophy, Users, Target } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 text-center">
        <Badge variant="secondary" className="mb-6 text-sm py-2 px-4 bg-primary/20 text-primary border-primary/30">
          🥊 Matrícula GRATIS · Plazas Limitadas
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
          ENTRENA CON LOS
          <br />
          <span className="text-primary">MEJORES</span> DE MADRID
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
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow"
          >
            <Link href="#contacto">
              🥊 Reserva tu Clase de Prueba GRATIS
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
          >
            <Link href="#disciplinas">
              Ver Disciplinas
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Años de experiencia</div>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Alumnos formados</div>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold">50+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Títulos ganados</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
}
