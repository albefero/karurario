import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda | Karura Rio - Equipamiento de Artes Marciales",
  description: "Tienda oficial de Karura Rio. Guantes de boxeo, vendas, ropa de entrenamiento, equipamiento MMA y más. Envío gratis en pedidos superiores a 50€.",
  keywords: "guantes boxeo Madrid, equipamiento MMA, ropa Muay Thai, vendas boxeo, material BJJ",
};

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
