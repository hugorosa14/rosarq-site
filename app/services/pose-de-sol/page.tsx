import Image from "next/image";

export default function RevetementsDeSolPage() {
  return (
    <div className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
        
        {/* TEXTO */}
        <div>
          <p className="subtitle">Revêtements de Sol</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Pose de revêtements de sol au Luxembourg
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            Nous réalisons la pose de revêtements de sol avec précision et
            professionnalisme, en utilisant des matériaux adaptés aux besoins
            de chaque espace : résidentiel, commercial ou rénovation.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Nos prestations</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Pose de carrelage</li>
            <li>• Pose de parquet stratifié</li>
            <li>• Sols vinyles (LVT)</li>
            <li>• Ragréage et préparation des surfaces</li>
            <li>• Plinthes et finitions</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Méthodes & matériaux</h2>
          <p className="mt-3 text-sm text-slate-700">
            Nous travaillons avec des matériaux professionnels et des techniques
            adaptées pour garantir une finition durable, esthétique et conforme
            aux normes.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Colles et mortiers professionnels (MAPEI, SIKA, etc.)</li>
            <li>• Découpes précises et finitions propres</li>
            <li>• Mise à niveau des sols avant pose</li>
            <li>• Solutions adaptées aux zones humides</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Finitions durables et esthétiques</li>
            <li>• Adapté à tous types d’espaces</li>
            <li>• Matériaux résistants et faciles d’entretien</li>
            <li>• Travail rapide et soigné</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Pourquoi choisir ROSARTIFEX ?</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Expertise dans la pose de sols</li>
            <li>• Matériaux professionnels et durables</li>
            <li>• Finitions précises et propres</li>
            <li>• Intervention rapide au Luxembourg</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/sol-1.jpg"
            alt="Pose de revêtements de sol au Luxembourg"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
