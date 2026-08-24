"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { getProductSlug } from "@/lib/slugify";

/**
 * Scene03 — Découverte Produit
 * 
 * "L'objet qui capture la lumière"
 * 
 * La lumière qui révélait la peau rencontre maintenant l'objet créé pour la révéler.
 * Le produit devient le nouveau protagoniste.
 * 
 * Timeline:
 * 0-1.5s: Transition (ivory → warm texture)
 * 1.5-3s: Silhouette du produit
 * 3-5s: Révélation par la lumière
 * 5-7s: Identité produit (nom + tagline)
 * 7-10s: Collection (produits secondaires + CTA)
 */
export function Scene03() {
  // Featured product (product-01)
  const featuredProduct = products[0];
  const featuredSlug = getProductSlug(featuredProduct);

  // Secondary products for the grid (product-04 and product-08)
  const secondaryProducts = [products[3], products[7]];

  return (
    <section
      id="scene3"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[var(--color-sand)] via-[var(--color-beige)] to-[var(--color-sand)] px-6 py-32 md:px-12 md:py-40 lg:px-16 lg:py-48"
    >
      {/* Chapter number — Très discret en arrière-plan */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.03, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute left-6 top-16 text-[200px] font-light leading-none tracking-tighter text-[var(--color-charcoal)] md:left-12 md:top-20 md:text-[280px] lg:left-16 lg:top-24 lg:text-[360px]"
        aria-hidden="true"
      >
        03
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        {/* Collection label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <div className="h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
          <p className="mt-4 text-xs font-light tracking-[0.2em] text-[var(--color-taupe)] md:text-sm">
            LA COLLECTION
          </p>
        </motion.div>

        {/* Phase 1-2: Transition + Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-24 md:mb-32 lg:mb-40"
        >
          <h2 className="text-3xl font-light leading-relaxed tracking-tight text-[var(--color-charcoal)] md:text-4xl lg:text-5xl">
            Tout commence par la lumière.
          </h2>
        </motion.div>

        {/* Main Product — Hero */}
        <div className="relative mb-32 md:mb-40 lg:mb-48">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
            {/* Product Image — Dominant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Silhouette effect — Phase 2 */}
              <motion.div
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.5 }}
                className="absolute inset-0 z-10 bg-gradient-to-br from-[var(--color-beige)]/60 via-transparent to-[var(--color-sand)]/40"
                aria-hidden="true"
              />

              {/* Product container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-ivory)] to-[var(--color-sand)]">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.imageAlt}
                  fill
                  className="object-contain p-8 md:p-12 lg:p-16"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  quality={95}
                  priority
                />

                {/* Golden light sweep — Phase 3: Révélation */}
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  whileInView={{ x: "120%", opacity: [0, 0.4, 0.6, 0.4, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 z-20"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(212, 175, 143, 0.5) 50%, transparent 100%)",
                    filter: "blur(40px)",
                  }}
                  aria-hidden="true"
                />

                {/* Ambient golden glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1.1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.8 }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: "radial-gradient(circle, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                    filter: "blur(80px)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Glass reflet effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl md:h-32 md:w-32"
                aria-hidden="true"
              />
            </motion.div>

            {/* Product Identity — Phase 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center space-y-8 md:space-y-10 lg:space-y-12"
            >
              {/* Product type */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <p className="text-sm font-light tracking-[0.2em] text-[var(--color-taupe)] md:text-base">
                  {featuredProduct.typeFr.toUpperCase()}
                </p>
              </motion.div>

              {/* Product name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <h3 className="text-4xl font-light leading-tight tracking-tight text-[var(--color-black)] md:text-5xl lg:text-6xl">
                  {featuredProduct.nameFr}
                </h3>
              </motion.div>

              {/* Volume */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <p className="text-lg font-light text-[var(--color-taupe)] md:text-xl">
                  {featuredProduct.volume}
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="border-l-2 border-[var(--color-goldLight)] pl-6"
              >
                <p className="text-2xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-3xl lg:text-4xl">
                  L&apos;éclat capturé.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <Link
                  href={`/collection/${featuredSlug}`}
                  className="group inline-flex items-center gap-3 border-b-2 border-[var(--color-goldLight)]/40 pb-2 text-lg font-light tracking-wide text-[var(--color-black)] transition-all duration-500 hover:border-[var(--color-goldLight)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] md:text-xl"
                  aria-label={`Découvrir ${featuredProduct.nameFr}`}
                >
                  Découvrir
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Phase 5: Secondary Products — Collection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm font-light tracking-[0.2em] text-[var(--color-taupe)] md:text-base"
            >
              L&apos;ESSENTIEL
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Secondary Products */}
            {secondaryProducts.map((product, index) => {
              const slug = getProductSlug(product);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <Link href={`/collection/${slug}`} className="group block">
                    <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-[var(--color-ivory)] to-[var(--color-sand)] transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 md:p-8"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        quality={90}
                      />

                      {/* Hover glow */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.15 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                          filter: "blur(60px)",
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-light tracking-tight text-[var(--color-black)] transition-opacity duration-300 group-hover:opacity-60 md:text-xl lg:text-2xl">
                        {product.nameFr}
                      </h4>
                      <p className="text-sm font-light text-[var(--color-taupe)] md:text-base">
                        {product.volume}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}

            {/* Explore collection CTA — Third column on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 1 }}
              className="col-span-2 flex items-center justify-center lg:col-span-1"
            >
              <div className="text-center">
                <div className="relative mb-8">
                  {/* Subtle golden accent */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mx-auto h-px w-16 bg-[var(--color-goldLight)]"
                  />
                </div>

                <p className="mb-8 text-xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-2xl lg:text-3xl">
                  Découvrez
                  <br />
                  l&apos;ensemble
                  <br />
                  du rituel
                </p>

                <Link
                  href="/collection"
                  className="group inline-flex items-center gap-2 text-base font-light tracking-wide text-[var(--color-taupe)] transition-colors duration-300 hover:text-[var(--color-black)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] md:text-lg"
                  aria-label="Explorer la collection complète NOOREA"
                >
                  Explorer
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 flex justify-center md:mt-40 lg:mt-48"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-[var(--color-goldLight)]" />
            <span className="text-xs font-light tracking-[0.3em] text-[var(--color-taupe)] md:text-sm">
              NOOREA
            </span>
            <div className="h-px w-12 bg-[var(--color-goldLight)]" />
          </div>
        </motion.div>
      </div>

      {/* Ambient light effect — Parallax subtil */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.08, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-1/4 right-0 h-[500px] w-[500px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.3) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
