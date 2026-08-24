import { motion } from "framer-motion";

interface HeroBackgroundProps {
  phase: "identity";
}

/**
 * HeroBackground — Ambiance noir chaud + taupe + brun sombre
 * Dégradés subtils pour créer de la profondeur
 */
export function HeroBackground({ phase }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0">
      {/* Fond principal — gradient noir chaud vers taupe */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 30% 40%,
              rgba(43, 43, 43, 0.8) 0%,
              rgba(26, 15, 10, 1) 50%,
              rgba(26, 26, 26, 1) 100%
            )
          `,
        }}
      />

      {/* Lumière dorée ambiante — très subtile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute top-[20%] left-[15%] h-[600px] w-[600px]"
        style={{
          background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.25) 0%, rgba(212, 175, 143, 0.1) 40%, transparent 70%)",
          filter: "blur(120px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Lumière chaude en bas à droite */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="pointer-events-none absolute bottom-[10%] right-[20%] h-[500px] w-[500px]"
        style={{
          background: "radial-gradient(circle at center, rgba(139, 90, 18, 0.2) 0%, transparent 65%)",
          filter: "blur(100px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette naturelle */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(26, 15, 10, 0.4) 75%, rgba(26, 15, 10, 0.7) 100%)",
        }}
      />
    </div>
  );
}
