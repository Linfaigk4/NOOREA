"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { getProductSlug } from "@/lib/slugify";
import { createWhatsAppUrl } from "@/data/constants";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MenuOverlay — Full-screen immersive navigation menu
 * 
 * Premium navigation experience with:
 * - Full-screen overlay with blur backdrop
 * - Product list from products.ts
 * - WhatsApp CTA
 * - Keyboard navigation (Escape to close)
 * - Body scroll lock when open
 * - Staggered animations
 */
export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const whatsappUrl = createWhatsAppUrl();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Focus trap: get all focusable elements
    const getFocusableElements = () => {
      if (!isOpen) return [];
      const modal = document.querySelector('[role="dialog"]');
      if (!modal) return [];
      
      return Array.from(
        modal.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ) as HTMLElement[];
    };

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + Tab: focus last element if on first
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // Tab: focus first element if on last
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTab);

    // Auto-focus first element when menu opens
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[var(--color-espresso)]/95 backdrop-blur-xl"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation principal"
          >
            <div className="min-h-screen px-6 py-20 md:px-12 md:py-24 lg:px-16">
              <div className="mx-auto max-w-5xl">
                {/* Header — Brand + Close */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mb-16 flex items-center justify-between md:mb-20"
                >
                  <Link
                    href="/"
                    onClick={onClose}
                    className="text-2xl font-light tracking-tighter text-white transition-opacity duration-300 hover:opacity-60 md:text-3xl"
                  >
                    NOOREA
                  </Link>

                  <button
                    onClick={onClose}
                    className="flex h-12 w-12 items-center justify-center transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-espresso)]"
                    aria-label="Fermer le menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <line
                        x1="18"
                        y1="6"
                        x2="6"
                        y2="18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </motion.div>

                {/* Navigation Links — Main */}
                <motion.nav
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-16 space-y-6 md:mb-20 md:space-y-8"
                >
                  <Link
                    href="/"
                    onClick={onClose}
                    className="group block text-4xl font-light tracking-tight text-white transition-opacity duration-300 hover:opacity-60 md:text-5xl lg:text-6xl"
                  >
                    Accueil
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 block h-px w-full origin-left bg-[var(--color-goldLight)]"
                    />
                  </Link>

                  <Link
                    href="/collection"
                    onClick={onClose}
                    className="group block text-4xl font-light tracking-tight text-white transition-opacity duration-300 hover:opacity-60 md:text-5xl lg:text-6xl"
                  >
                    La Collection
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 block h-px w-full origin-left bg-[var(--color-goldLight)]"
                    />
                  </Link>

                  <Link
                    href="/notre-histoire"
                    onClick={onClose}
                    className="group block text-4xl font-light tracking-tight text-white transition-opacity duration-300 hover:opacity-60 md:text-5xl lg:text-6xl"
                  >
                    Notre Histoire
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 block h-px w-full origin-left bg-[var(--color-goldLight)]"
                    />
                  </Link>

                  <Link
                    href="/engagements"
                    onClick={onClose}
                    className="group block text-4xl font-light tracking-tight text-white transition-opacity duration-300 hover:opacity-60 md:text-5xl lg:text-6xl"
                  >
                    Engagements
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 block h-px w-full origin-left bg-[var(--color-goldLight)]"
                    />
                  </Link>

                  <Link
                    href="/journal"
                    onClick={onClose}
                    className="group block text-4xl font-light tracking-tight text-white transition-opacity duration-300 hover:opacity-60 md:text-5xl lg:text-6xl"
                  >
                    Journal
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 block h-px w-full origin-left bg-[var(--color-goldLight)]"
                    />
                  </Link>
                </motion.nav>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-12 h-px origin-left bg-white/10 md:mb-16"
                />

                {/* Products Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-16 md:mb-20"
                >
                  <h2 className="mb-8 text-sm font-light tracking-[0.2em] text-[var(--color-goldLight)] md:mb-10 md:text-base">
                    NOS RITUELS
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                    {products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                      >
                        <Link
                          href={`/collection/${getProductSlug(product)}`}
                          onClick={onClose}
                          className="group block transition-opacity duration-300 hover:opacity-80"
                        >
                          <div className="mb-2 text-lg font-light tracking-tight text-white md:text-xl">
                            {product.nameFr}
                          </div>
                          <div className="flex items-center gap-2 text-sm font-light text-[var(--color-taupe)]">
                            <span>{product.typeFr}</span>
                            <span className="text-xs">—</span>
                            <span>{product.volume}</span>
                          </div>

                          {/* Hover indicator */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 h-px origin-left bg-[var(--color-goldLight)]"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-12 h-px origin-left bg-white/10 md:mb-16"
                />

                {/* WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <h2 className="mb-6 text-sm font-light tracking-[0.2em] text-[var(--color-goldLight)] md:mb-8 md:text-base">
                    PARLONS DE VOTRE PEAU
                  </h2>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--color-goldLight)]/40 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-goldLight)] hover:bg-[var(--color-goldLight)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] md:px-10 md:py-5"
                  >
                    <svg
                      className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110 md:h-6 md:w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>

                    <span className="text-sm font-light tracking-wide text-white md:text-base">
                      WhatsApp
                    </span>

                    {/* Hover glow */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileHover={{ opacity: 0.12, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.5) 0%, transparent 70%)",
                        filter: "blur(30px)",
                      }}
                      aria-hidden="true"
                    />
                  </a>
                </motion.div>

                {/* Golden ambient glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.05, scale: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="pointer-events-none fixed left-0 top-1/3 h-[600px] w-[600px]"
                  style={{
                    background: "radial-gradient(circle, rgba(212, 175, 143, 0.3) 0%, transparent 60%)",
                    filter: "blur(120px)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
