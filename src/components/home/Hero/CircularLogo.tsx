"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CircularLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  animate?: boolean;
}

/**
 * CircularLogo — Logo NOOREA officiel dans un cercle doré lumineux
 * Version "hero" = grand cercle pour la composition principale
 */
export function CircularLogo({ size = "lg", animate = true }: CircularLogoProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-80 h-80",
    hero: "w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]", // Responsive
  };

  const logoSizes = {
    sm: { width: 80, height: 80 },
    md: { width: 112, height: 112 },
    lg: { width: 144, height: 144 },
    xl: { width: 176, height: 176 },
    hero: { 
      mobile: { width: 140, height: 140 },
      tablet: { width: 170, height: 170 },
      desktop: { width: 200, height: 200 },
    },
  };

  // Calculer la taille du logo pour hero en fonction de l'écran
  const getHeroLogoSize = () => {
    if (typeof window === 'undefined') return logoSizes.hero.desktop;
    if (window.innerWidth < 640) return logoSizes.hero.mobile;
    if (window.innerWidth < 768) return logoSizes.hero.tablet;
    return logoSizes.hero.desktop;
  };

  const logoSize = size === "hero" ? getHeroLogoSize() : logoSizes[size as keyof typeof logoSizes] as { width: number; height: number };

  return (
    <div className="relative flex items-center justify-center">
      {/* Golden circular ring with gradient + halo */}
      <motion.div
        initial={animate ? { opacity: 0, scale: 0.8 } : false}
        animate={animate ? { opacity: 1, scale: 1 } : false}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center relative`}
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(212, 175, 55, 0.15) 0%,
              rgba(212, 175, 55, 0.05) 45%,
              transparent 75%
            )
          `,
          boxShadow: `
            0 0 30px rgba(212, 175, 55, 0.25),
            0 0 80px rgba(212, 175, 55, 0.15),
            inset 0 0 60px rgba(212, 175, 55, 0.1)
          `,
        }}
      >
        {/* Bordure dorée avec dégradé */}
        <div 
          className="absolute inset-0 rounded-full p-[2px]"
          style={{
            background: `linear-gradient(135deg, 
              #8B5A00 0%, 
              #C9952E 25%, 
              #F5D77A 50%, 
              #C9952E 75%, 
              #A66B00 100%
            )`,
          }}
        >
          {/* Fond intérieur beige clair pour s'harmoniser avec le logo */}
          <div 
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #090400 0%, #090400 100%)",
            }}
          >
            <motion.div
              initial={animate ? { opacity: 0, scale: 0.9 } : false}
              animate={animate ? { opacity: 1, scale: 1 } : false}
              transition={{
                delay: 0.2,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center"
            >
              {/* NOOREA Official Logo */}
              <Image
                src="/NOREA-ASSETS/brand/logo.png"
                alt="NOOREA"
                width={logoSize.width}
                height={logoSize.height}
                priority
                className="object-contain"
                style={{
                  width: logoSize.width,
                  height: logoSize.height,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Particules lumineuses discrètes — Desktop uniquement */}
        {size === "hero" && (
          <>
            <motion.div
              initial={animate ? { opacity: 0 } : false}
              animate={animate ? { 
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8],
              } : false}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F5D77A] hidden sm:block"
              style={{
                boxShadow: "0 0 10px rgba(245, 215, 122, 0.8)",
              }}
            />
            <motion.div
              initial={animate ? { opacity: 0 } : false}
              animate={animate ? { 
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.1, 0.8],
              } : false}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1.2,
              }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#C9952E] hidden sm:block"
              style={{
                boxShadow: "0 0 8px rgba(201, 149, 46, 0.7)",
              }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
