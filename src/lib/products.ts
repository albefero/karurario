export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  image: string;
  category: "guantes" | "vendas" | "ropa" | "equipamiento" | "protecciones";
  featured?: boolean;
  stock: number;
}

export const products: Product[] = [
  // Guantes
  {
    id: "guantes-boxeo-pro",
    name: "Guantes de Boxeo Pro 14oz",
    description: "Guantes profesionales de piel sintética premium. Ideales para sparring y entrenamiento intensivo. Incluye muñequera de velcro.",
    price: 5900, // 59€
    image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?w=400",
    category: "guantes",
    featured: true,
    stock: 15,
  },
  {
    id: "guantes-boxeo-iniciacion",
    name: "Guantes de Boxeo Iniciación 12oz",
    description: "Guantes perfectos para principiantes. Buena protección y comodidad para tus primeras clases.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1509255929945-586a420363cf?w=400",
    category: "guantes",
    stock: 20,
  },
  {
    id: "guantes-mma",
    name: "Guantes MMA Competition",
    description: "Guantes de MMA homologados para competición. Protección óptima de nudillos con libertad de agarre.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1564415637254-92c6e4b0a8e9?w=400",
    category: "guantes",
    featured: true,
    stock: 12,
  },
  // Vendas
  {
    id: "vendas-algodon",
    name: "Vendas de Algodón 4.5m (Par)",
    description: "Vendas de algodón elástico de alta calidad. Protegen nudillos y muñecas. Color negro.",
    price: 800,
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=400",
    category: "vendas",
    stock: 50,
  },
  {
    id: "vendas-gel",
    name: "Vendas de Gel Quick Wrap",
    description: "Vendas con gel integrado para máxima protección. Cierre rápido con velcro.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
    category: "vendas",
    featured: true,
    stock: 25,
  },
  // Ropa
  {
    id: "camiseta-karura",
    name: "Camiseta Karura Rio Training",
    description: "Camiseta técnica transpirable con el logo de Karura Rio. Material dry-fit.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    category: "ropa",
    featured: true,
    stock: 30,
  },
  {
    id: "shorts-muaythai",
    name: "Shorts Muay Thai Karura",
    description: "Shorts tradicionales de Muay Thai. Diseño exclusivo Karura Rio. Satén de alta calidad.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1591258739299-5b65d5c08a95?w=400",
    category: "ropa",
    stock: 20,
  },
  {
    id: "sudadera-karura",
    name: "Sudadera Karura Rio",
    description: "Sudadera con capucha. Algodón premium. Logo bordado. Ideal para antes y después del entrenamiento.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
    category: "ropa",
    stock: 15,
  },
  // Equipamiento
  {
    id: "saco-boxeo",
    name: "Saco de Boxeo 1.5m",
    description: "Saco de boxeo profesional de 1.5 metros. Incluye cadenas y anclaje. Relleno de alta densidad.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400",
    category: "equipamiento",
    stock: 5,
  },
  {
    id: "comba-speed",
    name: "Comba Speed Rope Pro",
    description: "Comba de velocidad con rodamientos de bolas. Cable de acero ajustable. Ideal para cardio.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400",
    category: "equipamiento",
    stock: 30,
  },
  // Protecciones
  {
    id: "bucal-pro",
    name: "Protector Bucal Moldeable Pro",
    description: "Protector bucal termomoldeable. Protección profesional para dientes y mandíbula. Incluye estuche.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400",
    category: "protecciones",
    stock: 40,
  },
  {
    id: "espinilleras-muaythai",
    name: "Espinilleras Muay Thai Pro",
    description: "Espinilleras de piel sintética con espuma de alta densidad. Protección completa de tibia y empeine.",
    price: 4900,
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400",
    category: "protecciones",
    featured: true,
    stock: 18,
  },
  {
    id: "casco-boxeo",
    name: "Casco de Boxeo Protección Total",
    description: "Casco de boxeo con protección de pómulos y barbilla. Visibilidad óptima. Cierre de velcro.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=400",
    category: "protecciones",
    stock: 10,
  },
];

export const categories = [
  { id: "all", name: "Todo", icon: "🛒" },
  { id: "guantes", name: "Guantes", icon: "🥊" },
  { id: "vendas", name: "Vendas", icon: "🩹" },
  { id: "ropa", name: "Ropa", icon: "👕" },
  { id: "equipamiento", name: "Equipamiento", icon: "🎯" },
  { id: "protecciones", name: "Protecciones", icon: "🛡️" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
