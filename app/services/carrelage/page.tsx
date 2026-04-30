import Image from "next/image";

export const metadata = {
  title: "Carrelage & Chapes — ROSARTIFEX Luxembourg",
  description:
    "Travaux de chapes, nivellement et pose de carrelage au Luxembourg. Solutions durables, finitions impeccables et mise en œuvre professionnelle.",
  alternates: {
    canonical: "https://rosartifex.lu/services/carrelage",
  },
  openGraph: {
    title: "Carrelage & Chapes — ROSARTIFEX Luxembourg",
    description:
      "Chapes traditionnelles, nivellement de sol et pose de carrelage avec précision et durabilité.",
    url: "https://rosartifex.lu/services/carrelage",
    siteName: "ROSARTIFEX",
    locale: "fr_LU",
    type: "article",
  },
};

export default function CarrelageChapesPage() {
  return (
    <div className="section-shell py-16">

      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">

        {/* TEXTO */}
        <div>
          <p className="subtitle">Carrelage & Chapes</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Carrelage & Chapes au Luxembourg
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            ROSARTIFEX réalise des travaux de chapes, nivellement et pose de
            carrelage pour garantir un sol parfaitement stable, durable et
            esthétique. Nous intervenons sur projets résidentiels et professionnels
            avec une exécution précise et conforme aux normes.
          </p>

          {/* SECTION 1 */}
          <h2 className="mt-8 text-lg font-semibold">Chapes & Nivellement</h2>
          <p className="mt-3 text-sm text-slate-700">
            Une base solide est essentielle pour un sol durable. Nous réalisons des
            chapes et nivellements adaptés à tous types de revêtements.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Chape traditionnelle</li>
            <li>• Ragréage autonivelant</li>
            <li>• Préparation des supports</li>
            <li>• Correction des irrégularités</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="mt-8 text-lg font-semibold">Pose de Carrelage</h2>
          <p className="mt-3 text-sm text-slate-700">
            Nous posons du carrelage avec précision pour un rendu esthétique et
            durable, adapté aux pièces humides et aux zones techniques.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Carrelage sol & mur</li>
            <li>• Douches italiennes</li>
            <li>• Pose droite, diagonale ou motifs</li>
            <li>• Joints propres et réguliers</li>
          </ul>

          {/* SECTION 3 */}
          <h2 className="mt-8 text-lg font-semibold">Étanchéité sous carrelage (SPEC)</h2>
          <p className="mt-3 text-sm text-slate-700">
            Pour les salles de bain, douches et zones humides, nous appliquons des
            systèmes d’étanchéité certifiés avant la pose du carrelage.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Membranes d’étanchéité</li>
            <li>• Barrières anti-humidité</li>
            <li>• Protection des zones sensibles</li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="mt-8 text-lg font-semibold">Pourquoi choisir ROSARTIFEX ?</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Finitions impeccables et alignements parfaits</li>
            <li>• Matériaux professionnels (MAPEI, Schlüter, Ardex, etc.)</li>
            <li>• Respect des délais et communication claire</li>
            <li>• Intervention rapide au Luxembourg</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/carrelage-1.jpg"
            alt="Pose de carrelage et chapes autonivelantes"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* CTA FINAL */}
      <div className="mt-20 rounded-3xl bg-white p-10 shadow-soft text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Un projet de carrelage ou de chape ?
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
