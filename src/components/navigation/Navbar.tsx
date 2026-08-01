"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuOverlay } from "./MenuOverlay";

/**
 * Navbar — Navigation immersive NOOREA
 * 
 * Comportement:
 * - Invisible pendant l'animation Hero (0-10s)
 * - Apparaît progressivement après la fin du Hero
 * - S'adapte aux différentes sections (dark/light)
 * - Breadcrumb contextuel sur /collection et product pages
 * - Reste accessible au scroll
 * - Menu hamburger fonctionnel
 */
export function Navbar() {
  const [isHeroComplete, setIsHeroComplete] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  // Détection de la section actuelle pour adapter le style
  const [currentSection, setCurrentSection] = useState<"dark" | "light">("dark");

  // Détection du contexte de navigation
  const isHomePage = pathname === "/";
  const isCollectionPage = pathname === "/collection";
  const isProductPage = pathname?.startsWith("/collection/") && pathname !== "/collection";

  useEffect(() => {
    // La navbar apparaît immédiatement sur les pages non-homepage
    if (!isHomePage) {
      setIsHeroComplete(true);
      return;
    }

    // Sur homepage, attend 10s (fin animation Hero)
    const heroTimer = setTimeout(() => {
      setIsHeroComplete(true);
    }, 10000);

    return () => clearTimeout(heroTimer);
  }, [isHomePage]);

  useEffect(() => {
    // Sur pages collection/product, toujours light
    if (!isHomePage) {
      setCurrentSection("light");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Simplification: détection basée sur sections DOM réelles
      const scene4 = document.getElementById("scene4");
      const scene7 = document.getElementById("scene7");
      
      if (scene7 && scrollPosition >= scene7.offsetTop - 100) {
        // Scene07+ = dark
        setCurrentSection("dark");
      } else if (scene4 && scrollPosition >= scene4.offsetTop - 100 && scrollPosition < (scene4.offsetTop + windowHeight)) {
        // Scene04 = dark
        setCurrentSection("dark");
      } else if (scrollPosition > windowHeight) {
        // Scene02-Scene06 (mostly light)
        setCurrentSection("light");
      } else {
        // Hero = dark
        setCurrentSection("dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Backdrop blur au scroll
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(26, 26, 26, 0)",
      currentSection === "dark" 
        ? "rgba(26, 26, 26, 0.8)" 
        : "rgba(250, 248, 246, 0.8)"
    ]
  );

  if (!isHeroComplete) {
    return null; // Navbar invisible pendant le Hero
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-500 ${
        currentSection === "dark"
          ? "border-white/10 text-white"
          : "border-black/10 text-[var(--color-black)]"
      }`}
    >
      <motion.div
        style={{ backgroundColor }}
        className="absolute inset-0 -z-10"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo NOOREA with contextual breadcrumb */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group text-xl font-light tracking-tighter transition-opacity duration-300 hover:opacity-60 md:text-2xl"
            >
              <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                NOOREA
              </motion.span>
            </Link>

            {/* Breadcrumb for collection/product pages */}
            {(isCollectionPage || isProductPage) && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="hidden items-center gap-2 text-sm font-light text-[var(--color-taupe)] md:flex"
              >
                <span>/</span>
                <span className={isCollectionPage ? "text-[var(--color-black)]" : ""}>
                  Collection
                </span>
                {isProductPage && (
                  <>
                    <span>/</span>
                    <span className="text-[var(--color-black)]">Produit</span>
                  </>
                )}
              </motion.div>
            )}
          </div>

          {/* Navigation links */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
            <Link
              href="/collection"
              className="hidden text-sm font-light tracking-wide transition-opacity duration-300 hover:opacity-60 md:block"
            >
              Collection
            </Link>

            {isHomePage && (
              <button
                onClick={() => {
                  document.getElementById("scene4")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden text-sm font-light tracking-wide transition-opacity duration-300 hover:opacity-60 md:block"
              >
                L&apos;Univers
              </button>
            )}

            {/* Menu icon — Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
              aria-controls="menu-overlay"
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="20"
                  y2="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="7"
                  x2="20"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="13"
                  x2="20"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </motion.nav>
  );
}
