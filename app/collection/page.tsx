import type { Metadata } from "next";
import { CollectionPage } from "@/components/collection/CollectionPage";

export const metadata: Metadata = {
  title: "La Collection — NOOREA",
  description:
    "Découvrez l'ensemble de notre collection de soins d'exception. Des gestes pensés comme des rituels, des textures comme des sensations.",
  openGraph: {
    title: "La Collection — NOOREA",
    description: "Découvrez notre collection complète de soins premium.",
    type: "website",
  },
};

export default function Collection() {
  return <CollectionPage />;
}
