export interface Product {
  id: number;
  name: string;
  nameEn: string;
  nameFr: string;
  type: string;
  typeFr: string;
  volume: string;
  description?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Bright Serum Face",
    nameEn: "Bright Serum Face",
    nameFr: "Sérum Éclat Visage",
    type: "Face Serum",
    typeFr: "Sérum Visage",
    volume: "30 ml",
    description: "Concentré de lumière pour révéler l'éclat naturel de votre peau",
    image: "/NOREA-ASSETS/products/product-01/front-4x5.png",
    imageAlt: "Bright Serum Face - 30ml",
    featured: true,
  },
  {
    id: 2,
    name: "Bright Serum Face 200ml",
    nameEn: "Bright Serum Face 200ml",
    nameFr: "Sérum Éclat Visage",
    type: "Face Serum",
    typeFr: "Sérum Visage",
    volume: "200 ml",
    description: "Format professionnel pour un rituel quotidien prolongé",
    image: "/NOREA-ASSETS/products/product-02/front-4x5.png",
    imageAlt: "Bright Serum Face - 200ml",
  },
  {
    id: 3,
    name: "Serum Repair Skincare",
    nameEn: "Serum Repair Skincare",
    nameFr: "Sérum Réparateur de la Peau",
    type: "Skincare Serum",
    typeFr: "Sérum Soin",
    volume: "100 ml",
    description: "Essence réparatrice pour restaurer et apaiser la peau",
    image: "/NOREA-ASSETS/products/product-03/front-4x5.png",
    imageAlt: "Serum Repair Skincare - 100ml",
  },
  {
    id: 4,
    name: "Bright Face Cream",
    nameEn: "Bright Face Cream",
    nameFr: "Crème Éclat Visage",
    type: "Face Cream",
    typeFr: "Crème Visage",
    volume: "250 g",
    description: "Texture onctueuse qui révèle l'éclat naturel",
    image: "/NOREA-ASSETS/products/product-04/front-4x5.png",
    imageAlt: "Bright Face Cream - 250g",
  },
  {
    id: 5,
    name: "Face Repair Cream",
    nameEn: "Face Repair Cream",
    nameFr: "Crème Visage Réparatrice",
    type: "Face Cream",
    typeFr: "Crème Visage",
    volume: "200 g",
    description: "Baume réparateur pour nourrir et restaurer l'équilibre cutané",
    image: "/NOREA-ASSETS/products/product-05/front-4x5.png",
    imageAlt: "Face Repair Cream - 200g",
  },
  {
    id: 6,
    name: "Face Repair Cream 250g",
    nameEn: "Face Repair Cream 250g",
    nameFr: "Crème Visage Réparatrice",
    type: "Face Cream",
    typeFr: "Crème Visage",
    volume: "250 g",
    description: "Formule intensive pour une réparation profonde",
    image: "/NOREA-ASSETS/products/product-06/front-4x5.png",
    imageAlt: "Face Repair Cream - 250g",
  },
  {
    id: 7,
    name: "Soap Repair Skincare",
    nameEn: "Soap Repair Skincare",
    nameFr: "Savon Réparateur pour la Peau",
    type: "Skincare Soap",
    typeFr: "Savon Soin",
    volume: "300 g",
    description: "Nettoyage doux qui préserve l'équilibre naturel de la peau",
    image: "/NOREA-ASSETS/products/product-07/front-4x5.png",
    imageAlt: "Soap Repair Skincare - 300g",
  },
  {
    id: 8,
    name: "Bright Body Cream",
    nameEn: "Bright Body Cream",
    nameFr: "Crème Éclat Corps",
    type: "Body Cream",
    typeFr: "Crème Corps",
    volume: "250 g",
    description: "Texture soyeuse qui sublime la peau de la tête aux pieds",
    image: "/NOREA-ASSETS/products/product-08/front-4x5.png",
    imageAlt: "Bright Body Cream - 250g",
  },
];
