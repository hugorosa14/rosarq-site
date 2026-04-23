import Image from "next/image";

export default function IsolationEtancheitePage() {
  return (
    <div className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
        
        {/* TEXTO */}
        <div>
          <p className="subtitle">Isolation & Étanchéité</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Isolation & Étanchéité au Luxembourg
          </h1>

          <p className="mt-4 text-sm text-slate-700">
            L’isolation et l’étanchéité sont essentielles pour garantir la
            performance énergétique, la protection contre l’humidité et la
            durabilité de votre bâtiment. ROSARTIFEX réalise des travaux
            d’isolation thermique, acoustique et d’étanchéité avec des matériaux
            certifiés et une mise en œuvre conforme aux normes.
          </p>

          <h2 className="mt-8 text-lg font-semibold">
            Nos prestations en isolation & étanchéité
          </h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Étanchéité toitures plates et terrasses</li>
            <li>• Étanchéité murs et fondations</li>
            <li>• Isolation intérieure thermique</li>
            <li>• Isolation acoustique</li>
            <li>• Traitements anti-humidité</li>
            <li>• Réparation et rénovation d’étanchéité existante</li>
          </ul>

          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Protection durable contre les infiltrations</li>
            <li>• Amélioration de la performance énergétique</li>
            <li>• Confort intérieur renforcé</li>
            <li>• Durabilité et garantie</li>
          </ul>
        </div>

        {/* IMAGEM */}
        <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/services/etancheite-1.jpg"
            alt="Travaux d’étanchéité sur toiture plate au Luxembourg"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </div>
  );
}
