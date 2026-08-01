import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HeroProductProps {
  phase: "light" | "texture" | "truth" | "reveal" | "identity";
}

/**
 * HeroProduct — Phase 4: Révélation du produit
 * Responsabilité : Produit tenu par la main + golden glow (6-8s)
 */
export function HeroProduct({ phase }: HeroProductProps) {
  return (
    <AnimatePresence>
      {(phase === "reveal" || phase === "identity") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Product held by hand */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-0 h-[70%] w-[50%] md:h-[80%] md:w-[40%] lg:h-[85%] lg:w-[35%]"
          >
            <div className="relative h-full w-full">
              <Image
                src="/NOREA-ASSETS/hero/hero-03.jfif"
                alt="Le sérum NOOREA tenu comme un bijou"
                fill
                className="object-cover object-left"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 40vw, 35vw"
                quality={90}
              />
              
              {/* Golden glow around product */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute left-[20%] top-[30%] h-[300px] w-[300px]"
                style={{
                  background: "radial-gradient(circle, rgba(212, 175, 143, 0.6) 0%, transparent 70%)",
                  filter: "blur(80px)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </motion.div>

          {/* Dark gradient to focus on product */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-black)] via-[var(--color-black)]/80 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
