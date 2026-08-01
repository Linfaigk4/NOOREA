"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { getProductSlug } from "@/lib/slugify";

/**
 * Scene06 — Le Choix Guidé
 * 
 * "Et vous, de quoi votre peau a-t-elle besoin ?"
 * 
 * Interactive premium quiz experience.
 * La lumière RÉAGIT aux interactions du visiteur.
 * 
 * Quiz flow:
 * Question 1: Le besoin (Éclat / Réparation / Soin)
 * Question 2: Le moment (Matin / Soir / Rituel complet)
 * Question 3: Le format (Sérum / Crème / Ensemble)
 * Résultat: Recommandation personnalisée
 */

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    description: string;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Aujourd'hui, que recherchez-vous pour votre peau ?",
    options: [
      {
        value: "bright",
        label: "Éclat",
        description: "Révéler la lumière naturelle",
      },
      {
        value: "repair",
        label: "Réparation",
        description: "Restaurer et apaiser",
      },
      {
        value: "care",
        label: "Soin",
        description: "Nourrir en profondeur",
      },
    ],
  },
  {
    id: 2,
    question: "Quand votre peau a-t-elle le plus besoin de vous ?",
    options: [
      {
        value: "morning",
        label: "Le matin",
        description: "Préparer la journée",
      },
      {
        value: "evening",
        label: "Le soir",
        description: "Rituel de nuit",
      },
      {
        value: "anytime",
        label: "À tout moment",
        description: "Quand j'en ressens le besoin",
      },
    ],
  },
  {
    id: 3,
    question: "Quel geste vous ressemble le plus ?",
    options: [
      {
        value: "serum",
        label: "Un rituel simple",
        description: "Sérum concentré",
      },
      {
        value: "cream",
        label: "Un moment sensoriel",
        description: "Crème onctueuse",
      },
      {
        value: "complete",
        label: "Une routine complète",
        description: "Plusieurs étapes",
      },
    ],
  },
];

function getRecommendedProduct(answers: Record<number, string>): Product {
  const need = answers[1]; // bright, repair, care
  const format = answers[3]; // serum, cream, complete

  // Logique de recommandation basée sur les produits réels
  if (need === "bright") {
    if (format === "serum") {
      return products[0]; // Bright Serum Face 30ml
    } else if (format === "cream") {
      return products[3]; // Bright Face Cream
    } else {
      return products[0]; // Bright Serum Face (featured)
    }
  } else if (need === "repair") {
    if (format === "serum") {
      return products[2]; // Serum Repair Skincare
    } else if (format === "cream") {
      return products[4]; // Face Repair Cream
    } else {
      return products[2]; // Serum Repair Skincare
    }
  } else {
    // care - polyvalent
    if (format === "cream") {
      return products[5]; // Face Repair Cream 250g
    } else {
      return products[2]; // Serum Repair Skincare
    }
  }
}

