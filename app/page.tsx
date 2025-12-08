// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[var(--background)] text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[var(--background)]/95 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between">
          {/* Logo + name */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo-rosarq.png"
              alt="ROSARQ"
              width={72}
              height={72}
              className="h-16 w-16 rounded-full shadow-md"
              priority
            />
            <div className="leading-tight">
              <p className="text-xl font-semibold tracking-[0.35em] text-slate-900 uppercase">
                ROSARQ
              </p>
              <p className="text-xs text-slate-600">
                
              </p>
            </div>
          </div>

          {/* Top navigation */}
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-800">
            <a href="#services" className="hover:text-slate-950">
              Services
            </a>
            <a href="#models" className="hover:text-slate-950">
              Model types
            </a>
            <a href="#physical" className="hover:text-slate-950">
              Services
            </a>
            <a href="#projects" className="hover:text-slate-950">
              Projects
            </a>
            <a href="#process" className="hover:text-slate-950">
              Process
            </a>
            <a href="#about" className="hover:text-slate-950">
              About
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>

            <a
              href="#contact"
              className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-400"
            >
              Request a quote
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[560px] w-full sm:h-[620px] lg:h-[680px]">
          {/* Background image (no watermark) */}
          <Image
            src="/hero-rosarq.jpg"
            alt="ROSARQ architectural model making"
            fill
            priority
            className="hero-zoom h-full w-full object-cover"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" />

          {/* Hero content */}
          <div className="section-shell relative flex h-full items-center">
            <div className="max-w-3xl pl-1 sm:pl-4 lg:pl-10">
              {/* Small label */}
              <p className="mb-4 text-xs font-semibold tracking-[0.35em] text-amber-300 uppercase">
                ARCHITECTURAL MODEL MAKING &amp; SERVICES
              </p>

              {/* Main heading */}
              <h1 className="upperfix text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-[38px] lg:leading-snug">
                High-quality architectural 3D models, combining{" "}
                <span className="font-semibold uppercase text-amber-300">
                  digital modeling
                </span>
                ,{" "}
                <span className="font-semibold uppercase text-amber-300">
                  CNC milling
                </span>
                ,{" "}
                <span className="font-semibold uppercase text-amber-300">
                  3D printing
                </span>{" "}
                and{" "}
                <span className="font-semibold uppercase text-amber-300">
                  handcrafted techniques
                </span>{" "}
                to deliver precise and realistic representations.
              </h1>

              {/* Hero paragraph */}
              <p className="mt-6 max-w-xl text-sm text-slate-100/90 sm:text-base">
                Serving architects, real estate developers, construction
                companies and interior designers with tailor-made models for
                presentations, marketing and planning.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-amber-500 px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold text-slate-950"
                >
                  Request a quote
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-slate-100/70 bg-white/5 px-4 py-2 sm:px-6 sm:py-3 text-sm font-semibold text-slate-900"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="section-shell py-16 text-slate-900 sm:py-20 lg:py-24"
      >
        <div className="max-w-3xl">
          <h2 className="upperfix text-base md:text-lg font-semibold tracking-[0.3em] text-amber-700">
            Services
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight">
            ARCHITECTURAL MODEL MAKING &amp; SERVICES.
          </p>
          <p className="mt-4 text-sm text-slate-700">
            ROSARQ combines precise physical models with on-site experience,
            supporting your projects from early presentations through to
            execution on site.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Model making */}
          <div className="rounded-3xl bg-white/80 p-6 shadow-sm shadow-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Architectural model making
            </h3>
            <p className="mt-3 text-sm text-slate-700">
              High-quality physical models for competitions, client
              presentations, marketing and internal review.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Study and concept models</li>
              <li>• Presentation models for clients and investors</li>
              <li>• Marketing models for sales stands and showrooms</li>
            </ul>
          </div>

          {/* Physical works */}
          <div
            id="physical"
            className="rounded-3xl bg-white/80 p-6 shadow-sm shadow-slate-200"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              Construction Services
            </h3>
            <p className="mt-3 text-sm text-slate-700">
              Small to medium-size projects with a focus on detail,
              waterproofing and clean finishes.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Waterproofing works (étanchéité)</li>
              <li>• Floor installation</li>
              <li>• Drywall and partition work</li>
              <li>
                • 10-year guarantee, applied according to ROSARQ
                installation conditions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MODEL TYPES */}
      <section
        id="models"
        className="section-shell pb-16 text-slate-900 sm:pb-20 lg:pb-24"
      >
        <div className="grid gap-4 md:grid-cols-[1fr,1fr]">
  {/* LADO ESQUERDO: LABEL + TÍTULO */}
  <div>
    <h2 className="upperfix text-base md:text-lg font-semibold tracking-[0.3em] text-amber-700">
      Model types
    </h2>

    <p className="upperfix mt-3 text-2xl font-semibold tracking-tight">
      Models tailored to project type and level of detail.
    </p>
  </div>

  {/* LADO DIREITO: TEXTO ALINHADO POR BAIXO DO TÍTULO */}
  <div className="flex items-end">
    <p className="max-w-md text-sm text-slate-700">
      From conceptual models to highly detailed presentations, we combine
      digital modeling, 3D printing, CNC milling and handcrafted techniques.
    </p>
  </div>
