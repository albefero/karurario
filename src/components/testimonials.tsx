"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    text: "El mejor gimnasio de artes marciales de Madrid. Los entrenadores son increíbles, el ambiente es familiar y los grupos son reducidos. Después de 2 años aquí, me siento en casa cada vez que entro por la puerta.",
    rating: 5,
  },
  {
    name: "Laura G.",
    text: "Empecé sin saber nada de boxeo y los entrenadores tuvieron una paciencia infinita conmigo. El ambiente es súper inclusivo - hay gente de todas las edades y niveles. ¡100% recomendado!",
    rating: 5,
  },
  {
    name: "Miguel A.",
    text: "Llevo a mi hijo de 8 años a clases de Jiu-Jitsu y la evolución ha sido brutal. No solo en técnica, también en disciplina y confianza. Los profes saben tratar con niños y hacen las clases muy divertidas.",
    rating: 5,
  },
  {
    name: "Ana P.",
    text: "He probado varios gimnasios de Muay Thai en Madrid y Karura Rio es sin duda el mejor. Las instalaciones están impecables, el equipamiento es de primera y el nivel técnico de los instructores es profesional.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Lo que dicen nuestros alumnos
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            SOMOS <span className="text-amber-500">FAMILIA</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            No lo decimos nosotros, lo dicen ellos. Más de 500 alumnos han pasado 
            por nuestras instalaciones y este es su feedback.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-zinc-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">Reseña de Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
