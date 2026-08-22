import { Hero } from "@/components/home/Hero/Hero";
import { StorySection } from "@/components/home/StorySection/StorySection";
import { Scene02, Scene04, Scene05, Scene06, Scene07, ContactSection } from "@/components/home";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";

/**
 * NOOREA Homepage — New Brand-First Experience
 * 
 * Structure (Optimized for Speed & Conversion):
 * 1. Hero — Logo circulaire + nouvelle accroche + CTAs (2s)
 * 2. Story — L'histoire de NOOREA (immediately after Hero)
 * 3. Scene02 — Philosophie/Promise
 * 4. Scene04 — Sensorial
 * 5. Scene05 — Human
 * 6. Scene06 — Quiz/Recommandation
 * 7. Scene07 — Signature Product
 * 8. Contact — Grande section remarquable
 */
export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <Scene02 />
      <Scene04 />
      <Scene05 />
      <Scene06 />
      <Scene07 />
      <ContactSection />
      <FloatingWhatsApp href="https://wa.me/33123456789" />
    </>
  );
}
