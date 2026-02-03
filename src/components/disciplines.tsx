"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swords, Flame, Shield, Trophy, Zap, Calendar, Sparkles } from "lucide-react";

const disciplines = [
  {
    id: "boxeo",
    name: "Boxeo",
    room: "Sala Boxeo",
    description: "El arte del pugilismo. Técnica, velocidad y potencia. Clases para adultos y juveniles con entrenadores profesionales.",
    Icon: Swords,
    schedule: [
      { days: "Lunes - Miércoles - Viernes", time: "10:00 - 11:30", type: "Adultos" },
      { days: "Martes - Jueves", time: "18:00 - 19:30", type: "Adultos" },
      { days: "Lunes - Miércoles", time: "17:00 - 18:00", type: "Juvenil" },
      { days: "Martes - Jueves", time: "17:00 - 18:00", type: "Juvenil" },
    ],
    features: ["Sparring controlado", "Técnica de golpeo", "Preparación física", "Competición"],
  },
  {
    id: "muaythai",
    name: "Muay Thai / K1 / Kick Boxing",
    room: "Sala Thai",
    description: "El arte de los 8 miembros. Puños, codos, rodillas y piernas. Entrenamiento completo de striking tailandés.",
    Icon: Flame,
    schedule: [
      { days: "Lunes - Miércoles - Viernes", time: "11:30 - 13:00", type: "Todos los niveles" },
      { days: "Martes - Jueves", time: "19:30 - 21:00", type: "Todos los niveles" },
      { days: "Martes - Jueves", time: "17:00 - 18:30", type: "Kick Boxing Juvenil" },
    ],
    features: ["Clinch y proyecciones", "Trabajo de piernas", "Combate tradicional", "Preparación K1"],
  },
  {
    id: "bjj",
    name: "BJJ / Jiu-Jitsu Brasileño",
    room: "Sala Polivalente",
    description: "El arte suave. Sumisiones, control y técnica en el suelo. Programa completo para infantil, juvenil y adultos.",
    Icon: Shield,
    schedule: [
      { days: "Lunes - Miércoles - Viernes", time: "12:00 - 13:30", type: "Adultos" },
      { days: "Martes - Jueves", time: "20:00 - 21:30", type: "Adultos" },
      { days: "Lunes - Miércoles - Viernes", time: "17:00 - 18:00", type: "Infantil" },
    ],
    features: ["Gi y No-Gi", "Competición IBJJF", "Defensa personal", "Sistema de grados"],
  },
  {
    id: "mma",
    name: "MMA - Artes Marciales Mixtas",
    room: "Sala Polivalente",
    description: "La disciplina más completa. Combina striking, wrestling y grappling. Para fighters que quieren competir.",
    Icon: Trophy,
    schedule: [
      { days: "Lunes - Miércoles", time: "11:00 - 12:00", type: "Mañanas" },
      { days: "Lunes - Miércoles - Viernes", time: "20:00 - 21:00", type: "Tardes" },
    ],
    features: ["Ground & Pound", "Takedowns", "Cage work", "Preparación UFC/Bellator"],
  },
  {
    id: "jkd",
    name: "Jeet Kune Do / Defensa Personal",
    room: "Sala Polivalente",
    description: "El camino del puño interceptor. Filosofía de Bruce Lee aplicada a la defensa personal moderna.",
    Icon: Zap,
    schedule: [
      { days: "Martes - Jueves", time: "19:30 - 21:00", type: "Todos los niveles" },
    ],
    features: ["Sin patrones fijos", "Adaptabilidad", "Defensa real", "Filosofía marcial"],
  },
];

export function Disciplines() {
  return (
    <section id="disciplinas" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Nuestras Disciplinas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ELIGE TU <span className="text-primary">CAMINO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos las principales disciplinas de combate con entrenadores profesionales
            y métodos de entrenamiento de élite.
          </p>
        </div>

        <Tabs defaultValue="boxeo" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent h-auto">
            {disciplines.map((d) => (
              <TabsTrigger
                key={d.id}
                value={d.id}
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black px-4 py-2 rounded-full flex items-center gap-2"
              >
                <d.Icon className="h-4 w-4" /> {d.name.split(" / ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {disciplines.map((discipline) => (
            <TabsContent key={discipline.id} value={discipline.id}>
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600">
                      <discipline.Icon className="h-10 w-10 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white">{discipline.name}</CardTitle>
                      <CardDescription className="text-amber-500">{discipline.room}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{discipline.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Schedule */}
                    <div>
                      <h4 className="font-semibold mb-4 text-amber-500 flex items-center gap-2">
                        <Calendar className="h-5 w-5" /> Horarios
                      </h4>
                      <div className="space-y-3">
                        {discipline.schedule.map((s, i) => (
                          <div key={i} className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                            <div className="font-medium text-white">{s.days}</div>
                            <div className="text-sm text-zinc-400">
                              {s.time} · <span className="text-amber-500">{s.type}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-4 text-amber-500 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" /> Características
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {discipline.features.map((f, i) => (
                          <Badge key={i} variant="outline" className="border-amber-500/30 text-zinc-300">
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
