"use client";

import { useState } from "react";
import { products, categories } from "@/lib/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
            Tienda Oficial
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            EQUIPAMIENTO <span className="text-primary">KARURA RIO</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Equípate con el mejor material para tu entrenamiento. Guantes, vendas, ropa y más.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-primary hover:bg-primary/90"
                  : "border-border hover:bg-primary/10"
              }
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Cart Summary (floating) */}
        {cartCount > 0 && (
          <div className="fixed bottom-24 right-6 z-40 bg-card border border-primary rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-primary" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total:</p>
                <p className="font-bold text-lg">{(cartTotal / 100).toFixed(2)}€</p>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  // In production, this would redirect to Stripe checkout
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
              className="bg-card border-border hover:border-primary/50 transition-all group overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                {product.featured && (
                  <Badge className="absolute top-2 left-2 bg-primary">
                    <Star className="h-3 w-3 mr-1" />
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
                <h3 className="font-semibold mb-1 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {(product.price / 100).toFixed(2)}€
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Stock: {product.stock}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-primary hover:bg-primary/90"
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
            <p className="text-muted-foreground">
              No hay productos en esta categoría.
            </p>
          </div>
        )}

        {/* Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚚",
              title: "Envío Gratis",
              description: "En pedidos superiores a 50€",
            },
            {
              icon: "🔄",
              title: "Devolución Fácil",
              description: "30 días para devoluciones",
            },
            {
              icon: "💳",
              title: "Pago Seguro",
              description: "Stripe - 100% seguro",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
            >
              <span className="text-3xl">{feature.icon}</span>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
