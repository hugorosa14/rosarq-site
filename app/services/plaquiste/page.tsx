import Image from "next/image";

export default function PlaquistePage() {
  return (
    <div className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">

        {/* TEXTO */}
        <div>
          <p className="subtitle">Plaquiste & Finitions</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Cloisons, plaquiste & finitions intérieures
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            Nous réalisons des travaux de plâtrerie, cloisons et finitions
            intérieures pour créer des espaces fonctionnels, propres et
            esthétiques. Nos interventions s’adaptent aux projets résidentiels,
            commerciaux et de rénovation.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Nos prestations</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Cloisons en plaques de plâtre</li>
            <li>• Faux plafonds</li>
            <li>• Enduits & finitions</li>
            <li>• Réparations intérieures</li>
            <li>• Isolation acoustique intégrée</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Finitions propres et modernes</li>
            <li>• Rapidité d’exécution</li>
            <li>• Solutions adaptées à chaque projet</li>
            <li>• Intégration avec les autres corps de métier</li>
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
    </div>
  );
}
