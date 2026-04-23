import Image from "next/image";

export default function CarrelagePage() {
  return (
    <div className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
        
        {/* TEXTO */}
        <div>
          <p className="subtitle">Carrelage & Chapes</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Pose de carrelage & chapes
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            La chape est une étape essentielle avant la pose d’un revêtement. Elle
            permet de niveler le sol, d’améliorer l’isolation et d’assurer une base
            solide pour le carrelage. ROSARTIFEX réalise des chapes et la pose de
            carrelage pour des sols robustes et esthétiques.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Nos prestations</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Chapes traditionnelles</li>
            <li>• Nivellement de sol</li>
            <li>• Pose de carrelage intérieur</li>
            <li>• Carrelage salles de bain & cuisines</li>
            <li>• Carrelage terrasses</li>
            <li>• Réparation & rénovation</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Sols robustes et durables</li>
            <li>• Finition esthétique</li>
            <li>• Base parfaitement nivelée</li>
            <li>• Large choix de styles et matériaux</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/carrelage-1.jpg"
            alt="Pose de carrelage intérieur et chapes autonivelantes"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
