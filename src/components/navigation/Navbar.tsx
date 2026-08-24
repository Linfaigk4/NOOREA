"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuOverlay } from "./MenuOverlay";
import { MessageCircle, Menu } from "lucide-react";
import { createWhatsAppUrl } from "@/data/constants";

/**
 * Navbar — Navigation complète NOOREA selon maquette de référence
 * 
 * Structure:
 * - Logo officiel à gauche
 * - Navigation centrale: ACCUEIL, COLLECTION, NOTRE HISTOIRE, ENGAGEMENTS, JOURNAL
 * - Partie droite: [WhatsApp icon] CONTACTEZ-NOUS + Menu hamburger
 */
export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const [currentSection, setCurrentSection] = useState<"dark" | "light">("dark");

  const isHomePage = pathname === "/";

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const scene4 = document.getElementById("scene4");
    const scene7 = document.getElementById("scene7");
    
    if (scene7 && scrollPosition >= scene7.offsetTop - 100) {
      setCurrentSection("dark");
    } else if (scene4 && scrollPosition >= scene4.offsetTop - 100 && scrollPosition < (scene4.offsetTop + windowHeight)) {
      setCurrentSection("dark");
    } else if (scrollPosition > windowHeight) {
      setCurrentSection("light");
    } else {
      setCurrentSection("dark");
    }
  }, []);

  // Visibility: immédiate sur toutes les pages
  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      setCurrentSection("light");
      return;
    }

    // Sur homepage, visible immédiatement (pas d'attente)
    setIsVisible(true);
  }, [isHomePage]);

  // Scroll listener for section detection
  useEffect(() => {
    if (!isHomePage) {
      setCurrentSection("light");
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, handleScroll]);

  const navLinks = [
    { href: "/", label: "ACCUEIL" },
    { href: "/collection", label: "COLLECTION" },
    { href: "/notre-histoire", label: "NOTRE HISTOIRE" },
    { href: "/engagements", label: "ENGAGEMENTS" },
    { href: "/journal", label: "JOURNAL" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        currentSection === "dark" ? "bg-[rgba(26,26,26,0.9)] backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-12 lg:px-16">
        <div className="flex items-center justify-between gap-8">
          
          {/* Logo à gauche */}
          <Link
            href="/"
            className="relative h-10 w-auto flex items-center transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9952E] shrink-0"
            aria-label="NOOREA - Accueil"
          >
            <Image
              src={currentSection === "dark" ? "/NOREA-ASSETS/brand/logo-white.png" : "/NOREA-ASSETS/brand/logo.png"}
              alt="NOOREA"
              height={40}
              width={120}
              priority
              className="object-contain h-10 w-auto"
            />
          </Link>

          {/* Navigation centrale — Desktop uniquement */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wider transition-all duration-300 hover:opacity-80 ${
                    currentSection === "dark" 
                      ? isActive 
                        ? "text-[#F5D77A]" 
                        : "text-white"
                      : isActive
                        ? "text-[#C9952E]"
                        : "text-[#2b2b2b]"
                  }`}
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Partie droite — WhatsApp + Menu */}
          <div className="flex items-center gap-4">
            
            {/* Bouton WhatsApp — Desktop uniquement */}
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 hover:opacity-80 ${
                currentSection === "dark" ? "text-white" : "text-[#2b2b2b]"
              }`}
            >
              <MessageCircle size={18} />
              CONTACTEZ-NOUS
            </a>

            {/* Menu hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-opacity duration-300 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9952E] ${
                currentSection === "dark" ? "text-white" : "text-[#2b2b2b]"
              }`}
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </motion.nav>
  );
}