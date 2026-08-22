"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
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
    // Skip lint warning for immediate state initialization
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!isHomePage) {
      setIsHeroComplete(true);
      setCurrentSection("light");
      return;
    }

    // Sur homepage, attend 7s (fin animation Hero optimisée)
    const heroTimer = setTimeout(() => {
      setIsHeroComplete(true);
    }, 7000);

    return () => clearTimeout(heroTimer);
  }, [isHomePage]);

  useEffect(() => {
    // Sur pages collection/product, toujours light
    // Skip lint warning for immediate state initialization
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!isHomePage) {
      setCurrentSection("light");
      return;
    }

    const handleScroll = useCallback(() => {
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
    }, []);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check