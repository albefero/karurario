"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, PartyPopper, Building2 } from "lucide-react";

const services = [
  {
    Icon: User,
    title: "Entrenamientos Privados",
    description: "Sesiones one-on-one con nuestros entrenadores profesionales. Personaliza tu entrenamiento y acelera tu progreso con atención 100% individualizada.",
  },
  {
    Icon: Users,
    title: "Clases Grupales Privadas",
    description: "Reserva el gimnasio para tu grupo de amigos, equipo de trabajo o celebración. Clases adaptadas a vuestro nivel y objetivos.",
  },
  {
    Icon: PartyPopper,
    title: "Cumpleaños Infantiles",
    description: "Celebra el cumpleaños de tu hijo/a de forma diferente. Actividades de artes marciales, juegos y diversión en un entorno seguro.",
  },
  {
    Icon: Building2,
    title: "Eventos Corporativos",
    description: "Team building y seminarios de defensa personal para empresas. Fortalece los lazos de tu equipo mientras aprenden habilidades útiles.",
  },
];

export function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Servicios Especiales
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            LLEVA TU ENTRENAMIENTO AL <span className="text-amber-500">SIGUIENTE NIVEL</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Además de nuestras clases regulares, ofrecemos servicios personalizados 
            para que consigas tus objetivos más rápido.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-zinc-900 border-zinc-800 hover:border-amber-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <service.Icon className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 mb-4">
            ¿Interesado en alguno de estos servicios? Contáctanos para más información.
          </p>
          <Button 
            onClick={() => scrollToSection("contacto")}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-6"
          >
            Solicitar Información
          </Button>
        </div>
      </div>
    </section>
  );
}
