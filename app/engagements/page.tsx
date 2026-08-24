import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import Image from "next/image";

export const metadata = {
  title: "Engagements — NOOREA",
  description: "Découvrez les engagements RSE de NOOREA : durabilité, éthique et responsabilité sociale.",
};

export default function EngagementsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] pt-32 pb-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            {/* Left: Text */}
            <div className="space-y-8">
              <h1 className="text-6xl font-light tracking-tight text-[#faf8f6] md:text-7xl lg:text-8xl">
                NOS<br />ENGAGEMENTS
              </h1>
              
              <p className="max-w-xl text-xl font-light leading-relaxed text-[#f5f3f0] md:text-2xl">
                Nous croyons que la beauté authentique commence par des actions responsables envers les gens et la planète.
              </p>

              <div className="pt-8">
                <GoldButton size="lg">
                  En savoir plus
                </GoldButton>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden h-96 md:block">
              <Image
                src="/NOREA-ASSETS/editorial/sensory/sensory-01.png"
                alt="Nos engagements"
                fill
                className="object-cover rounded-lg"
              />
            </div>
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

      {/* Sustainability Section */}
      <section className="bg-[#faf8f6] py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Durabilité
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#1a1a1a] md:text-6xl">
                Responsabilité environnementale
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Packaging */}
              <div className="space-y-6">
                <div className="h-48 relative rounded-lg overflow-hidden bg-[#e8e4dd]">
                  <Image
                    src="/NOREA-ASSETS/products/product-01/transparent.png"
                    alt="Emballage durable NOOREA"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-[#1a1a1a]">Emballage durable</h3>
                  <p className="text-[#2b2b2b] leading-relaxed">
                    100% de nos emballages sont recyclables ou compostables. Nous avons supprimé les plastiques inutiles et utilisé des matériaux responsables qui respectent l'environnement.
                  </p>
                </div>
              </div>

              {/* Ingredients */}
              <div className="space-y-6">
                <div className="h-48 relative rounded-lg overflow-hidden bg-[#e8e4dd]">
                  <Image
                    src="/NOREA-ASSETS/products/product-02/transparent.png"
                    alt="Ingrédients naturels"
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-[#1a1a1a]">Ingrédients responsables</h3>
                  <p className="text-[#2b2b2b] leading-relaxed">
                    Nous travaillons exclusivement avec des fournisseurs certifiés qui respectent les normes éthiques et environnementales les plus exigeantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Responsibility Section */}
      <section className="bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Impact social
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#faf8f6] md:text-6xl">
                Responsabilité sociale
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Women Empowerment */}
              <div className="p-8 rounded-lg space-y-4" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212, 175, 143, 0.15)" }}>
                  <span className="text-2xl">👩</span>
                </div>
                <h3 className="text-2xl font-light text-[#F5D77A]">Autonomisation féminine</h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  50% de nos équipes sont composées de femmes en positions de leadership. Nous investissons dans la formation et le développement professionnel de nos collaboratrices.
                </p>
              </div>

              {/* Local Communities */}
              <div className="p-8 rounded-lg space-y-4" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212, 175, 143, 0.15)" }}>
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-light text-[#F5D77A]">Communautés locales</h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  Nous travaillons directement avec les producteurs locaux en Afrique de l'Ouest. 5% de nos bénéfices sont réinvestis dans l'éducation et la santé communautaire.
                </p>
              </div>

              {/* Fair Trade */}
              <div className="p-8 rounded-lg space-y-4" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212, 175, 143, 0.15)" }}>
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-light text-[#F5D77A]">Commerce équitable</h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  100% de nos achats de matières premières respectent les standards du commerce équitable. Salaires justes, conditions de travail décentes, zéro exploitation.
                </p>
              </div>

              {/* Transparency */}
              <div className="p-8 rounded-lg space-y-4" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(212, 175, 143, 0.15)" }}>
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-light text-[#F5D77A]">Transparence</h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  Nous publions un rapport RSE annuel détaillant nos progrès, nos défis et nos objectifs futurs. Pas de greenwashing — juste la vérité.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Goals Section */}
      <section className="bg-[#faf8f6] py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Objectifs 2025-2030
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#1a1a1a] md:text-6xl">
                Notre feuille de route
              </h2>
            </div>

            <div className="space-y-6">
              {/* Goal 1 */}
              <div className="flex gap-6 pb-6 border-b border-[#C9952E]/20">
                <div className="w-12 h-12 rounded-full bg-[#C9952E] flex-shrink-0 flex items-center justify-center text-white font-light">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Carbon Neutral d'ici 2025</h3>
                  <p className="text-[#2b2b2b]">Atteindre la neutralité carbone en optimisant nos processus de production et de logistique.</p>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="flex gap-6 pb-6 border-b border-[#C9952E]/20">
                <div className="w-12 h-12 rounded-full bg-[#C9952E] flex-shrink-0 flex items-center justify-center text-white font-light">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-[#1a1a1a]">100% d'ingrédients biologiques d'ici 2027</h3>
                  <p className="text-[#2b2b2b]">Certifier tous nos ingrédients en agriculture biologique pour garantir une qualité premium.</p>
                </div>
              </div>

              {/* Goal 3 */}
              <div className="flex gap-6 pb-6 border-b border-[#C9952E]/20">
                <div className="w-12 h-12 rounded-full bg-[#C9952E] flex-shrink-0 flex items-center justify-center text-white font-light">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Soutenir 1000 femmes en 2030</h3>
                  <p className="text-[#2b2b2b]">Former et autonomiser 1000 femmes dans nos chaînes de distribution et de production.</p>
                </div>
              </div>

              {/* Goal 4 */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#C9952E] flex-shrink-0 flex items-center justify-center text-white font-light">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Zéro plastique d'ici 2028</h3>
                  <p className="text-[#2b2b2b]">Éliminer complètement les plastiques à usage unique de nos opérations.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Certifications
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#faf8f6] md:text-6xl">
                Nos accréditations
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Cruelty Free", desc: "Aucun test sur animaux" },
                { name: "Vegan Certified", desc: "100% d'origine végétale" },
                { name: "Fair Trade", desc: "Commerce équitable certifié" },
                { name: "Eco-friendly", desc: "Emballage durable" },
              ].map((cert, i) => (
                <div key={i} className="p-6 rounded-lg text-center space-y-3" style={{ background: "rgba(212, 175, 143, 0.08)" }}>
                  <div className="text-3xl">✓</div>
                  <h3 className="font-light text-[#F5D77A]">{cert.name}</h3>
                  <p className="text-sm text-[#f5f3f0]">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[#faf8f6] py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-light tracking-tight text-[#1a1a1a] md:text-6xl">
              Rejoignez un mouvement responsable
            </h2>
            <p className="text-xl text-[#2b2b2b] leading-relaxed">
              En choisissant NOOREA, vous choisissez une beauté qui respecte les gens et la planète.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-8">
              <GoldButton size="lg">
                Découvrir les produits
              </GoldButton>
              <GoldButton size="lg" variant="outline">
                Télécharger le rapport RSE
              </GoldButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
