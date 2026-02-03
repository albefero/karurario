"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    year: "2026",
    event: "Porto Box Cup",
    achievement: "2 Oros, 1 Plata",
    discipline: "Boxeo",
    icon: Trophy,
  },
  {
    year: "2025",
    event: "Campeonato de España BJJ",
    achievement: "Campeón Absoluto",
    discipline: "BJJ",
    icon: Trophy,
  },
  {
    year: "2025",
    event: "Open de Madrid Muay Thai",
    achievement: "3 Oros",
    discipline: "Muay Thai",
    icon: Medal,
  },
  {
    year: "2024",
    event: "Campeonato Nacional K1",
    achievement: "Subcampeón -75kg",
    discipline: "K1",
    icon: Medal,
  },
  {
    year: "2024",
    event: "Copa Ibérica MMA",
    achievement: "Campeón Amateur",
    discipline: "MMA",
    icon: Trophy,
  },
  {
    year: "2023",
    event: "European BJJ Open",
    achievement: "Bronce Gi",
    discipline: "BJJ",
    icon: Award,
  },
];

const stats = [
  { number: "50+", label: "Títulos ganados" },
  { number: "15+", label: "Años formando campeones" },
  { number: "100+", label: "Competidores activos" },
  { number: "10+", label: "Países representados" },
];

export function Competitions() {
  return (
    <section id="competiciones" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Palmarés
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FORMAMOS <span className="text-primary">CAMPEONES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros alumnos compiten y ganan a nivel nacional e internacional.
            Aquí entrenamos para ganar.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon;
            return (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {achievement.year}
                        </Badge>
                        <Badge className="bg-primary/20 text-primary text-xs">
                          {achievement.discipline}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1">{achievement.event}</h3>
                      <p className="text-primary font-medium">{achievement.achievement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl border border-primary/30">
          <Star className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">¿Quieres ser el próximo?</h3>
          <p className="text-muted-foreground mb-4">
            Únete a nuestro equipo de competición y lucha por los títulos.
          </p>
          <Badge className="bg-primary text-primary-foreground text-lg py-2 px-4">
            El siguiente campeón puedes ser tú
          </Badge>
        </div>
      </div>
    </section>
  );
}
