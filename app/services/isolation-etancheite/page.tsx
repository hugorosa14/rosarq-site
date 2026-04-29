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
            certifiés et une mise en œuvre conforme aux normes luxembourgeoises.
          </p>

          {/* SECTION 1 */}
          <h2 className="mt-8 text-lg font-semibold">
            Isolation Thermique & Acoustique
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Nous intervenons sur murs, plafonds, combles et cloisons pour
            améliorer le confort intérieur, réduire les pertes de chaleur et
            optimiser l’efficacité énergétique du bâtiment.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Isolation intérieure thermique</li>
            <li>• Isolation acoustique des cloisons et plafonds</li>
            <li>• Laine de roche, laine de verre, panneaux PIR/PUR</li>
            <li>• Solutions adaptées aux rénovations et constructions neuves</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="mt-8 text-lg font-semibold">
            Étanchéité — Protection Contre l’Eau et l’Humidité
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Une étanchéité défaillante peut provoquer infiltrations, moisissures
            et dégradations structurelles. Nous appliquons des systèmes
            professionnels pour garantir une protection durable.
          </p>

          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Étanchéité toitures plates et terrasses</li>
            <li>• Étanchéité murs et fondations</li>
            <li>• Étanchéité sous carrelage (SPEC)</li>
            <li>• Barrières anti-humidité</li>
            <li>• Réparation et rénovation d’étanchéité existante</li>
          </ul>

          {/* SECTION 3 */}
          <h2 className="mt-8 text-lg font-semibold">Avantages</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Protection durable contre les infiltrations</li>
            <li>• Amélioration de la performance énergétique</li>
            <li>• Confort intérieur renforcé</li>
            <li>• Durabilité et garantie</li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="mt-8 text-lg font-semibold">Pourquoi choisir ROSARTIFEX ?</h2>
          <ul className="mt-3 text-sm text-slate-700 space-y-2">
            <li>• Expertise technique en isolation & étanchéité</li>
            <li>• Matériaux professionnels (SIKA, MAPEI, Derbigum, etc.)</li>
            <li>• Finitions précises et durables</li>
            <li>• Intervention rapide au Luxembourg</li>
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
