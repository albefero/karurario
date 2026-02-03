import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karura Rio | Gym de Boxeo, MMA y Artes Marciales en Madrid",
  description: "Centro de alto rendimiento en Madrid. Boxeo, Muay Thai, BJJ, MMA, Kick Boxing y Jeet Kune Do. Matrícula GRATIS. Grupos reducidos. Formamos campeones.",
  keywords: "gym boxeo Madrid, MMA Madrid, Muay Thai Madrid, BJJ Madrid, Kick Boxing Madrid, artes marciales Madrid, boxeo juvenil Madrid",
  authors: [{ name: "Karura Rio" }],
  openGraph: {
    title: "Karura Rio | Gym de Artes Marciales en Madrid",
    description: "Centro de alto rendimiento. Boxeo, MMA, Muay Thai, BJJ. Matrícula GRATIS. Formamos campeones.",
    url: "https://karurario.vercel.app",
    siteName: "Karura Rio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karura Rio | Gym de Artes Marciales en Madrid",
    description: "Centro de alto rendimiento. Boxeo, MMA, Muay Thai, BJJ. Matrícula GRATIS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
