"use client";

import { useState } from "react";
import {
  RevealText,
  SplitReveal,
  MagneticButton,
  FloatingImage,
  GlowLayer,
  LightSweep,
  AmbientBackground,
  GradientMesh,
  NoiseOverlay,
  CursorLight,
  SectionTransition,
  ScrollScene,
  FadeLayer,
  ParallaxLayer,
} from "@/components/experience";
import { COLORS, RGBA_COLORS } from "@/constants/colors";

/**
 * Experience System Playground
 * 
 * Interactive testing environment for all Experience System components
 * NO business logic, NO content, ONLY technical demonstrations
 */
export default function PlaygroundPage() {
  const [showFadeLayer, setShowFadeLayer] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Global Effects */}
      <NoiseOverlay opacity={0.03} />
      <CursorLight size={200} color={RGBA_COLORS.goldGlow} blur={100} />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-[var(--color-sand)] bg-[var(--color-ivory)]/90 p-4 backdrop-blur-sm">
        <h1 className="text-center text-2xl font-light tracking-tight">
          Experience System Playground
        </h1>
      </header>

      <main className="pt-20">
        {/* Section 1: Motion Components */}
        <section className="min-h-screen border-b border-[var(--color-sand)] p-8">
          <h2 className="mb-8 text-3xl font-light">Motion Components</h2>

          <div className="space-y-12">
            {/* RevealText */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                RevealText
              </h3>
              <RevealText delay={0.2} duration={0.8}>
                <p className="text-2xl">This text reveals with fade and slide</p>
              </RevealText>
            </div>

            {/* SplitReveal */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                SplitReveal
              </h3>
              <SplitReveal
                text="Word by word reveal animation"
                staggerDelay={0.1}
                className="text-2xl"
              />
            </div>

            {/* MagneticButton */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                MagneticButton
              </h3>
              <MagneticButton
                strength={0.3}
                className="rounded-full bg-[var(--color-black)] px-8 py-4 text-white transition-colors hover:bg-[var(--color-charcoal)]"
                onClick={() => alert("Magnetic button clicked!")}
              >
                Hover and Click Me
              </MagneticButton>
            </div>

            {/* FloatingImage */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                FloatingImage
              </h3>
              <FloatingImage amplitude={8} duration={3}>
                <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-goldLight)]" />
              </FloatingImage>
            </div>
          </div>
        </section>

        {/* Section 2: Lighting Components */}
        <section className="relative min-h-screen overflow-hidden border-b border-[var(--color-sand)] bg-[var(--color-charcoal)] p-8">
          <h2 className="mb-8 text-3xl font-light text-white">
            Lighting Components
          </h2>

          <div className="space-y-12">
            {/* GlowLayer */}
            <div className="relative rounded-lg border border-[var(--color-taupe)] bg-[var(--color-black)] p-6">
              <h3 className="mb-4 text-xl font-light text-white">GlowLayer</h3>
              <div className="relative h-64 overflow-hidden rounded-lg bg-[var(--color-charcoal)]">
                <GlowLayer
                  color={RGBA_COLORS.goldGlow}
                  blur={100}
                  pulse
                  pulseDuration={2}
                />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-2xl text-white">Pulsing Glow Effect</p>
                </div>
              </div>
            </div>

            {/* LightSweep */}
            <div className="relative rounded-lg border border-[var(--color-taupe)] bg-[var(--color-black)] p-6">
              <h3 className="mb-4 text-xl font-light text-white">LightSweep</h3>
              <div className="relative h-64 overflow-hidden rounded-lg bg-[var(--color-charcoal)]">
                <LightSweep
                  color="rgba(255, 255, 255, 0.1)"
                  direction="horizontal"
                  duration={1.5}
                />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-2xl text-white">Light Sweep Animation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Effects Components */}
        <section className="min-h-screen border-b border-[var(--color-sand)] p-8">
          <h2 className="mb-8 text-3xl font-light">Effects Components</h2>

          <div className="space-y-12">
            {/* AmbientBackground */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                AmbientBackground
              </h3>
              <AmbientBackground
                baseColor={COLORS.ivory}
                animate
                className="h-64 rounded-lg"
              >
                <div className="flex h-full items-center justify-center">
                  <p className="text-2xl">Breathing Background</p>
                </div>
              </AmbientBackground>
            </div>

            {/* GradientMesh */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                GradientMesh
              </h3>
              <div className="relative h-64 overflow-hidden rounded-lg bg-[var(--color-cream)]">
                <GradientMesh
                  colors={[COLORS.goldLight, COLORS.gold, COLORS.ivory]}
                  animate
                  opacity={0.3}
                />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-2xl">Animated Gradient Mesh</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Scene Components */}
        <ScrollScene height="100vh" parallaxStrength={0.5}>
          <div className="flex min-h-screen items-center justify-center border-b border-[var(--color-sand)] bg-[var(--color-sand)] p-8">
            <SectionTransition direction="up" delay={0.2}>
              <div className="text-center">
                <h2 className="mb-8 text-4xl font-light">Scene Components</h2>
                <p className="text-xl text-[var(--color-taupe)]">
                  ScrollScene with parallax effect
                </p>
                <p className="mt-4 text-lg text-[var(--color-taupe)]">
                  SectionTransition wrapping content
                </p>
              </div>
            </SectionTransition>
          </div>
        </ScrollScene>

        {/* Section 5: Layout Components */}
        <section className="min-h-screen border-b border-[var(--color-sand)] p-8">
          <h2 className="mb-8 text-3xl font-light">Layout Components</h2>

          <div className="space-y-12">
            {/* ParallaxLayer */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                ParallaxLayer
              </h3>
              <div className="relative h-96 overflow-hidden rounded-lg bg-[var(--color-cream)]">
                <ParallaxLayer speed={0.5}>
                  <div className="flex h-full items-center justify-center">
                    <div className="h-48 w-48 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-goldLight)]" />
                  </div>
                </ParallaxLayer>
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <p className="text-xl text-[var(--color-taupe)]">
                    Scroll to see parallax
                  </p>
                </div>
              </div>
            </div>

            {/* FadeLayer */}
            <div className="rounded-lg border border-[var(--color-beige)] bg-white p-6">
              <h3 className="mb-4 text-xl font-light text-[var(--color-taupe)]">
                FadeLayer
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => setShowFadeLayer(!showFadeLayer)}
                  className="rounded-lg bg-[var(--color-black)] px-6 py-3 text-white transition-colors hover:bg-[var(--color-charcoal)]"
                >
                  Toggle FadeLayer
                </button>
                <p className="text-sm text-[var(--color-taupe)]">
                  Current state: {showFadeLayer ? "Visible" : "Hidden"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--color-sand)] bg-[var(--color-ivory)] p-8 text-center">
          <p className="text-[var(--color-taupe)]">
            Experience System Playground — All Components Tested
          </p>
        </footer>
      </main>

      {/* FadeLayer Demo (Global) */}
      <FadeLayer
        show={showFadeLayer}
        duration={0.4}
        backgroundColor="rgba(26, 26, 26, 0.95)"
        className="z-50"
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h2 className="mb-4 text-4xl font-light">FadeLayer Active</h2>
            <p className="mb-8 text-xl">Click anywhere to close</p>
            <button
              onClick={() => setShowFadeLayer(false)}
              className="rounded-lg border border-white px-8 py-4 transition-colors hover:bg-white hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      </FadeLayer>
    </div>
  );
}
