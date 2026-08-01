import { motion } from "framer-motion";

interface HeroScrollIndicatorProps {
  phase: "light" | "texture" | "truth" | "reveal" | "identity";
}

/**
 * HeroScrollIndicator — Indicateur de scroll subtil
 * Responsabilité : Ligne dorée animée en bas de l'écran
 */
export function HeroScrollIndicator({ phase }: HeroScrollIndicatorProps) {
  if (phase !== "identity") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="h-16 w-px bg-gradient-to-b from-transparent via-[var(--color-goldLight)] to-transparent"
      />
    </motion.div>
  );
}
