import Image from "next/image";

export const metadata = {
  title: "Plaquiste & Finitions — ROSARTIFEX Luxembourg",
  description:
    "Travaux de plâtrerie, cloisons, faux plafonds, enduits et finitions intérieures au Luxembourg. Exécution professionnelle, finitions propres et durables.",
  alternates: {
    canonical: "https://rosartifex.lu/services/plaquiste",
  },
  openGraph: {
    title: "Plaquiste & Finitions — ROSARTIFEX Luxembourg",
    description:
      "Cloisons, faux plafonds, enduits et finitions intérieures réalisés avec précision et durabilité.",
    url: "https://rosartifex.lu/services/plaquiste",
    siteName: "ROSARTIFEX",
    locale: "fr_LU",
    type: "article",
  },
};

export default function PlaquistePage() {
  return (
    <div className="section-shell py-16">

      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">

        {/* TEXTO */}
        <div>
          <p className="subtitle">Plaquiste & Finitions</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Plaquiste & Finitions au Luxembourg
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            ROSARTIFEX réalise des travaux de plâtrerie, cloisons, faux plafonds,
            enduits et finitions intérieures avec précision et durabilité.
            Nous intervenons sur projets résidentiels et professionnels pour créer
            des espaces propres, modernes et parfaitement exécutés.
          </p>

          {/* SECTION 1 */}
          <h2 className="mt-8 text-lg font-semibold">Cloisons & Aménagements</h2>
          <p className="mt-3 text-sm text-slate-700">
            Création et modification d’espaces intérieurs grâce à des cloisons
            performantes et adaptées à vos besoins.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Cloisons en plaques de plâtre (Gyproc, Knauf)</li>
            <li>• Cloisons acoustiques</li>
            <li>• Cloisons techniques pour passages de gaines</li>
            <li>• Création d’espaces sur mesure</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="mt-8 text-lg font-semibold">Faux Plafonds</h2>
          <p className="mt-3 text-sm text-slate-700">
            Installation de faux plafonds pour améliorer l’esthétique, l’acoustique
            et l’intégration des systèmes techniques.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Faux plafonds en plaques de plâtre</li>
            <li>• Faux plafonds démontables</li>
            <li>• Intégration d’éclairage LED</li>
            <li>• Solutions acoustiques</li>
          </ul>

          {/* SECTION 3 */}
          <h2 className="mt-8 text-lg font-semibold">Enduits & Finitions</h2>
          <p className="mt-3 text-sm text-slate-700">
            Nous réalisons des finitions propres et régulières pour garantir un
            rendu impeccable avant peinture ou décoration.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Enduits de lissage</li>
            <li>• Rebouchage et préparation des surfaces</li>
            <li>• Finitions prêtes à peindre</li>
            <li>• Réparations et rénovations intérieures</li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="mt-8 text-lg font-semibold">Pourquoi choisir ROSARTIFEX ?</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Travail propre, précis et durable</li>
            <li>• Matériaux professionnels (Knauf, Gyproc, etc.)</li>
            <li>• Respect des délais et communication claire</li>
            <li>• Intervention rapide au Luxembourg</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/plaquiste-1.jpg"
            alt="Travaux de plâtrerie, cloisons et finitions intérieures"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* CTA FINAL */}
      <div className="mt-20 rounded-3xl bg-white p-10 shadow-soft text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Un projet de plâtrerie ou de finitions intérieures ?
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
