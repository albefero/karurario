import { Hero } from "@/components/hero";
import { Disciplines } from "@/components/disciplines";
import { Pricing } from "@/components/pricing";
import { Competitions } from "@/components/competitions";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <Pricing />
      <Competitions />
      <Contact />
    </>
  );
}
