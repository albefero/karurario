"use client";

import { useState } from "react";
import { products, categories } from "@/lib/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Package, RotateCcw, CreditCard, Swords, Shield, Shirt, Target, Award } from "lucide-react";

const categoryIcons: Record<string, typeof Swords> = {
  all: ShoppingCart,
  guantes: Swords,
  vendas: Shield,
  ropa: Shirt,
  equipamiento: Target,
  protecciones: Award,
};

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  const cartTotal = cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
            Tienda Oficial
          </p>
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-white">
            EQUIPAMIENTO <span className="text-amber-500">KARURA RIO</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Equípate con el mejor material para tu entrenamiento. Guantes, vendas, ropa y más.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] || ShoppingCart;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold border-0"
                    : "border-zinc-700 text-zinc-300 hover:bg-amber-500/10 hover:border-amber-500/50"
                }
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Cart Summary (floating) */}
        {cartCount > 0 && (
          <div className="fixed bottom-24 right-6 z-40 bg-zinc-900 border border-amber-500/50 rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-amber-500" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Total:</p>
                <p className="font-bold text-lg text-white">{(cartTotal / 100).toFixed(2)}€</p>
              </div>
              <Button
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold"
                onClick={() => {
                  alert(
                    "En producción, esto te llevaría al checkout de Stripe.\n\nTotal: " +
                      (cartTotal / 100).toFixed(2) +
                      "€"
                  );
                }}
              >
                Pagar
              </Button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-zinc-900 border-zinc-800 hover:border-amber-500/50 transition-all group overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                {product.featured && (
                  <Badge className="absolute top-2 left-2 bg-amber-500 text-black font-bold">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Destacado
                  </Badge>
                )}
                {product.stock < 10 && (
                  <Badge variant="destructive" className="absolute top-2 right-2">
                    ¡Últimas unidades!
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1 line-clamp-1 text-white">{product.name}</h3>
                <p className="text-sm text-zinc-400 line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-500">
                    {(product.price / 100).toFixed(2)}€
                  </span>
                  <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                    Stock: {product.stock}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Añadir al carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">
              No hay productos en esta categoría.
            </p>
          </div>
        )}

        {/* Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Package,
              title: "Envío Gratis",
              description: "En pedidos superiores a 50€",
            },
            {
              Icon: RotateCcw,
              title: "Devolución Fácil",
              description: "30 días para devoluciones",
            },
            {
              Icon: CreditCard,
              title: "Pago Seguro",
              description: "Stripe - 100% seguro",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800"
            >
              <div className="p-3 rounded-lg bg-amber-500/10">
                <feature.Icon className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{feature.title}</h4>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
