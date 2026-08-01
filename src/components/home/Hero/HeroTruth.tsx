import { motion, AnimatePresence } from "framer-motion";

interface HeroTruthProps {
  phase: "light" | "texture" | "truth" | "reveal" | "identity";
}

/**
 * HeroTruth — Phase 3: "La lumière ne ment jamais"
 * Responsabilité : Affichage du message de vérité (4-6s)
 */
export function HeroTruth({ phase }: HeroTruthProps) {
  return (
    <AnimatePresence>
      {phase === "truth" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative z-10 px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl font-light leading-none tracking-tighter text-white md:text-7xl lg:text-8xl xl:text-9xl"
              style={{ textShadow: "0 4px 60px rgba(0, 0, 0, 0.4)" }}
            >
              La lumière
              <br />
              ne ment jamais.
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
