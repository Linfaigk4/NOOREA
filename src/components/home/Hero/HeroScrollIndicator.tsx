import { motion } from "framer-motion";

interface HeroScrollIndicatorProps {
  phase: "identity";
}

/**
 * HeroScrollIndicator — Indicateur de scroll subtil
 * Ligne dorée animée en bas de l'écran
 */
export function HeroScrollIndicator({ phase }: HeroScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="h-16 w-px bg-gradient-to-b from-transparent via-[#F5D77A] to-transparent"
      />
    </motion.div>
  );
}
