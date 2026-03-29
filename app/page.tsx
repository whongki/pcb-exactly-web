import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { Capabilities } from "@/components/capabilities";
import { Equipment } from "@/components/equipment";
import { Certifications } from "@/components/certifications";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Products />
        </ScrollReveal>
        <ScrollReveal>
          <Capabilities />
        </ScrollReveal>
        <ScrollReveal>
          <Equipment />
        </ScrollReveal>
        <ScrollReveal>
          <Certifications />
        </ScrollReveal>
        <WhyChooseUs />
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
