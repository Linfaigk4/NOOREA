"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Scene04 — Expérience Sensorielle
 * 
 * "Ce que la lumière révèle sous la surface"
 * 
 * Rupture forte avec Scene03 : du clair/chaud vers le sombre/profond.
 * La lumière ne sculpte plus l'objet, elle PÉNÈTRE la matière.
 * 
 * Timeline:
 * 0-2s: Entrée espresso (numéro 04 + label)
 * 2-4s: Matière apparaît progressivement
 * 4-6s: Lumière traverse et révèle la texture
 * 6-8s: Texte philosophique
 * 8-10s: Signature NOOREA
 */
export function Scene04() {
  return (
    <section
      id="scene4"
      className="relative min-h-screen overflow-hidden bg-[var(--color-espresso)] px-6 py-32 md:px-12 md:py-40 lg:px-16 lg:py-48"
    >
      {/* Background texture — dark.png */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/NOREA-ASSETS/backgrounds/dark.png"
          alt=""
          fill
          className="object-cover"
          quality={90}
          priority
          aria-hidden="true"
        />
      </div>

      {/* Chapter number — Très discret */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute right-6 top-16 text-[200px] font-light leading-none tracking-tighter text-white md:right-12 md:top-20 md:text-[280px] lg:right-16 lg:top-24 lg:text-[360px]"
        aria-hidden="true"
      >
        04
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
            L&apos;EXPÉRIENCE SENSORIELLE
          </p>
        </motion.div>

        {/* Phase 2-3: Matière centrale avec lumière */}
        <div className="relative mb-32 flex justify-center md:mb-40 lg:mb-48">
          <div className="relative w-full max-w-4xl">
            {/* Texture révélée — sensory asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] overflow-hidden rounded-3xl"
            >
              {/* Silhouette initiale */}
              <motion.div
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="absolute inset-0 z-20 bg-gradient-to-b from-[var(--color-espresso)]/80 via-[var(--color-espresso)]/40 to-transparent"
                aria-hidden="true"
              />

              <Image
                src="/NOREA-ASSETS/editorial/sensory/sensory-01.png"
                alt="Texture organique révélée par la lumière"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                quality={95}
              />

              {/* Golden light sweep — Pénètre la matière */}
              <motion.div
                initial={{ x: "-150%", opacity: 0 }}
                whileInView={{ x: "150%", opacity: [0, 0.5, 0.7, 0.5, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 z-30"
                style={{
                  background: "linear-gradient(100deg, transparent 0%, rgba(212, 175, 143, 0.6) 45%, rgba(212, 175, 143, 0.8) 50%, rgba(212, 175, 143, 0.6) 55%, transparent 100%)",
                  filter: "blur(50px)",
                }}
                aria-hidden="true"
              />

              {/* Ambient depth glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 2 }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "radial-gradient(circle, rgba(212, 175, 143, 0.4) 0%, transparent 65%)",
                  filter: "blur(100px)",
                }}
                aria-hidden="true"
              />

              {/* Vignette profondeur */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 20%, rgba(26, 15, 10, 0.4) 80%)",
                }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Light rays — Effet de profondeur */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 0.08, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 4, delay: 2.5, ease: "easeInOut" }}
              className="pointer-events-none absolute left-0 top-0 h-full w-full"
              aria-hidden="true"
            >
              <div
                className="h-full w-full"
                style={{
                  background: "linear-gradient(110deg, transparent 30%, rgba(212, 175, 143, 0.1) 50%, transparent 70%)",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Phase 4: Texte philosophique */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex justify-center md:mb-32 lg:mb-40"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-light leading-relaxed tracking-tight text-[var(--color-ivory)] md:text-4xl lg:text-5xl xl:text-6xl">
              Ce que la peau ressent,
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative inline-block"
              >
                la lumière le révèle
                {/* Subtle underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-px origin-center bg-[var(--color-goldLight)]"
                  aria-hidden="true"
                />
              </motion.span>
              .
            </h2>
          </div>
        </motion.div>

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
              { label: "LA MATIÈRE", delay: 0.4 },
              { label: "LE GESTE", delay: 0.6 },
              { label: "LE RITUEL", delay: 0.8 },
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
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[250px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex items-center gap-4">
              <div className="h-px w-12 bg-[var(--color-goldLight)]" />
              <span className="text-xs font-light tracking-[0.3em] text-[var(--color-ivory)] md:text-sm">
                NOOREA
              </span>
              <div className="h-px w-12 bg-[var(--color-goldLight)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient light particles — Depth effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.06, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-1/4 left-0 h-[600px] w-[600px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.25) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
