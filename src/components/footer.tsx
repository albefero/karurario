"use client";

import Link from "next/link";
import { Flame, Instagram, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                KARURA <span className="text-primary">RIO</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Centro de alto rendimiento en artes marciales. Formamos campeones desde hace más de 15 años.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/karurario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Disciplinas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#disciplinas" className="hover:text-primary">Boxeo</Link></li>
              <li><Link href="#disciplinas" className="hover:text-primary">Muay Thai / K1</Link></li>
              <li><Link href="#disciplinas" className="hover:text-primary">BJJ / Jiu-Jitsu</Link></li>
              <li><Link href="#disciplinas" className="hover:text-primary">MMA</Link></li>
              <li><Link href="#disciplinas" className="hover:text-primary">Jeet Kune Do</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#precios" className="hover:text-primary">Tarifas</Link></li>
              <li><Link href="#competiciones" className="hover:text-primary">Palmarés</Link></li>
              <li><Link href="/tienda" className="hover:text-primary">Tienda</Link></li>
              <li><Link href="#contacto" className="hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Calle Fernando Poo, 23. Madrid</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:912591826" className="hover:text-primary">91 259 18 26</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:679592901" className="hover:text-primary">679 59 29 01</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Karura Rio. Todos los derechos reservados.</p>
          <p>
            Gym de artes marciales en Madrid · Boxeo · MMA · Muay Thai · BJJ
          </p>
        </div>
      </div>
    </footer>
  );
}
