"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Scene05 — Connexion Humaine
 * 
 * "La beauté commence là où la peau rencontre le geste"
 * 
 * Rupture forte avec Scene04 : du sombre/profond vers le clair/chaleureux.
 * La lumière quitte la matière pour rencontrer l'humain.
 * La lumière ne pénètre plus, elle TOUCHE.
 * 
 * Timeline:
 * 0-2s: Transition espresso → cream (numéro 05 + label)
 * 2-4s: Présence humaine apparaît progressivement
 * 4-6s: Lumière organique touche la peau
 * 6-8s: Message central
 * 8-10s: Triptyque + signature NOOREA
 */
export function Scene05() {
  return (
    <section
      id="scene5"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-ivory)] to-[var(--color-sand)] px-6 py-32 md:px-12 md:py-40 lg:px-16 lg:py-48"
    >
      {/* Background texture — warm.png */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/NOREA-ASSETS/backgrounds/warm.png"
          alt=""
          fill
          className="object-cover"
          quality={90}
          aria-hidden="true"
        />
      </div>

      {/* Chapter number — Très discret */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.03, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute left-6 top-16 text-[200px] font-light leading-none tracking-tighter text-[var(--color-taupe)] md:left-12 md:top-20 md:text-[280px] lg:left-16 lg:top-24 lg:text-[360px]"
        aria-hidden="true"
      >
        05
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Phase 1: Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 md:mb-24 lg:mb-32"
        >
          <div className="h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
          <p className="mt-4 text-xs font-light tracking-[0.2em] text-[var(--color-goldLight)] md:text-sm">
            LA CONNEXION HUMAINE
          </p>
        </motion.div>

        {/* Phase 2-3: Image humaine + lumière organique */}
        <div className="mb-32 grid grid-cols-1 items-center gap-12 md:mb-40 md:grid-cols-2 md:gap-16 lg:mb-48 lg:gap-20">
          {/* Espace négatif + Texte à gauche (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1"
          >
            <div className="max-w-xl">
              <h2 className="mb-8 text-3xl font-light leading-relaxed tracking-tight text-[var(--color-black)] md:text-4xl lg:text-5xl xl:text-6xl">
                La beauté commence là où{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative inline-block"
                >
                  la peau rencontre le geste
                  {/* Subtle underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-px origin-left bg-[var(--color-goldLight)]"
                    aria-hidden="true"
                  />
                </motion.span>
                .
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-3"
              >
                <p className="text-lg font-light tracking-wide text-[var(--color-charcoal)] md:text-xl">
                  Prendre soin.
                </p>
                <p className="text-lg font-light tracking-wide text-[var(--color-charcoal)] md:text-xl">
                  Ressentir.
                </p>
                <p className="text-lg font-light tracking-wide text-[var(--color-charcoal)] md:text-xl">
                  Révéler.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image humaine à droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              {/* Présence humaine */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                {/* Voile initial — révélation progressive */}
                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 z-20 bg-gradient-to-b from-[var(--color-cream)]/60 via-[var(--color-ivory)]/30 to-transparent"
                  aria-hidden="true"
                />

                <Image
                  src="/NOREA-ASSETS/lifestyle/lifestyle-02.png"
                  alt="Geste authentique sur la peau, connexion humaine avec les soins NOOREA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                />

                {/* Lumière organique qui TOUCHE — mouvement doux et lent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 4, delay: 1.8, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 z-30"
                >
                  {/* Lumière caresse — effet de toucher */}
                  <motion.div
                    initial={{ y: "30%", opacity: 0 }}
                    whileInView={{ y: "-30%", opacity: [0, 0.4, 0.5, 0.4, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 5, delay: 2.2, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 h-[500px] w-[300px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background: "linear-gradient(180deg, transparent 0%, rgba(212, 175, 143, 0.3) 30%, rgba(212, 175, 143, 0.4) 50%, rgba(212, 175, 143, 0.3) 70%, transparent 100%)",
                      filter: "blur(60px)",
                      transform: "rotate(-10deg)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Ambient warm glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, delay: 2.5 }}
                    className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background: "radial-gradient(circle, rgba(212, 175, 143, 0.35) 0%, transparent 70%)",
                      filter: "blur(80px)",
                    }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Soft vignette — intimité */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(250, 248, 246, 0.2) 90%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Glow subtil autour de l'image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.12, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1.5 }}
                className="pointer-events-none absolute -inset-8 -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(212, 175, 143, 0.25) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* Phase 5: Triptyque conceptuel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {[
              { label: "LE GESTE", delay: 0.4 },
              { label: "LA PEAU", delay: 0.6 },
              { label: "LA CONNEXION", delay: 0.8 },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="h-px w-12 bg-[var(--color-goldLight)]" />
                </div>
                <p className="text-lg font-light tracking-[0.2em] text-[var(--color-goldLight)] md:text-xl">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Signature NOOREA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Subtle golden glow behind */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[250px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 143, 0.35) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--color-goldLight)]" />
              <span className="text-xs font-light tracking-[0.3em] text-[var(--color-charcoal)] md:text-sm">
                NOOREA
              </span>
              <div className="h-px w-12 bg-[var(--color-goldLight)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient light particles — warmth effect */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="pointer-events-none absolute right-0 top-1/3 h-[700px] w-[700px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.2) 0%, transparent 65%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
