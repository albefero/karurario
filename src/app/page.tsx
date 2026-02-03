import { Hero } from "@/components/hero";
import { Disciplines } from "@/components/disciplines";
import { About } from "@/components/about";
import { Facilities } from "@/components/facilities";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <About />
      <Testimonials />
      <Facilities />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
}
