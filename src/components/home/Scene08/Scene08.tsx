"use client";

import { motion } from "framer-motion";
import { BRAND_NAME, FOOTER_LINKS, SOCIAL_LINKS, createWhatsAppUrl } from "@/data/constants";

/**
 * Scene08 — Conversion Naturelle
 * 
 * "Votre rituel NOOREA commence ici."
 * 
 * Final conversion scene: Ouverture vers la conversation.
 * La lumière INVITE — CTA WhatsApp entouré d'un golden glow chaleureux.
 * 
 * Mood: invitation naturelle, ouverture humaine, conversion sans friction
 * 
 * Timeline:
 * 0-1s: Fond noir s'installe
 * 1-3s: Titre final apparaît
 * 3-5s: CTA WhatsApp se révèle avec golden glow
 * 5-7s: Footer minimal apparaît
 */
export function Scene08() {
  const whatsappUrl = createWhatsAppUrl();

  return (
    <section
      id="scene8"
      className="relative flex min-h-[80vh] flex-col bg-[var(--color-black)] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24"
    >
      {/* Main content — centered */}
      <div className="relative z-10 mx-auto flex flex-1 flex-col items-center justify-center text-center">
        {/* Label discret */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-10"
        >
          <div className="mx-auto mb-3 h-px w-12 bg-[var(--color-goldLight)] md:w-16" />
          <p className="text-xs font-light tracking-[0.2em] text-[var(--color-goldLight)] md:text-sm">
            L&apos;OUVERTURE
          </p>
        </motion.div>

        {/* Titre final puissant */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 max-w-3xl text-4xl font-light leading-[1.15] tracking-tight text-white md:mb-8 md:text-5xl lg:text-6xl"
        >
          Votre rituel {BRAND_NAME}
          <br />
          commence ici.
        </motion.h1>

        {/* Sous-titre invitation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 max-w-md text-base font-light leading-relaxed text-[var(--color-sand)] md:mb-16 md:text-lg"
        >
          Parlons de votre peau. Ensemble, trouvons le soin qui vous ressemble.
        </motion.p>

        {/* CTA WhatsApp — Hero de la scène */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Golden glow ambient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(ellipse, rgba(212, 175, 143, 0.35) 0%, rgba(212, 175, 143, 0.15) 50%, transparent 75%)",
              filter: "blur(80px)",
            }}
            aria-hidden="true"
          />

          {/* Pulse golden glow — heartbeat effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.12, 0],
              scale: [0.8, 1.1, 1.2],
            }}
            transition={{
              duration: 3,
              delay: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[320px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(ellipse, rgba(212, 175, 143, 0.4) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />

          {/* Bouton WhatsApp */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--color-goldLight)]/60 bg-gradient-to-br from-[var(--color-goldLight)]/10 to-[var(--color-gold)]/5 px-10 py-5 backdrop-blur-md transition-all duration-500 hover:border-[var(--color-goldLight)] hover:bg-[var(--color-goldLight)]/15 hover:shadow-2xl hover:shadow-[var(--color-goldLight)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:px-12 md:py-6"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* WhatsApp icon */}
            <svg
              className="relative z-10 h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>

            <span className="relative z-10 text-base font-light tracking-wide text-white transition-colors md:text-lg">
              Démarrer la conversation
            </span>

            {/* Hover glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileHover={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.6) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>

        {/* Note rassurante */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 text-xs font-light text-[var(--color-taupe)] md:text-sm"
        >
          Réponse personnalisée sous 24h
        </motion.p>
      </div>

      {/* Footer minimal */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 2 }}
        className="relative z-10 mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Footer top — Brand + Links */}
          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:gap-12">
            {/* Brand column */}
            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                <h2 className="mb-4 text-2xl font-light tracking-tighter text-white md:text-3xl">
                  {BRAND_NAME}
                </h2>
                <p className="text-sm font-light leading-relaxed text-[var(--color-sand)]">
                  L&apos;harmonie de la peau.
                  <br />
                  Une beauté pensée autrement.
                </p>

                {/* Social links */}
                <div className="mt-6 flex items-center gap-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 2.3 + index * 0.1 }}
                      className="text-[var(--color-taupe)] transition-colors duration-300 hover:text-[var(--color-goldLight)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xs font-light tracking-wide">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links columns */}
            <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3 md:gap-12">
              {Object.entries(FOOTER_LINKS).map(([category, links], catIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 2.4 + catIndex * 0.1 }}
                >
                  <h3 className="mb-4 text-sm font-light tracking-wide text-[var(--color-goldLight)]">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm font-light text-[var(--color-sand)] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer bottom — Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs font-light text-[var(--color-taupe)] md:flex-row md:text-left"
          >
            <p>© {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              Créé avec{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[var(--color-goldLight)]"
              >
                ✦
              </motion.span>{" "}
              pour célébrer votre peau
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </section>
  );
}
