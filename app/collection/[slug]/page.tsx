import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { findProductBySlug, getProductSlug } from "@/lib/slugify";
import { ProductPage } from "@/components/product/ProductPage";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

/**
 * Generate static params for all products at build time
 */
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: getProductSlug(product),
  }));
}

/**
 * Generate dynamic metadata for each product
 */
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = findProductBySlug(products, params.slug);

  if (!product) {
    return {
      title: "Produit non trouvé — NOOREA",
    };
  }

  return {
    title: `${product.nameFr} — NOOREA`,
    description: product.description || `${product.typeFr} — ${product.volume}. Découvrez ce soin d'exception NOOREA.`,
    openGraph: {
      title: `${product.nameFr} — NOOREA`,
      description: product.description || `${product.typeFr} premium pour votre rituel beauté.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 1000,
          alt: product.imageAlt,
        },
      ],
      type: "website",
    },
  };
}

/**
 * Dynamic Product Page
 */
export default function Product({ params }: ProductPageProps) {
  const product = findProductBySlug(products, params.slug);

  if (!product) {
    notFound();
  }

  // Find current product index for navigation
  const currentIndex = products.findIndex((p) => p.id === product.id);
  const previousProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  // Get related products (exclude current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <ProductPage
      product={product}
      currentIndex={currentIndex}
      totalProducts={products.length}
      previousProduct={previousProduct}
      nextProduct={nextProduct}
      relatedProducts={relatedProducts}
    />
  );
}
