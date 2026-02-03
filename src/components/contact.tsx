"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Contacto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            RESERVA TU <span className="text-primary">CLASE GRATIS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ven a conocernos. La primera clase es GRATIS y sin compromiso.
            Te esperamos en el corazón de Madrid.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Reserva tu clase de prueba</CardTitle>
              <CardDescription>
                Rellena el formulario y te contactaremos para confirmar tu clase
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">¡Solicitud enviada!</h3>
                  <p className="text-muted-foreground">
                    Te contactaremos pronto para confirmar tu clase de prueba.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre *</label>
                      <Input
                        required
                        placeholder="Tu nombre"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Teléfono *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="600 000 000"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Disciplina de interés</label>
                    <select className="w-full p-2 rounded-md bg-secondary/50 border border-border text-foreground">
                      <option value="">Selecciona una disciplina</option>
                      <option value="boxeo">Boxeo</option>
                      <option value="muaythai">Muay Thai / K1 / Kick Boxing</option>
                      <option value="bjj">BJJ / Jiu-Jitsu</option>
                      <option value="mma">MMA</option>
                      <option value="jkd">Jeet Kune Do</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mensaje (opcional)</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tu experiencia previa o cualquier consulta..."
                      className="bg-secondary/50 border-border min-h-[100px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90"
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
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Dirección</h4>
                      <p className="text-sm text-muted-foreground">
                        Calle Fernando Poo, 23
                        <br />
                        Madrid
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Teléfonos</h4>
                      <p className="text-sm text-muted-foreground">
                        <a href="tel:912591826" className="hover:text-primary">91 259 18 26</a>
                        <br />
                        <a href="tel:679592901" className="hover:text-primary">679 59 29 01</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Horario</h4>
                      <p className="text-sm text-muted-foreground">
                        Lunes - Viernes: 10:00 - 22:00
                        <br />
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Instagram className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Instagram</h4>
                      <a
                        href="https://instagram.com/karurario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        @karurario
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <Card className="bg-card border-border overflow-hidden">
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
