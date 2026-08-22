"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import { useState } from "react";

// Contact data - to be configured with real values
const CONTACT_DATA = {
  phone: "+33 1 23 45 67 89",
  email: "contact@noorea.com",
  whatsapp: "https://wa.me/33123456789",
  socials: {
    instagram: "https://instagram.com/noorea",
    facebook: "https://facebook.com/noorea",
    tiktok: "https://tiktok.com/@noorea",
  },
};

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-section" className="py-24 bg-[var(--color-black)] text-[var(--color-cream)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cream)]/5 to-transparent pointer-events-none" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight"
          >
            PARLONS DE VOTRE RITUEL
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[var(--color-sand)] max-w-2xl mx-auto"
          >
            Nous sommes là pour vous accompagner dans le choix de vos rituels
            et répondre à toutes vos questions.
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 gold-gradient-radial rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-lg font-medium mb-2">TÉLÉPHONE</h3>
            <p className="text-[var(--color-sand)] mb-4">Appelez-nous</p>
            <a
              href={`tel:${CONTACT_DATA.phone}`}
              className="gold-text text-xl font-medium hover:underline"
            >
              {CONTACT_DATA.phone}
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[var(--color-gold-dark)] to-[var(--color-gold)] border-2 border-[var(--color-gold)] hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-[var(--color-black)] rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-lg font-medium text-[var(--color-black)] mb-2">WHATSAPP</h3>
            <p className="text-black/80 mb-4">Échangez directement avec NOOREA</p>
            <GoldButton size="sm" className="bg-[var(--color-black)] text-[var(--color-gold-highlight)]">
              CONTACTER SUR WHATSAPP
            </GoldButton>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 gold-gradient-radial rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="text-lg font-medium mb-2">EMAIL</h3>
            <p className="text-[var(--color-sand)] mb-4">Écrivez-nous</p>
            <button
              onClick={handleCopyEmail}
              className="gold-text text-xl font-medium hover:underline focus:outline-none"
            >
              {CONTACT_DATA.email}
            </button>
            {copiedEmail && (
              <span className="text-[var(--color-gold)] text-sm mt-1 animate-fade-in">
                ✅ Copié !
              </span>
            )}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 gold-gradient-radial rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="text-lg font-medium mb-2">RÉSEAUX SOCIAUX</h3>
            <p className="text-[var(--color-sand)] mb-4">Suivez-nous</p>
            <div className="flex gap-4">
              <a
                href={CONTACT_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-gold)] hover:text-[var(--color-gold-highlight)] transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={CONTACT_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-gold)] hover:text-[var(--color-gold-highlight)] transition-colors"
                aria-label="Facebook"
              >
                👍
              </a>
              <a
                href={CONTACT_DATA.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-gold)] hover:text-[var(--color-gold-highlight)] transition-colors"
                aria-label="TikTok"
              >
                🎵
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
