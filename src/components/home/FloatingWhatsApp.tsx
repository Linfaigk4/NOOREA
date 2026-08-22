"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingWhatsAppProps {
  href: string;
  className?: string;
}

export function FloatingWhatsApp({ href, className = "" }: FloatingWhatsAppProps) {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Show after initial page load
    const timer = setTimeout(() => setShow(true), 2000);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter NOOREA sur WhatsApp"
      initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 100 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3,
      }}
      className={`fixed z-[100] flex items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 ${className}`}
      style={{
        right: isMobile ? "16px" : "32px",
        bottom: isMobile ? "16px" : "32px",
        width: isMobile ? "56px" : "64px",
        height: isMobile ? "56px" : "64px",
      }}
    >
      <div className="gold-gradient-bg w-full h-full rounded-full flex items-center justify-center">
        <span className="text-2xl md:text-3xl">💬</span>
      </div>
      
      {/* Pulse animation */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5] 
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full border-2 border-[var(--color-gold)] pointer-events-none"
      />
    </motion.a>
  );
}
