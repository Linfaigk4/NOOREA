"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";

export function StorySection() {
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="story-section" className="py-24 bg-[var(--color-cream)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="gold-text text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-tight"
          >
            L&apos;HISTOIRE DE NOOREA
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6 text-lg md:text-xl text-[var(--color-taupe)] leading-relaxed"
          >
            <p>
              Une histoire de lumière, de soin et de renaissance.
            </p>
            <p>
              NOOREA est née d&apos;une conviction simple : chaque peau possède sa propre lumière.
              Nos rituels sont imaginés pour accompagner, nourrir et révéler cette lumière.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12"
          >
            <GoldButton size="lg" onClick={scrollToContact}>
              Parlons de votre rituel
            </GoldButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
