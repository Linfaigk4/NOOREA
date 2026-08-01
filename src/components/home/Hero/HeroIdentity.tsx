import { motion, AnimatePresence } from "framer-motion";

interface HeroIdentityProps {
  phase: "light" | "texture" | "truth" | "reveal" | "identity";
}

/**
 * HeroIdentity — Phase 5: L'identité NOOREA
 * Responsabilité : Logo NOOREA + tagline + CTA découvrir (8-10s)
 */
export function HeroIdentity({ phase }: HeroIdentityProps) {
  return (
    <AnimatePresence>
      {phase === "identity" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 flex items-end pb-16 md:items-center md:pb-0"
        >
          <div className="relative z-20 w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl space-y-8 md:space-y-12">
              {/* Brand name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="mb-4 text-5xl font-light tracking-tighter text-white md:text-6xl lg:text-7xl">
                  NOOREA
                </h2>
                <div className="h-px w-20 bg-[var(--color-goldLight)]" />
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl font-light leading-relaxed text-[var(--color-sand)] md:text-3xl lg:text-4xl"
              >
                L&apos;éclat capturé.
              </motion.p>

              {/* Editorial link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={() => document.getElementById("scene2")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-3 border-b border-[var(--color-goldLight)]/30 pb-2 text-lg font-light tracking-wide text-white transition-all duration-500 hover:border-[var(--color-goldLight)] md:text-xl"
                >
                  Découvrir
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
