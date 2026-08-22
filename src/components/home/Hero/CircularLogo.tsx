"use client";

import { motion } from "framer-motion";

interface CircularLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

export function CircularLogo({ size = "lg", animate = true }: CircularLogoProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
  };

  const logoSize = {
    sm: "w-20 h-20",
    md: "w-28 h-28",
    lg: "w-36 h-36",
    xl: "w-44 h-44",
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Golden circular ring with gradient */}
      <motion.div
        initial={{ opacity: 0, transform: "scale(0.8)" }}
        animate={animate ? { opacity: 1, transform: "scale(1)" } : {}}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`${sizeClasses[size]} gold-gradient-radial rounded-full flex items-center justify-center p-2`}
      >
        {/* Inner circle with background */}
        <div className="w-full h-full bg-[var(--color-ivory)] rounded-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={animate ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* NOOREA Logo */}
            <h1 className={`${logoSize[size]} font-light tracking-tighter text-[var(--color-black)] text-center leading-none`}>
              NOOREA
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Outer glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : {}}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="absolute inset-0 -m-8 gold-glow-large pointer-events-none"
      />
    </div>
  );
}
