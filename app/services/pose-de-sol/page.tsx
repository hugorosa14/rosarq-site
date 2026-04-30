import Image from "next/image";

export const metadata = {
  title: "Revêtement de sol — ROSARTIFEX Luxembourg",
  description:
    "Pose professionnelle de revêtements de sol : LVT, vinyle, parquet, stratifié. Finitions propres, durabilité et précision d’exécution.",
  alternates: {
    canonical: "https://rosartifex.lu/services/pose-de-sol",
  },
  openGraph: {
    title: "Revêtement de sol — ROSARTIFEX Luxembourg",
    description:
      "Installation de sols techniques : LVT, vinyle, parquet et stratifié. Travail précis et finitions impeccables.",
    url: "https://rosartifex.lu/services/pose-de-sol",
    siteName: "ROSARTIFEX",
    locale: "fr_LU",
    type: "article",
  },
};

export default function RevetementDeSolPage() {
  return (
    <div className="section-shell py-16">

      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">

        {/* TEXTO */}
        <div>
          <p className="subtitle">Revêtement de sol</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Revêtement de sol au Luxembourg
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            ROSARTIFEX réalise la pose de revêtements de sol avec précision et
            durabilité. Nous installons LVT, vinyle, parquet, stratifié et autres
            solutions techniques adaptées aux projets résidentiels et professionnels.
          </p>

          {/* SECTION 1 */}
          <h2 className="mt-8 text-lg font-semibold">Types de revêtements</h2>
          <p className="mt-3 text-sm text-slate-700">
            Nous proposons une large gamme de solutions pour répondre aux besoins
            esthétiques, techniques et budgétaires de chaque projet.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• LVT (Luxury Vinyl Tile)</li>
            <li>• Vinyle en rouleau</li>
            <li>• Parquet stratifié</li>
            <li>• Parquet flottant</li>
            <li>• Sols techniques pour zones humides</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="mt-8 text-lg font-semibold">Préparation & Mise en œuvre</h2>
          <p className="mt-3 text-sm text-slate-700">
            Une pose durable commence par une préparation soignée du support.
            Nous assurons un nivellement précis et une installation conforme aux
            recommandations des fabricants.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Nivellement du sol (ragréage)</li>
            <li>• Préparation des supports</li>
            <li>• Pose flottante ou collée</li>
            <li>• Découpes précises et finitions propres</li>
          </ul>

          {/* SECTION 3 */}
          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Résistance et durabilité</li>
            <li>• Entretien facile</li>
            <li>• Esthétique moderne</li>
            <li>• Adapté aux rénovations et constructions neuves</li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="mt-8 text-lg font-semibold">Pourquoi choisir ROSARTIFEX ?</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Pose précise et finitions impeccables</li>
            <li>• Matériaux professionnels (Gerflor, Tarkett, etc.)</li>
            <li>• Respect des délais et communication claire</li>
            <li>• Intervention rapide au Luxembourg</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/pose-sol-1.jpg"
            alt="Installation professionnelle de revêtements de sol LVT et vinyle"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* CTA FINAL */}
      <div className="mt-20 rounded-3xl bg-white p-10 shadow-soft text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Un projet de revêtement de sol ?
        </h2>
        <p className="mt-3 text-sm text-slate-700 max-w-xl mx-auto">
          Envoyez vos plans, photos ou description de votre projet. Nous vous
          répondons rapidement avec une proposition claire et adaptée.
        </p>
        <a
          href="/#contact"
          className="btn-gold mt-6 inline-block"
        >
          Demander un devis
        </a>
      </div>

    </div>
  );
}
