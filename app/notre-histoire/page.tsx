import { Container } from "@/components/ui/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = {
  title: "Notre Histoire — NOOREA",
  description: "Découvrez l'histoire de NOOREA, une marque de soins premium fondée sur la lumière et la beauté naturelle.",
};

export default function NoireHistoirePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] pt-32 pb-20">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            {/* Left: Text */}
            <div className="space-y-8">
              <h1 className="text-6xl font-light tracking-tight text-[#faf8f6] md:text-7xl lg:text-8xl">
                NOTRE<br />HISTOIRE
              </h1>
              
              <p className="max-w-xl text-xl font-light leading-relaxed text-[#f5f3f0] md:text-2xl">
                Une histoire de lumière, de soin et de renaissance — fondée sur la conviction que chaque peau possède sa propre lumière.
              </p>

              <div className="pt-8">
                <GoldButton size="lg">
                  Découvrir nos rituels
                </GoldButton>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden h-96 md:block">
              <Image
                src="/NOREA-ASSETS/editorial/brand-editorial/brand-editorial-01.png"
                alt="L'histoire de NOOREA"
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

      {/* Origin Section */}
      <section className="bg-[#faf8f6] py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Origines
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#1a1a1a] md:text-6xl">
                Comment tout a commencé
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-[#2b2b2b] md:text-xl">
              <p>
                NOOREA est née d'une vision simple mais puissante : créer une collection de soins premium qui célèbre l'éclat unique de chaque peau. Nous avons observé que la véritable beauté n'est pas uniforme — elle est personnelle, singulière, lumineuse.
              </p>

              <p>
                Notre fondatrice a passé des années à explorer les secrets de la beauté naturelle, dialoguant avec des dermatologues, des botanistes et des femmes du monde entier. Le résultat : une philosophie de soin qui honore la nature tout en embrassant la science.
              </p>

              <p>
                Chaque produit NOOREA est conçu avec une intention : nourrir, révéler et célébrer l'éclat unique qui vit en chacun. Pas de formules génériques. Pas de promesses exagérées. Juste des rituels authentiques et efficaces.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Nos valeurs
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#faf8f6] md:text-6xl">
                Ce qui guide NOOREA
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Value 1 */}
              <div className="space-y-4 p-8 rounded-lg" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <h3 className="text-2xl font-light text-[#F5D77A]">
                  Authenticité
                </h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  Pas de détours. Pas de compromis. Chaque ingrédient est choisi pour sa qualité et son efficacité. Chaque formule est testée. Chaque résultat est mesuré.
                </p>
              </div>

              {/* Value 2 */}
              <div className="space-y-4 p-8 rounded-lg" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <h3 className="text-2xl font-light text-[#F5D77A]">
                  Inclusivité
                </h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  La beauté n'a pas de type unique. NOOREA célèbre la diversité des peaux, des tons, des besoins. Notre collection s'adresse à tou·te·s.
                </p>
              </div>

              {/* Value 3 */}
              <div className="space-y-4 p-8 rounded-lg" style={{ background: "rgba(212, 175, 143, 0.05)" }}>
                <h3 className="text-2xl font-light text-[#F5D77A]">
                  Durabilité
                </h3>
                <p className="text-[#f5f3f0] leading-relaxed">
                  Nous pensons à la planète comme nous pensons à votre peau. Emballages durables, formules responsables, chaîne d'approvisionnement transparente.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#faf8f6] py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 text-center mb-16">
              <span className="text-sm font-light tracking-[0.2em] text-[#C9952E] uppercase">
                Chronologie
              </span>
              <h2 className="text-5xl font-light tracking-tight text-[#1a1a1a] md:text-6xl">
                Notre évolution
              </h2>
            </div>

            <div className="space-y-12">
              {/* Timeline Item */}
              <div className="flex gap-8">
                <div className="w-32 flex-shrink-0">
                  <div className="text-lg font-light text-[#C9952E]">2020</div>
                </div>
                <div className="space-y-2 pb-8 border-b border-[#C9952E]/20">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Fondation</h3>
                  <p className="text-[#2b2b2b]">NOOREA est créée avec une vision : célébrer l'éclat unique de chaque peau.</p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex gap-8">
                <div className="w-32 flex-shrink-0">
                  <div className="text-lg font-light text-[#C9952E]">2021</div>
                </div>
                <div className="space-y-2 pb-8 border-b border-[#C9952E]/20">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Première collection</h3>
                  <p className="text-[#2b2b2b]">Lancement de notre première collection de sérums et crèmes premium.</p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex gap-8">
                <div className="w-32 flex-shrink-0">
                  <div className="text-lg font-light text-[#C9952E]">2022</div>
                </div>
                <div className="space-y-2 pb-8 border-b border-[#C9952E]/20">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Expansion</h3>
                  <p className="text-[#2b2b2b]">NOOREA se développe en Afrique de l'Ouest, rejoignant des milliers de clientes satisfaites.</p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="flex gap-8">
                <div className="w-32 flex-shrink-0">
                  <div className="text-lg font-light text-[#C9952E]">2024</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-[#1a1a1a]">Aujourd'hui</h3>
                  <p className="text-[#2b2b2b]">NOOREA continue d'innover et de créer des rituels de soin qui transforment les peaux.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1a0f0a] via-[#1a1a1a] to-[#2b2b2b] py-24 md:py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-light tracking-tight text-[#faf8f6] md:text-6xl">
              Rejoignez notre histoire
            </h2>
            <p className="text-xl text-[#f5f3f0] leading-relaxed">
              Chaque peau a sa propre lumière. Découvrez comment NOOREA peut vous aider à révéler la vôtre.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-8">
              <GoldButton size="lg">
                Explorer la collection
              </GoldButton>
              <GoldButton size="lg" variant="outline">
                Parlons de votre peau
              </GoldButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
