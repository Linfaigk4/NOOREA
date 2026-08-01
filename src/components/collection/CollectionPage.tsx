"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/products";
import { getProductSlug } from "@/lib/slugify";

/**
 * CollectionPage — La Collection NOOREA
 * 
 * Premium editorial product grid showcasing all 8 NOOREA products.
 * Editorial asymmetric layout avoiding e-commerce aesthetic.
 * 
 * Structure:
 * - Hero with title and philosophy
 * - Lightweight category filter
 * - Product grid with hover interactions
 * - Golden glow effects on hover
 * - Links to individual product pages
 */

type CategoryFilter = "TOUT" | "VISAGE" | "CORPS" | "SOIN";

const CATEGORY_MAP: Record<CategoryFilter, string[]> = {
  TOUT: [],
  VISAGE: ["Sérum Visage", "Crème Visage"],
  CORPS: ["Crème Corps"],
  SOIN: ["Savon Soin", "Sérum Soin"],
};

export function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("TOUT");

  const filteredProducts = activeFilter === "TOUT" 
    ? products 
    : products.filter(p => CATEGORY_MAP[activeFilter].includes(p.typeFr));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-ivory)] to-[var(--color-sand)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-16 lg:pb-32 lg:pt-48">
        {/* Ambient golden glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(212, 175, 143, 0.3) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 md:mb-16"
          >
            <div className="h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
            <p className="mt-4 text-xs font-light tracking-[0.2em] text-[var(--color-taupe)] md:text-sm">
              LA COLLECTION
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 max-w-4xl text-5xl font-light leading-[1.1] tracking-tight text-[var(--color-black)] md:mb-12 md:text-6xl lg:text-7xl"
          >
            Des gestes pensés
            <br />
            comme des rituels.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-2xl lg:text-3xl"
          >
            Des textures comme des sensations. Chaque soin est une invitation à
            prendre soin de soi.
          </motion.p>

          {/* Category Filter — Discreet and Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4 md:mt-20 md:gap-6"
          >
            {(["TOUT", "VISAGE", "CORPS", "SOIN"] as CategoryFilter[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative overflow-hidden rounded-full px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] md:px-8 md:py-3 md:text-base ${
                  activeFilter === filter
                    ? "bg-[var(--color-goldLight)]/15 text-[var(--color-black)] border border-[var(--color-goldLight)]/40"
                    : "bg-white/40 text-[var(--color-taupe)] border border-[var(--color-taupe)]/20 hover:border-[var(--color-goldLight)]/30 hover:text-[var(--color-black)]"
                }`}
              >
                <span className="relative z-10">{filter}</span>
                
                {/* Active indicator glow */}
                {activeFilter === filter && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.12, scale: 1 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative px-6 pb-32 md:px-12 md:pb-40 lg:px-16 lg:pb-48">
        <div className="mx-auto max-w-7xl">
          {/* Product count indicator */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center md:mb-12"
          >
            <p className="text-sm font-light text-[var(--color-taupe)]">
              {filteredProducts.length} {filteredProducts.length === 1 ? "rituel" : "rituels"}
            </p>
          </motion.div>

          {/* Grid — Editorial asymmetric layout */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          >
            {filteredProducts.map((product, index) => {
              const slug = getProductSlug(product);
              
              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/collection/${slug}`}
                    className="group block"
                  >
                    {/* Product Image Container */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-ivory)] to-[var(--color-sand)] md:mb-8">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          className="object-contain p-8 transition-transform duration-700 group-hover:scale-110 md:p-12"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                          quality={90}
                        />

                        {/* Golden glow on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.18 }}
                          transition={{ duration: 0.5 }}
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.45) 0%, transparent 70%)",
                            filter: "blur(80px)",
                          }}
                          aria-hidden="true"
                        />

                        {/* Vignette for depth */}
                        <div
                          className="pointer-events-none absolute inset-0"
                          style={{
                            background: "radial-gradient(ellipse at center, transparent 40%, rgba(250, 248, 246, 0.3) 100%)",
                          }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Hover scale container effect */}
                      <div className="absolute inset-0 rounded-2xl border border-[var(--color-taupe)]/0 transition-colors duration-500 group-hover:border-[var(--color-goldLight)]/20" />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      {/* Category */}
                      <motion.p
                        className="text-xs font-light tracking-[0.2em] text-[var(--color-taupe)] transition-colors duration-300 group-hover:text-[var(--color-goldLight)] md:text-sm"
                      >
                        {product.typeFr.toUpperCase()}
                      </motion.p>

                      {/* Product Name */}
                      <h2 className="text-2xl font-light leading-tight tracking-tight text-[var(--color-black)] transition-opacity duration-300 group-hover:opacity-70 md:text-3xl lg:text-4xl">
                        {product.nameFr}
                      </h2>

                      {/* Volume */}
                      <p className="text-base font-light text-[var(--color-charcoal)] md:text-lg">
                        {product.volume}
                      </p>

                      {/* Description */}
                      {product.description && (
                        <p className="text-sm font-light leading-relaxed text-[var(--color-taupe)] md:text-base">
                          {product.description}
                        </p>
                      )}

                      {/* CTA Indicator */}
                      <div className="flex items-center gap-2 pt-2">
                        <motion.span
                          className="text-sm font-light tracking-wide text-[var(--color-charcoal)] transition-colors duration-300 group-hover:text-[var(--color-black)]"
                        >
                          Découvrir
                        </motion.span>
                        <motion.svg
                          className="h-4 w-4 text-[var(--color-charcoal)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-black)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </motion.svg>
                      </div>

                      {/* Underline hover effect */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="h-px origin-left bg-[var(--color-goldLight)]"
                      />
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Collection Footer — Brand signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
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

          {/* Products count indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-sm font-light text-[var(--color-taupe)]">
              {products.length} rituels pour votre peau
            </p>
          </motion.div>
        </div>

        {/* Ambient light effect — Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.06, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(212, 175, 143, 0.25) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          aria-hidden="true"
        />
      </section>
    </div>
  );
}