export function Scene06() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentStep];
  const isComplete = currentStep >= quizQuestions.length;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    // Transition vers la question suivante ou le résultat
    setTimeout(() => {
      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  const recommendedProduct = isComplete || showResult ? getRecommendedProduct(answers) : null;

  return (
    <section
      id="scene6"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[var(--color-sand)] via-[var(--color-beige)] to-[var(--color-sand)] px-6 py-32 md:px-12 md:py-40 lg:px-16 lg:py-48"
    >
      {/* Background texture — light.png */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/NOREA-ASSETS/backgrounds/light.png"
          alt=""
          fill
          className="object-cover"
          quality={90}
          aria-hidden="true"
        />
      </div>

      {/* Chapter number — Très discret */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.04, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, delay: 0.2 }}
        className="pointer-events-none absolute right-6 top-16 text-[200px] font-light leading-none tracking-tighter text-[var(--color-taupe)] md:right-12 md:top-20 md:text-[280px] lg:right-16 lg:top-24 lg:text-[360px]"
        aria-hidden="true"
      >
        06
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 text-center md:mb-16 lg:mb-20"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-[var(--color-goldLight)] md:w-20" />
          <p className="text-xs font-light tracking-[0.2em] text-[var(--color-goldLight)] md:text-sm">
            LE CHOIX GUIDÉ
          </p>
        </motion.div>

        {!showResult ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 md:space-y-16"
            >
              {/* Progress indicator */}
              <div className="flex justify-center gap-2">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 w-12 rounded-full transition-all duration-500 ${
                      index <= currentStep
                        ? "bg-[var(--color-goldLight)]"
                        : "bg-[var(--color-taupe)]/20"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Question */}
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-light leading-relaxed tracking-tight text-[var(--color-black)] md:text-4xl lg:text-5xl">
                  {currentQuestion.question}
                </h2>
                <p className="text-sm font-light tracking-wide text-[var(--color-taupe)] md:text-base">
                  {currentStep + 1} — {quizQuestions.length}
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-4 md:gap-6">
                {currentQuestion.options.map((option) => {
                  const isHovered = hoveredOption === option.value;
                  const isSelected = answers[currentQuestion.id] === option.value;

                  return (
                    <motion.button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      onMouseEnter={() => setHoveredOption(option.value)}
                      onMouseLeave={() => setHoveredOption(null)}
                      className="group relative overflow-hidden rounded-2xl border border-[var(--color-taupe)]/20 bg-white/40 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-goldLight)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)] md:p-8"
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      aria-pressed={isSelected}
                    >
                      {/* Reactive golden glow */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isHovered ? 0.15 : 0,
                          scale: isHovered ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.4 }}
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.4) 0%, transparent 70%)",
                          filter: "blur(40px)",
                        }}
                        aria-hidden="true"
                      />

                      <div className="relative z-10">
                        <h3 className="mb-2 text-xl font-light tracking-tight text-[var(--color-black)] md:text-2xl">
                          {option.label}
                        </h3>
                        <p className="text-sm font-light text-[var(--color-charcoal)] md:text-base">
                          {option.description}
                        </p>
                      </div>

                      {/* Subtle indicator line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-[var(--color-goldLight)]"
                        aria-hidden="true"
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 text-center"
          >
            {/* Résultat */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 text-sm font-light tracking-wide text-[var(--color-goldLight)] md:text-base"
              >
                Voici ce que nous avons imaginé pour vous
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl font-light tracking-tight text-[var(--color-black)] md:text-4xl lg:text-5xl"
              >
                {recommendedProduct?.nameFr}
              </motion.h2>
            </div>

            {/* Product reveal */}
            {recommendedProduct && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-md"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-white/60 to-[var(--color-ivory)]/40">
                  <Image
                    src={recommendedProduct.image}
                    alt={recommendedProduct.imageAlt}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 448px"
                    quality={95}
                  />

                  {/* Golden reveal light */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background: "radial-gradient(circle, rgba(212, 175, 143, 0.5) 0%, transparent 65%)",
                      filter: "blur(60px)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Ambient glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                  className="pointer-events-none absolute -inset-8 -z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(212, 175, 143, 0.3) 0%, transparent 70%)",
                    filter: "blur(50px)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            )}

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-4"
            >
              <p className="text-lg font-light text-[var(--color-charcoal)] md:text-xl">
                {recommendedProduct?.description}
              </p>
              <p className="text-sm font-light tracking-wide text-[var(--color-taupe)]">
                {recommendedProduct?.volume}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {recommendedProduct && (
                <Link
                  href={`/collection/${getProductSlug(recommendedProduct)}`}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--color-goldLight)]/30 bg-white/40 px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-goldLight)] hover:bg-[var(--color-goldLight)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-goldLight)]"
                >
                  <span className="relative z-10 text-sm font-light tracking-wide text-[var(--color-black)] transition-colors">
                    Découvrir ce rituel
                  </span>

                  <svg
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>

                  {/* Hover glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(circle at center, rgba(212, 175, 143, 0.6) 0%, transparent 70%)",
                      filter: "blur(20px)",
                    }}
                    aria-hidden="true"
                  />
                </Link>
              )}
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="pt-8"
            >
              <div className="relative inline-flex items-center gap-4">
                <div className="h-px w-12 bg-[var(--color-goldLight)]" />
                <span className="text-xs font-light tracking-[0.3em] text-[var(--color-charcoal)]">
                  NOOREA
                </span>
                <div className="h-px w-12 bg-[var(--color-goldLight)]" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Ambient particles — Interactive atmosphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-1/4 h-[600px] w-[600px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 143, 0.25) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
