import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ExperienceProvider, ExperienceOrchestrator } from "@/components/experience/core";
import { Navbar } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Hero images to preload during intro
const HERO_IMAGES = [
  "/NOREA-ASSETS/hero/hero-01.jfif",
  "/NOREA-ASSETS/hero/hero-02.jfif",
  "/NOREA-ASSETS/hero/hero-03.jfif",
];

export const metadata: Metadata = {
  title: "NOOREA — L'Harmonie de la Peau",
  description:
    "NOOREA célèbre l'éclat unique propre à chaque peau. Découvrez notre collection de soins d'exception inspirés par la nature.",
  openGraph: {
    title: "NOOREA — L'Harmonie de la Peau",
    description: "Une beauté pensée autrement. Collection de soins premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <ExperienceProvider>
          <ExperienceOrchestrator
            enableIntro={true}
            enableCursor={true}
            enableNoise={true}
            preloadImages={HERO_IMAGES}
          >
            <Navbar />
            {children}
          </ExperienceOrchestrator>
        </ExperienceProvider>
      </body>
    </html>
  );
}
