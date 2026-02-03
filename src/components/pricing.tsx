"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Swords, Flame, Shield, Trophy, Zap } from "lucide-react";
import Link from "next/link";

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
    category: "Boxeo Juvenil",
    iconKey: "boxeo",
    isYouth: true,
    plans: [
      { days: "L/M o M/J", price: 50 },
      { days: "4 días/semana", price: 70, popular: true },
    ],
  },
  {
    category: "Muay Thai / K1 / Kick Boxing",
    iconKey: "muaythai",
    plans: [
      { days: "2 días/semana", price: 58 },
      { days: "3 días/semana", price: 63, popular: true },
      { days: "5 días/semana", price: 73 },
    ],
  },
  {
    category: "Kick Boxing Juvenil",
    iconKey: "muaythai",
    isYouth: true,
    plans: [
      { days: "M/J", price: 60 },
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
    category: "Jeet Kune Do",
    iconKey: "jkd",
    plans: [
      { days: "M/J 19:30-21h", price: 65 },
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
    category: "Jiu-Jitsu Infantil",
    iconKey: "bjj",
    isYouth: true,
    plans: [
      { days: "3 días/semana", price: 55 },
    ],
  },
  {
    category: "Jiu-Jitsu Defensa Personal",
    iconKey: "bjj",
    plans: [
      { days: "3 días/semana", price: 63 },
    ],
  },
];

export function Pricing() {
  return (
    <section id="precios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Tarifas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PRECIOS <span className="text-primary">TRANSPARENTES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todos los precios incluyen IVA. <strong className="text-primary">Matrícula GRATIS</strong> y primera clase de prueba sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((category, idx) => {
            const Icon = iconMap[category.iconKey] || Swords;
            return (
            <Card
              key={idx}
              className={`bg-zinc-900/50 border-zinc-800 hover:border-amber-500/50 transition-all duration-300 ${
                category.isYouth ? "bg-gradient-to-br from-zinc-900/50 to-amber-500/5" : ""
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
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
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
                          ? "bg-amber-500/20 border border-amber-500/30"
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
          );})}
        </div>

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { Icon: Check, text: "Matrícula GRATIS" },
            { Icon: Swords, text: "Primera clase de prueba GRATIS" },
            { Icon: Shield, text: "Grupos reducidos" },
            { Icon: Trophy, text: "Preparación para competición" },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-amber-500/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-amber-500/10">
                <benefit.Icon className="h-5 w-5 text-amber-500" />
              </div>
              <span className="font-medium text-white">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105">
            <Link href="#contacto">
              Reservar Clase de Prueba GRATIS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
