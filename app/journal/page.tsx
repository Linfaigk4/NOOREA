import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Journal — NOOREA",
  description: "Découvrez nos articles sur la beauté, les soins de la peau et les rituels de bien-être NOOREA.",
};

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "La lumière de la peau : comprendre votre éclat naturel",
    excerpt: "Chaque peau possède sa propre lumière. Découvrez comment les rituels NOOREA révèlent et célèbrent cette luminosité unique.",
    category: "Beauté",
    date: "24 août 2026",
    author: "Aminatou N.",
    image: "/NOREA-ASSETS/editorial/sensory/sensory-01.png",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Les sérums : l'art de la concentration",
    excerpt: "Pourquoi le sérum est devenu l'incontournable des routines premium ? Exploration des formulations qui transforment la peau.",
    category: "Soins",
    date: "20 août 2026",
    author: "Marie B.",
    image: "/NOREA-ASSETS/products/product-01/front-4x5.png",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Rituels de soin : créer l'harmonie quotidienne",
    excerpt: "Au-delà de l'efficacité, les rituels NOOREA sont une célébration de soi-même. Comment transformer votre routine beauté en moment de bien-être.",
    category: "Bien-être",
    date: "18 août 2026",
    author: "Sophie D.",
    image: "/NOREA-ASSETS/editorial/lifestyle/lifestyle-01.png",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Ingrédients naturels : qualité vs. greenwashing",
    excerpt: "Comment distinguer les véritables ingrédients efficaces des promesses marketing creuses ? Un guide pour les consommatrices averties.",
    category: "Éducation",
    date: "15 août 2026",
    author: "Dr. Kofi A.",
    image: "/NOREA-ASSETS/editorial/product-focus/product-focus-01.png",
    readTime: "8 min",
  },
  {
    id: "5",
    title: "Peau sensible : adapter sa routine avec NOOREA",
    excerpt: "Les peaux sensibles méritent une attention particulière. Découvrez comment nos formulations douces et efficaces transforment votre peau.",
    category: "Conseils",
    date: "12 août 2026",
    author: "Dr. Aïcha K.",
    image: "/NOREA-ASSETS/products/product-02/front-4x5.png",
    readTime: "6 min",
  },
  {
    id: "6",
    title: "Durabilité en beauté : notre engagement 2024",
    excerpt: "Comment nous avons réduit notre empreinte carbone de 40% cette année et les mesures que nous prenons pour 2025.",
    category: "Impact",
    date: "10 août 2026",
    author: "Emmanuel T.",
    image: "/NOREA-ASSETS/editorial/brand-editorial/brand-editorial-01.png",
    readTime: "9 min",
  },
];

const categories = [
  { name: "Tous", value: "all" },
  { name: "Beauté", value: "Beauté" },
  { name: "Soins", value: "Soins" },
  { name: "Bien-être", value: "Bien-être" },
  { name: "Éducation", value: "Éducation" },
  { name: "Conseils", value: "Conseils" },
  { name: "Impact", value: "Impact" },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] pt-32 pb-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-6xl font-light tracking-tight text-[#faf8f6] md:text-7xl lg:text-8xl">
              JOURNAL
            </h1>
            
            <p className="text-xl font-light leading-relaxed text-[#f5f3f0] md:text-2xl">
              Explorez nos articles sur la beauté, les rituels de soin et l'impact de la nature sur votre peau.
            </p>
          </div>
        </Container>

        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96"
          style={{
            background: "radial-gradient(circle, rgba(212, 175, 143, 0.2) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </section>

      {/* Filter Section */}
      <section className="border-b border-[#C9952E]/20 bg-[#faf8f6] py-8">
        <Container>
          <div className="space-y-4">
            <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
              Catégories
            </span>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className="px-6 py-2 rounded-full text-sm font-light transition-all duration-300 border border-[#C9952E]/30 text-[#1a1a1a] hover:border-[#C9952E] hover:bg-[#C9952E]/10"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="bg-[#faf8f6] py-16 md:py-20">
        <Container>
          <article className="group cursor-pointer">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              {/* Image */}
              <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-light tracking-[0.2em] text-[#C9952E] uppercase">
                    {articles[0].category}
                  </span>
                  <h2 className="text-4xl font-light tracking-tight text-[#1a1a1a] md:text-5xl group-hover:text-[#C9952E] transition-colors">
                    {articles[0].title}
                  </h2>
                </div>

                <p className="text-lg text-[#2b2b2b] leading-relaxed">
                  {articles[0].excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-[#8b837a]">
                  <div className="flex gap-4">
                    <span>{articles[0].author}</span>
                    <span className="text-[#C9952E]">•</span>
                    <span>{articles[0].date}</span>
                    <span className="text-[#C9952E]">•</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>

                <div>
                  <GoldButton size="lg">
                    Lire l'article
                  </GoldButton>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] py-24 md:py-32">
        <Container>
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Tous les articles
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#faf8f6]">
                Découvrez nos dernières publications
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer space-y-4 rounded-lg overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden rounded-lg bg-[#2b2b2b]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 p-4">
                    <div className="space-y-2">
                      <span className="text-xs font-light tracking-[0.2em] text-[#C9952E] uppercase">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-light tracking-tight text-[#faf8f6] group-hover:text-[#F5D77A] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#f5f3f0] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#8b837a] pt-2 border-t border-[#C9952E]/20">
                      <div className="flex gap-2">
                        <span>{article.author}</span>
                        <span className="text-[#C9952E]">•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#faf8f6] py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-light tracking-tight text-[#1a1a1a] md:text-6xl">
                Restez inspirée
              </h2>
              <p className="text-lg text-[#2b2b2b]">
                Recevez nos derniers articles, conseils beauté et actualités NOOREA directement dans votre boîte mail.
              </p>
            </div>

            <form className="space-y-4 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-3 rounded-lg bg-white border border-[#C9952E]/30 text-[#1a1a1a] placeholder-[#8b837a] focus:outline-none focus:border-[#C9952E] focus:ring-1 focus:ring-[#C9952E]"
              />
              <GoldButton size="lg">
                S'abonner
              </GoldButton>
            </form>

            <p className="text-sm text-[#8b837a]">
              Nous ne partagerons jamais votre email. Politique de confidentialité.
            </p>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      <section className="bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] py-24 md:py-32">
        <Container>
          <div className="space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Pour continuer
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#faf8f6] md:text-6xl">
                Explorez nos rituels
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* CTA */}
              <div className="space-y-6">
                <p className="text-xl text-[#f5f3f0] leading-relaxed">
                  Découvrez comment les rituels NOOREA s'intègrent dans votre quotidien pour révéler la lumière de votre peau.
                </p>
                <GoldButton size="lg">
                  Voir la collection
                </GoldButton>
              </div>

              {/* Image */}
              <div className="relative h-96 hidden md:block rounded-lg overflow-hidden">
                <Image
                  src="/NOREA-ASSETS/ensemble/ensemble-01.png"
                  alt="Collection NOOREA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
