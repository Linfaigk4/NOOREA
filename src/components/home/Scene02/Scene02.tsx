"use client";

import { motion } from "framer-motion";

/**
 * Scene02 — Le Manifeste
 * 
 * "La beauté n'est pas à corriger. Elle est à révéler."
 * 
 * Une expérience éditoriale qui explique pourquoi NOOREA existe.
 * Rupture douce avec le Hero : plus calme, plus typographique.
 * 
 * Timeline:
 * 0-1.5s: Respiration (transition depuis Hero)
 * 1.5-3s: Première phrase "La beauté n'est pas à corriger"
 * 3-5s: Seconde phrase "Elle est à révéler"
 * 5-8s: Manifeste complet
 * 8-10s: Signature "Révéler ce qui est déjà là"
 */
export function Scene02() {
  return (
    <section
      id="scene2"
      className="relative min-h-screen bg-[var(--color-ivory)] px-6 py-32 md:px-12 md:py-40 lg:px-16 lg:py-48"
    >
      {/* Chapter number — Très discret en arrière-plan */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.04, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="pointer-events-none absolute right-6 top-16 text-[200px] font-light leading-none tracking-tighter text-[var(--color-black)] md:right-12 md:top-20 md:text-[280px] lg:right-16 lg:top-24 lg:text-[360px]"
        aria-hidden="true"
      >
        02
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        {/* Chapitre label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 md:mb-20 lg:mb-24"
        >
          <div className="h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
          <p className="mt-4 text-xs font-light tracking-[0.2em] text-[var(--color-taupe)] md:text-sm">
            CHAPITRE 02
          </p>
        </motion.div>

        {/* Phase 2: Première phrase — Point focal absolu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 lg:mb-40"
        >
          <h1 className="max-w-5xl text-5xl font-light leading-[1.1] tracking-tight text-[var(--color-black)] md:text-6xl lg:text-7xl xl:text-8xl">
            La beauté
            <br />
            n&apos;est pas à corriger.
          </h1>
        </motion.div>

        {/* Phase 3: Seconde phrase — Réponse émotionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex justify-end md:mb-32 lg:mb-40"
        >
          <div className="max-w-3xl">
            <h2 className="text-right text-4xl font-light leading-[1.2] tracking-tight text-[var(--color-charcoal)] md:text-5xl lg:text-6xl xl:text-7xl">
              Elle est à{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative inline-block"
              >
                <span className="relative z-10">révéler</span>
                {/* Subtle golden underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-1 left-0 right-0 h-px origin-left bg-[var(--color-goldLight)]"
                  aria-hidden="true"
                />
              </motion.span>
              .
            </h2>
          </div>
        </motion.div>

        {/* Phase 4: Manifeste complet */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-32 max-w-4xl space-y-8 md:mb-40 lg:mb-48"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-2xl lg:text-3xl"
          >
            Nous croyons que la beauté ne se transforme pas.
            <br />
            Elle se révèle.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-2xl lg:text-3xl"
          >
            Que chaque peau possède sa propre lumière.
            <br />
            Sa propre histoire.
            <br />
            Son propre éclat.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-2xl lg:text-3xl"
          >
            NOOREA crée des rituels pensés pour révéler ce qui est déjà là.
          </motion.p>
        </motion.div>

        {/* Phase 5: Signature — Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="relative text-center">
            {/* Subtle golden glow behind signature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 143, 0.3) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            <p className="relative z-10 text-2xl font-light leading-relaxed tracking-wide text-[var(--color-black)] md:text-3xl lg:text-4xl">
              Révéler ce qui est déjà là.
            </p>

            {/* NOOREA mark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 flex justify-center"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[var(--color-goldLight)]" />
                <span className="text-sm font-light tracking-[0.3em] text-[var(--color-taupe)]">
                  NOOREA
                </span>
                <div className="h-px w-12 bg-[var(--color-goldLight)]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle parallax element — Light sweep effect */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 0.1, x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.2) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
