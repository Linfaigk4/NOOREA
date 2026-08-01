"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { getProductSlug } from "@/lib/slugify";

/**
 * Scene07 — Désir / Décision
 * 
 * "Le désir se concentre"
 * 
 * Rupture forte avec Scene06 : du clair/interactif vers le sombre/focalisé.
 * La lumière CONCENTRE le regard sur un seul produit.
 * 
 * Le produit recommandé devient l'objet de désir.
 * 
 * Timeline:
 * 0-2s: Transition vers univers espresso profond
 * 2-4s: Le produit apparaît, suspendu
 * 4-6s: Lumière concentrée autour du produit
 * 6-8s: Phrase émotionnelle
 * 8-10s: Nom + détails + CTA
 */
export function Scene07() {
  // Utiliser le produit featured par défaut
  // Dans une architecture plus complexe, ce produit viendrait de Scene06 via un store global
  const featuredProduct = products.find((p) => p.featured) || products[0];
  const featuredSlug = getProductSlug(featuredProduct);

  return (
    <section
      id="scene7"
      className="relative min-h-screen overflow-hidden bg-[var(--color-espresso)] px-6 py-32 md:px-12 md:py-40 lg:px-16 lg:py-48"
    >
      {/* Background texture — dark.png */}
      <div className="absolute inset-0 opacity-40">
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
        whileInView={{ opacity: 0.04, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute left-6 top-16 text-[200px] font-light leading-none tracking-tighter text-white/10 md:left-12 md:top-20 md:text-[280px] lg:left-16 lg:top-24 lg:text-[360px]"
        aria-hidden="true"
      >
        07
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 text-center md:mb-20 lg:mb-24"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
          <p className="text-xs font-light tracking-[0.2em] text-[var(--color-goldLight)] md:text-sm">
            LE CHOIX
          </p>
        </motion.div>

        {/* Product Focus — Le héros de la scène */}
        <div className="mb-20 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-md"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-charcoal)]/40 to-[var(--color-black)]/60"
            >
              <Image
                src={featuredProduct.image}
                alt={`${featuredProduct.nameFr} — Soin NOOREA recommandé pour vous`}
                fill
                className="object-contain p-8 md:p-12"
                sizes="(max-width: 768px) 100vw, 448px"
                quality={95}
                priority
              />

              {/* Golden Focus — Lumière concentrée */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: [0, 0.12, 0.18], scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "radial-gradient(circle, rgba(212, 175, 143, 0.45) 0%, rgba(212, 175, 143, 0.25) 40%, transparent 70%)",
                  filter: "blur(80px)",
                }}
                aria-hidden="true"
              />

              {/* Directional light focus — Effet galerie */}
              <motion.div
                initial={{ opacity: 0, rotate: -8 }}
                whileInView={{ opacity: 0.08, rotate: 8 }}
                viewport={{ once: true }}
                transition={{ duration: 6, delay: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(125deg, transparent 20%, rgba(212, 175, 143, 0.15) 50%, transparent 80%)",
                  filter: "blur(40px)",
                }}
                aria-hidden="true"
              />

              {/* Vignette intimité */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at center, transparent 25%, rgba(26, 15, 10, 0.5) 85%)",
                }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Ambient glow autour du produit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, delay: 1.5 }}
              className="pointer-events-none absolute -inset-12 -z-10"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 143, 0.35) 0%, rgba(212, 175, 143, 0.15) 50%, transparent 75%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>

        {/* Phrase émotionnelle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-2xl font-light leading-relaxed tracking-tight text-[var(--color-ivory)] md:text-3xl lg:text-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative inline-block"
            >
              Celui qui vous ressemble
              {/* Subtle underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-px origin-center bg-[var(--color-goldLight)]"
                aria-hidden="true"
              />
            </motion.span>
            .
          </h2>
        </motion.div>

        {/* Nom du produit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 text-center"
        >
          <h3 className="mb-3 text-xl font-light tracking-tight text-white md:text-2xl lg:text-3xl">
            {featuredProduct.nameFr}
          </h3>
          <p className="text-sm font-light tracking-wide text-[var(--color-taupe)] md:text-base">
            {featuredProduct.typeFr} — {featuredProduct.volume}
          </p>
        </motion.div>

        {/* Description */}
        {featuredProduct.description && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 text-center md:mb-16"
          >
            <p className="mx-auto max-w-md text-base font-light text-[var(--color-ivory)]/80 md:text-lg">
              {featuredProduct.description}
            </p>
          </motion.div>
        )}

        {/* CTA vers produit page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center"
        >
          <Link
            href={`/collection/${featuredSlug}`}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--color-goldLight)]/40 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-goldLight)] hover:bg-[var(--color-goldLight)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
          >
            <span className="relative z-10 text-sm font-light tracking-wide text-[var(--color-ivory)] transition-colors">
              Découvrir ce rituel
            </span>

            <motion.svg
              className="relative z-10 h-4 w-4 text-[var(--color-ivory)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </motion.svg>

            {/* Hover glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 0.12, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.5) 0%, transparent 70%)",
                filter: "blur(25px)",
              }}
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Signature NOOREA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex justify-center md:mt-24"
        >
          <div className="relative">
            {/* Subtle golden glow behind */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[120px] w-[220px] -translate-x-1/2 -translate-y-1/2"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                filter: "blur(50px)",
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

      {/* Ambient light particles — Depth atmosphere */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.06, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-1/4 right-0 h-[700px] w-[700px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.2) 0%, transparent 65%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-1/3 h-[600px] w-[600px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.15) 0%, transparent 60%)",
          filter: "blur(130px)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
