import { motion } from "framer-motion";
import Image from "next/image";

interface HeroBackgroundProps {
  phase: "light" | "texture" | "truth" | "reveal" | "identity";
}

/**
 * HeroBackground — La peau et la lumière dorée
 * Responsabilité : Image principale + lumières dorées mobiles
 */
export function HeroBackground({ phase }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0">
      {/* Main skin image — The canvas */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: phase === "light" ? 1.05 : 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative h-full w-full"
      >
        <Image
          src="/NOREA-ASSETS/hero/hero-02.jfif"
          alt="La peau révélée par la lumière"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* The Golden Light — Moving sun simulation */}
      <motion.div
        initial={{ x: "-40%", y: "-20%", opacity: 0 }}
        animate={{
          x: phase === "light" ? "-10%" : phase === "texture" ? "20%" : "40%",
          y: phase === "light" ? "10%" : phase === "texture" ? "30%" : "40%",
          opacity: phase === "light" ? 0.6 : phase === "texture" ? 0.8 : 0.7,
          scale: phase === "light" ? 1.2 : phase === "texture" ? 1.5 : 1.3,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px]"
        style={{
          background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.4) 0%, rgba(212, 175, 143, 0.2) 30%, transparent 70%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Secondary light — Ambient warmth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: phase === "texture" ? 0.3 : phase === "truth" ? 0.4 : 0.2,
        }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(212, 175, 143, 0.15) 0%, transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette — Natural frame */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(26, 26, 26, 0.3) 70%, rgba(26, 26, 26, 0.6) 100%)",
        }}
      />
    </div>
  );
}
