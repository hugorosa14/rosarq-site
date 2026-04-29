"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f9f4ef] text-slate-900">

      {/* HERO */}
      <section className="relative h-[680px] w-full overflow-hidden">
        <Image
          src="/hero/hero-chantier.png"
          alt="Travaux ROSARTIFEX sur chantier au Luxembourg"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

        <div className="relative z-10 h-full flex items-center px-6 max-w-5xl">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400">
              Isolation • Étanchéité • Revêtement de sol • Carrelage • Plaquiste
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
              Solutions techniques durables<br />pour vos projets au Luxembourg.
            </h1>

            <p className="mt-6 max-w-lg text-slate-100/90 text-sm sm:text-base">
              ROSARTIFEX intervient sur vos chantiers avec précision, durabilité
              et garantie. Isolation, étanchéité, revêtements de sol, carrelage
              et plâtrerie — un seul interlocuteur pour un résultat impeccable.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-gold shadow-soft">
                Demander un devis
              </a>
              <a href="#services" className="btn-outline">
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="section-shell py-24">
        <p className="subtitle">Pourquoi nous choisir</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Un partenaire fiable pour vos travaux.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Qualité certifiée",
              text: "Matériaux professionnels et mise en œuvre conforme aux normes luxembourgeoises.",
            },
            {
              title: "Respect des délais",
              text: "Planification claire, suivi rigoureux et exécution maîtrisée.",
            },
            {
              title: "Polyvalence",
              text: "Isolation, étanchéité, sols, carrelage, plâtrerie — un seul interlocuteur.",
            },
            {
              title: "Garantie & durabilité",
              text: "Travaux garantis, solutions durables et finitions impeccables.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINES D’INTERVENTION */}
      <section className="section-shell py-28">
        <p className="subtitle">Domaines d’intervention</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Nos compétences techniques.
        </h2>

        <div className="mt-16 space-y-24">

          {/* BLOC 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[380px] w-full rounded-3xl overflow-hidden shadow-soft">
              <Image
                src="/services/etancheite-1.jpg"
                alt="Travaux d’étanchéité sur toiture plate au Luxembourg"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Isolation & Étanchéité</h3>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                Protection complète contre l’humidité, les infiltrations et les pertes
                thermiques. Mise en œuvre conforme aux normes luxembourgeoises avec
                matériaux certifiés et durables.
              </p>
            </div>
          </div>

          {/* BLOC 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold">Revêtement de sol</h3>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                Installation professionnelle de parquet, stratifié, vinyle, LVT et
                autres revêtements. Finitions propres, durabilité et précision
                d’exécution.
              </p>
            </div>

            <div className="relative h-[380px] w-full rounded-3xl overflow-hidden shadow-soft order-1 md:order-2">
              <Image
                src="/services/pose-sol-1.jpg"
                alt="Installation professionnelle de revêtements de sol LVT et vinyle"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* BLOC 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-[380px] w-full rounded-3xl overflow-hidden shadow-soft">
              <Image
                src="/services/carrelage-1.jpg"
                alt="Pose de carrelage et chapes autonivelantes"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Carrelage & Chapes</h3>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                Chapes traditionnelles, nivellement de sol et pose de carrelage pour
                un résultat robuste, esthétique et parfaitement aligné.
              </p>
            </div>
          </div>

          {/* BLOC 4 */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold">Plaquiste & Finitions</h3>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                Cloisons, faux plafonds, enduits et finitions intérieures. Création
                d’espaces propres, modernes et parfaitement exécutés.
              </p>
            </div>

            <div className="relative h-[380px] w-full rounded-3xl overflow-hidden shadow-soft order-1 md:order-2">
              <Image
                src="/services/plaquiste-1.jpg"
                alt="Travaux de plâtrerie, cloisons et finitions intérieures"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="section-shell py-24">
        <p className="subtitle">Services</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Expertise technique pour vos travaux.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/services/isolation-etancheite",
              title: "Isolation & Étanchéité",
              text: "Protection durable contre l’humidité et les pertes thermiques.",
            },
            {
              href: "/services/pose-de-sol",
              title: "Revêtement de sol",
              text: "Installation précise de revêtements durables.",
            },
            {
              href: "/services/carrelage",
              title: "Carrelage & Chapes",
              text: "Sols robustes, nivelés et esthétiques.",
            },
            {
              href: "/services/plaquiste",
              title: "Plaquiste & Finitions",
              text: "Cloisons, faux plafonds et finitions modernes.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl bg-white p-6 shadow-soft hover:shadow-strong transition-shadow"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section id="projects" className="section-shell py-24">
        <p className="subtitle">Réalisations</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Quelques projets récents.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              img: "/realisations/etancheite.jpg",
              title: "Étanchéité bitumineuse & membranes",
              text: "Application de membranes bitumineuses et solutions d’étanchéité durables.",
            },
            {
              img: "/realisations/pose-sol.jpg",
              title: "Revêtements de sol techniques",
              text: "Installation de LVT, vinyle et parquet avec finitions précises.",
            },
            {
              img: "/realisations/plaquiste.jpg",
              title: "Plâtrerie & finitions intérieures",
              text: "Cloisons, faux plafonds et enduits réalisés avec précision.",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl overflow-hidden bg-white shadow-soft">
              <div className="relative h-56 w-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GARANTIES */}
      <section className="section-shell py-24">
        <p className="subtitle">Garanties & Certifications</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          La tranquillité d’esprit pour vos travaux.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Garantie décennale",
              text: "Travaux couverts selon les exigences du secteur.",
            },
            {
              title: "Matériaux certifiés",
              text: "Produits conformes aux normes européennes.",
            },
            {
              title: "Exécution professionnelle",
              text: "Méthodes de travail rigoureuses et contrôlées.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSUS */}
      <section id="process" className="section-shell py-24">
        <p className="subtitle">Processus</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Une méthode claire et professionnelle.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "Analyse",
              text: "Compréhension des besoins, contraintes et objectifs.",
            },
            {
              step: "Proposition",
              text: "Offre détaillée, délais et budget transparent.",
            },
            {
              step: "Exécution & contrôle",
              text: "Travaux réalisés avec précision et garantie.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                {item.step}
              </p>
              <p className="mt-3 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="section-shell py-24">
        <p className="subtitle">À propos</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Une entreprise engagée au Luxembourg.
        </h2>

        <p className="mt-4 max-w-3xl text-sm text-slate-700 leading-relaxed">
          ROSARTIFEX est spécialisée dans l’isolation, l’étanchéité, la pose de sol,
          le carrelage et la plâtrerie. Avec plus de 12 ans d’expérience cumulée,
          notre équipe intervient sur des projets résidentiels et professionnels
          avec une exigence élevée de qualité, de précision et de durabilité.
        </p>

        {/* VALEURS */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "QUALITÉ",
              text: "Un travail propre, durable et conforme aux normes luxembourgeoises, réalisé avec des matériaux certifiés.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 7h.01M7 11h.01M7 15h.01M11 7h6M11 11h6M11 15h6" />
                </svg>
              ),
              title: "SAVOIR‑FAIRE",
              text: "Une équipe expérimentée et polyvalente, capable de gérer l’ensemble du processus, du diagnostic aux finitions.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "FIABILITÉ",
              text: "Respect des délais, communication transparente et engagement total sur chaque chantier.",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" />
                </svg>
              ),
              title: "RESPECT",
              text: "Un travail soigné, réalisé dans le respect de votre espace, de vos contraintes et de vos attentes.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-3xl shadow-soft text-center">
              {item.icon}
              <h3 className="mt-4 text-xl font-bold tracking-wide">{item.title}</h3>
              <p className="mt-3 text-[15px] text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* HISTOIRE */}
        <div className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Notre parcours</h2>

          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            ROSARTIFEX est née de l’expérience et du savoir‑faire de trois frères
            spécialisés dans l’étanchéité et les travaux techniques du bâtiment.
            Après <strong>8, 14 et 16 ans d’expérience</strong> sur des chantiers au
            Luxembourg et à l’international, nous avons décidé d’unir nos compétences
            pour créer une entreprise capable d’offrir un service plus rigoureux,
            plus transparent et plus fiable.
          </p>

          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            Notre expertise couvre l’étanchéité, l’isolation thermique et acoustique,
            la pose de revêtements de sol (LVT, vinyle, parquet), la réalisation de
            chapes et nivellements, ainsi que la plâtrerie et les finitions
            intérieures. Cette complémentarité nous permet d’intervenir sur des
            projets complets, avec une vision globale et une exécution cohérente.
          </p>
        </div>

        {/* EQUIPE */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Notre équipe</h2>

          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            Aujourd’hui, ROSARTIFEX est portée par une équipe soudée et passionnée
            par le travail bien fait. Avec <strong>38 ans d’expérience cumulée</strong>,
            nous mettons en œuvre des méthodes modernes, un suivi rigoureux et un
            souci constant du détail pour garantir un résultat impeccable.
          </p>
        </div>

        {/* IMAGE GRANDE */}
        <div className="relative mt-16 h-[420px] w-full rounded-3xl overflow-hidden shadow-soft">
          <Image
            src="/about/about-team.jpg"
            alt="Équipe professionnelle en chantier au Luxembourg"
            fill
            className="object-cover"
          />
        </div>

        {/* PARTENAIRES */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight">Nos partenaires</h2>
          <p className="mt-2 text-sm text-slate-700">
            Nous travaillons exclusivement avec des matériaux certifiés provenant de
            marques reconnues.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8 opacity-60 grayscale hover:opacity-100 transition">
            <Image src="/logos/soprema-group-logo.png" alt="Soprema" width={110} height={50} />
            <Image src="/logos/IKO.Logo.png" alt="IKO" width={90} height={50} />
            <Image src="/logos/knauf-logo.png" alt="Knauf" width={100} height={50} />
            <Image src="/logos/MAPEI-Logo.png" alt="Mapei" width={110} height={50} />
            <Image src="/logos/schluter-systems-logo.png" alt="Schlüter" width={120} height={50} />
            <Image src="/logos/Gerflor-Logo.png" alt="Gerflor" width={110} height={50} />
            <Image src="/logos/derbigum-logo.png" alt="Derbigum" width={110} height={50} />
            <Image src="/logos/SIKA.logo.png" alt="Sika" width={80} height={50} />
            <Image src="/logos/Logo-Ardex.jpg" alt="Ardex" width={90} height={50} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-shell py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div>
            <p className="subtitle">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Demandez votre devis personnalisé.
            </h2>
            <p className="mt-4 text-sm text-slate-700">
              Envoyez vos plans, descriptions ou photos. Nous vous répondrons
              avec une proposition claire et adaptée à votre projet.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-soft space-y-6">
            <div className="text-sm text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">ROSARTIFEX</p>
              <p>Adresse: 15, Rue de l’Industrie, 8069 Bertrange, Luxembourg</p>
              <p>
                Email:{" "}
                <a href="mailto:contact@rosartifex.lu" className="text-amber-700">
                  contact@rosartifex.lu
                </a>
              </p>
            </div>

            <div className="h-px bg-black/10" />

            <form
              action="https://formspree.io/f/xwpgjloz"
              method="POST"
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Nom"
                required
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <input type="file" name="attachment" multiple className="text-sm" />
              <button type="submit" className="btn-gold w-full">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
