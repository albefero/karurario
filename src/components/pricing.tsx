"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const pricingCategories = [
  {
    category: "Boxeo",
    icon: "🥊",
    plans: [
      { days: "2 días/semana", price: 58 },
      { days: "3 días/semana", price: 63, popular: true },
      { days: "5 días/semana", price: 73 },
    ],
  },
  {
    category: "Boxeo Juvenil",
    icon: "🥊",
    isYouth: true,
    plans: [
      { days: "L/M o M/J", price: 50 },
      { days: "4 días/semana", price: 70, popular: true },
    ],
  },
  {
    category: "Muay Thai / K1 / Kick Boxing",
    icon: "🦵",
    plans: [
      { days: "2 días/semana", price: 58 },
      { days: "3 días/semana", price: 63, popular: true },
      { days: "5 días/semana", price: 73 },
    ],
  },
  {
    category: "Kick Boxing Juvenil",
    icon: "🦵",
    isYouth: true,
    plans: [
      { days: "M/J", price: 60 },
    ],
  },
  {
    category: "MMA",
    icon: "🏆",
    plans: [
      { days: "L/X 11-12h", price: 60 },
      { days: "L/X/V 20-21h", price: 65, popular: true },
    ],
  },
  {
    category: "Jeet Kune Do",
    icon: "⚡",
    plans: [
      { days: "M/J 19:30-21h", price: 65 },
    ],
  },
  {
    category: "BJJ / Jiu-Jitsu",
    icon: "🤼",
    plans: [
      { days: "2 días/semana", price: 60 },
      { days: "3 días/semana", price: 65, popular: true },
      { days: "5 días/semana", price: 75 },
    ],
  },
  {
    category: "Jiu-Jitsu Infantil",
    icon: "🤼",
    isYouth: true,
    plans: [
      { days: "3 días/semana", price: 55 },
    ],
  },
  {
    category: "Jiu-Jitsu Defensa Personal",
    icon: "🛡️",
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
          {pricingCategories.map((category, idx) => (
            <Card
              key={idx}
              className={`bg-card border-border hover:border-primary/50 transition-colors ${
                category.isYouth ? "bg-gradient-to-br from-card to-primary/5" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-lg">{category.category}</span>
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
                          ? "bg-primary/20 border border-primary/30"
                          : "bg-secondary/30"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {plan.popular && <Star className="h-4 w-4 text-primary" />}
                        <span className="text-sm">{plan.days}</span>
                      </div>
                      <div className="font-bold text-lg">
                        {plan.price}€<span className="text-xs text-muted-foreground">/mes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {[
            { icon: "🎁", text: "Matrícula GRATIS" },
            { icon: "🥊", text: "Primera clase de prueba GRATIS" },
            { icon: "👥", text: "Grupos reducidos" },
            { icon: "🏆", text: "Preparación para competición" },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
            >
              <span className="text-2xl">{benefit.icon}</span>
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 animate-pulse-glow">
            <Link href="#contacto">
              Reservar Clase de Prueba GRATIS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
