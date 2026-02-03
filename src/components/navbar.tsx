"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "disciplinas", label: "Disciplinas" },
  { href: "precios", label: "Precios" },
  { href: "nosotros", label: "Nosotros" },
  { href: "instalaciones", label: "Instalaciones" },
  { href: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (isHome && window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [isHome]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    
    if (isHome) {
      // On home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on home, the Link will navigate to /#id
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-karura.jpg" 
              alt="Karura Rio - Escuela de Boxeo y Artes Marciales" 
              width={180} 
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/#${item.href}`}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/tienda" className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors">
              Tienda
            </Link>
            <Link 
              href="/#contacto"
              onClick={() => handleNavClick("contacto")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-4 py-2 rounded-md"
            >
              Clase GRATIS
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={`/#${item.href}`}
                    onClick={() => handleNavClick(item.href)}
                    className="text-lg font-medium text-zinc-400 hover:text-amber-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/tienda" 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-amber-500 transition-colors"
                >
                  Tienda
                </Link>
                <Link 
                  href="/#contacto"
                  onClick={() => handleNavClick("contacto")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-4 py-3 rounded-md text-center mt-4"
                >
                  Clase GRATIS
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
