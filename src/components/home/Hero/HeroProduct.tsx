import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProductProps {
  phase: "identity";
}

/**
 * HeroProduct — Zone droite (35-40% largeur desktop)
 * Image des produits éclairés avec overlay subtil pour fondu
 * Masqué sur mobile, visible sur desktop
 */
export function HeroProduct({ phase }: HeroProductProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="hidden md:block absolute top-0 right-0 h-full w-[40%] lg:w-[35%]"
    >
      {/* Image produits */}
      <div className="relative h-full w-full">
        <Image
          src="/NOREA-ASSETS/hero/hero-03.jfif"
          alt="Collection NOOREA — Sérum et soins premium"
          fill
          className="object-cover object-left"
          sizes="(max-width: 1024px) 40vw, 35vw"
          quality={90}
          priority
        />
        
        {/* Golden glow subtil autour des produits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute left-[20%] top-[35%] h-[400px] w-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212, 175, 143, 0.5) 0%, transparent 65%)",
            filter: "blur(90px)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Overlay de fondu — gradient de gauche à droite */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(26, 15, 10, 0.85) 0%,
            rgba(26, 15, 10, 0.45) 35%,
            rgba(26, 15, 10, 0.15) 60%,
            transparent 80%
          )`,
        }}
      />
    </motion.div>
  );
}
