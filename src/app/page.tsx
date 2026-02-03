import { Hero } from "@/components/hero";
import { Disciplines } from "@/components/disciplines";
import { About } from "@/components/about";
import { Facilities } from "@/components/facilities";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <About />
      <Facilities />
      <Pricing />
      <Contact />
    </>
  );
}