</div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Master planning models",
            "Mixed-use models",
            "Residential building models",
            "Villa models",
            "Interior models",
            "Landscape models",
            "Conceptual white models",
            "3D printed architectural models",
            "Handcrafted architectural models",
          ].map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS – HAMM & TONDELA */}
      <section
        id="projects"
        className="section-shell pb-16 text-slate-900 sm:pb-20 lg:pb-24"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
           <h2 className="upperfix text-base md:text-lg font-semibold tracking-[0.3em] text-amber-700">
              Selected projects
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight">
              A CLOSER LOOK AT RECENT MODELS.
            </p>
          </div>
          <p className="max-w-md text-sm text-slate-700">
            
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* HAMM – card inteiro clicável */}
          <Link
            href="/projects/hamm"
            className="group block overflow-hidden rounded-3xl bg-white/80 shadow-sm shadow-slate-200"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/projects/Hamm/hamm-1.png"
                alt="Residential model – Hamm"
                fill
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Residential model — Hamm, Luxembourg
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Scale model for a residential development in Hamm, used for
                sales meetings and communication with local partners.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-700">
                View project →
              </p>
            </div>
          </Link>

          {/* TONDELA – card inteiro clicável */}
          <Link
            href="/projects/tondela"
            className="group block overflow-hidden rounded-3xl bg-white/80 shadow-sm shadow-slate-200"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/projects/tondela/Tondela-1.png"
                alt="Architectural model – Tondela"
                fill
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Architectural model — Tondela, Portugal
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Conceptual model combining clean volumes and landscape, ideal
                for explaining the project to the client and municipality.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-700">
                View project →
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="section-shell pb-16 text-slate-900 sm:pb-20 lg:pb-24"
      >
        <h2 className="upperfix text-base md:text-lg font-semibold tracking-[0.3em] text-amber-700">
          Process
        </h2>
        <p className="mt-3 text-2xl font-semibold tracking-tight">
          A CLEAR PROCESS FROM FIRST FILES TO FINAL DELIVERY.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              1 · Brief &amp; files
            </p>
            <p className="mt-3 text-sm text-slate-700">
              We receive plans format Dwg/Pdf , sections, 3D models and references, and define
              scale, purpose and deadline for the model.
            </p>
          </div>
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              2 · Proposal &amp; production
            </p>
            <p className="mt-3 text-sm text-slate-700">
              We send a proposal with scale, materials and price. Production
              combines digital modeling, 3D printing, CNC milling and
              handcrafting.
            </p>
          </div>
          <div className="rounded-3xl bg-white/80 p-5 shadow-sm shadow-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              3 · Delivery
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Delivery in Luxembourg and surroundings, with careful packaging
              and optional installation in sales stands or showrooms.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT / FOUNDER */}
      <section
        id="about"
        className="section-shell pb-16 text-slate-900 sm:pb-20 lg:pb-24"
      >
        <div className="grid gap-10 md:grid-cols-2 lg:items-center">
          {/* TEXTO À ESQUERDA */}
          <div>
            <h2 className="upperfix text-base md:text-lg font-semibold tracking-[0.3em] text-amber-700">
              FOUNDER &amp; MODEL MAKER
            </h2>
            <p className="mt-1 text-xs font-semibold tracking-[0.35em] text-slate-500 uppercase">
              
            </p>

            <p className="mt-4 text-sm text-slate-700">
              ROSARQ is led by a model maker who has always enjoyed turning
              drawings into something you can hold in your hands. After years
              working between architecture, construction sites and workshops,
              physical models became the natural way to connect those worlds.
            </p>

            <p className="mt-3 text-sm text-slate-700">
              As a kid, weekends were spent building small houses from
              cardboard and wooden sticks — one of them was a tiny house made
              only with wood sticks. That same curiosity and attention to detail is
              what now goes into every scale model produced at ROSARQ.
            </p>
          </div>

          {/* FOTO À DIREITA */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-slate-900/5 shadow-md">
            <Image
  src="/founder.jpg"
  alt="Founder of ROSARQ"
  fill
  className="object-cover object-top rounded-3xl"
  priority
/>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section-shell pb-20 text-slate-900 sm:pb-24 lg:pb-28"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div>
            <h2 className="upperfix text-base md:text-lg font-semibold tracking-[0.3em] text-amber-700">
              Contact
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight">
              SHARE YOUR PROJECT AND WE&apos;LL SEE WHAT FITS.
            </p>
            <p className="mt-4 text-sm text-slate-700">
              Send us the final design, drawing of the buildings in PDF or CAD, 
              sections or sketches. We can start with a quick estimate for scale,
              level of detail and delivery time.
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 p-6 shadow-sm shadow-slate-200">
            <p className="text-sm font-semibold text-slate-900">
              Direct contact
            </p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@rosarq.lu"
                  className="font-medium text-amber-700 hover:underline"
                >
                  contact@rosarq.lu
                </a>
              </p>
              <p>Based in Luxembourg.</p>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Later we can add a full form (name, email, project type, deadline,
              etc.). For now, direct email keeps things flexible and personal.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 bg-[var(--background)] py-6">
        <div className="section-shell flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} <span className="font-semibold">ROSARQ</span> — All
            Rights Reserved.
          </p>
          <p>Website built with Next.js and Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
