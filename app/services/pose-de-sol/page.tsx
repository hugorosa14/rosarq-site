import Image from "next/image";

export default function PoseDeSolPage() {
  return (
    <div className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
        
        {/* TEXTO */}
        <div>
          <p className="subtitle">Pose de sol</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Pose de sol professionnelle
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            Nous installons différents types de revêtements de sol adaptés aux
            besoins résidentiels et professionnels. Chaque pose est réalisée avec
            précision pour garantir un résultat propre, durable et esthétique.
          </p>

          <h2 className="mt-8 text-lg font-semibold">Types de revêtements</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Parquet (bois naturel ou contrecollé)</li>
            <li>• Stratifié (laminé)</li>
            <li>• Vinyle / LVT</li>
            <li>• Carrelage (en coordination avec les chapes)</li>
            <li>• Contreplaqué comme sous-couche technique</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Installation propre et rapide</li>
            <li>• Matériaux résistants et adaptés à l’usage</li>
            <li>• Finitions soignées</li>
            <li>• Conseils techniques selon votre projet</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/pose-sol-1.jpg"
            alt="Installation professionnelle de revêtements de sol LVT, vinyle et parquet"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
