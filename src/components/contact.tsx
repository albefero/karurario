"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            RESERVA TU <span className="text-amber-500">CLASE GRATIS</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Ven a conocernos. La primera clase es GRATIS y sin compromiso.
            Te esperamos en el corazón de Madrid.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Reserva tu clase de prueba</CardTitle>
              <CardDescription className="text-zinc-400">
                Rellena el formulario y te contactaremos para confirmar tu clase
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">¡Solicitud enviada!</h3>
                  <p className="text-zinc-400">
                    Te contactaremos pronto para confirmar tu clase de prueba.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-zinc-300">Nombre *</label>
                      <Input
                        required
                        placeholder="Tu nombre"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-zinc-300">Teléfono *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="600 000 000"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-zinc-300">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-zinc-300">Disciplina de interés</label>
                    <select className="w-full p-2.5 rounded-md bg-zinc-800 border border-zinc-700 text-white">
                      <option value="">Selecciona una disciplina</option>
                      <option value="boxeo">Boxeo</option>
                      <option value="muaythai">Muay Thai / Kick Boxing</option>
                      <option value="bjj">BJJ / Jiu-Jitsu</option>
                      <option value="mma">MMA</option>
                      <option value="jkd">Defensa Personal</option>
                      <option value="infantil">Clases Infantiles</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-zinc-300">Mensaje (opcional)</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tu experiencia previa o cualquier consulta..."
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[100px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6"
                  >
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Reservar Clase de Prueba GRATIS
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <MapPin className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Dirección</h4>
                      <p className="text-sm text-zinc-400">
                        Calle Fernando Poo, 23
                        <br />
                        Madrid
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Phone className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Teléfonos</h4>
                      <p className="text-sm text-zinc-400">
                        <a href="tel:912591826" className="hover:text-amber-500 transition-colors">91 259 18 26</a>
                        <br />
                        <a href="tel:679592901" className="hover:text-amber-500 transition-colors">679 59 29 01</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Horario</h4>
                      <p className="text-sm text-zinc-400">
                        Lunes - Viernes: 10:00 - 22:00
                        <br />
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10">
                      <Instagram className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Instagram</h4>
                      <a
                        href="https://instagram.com/karurario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-amber-500 hover:underline"
                      >
                        @karurario
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-3.7!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e18d3ef99%3A0x4e4b6c3e3e3e3e3e!2sCalle%20Fernando%20Poo%2C%2023%2C%20Madrid!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
