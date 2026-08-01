"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getProductSlug } from "@/lib/slugify";
import { createWhatsAppUrl } from "@/data/constants";

interface ProductPageProps {
  product: Product;
  currentIndex: number;
  totalProducts: number;
  previousProduct: Product | null;
  nextProduct: Product | null;
  relatedProducts: Product[];
}

/**
 * ProductPage — Dynamic product detail page
 * 
 * Premium product presentation with:
 * - Hero with large product image
 * - Product details and description
 * - Ritual/gesture section
 * - Related products
 * - Navigation arrows (previous/next)
 * - CTAs (WhatsApp + Back to collection)
 */
export function ProductPage({
  product,
  currentIndex,
  totalProducts,
  previousProduct,
  nextProduct,
  relatedProducts,
}: ProductPageProps) {
  const whatsappUrl = createWhatsAppUrl(
    `Bonjour NOOREA, j'aimerais en savoir plus sur ${product.nameFr} (${product.volume}).`
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-ivory)] to-[var(--color-sand)]">
      {/* Hero Section — Product Focus */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-16 lg:pb-32 lg:pt-48">
        {/* Back to collection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-6 top-24 md:left-12 md:top-32 lg:left-16"
        >
          <Link
            href="/collection"
            className="group inline-flex items-center gap-2 text-sm font-light text-[var(--color-taupe)] transition-colors duration-300 hover:text-[var(--color-black)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
          >
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Collection</span>
          </Link>
        </motion.div>

        {/* Product counter */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute right-6 top-24 text-xs font-light tracking-[0.2em] text-[var(--color-taupe)] md:right-12 md:top-32 lg:right-16"
        >
          {String(currentIndex + 1).padStart(2, "0")} / {String(totalProducts).padStart(2, "0")}
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-ivory)] to-[var(--color-sand)]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain p-8 md:p-12 lg:p-16"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  quality={95}
                  priority
                />

                {/* Golden ambient glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: "radial-gradient(circle, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                    filter: "blur(80px)",
                  }}
                  aria-hidden="true"
                />

                {/* Vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(250, 248, 246, 0.4) 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Ambient glow outside */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2.2, delay: 1 }}
                className="pointer-events-none absolute -inset-12 -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(212, 175, 143, 0.3) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                aria-hidden="true"
              />
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center space-y-8 md:space-y-10"
            >
              {/* Category */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="mb-4 h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
                <p className="text-xs font-light tracking-[0.2em] text-[var(--color-taupe)] md:text-sm">
                  {product.typeFr.toUpperCase()}
                </p>
              </motion.div>

              {/* Product Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-4xl font-light leading-tight tracking-tight text-[var(--color-black)] md:text-5xl lg:text-6xl"
              >
                {product.nameFr}
              </motion.h1>

              {/* Volume */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <p className="text-xl font-light text-[var(--color-taupe)] md:text-2xl">
                  {product.volume}
                </p>
              </motion.div>

              {/* Description */}
              {product.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="border-l-2 border-[var(--color-goldLight)] pl-6"
                >
                  <p className="text-xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-2xl lg:text-3xl">
                    {product.description}
                  </p>
                </motion.div>
              )}

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="flex flex-col gap-4 pt-4 sm:flex-row"
              >
                {/* Primary CTA — WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[var(--color-goldLight)]/40 bg-gradient-to-br from-[var(--color-goldLight)]/10 to-transparent px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-goldLight)] hover:bg-[var(--color-goldLight)]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
                >
                  <span className="relative z-10 text-sm font-light tracking-wide text-[var(--color-black)]">
                    Parler à NOOREA
                  </span>

                  {/* Hover glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileHover={{ opacity: 0.12, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.5) 0%, transparent 70%)",
                      filter: "blur(25px)",
                    }}
                    aria-hidden="true"
                  />
                </a>

                {/* Secondary CTA — Back to collection */}
                <Link
                  href="/collection"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-taupe)]/20 bg-white/40 px-8 py-4 text-sm font-light tracking-wide text-[var(--color-black)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-taupe)]/40 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
                >
                  Voir la collection
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Ambient glow — Top right */}
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
      </section>

      {/* Benefits Section — Product Key Points */}
      {product.description && (
        <section className="relative bg-white/40 px-6 py-16 backdrop-blur-sm md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mx-auto mb-6 h-px w-16 bg-[var(--color-goldLight)]" />
              
              <h2 className="mb-8 text-sm font-light tracking-[0.2em] text-[var(--color-goldLight)] md:mb-12 md:text-base">
                LES BIENFAITS
              </h2>

              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-left"
                >
                  <h3 className="mb-3 text-lg font-light tracking-tight text-[var(--color-black)] md:text-xl">
                    Texture
                  </h3>
                  <p className="text-base font-light leading-relaxed text-[var(--color-charcoal)]">
                    Une formule qui fond sur la peau et pénètre en profondeur.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-left"
                >
                  <h3 className="mb-3 text-lg font-light tracking-tight text-[var(--color-black)] md:text-xl">
                    Sensation
                  </h3>
                  <p className="text-base font-light leading-relaxed text-[var(--color-charcoal)]">
                    Un moment de bien-être qui respecte l'équilibre naturel.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-left"
                >
                  <h3 className="mb-3 text-lg font-light tracking-tight text-[var(--color-black)] md:text-xl">
                    Résultat
                  </h3>
                  <p className="text-base font-light leading-relaxed text-[var(--color-charcoal)]">
                    Une peau visiblement plus lumineuse et confortable.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-left"
                >
                  <h3 className="mb-3 text-lg font-light tracking-tight text-[var(--color-black)] md:text-xl">
                    Usage
                  </h3>
                  <p className="text-base font-light leading-relaxed text-[var(--color-charcoal)]">
                    Rituel quotidien matin et soir, sur peau propre.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Ritual Section — "Le Geste" */}
      <section className="relative px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="mx-auto h-px w-16 bg-[var(--color-goldLight)]" />

            <h2 className="text-sm font-light tracking-[0.2em] text-[var(--color-goldLight)] md:text-base">
              LE GESTE
            </h2>

            <p className="text-2xl font-light leading-relaxed text-[var(--color-charcoal)] md:text-3xl lg:text-4xl">
              Un rituel pensé pour votre peau.
              <br />
              Un moment pour prendre soin de soi.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 pt-4"
            >
              <div className="flex items-start gap-4 text-left">
                <span className="mt-1 text-sm font-light text-[var(--color-goldLight)]">01</span>
                <p className="flex-1 text-base font-light leading-relaxed text-[var(--color-taupe)] md:text-lg">
                  Prélevez une petite quantité et réchauffez entre vos mains
                </p>
              </div>

              <div className="flex items-start gap-4 text-left">
                <span className="mt-1 text-sm font-light text-[var(--color-goldLight)]">02</span>
                <p className="flex-1 text-base font-light leading-relaxed text-[var(--color-taupe)] md:text-lg">
                  Appliquez délicatement en mouvements circulaires
                </p>
              </div>

              <div className="flex items-start gap-4 text-left">
                <span className="mt-1 text-sm font-light text-[var(--color-goldLight)]">03</span>
                <p className="flex-1 text-base font-light leading-relaxed text-[var(--color-taupe)] md:text-lg">
                  Massez doucement jusqu'à absorption complète
                </p>
              </div>

              <div className="flex items-start gap-4 text-left">
                <span className="mt-1 text-sm font-light text-[var(--color-goldLight)]">04</span>
                <p className="flex-1 text-base font-light leading-relaxed text-[var(--color-taupe)] md:text-lg">
                  Prenez un instant pour ressentir la texture sur votre peau
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 text-base font-light italic text-[var(--color-taupe)]"
            >
              Chaque texture, chaque geste compte. {product.nameFr} trouve naturellement sa
              place dans votre routine quotidienne.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Related Products — "Vous pourriez aussi aimer" */}
      {relatedProducts.length > 0 && (
        <section className="relative px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-2xl font-light tracking-tight text-[var(--color-black)] md:text-3xl lg:text-4xl">
                Vous pourriez aussi aimer
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {relatedProducts.map((relatedProduct, index) => {
                const slug = getProductSlug(relatedProduct);

                return (
                  <motion.article
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={`/collection/${slug}`} className="group block">
                      <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-[var(--color-ivory)] to-[var(--color-sand)]">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.imageAlt}
                          fill
                          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
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
                        <h3 className="text-lg font-light tracking-tight text-[var(--color-black)] transition-opacity duration-300 group-hover:opacity-60 md:text-xl">
                          {relatedProduct.nameFr}
                        </h3>
                        <p className="text-sm font-light text-[var(--color-taupe)]">
                          {relatedProduct.volume}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation — Previous / Next Products */}
      <section className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between border-t border-[var(--color-taupe)]/20 pt-8">
            {/* Previous */}
            {previousProduct ? (
              <Link
                href={`/collection/${getProductSlug(previousProduct)}`}
                className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
              >
                <svg
                  className="h-5 w-5 text-[var(--color-taupe)] transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <div className="hidden sm:block">
                  <p className="text-xs font-light text-[var(--color-taupe)]">Précédent</p>
                  <p className="text-sm font-light text-[var(--color-black)]">{previousProduct.nameFr}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Current indicator */}
            <div className="text-center">
              <p className="text-xs font-light tracking-[0.2em] text-[var(--color-taupe)]">
                {String(currentIndex + 1).padStart(2, "0")} / {String(totalProducts).padStart(2, "0")}
              </p>
            </div>

            {/* Next */}
            {nextProduct ? (
              <Link
                href={`/collection/${getProductSlug(nextProduct)}`}
                className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
              >
                <div className="hidden text-right sm:block">
                  <p className="text-xs font-light text-[var(--color-taupe)]">Suivant</p>
                  <p className="text-sm font-light text-[var(--color-black)]">{nextProduct.nameFr}</p>
                </div>
                <svg
                  className="h-5 w-5 text-[var(--color-taupe)] transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Bottom ambient glow */}
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
    </div>
  );
}
