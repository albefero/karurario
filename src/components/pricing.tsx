"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Swords, Flame, Shield, Trophy, Zap } from "lucide-react";

const iconMap: Record<string, typeof Swords> = {
  boxeo: Swords,
  muaythai: Flame,
  mma: Trophy,
  jkd: Zap,
  bjj: Shield,
};

const pricingCategories = [
  {
    category: "Boxeo",
    iconKey: "boxeo",
    plans: [
      { days: "2 días/semana", price: 58 },
      { days: "3 días/semana", price: 63, popular: true },
      { days: "5 días/semana", price: 73 },
    ],
  },
  {
    category: "Muay Thai / Kick Boxing",
    iconKey: "muaythai",
    plans: [
      { days: "2 días/semana", price: 58 },
      { days: "3 días/semana", price: 63, popular: true },
      { days: "5 días/semana", price: 73 },
    ],
  },
  {
    category: "BJJ / Jiu-Jitsu",
    iconKey: "bjj",
    plans: [
      { days: "2 días/semana", price: 60 },
      { days: "3 días/semana", price: 65, popular: true },
      { days: "5 días/semana", price: 75 },
    ],
  },
  {
    category: "MMA",
    iconKey: "mma",
    plans: [
      { days: "L/X 11-12h", price: 60 },
      { days: "L/X/V 20-21h", price: 65, popular: true },
    ],
  },
  {
    category: "Defensa Personal",
    iconKey: "jkd",
    plans: [
      { days: "M/J 19:30-21h", price: 65 },
    ],
  },
  {
    category: "Clases Juveniles",
    iconKey: "boxeo",
    isYouth: true,
    plans: [
      { days: "Boxeo 2 días", price: 50 },
      { days: "Kick Boxing", price: 60 },
      { days: "Jiu-Jitsu", price: 55, popular: true },
    ],
  },
];

export function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="precios" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Tarifas
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            PRECIOS <span className="text-amber-500">TRANSPARENTES</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Todos los precios incluyen IVA. <strong className="text-white">Matrícula GRATIS</strong> y 
            primera clase de prueba sin compromiso.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((category, idx) => {
            const Icon = iconMap[category.iconKey] || Swords;
            return (
              <Card
                key={idx}
                className={`bg-zinc-900 border-zinc-800 hover:border-amber-500/50 transition-all duration-300 ${
                  category.isYouth ? "ring-2 ring-amber-500/20" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <Icon className="h-5 w-5 text-amber-500" />
                      </div>
                      <span className="text-lg text-white">{category.category}</span>
                    </CardTitle>
                    {category.isYouth && (
                      <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                        Juvenil
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.plans.map((plan, planIdx) => (
                      <div
                        key={planIdx}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          plan.popular
                            ? "bg-amber-500/10 border border-amber-500/30"
                            : "bg-zinc-800/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {plan.popular && <Star className="h-4 w-4 text-amber-500 fill-amber-500" />}
                          <span className="text-sm text-zinc-300">{plan.days}</span>
                        </div>
                        <div className="font-bold text-lg text-white">
                          {plan.price}€<span className="text-xs text-zinc-500">/mes</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            { Icon: Check, text: "Matrícula GRATIS" },
            { Icon: Swords, text: "Primera clase GRATIS" },
            { Icon: Shield, text: "Grupos reducidos" },
            { Icon: Trophy, text: "Entrenadores campeones" },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
            >
              <div className="p-2 rounded-lg bg-amber-500/10">
                <benefit.Icon className="h-5 w-5 text-amber-500" />
              </div>
              <span className="font-medium text-white text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => scrollToSection("contacto")}
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-7 text-lg shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
          >
            Reservar Clase de Prueba GRATIS
          </Button>
        </div>
      </div>
    </section>
  );
}
