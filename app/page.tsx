"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#f9f4ef] text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="relative h-[600px] sm:h-[680px] lg:h-[760px] w-full">
          <Image
            src="/hero-rosarq.jpg"
            alt="Architectural model making"
            fill
            priority
            className="object-cover object-center scale-105"
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

          {/* HERO CONTENT */}
          <div className="relative flex h-full items-center px-6 sm:px-10 max-w-5xl">
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] text-amber-300 uppercase mb-4">
                ARCHITECTURAL MODEL MAKING & SERVICES
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-semibold text-white">
                High-quality architectural 3D models combining{" "}
                <span className="text-amber-300">digital modeling</span>,{" "}
                <span className="text-amber-300">CNC milling</span>,{" "}
                <span className="text-amber-300">3D printing</span> and{" "}
                <span className="text-amber-300">handcrafted techniques</span>.
              </h1>

              <p className="mt-6 max-w-lg text-slate-100/90 text-sm sm:text-base">
                Serving architects, real estate developers, construction
                companies and interior designers with tailor-made models.
              </p>

              {/* HERO BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:bg-amber-400 transition"
                >
                  Request a quote
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="section-shell max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Services
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight">
          Architectural model making & construction services.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* MODEL MAKING */}
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold">Architectural model making</h3>
            <p className="mt-3 text-sm">
              High-quality physical models for competitions, presentations and marketing.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Study and concept models</li>
              <li>• Presentation models</li>
              <li>• Marketing models</li>
            </ul>
          </div>

          {/* CONSTRUCTION SERVICES */}
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold">Construction Services</h3>
            <p className="mt-3 text-sm">
              Renovation, waterproofing and precision construction services.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Waterproofing works (étanchéité)</li>
              <li>• Floor installation</li>
              <li>• Drywall and partitions</li>
              <li>• 10-year guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section-shell max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Selected projects
        </h2>

        <p className="mt-3 text-3xl font-semibold tracking-tight">
          A closer look at recent work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* HAMM */}
          <Link
            href="/projects/hamm"
            className="group block overflow-hidden rounded-3xl bg-white shadow-md"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/projects/Hamm/hamm-1.png"
                alt="Hamm model"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Residential model — Hamm</h3>
              <p className="mt-2 text-sm text-slate-700">
                Scale model for a residential development.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-700">
                View project →
              </p>
            </div>
          </Link>

          {/* TONDELA */}
          <Link
            href="/projects/tondela"
            className="group block overflow-hidden rounded-3xl bg-white shadow-md"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/projects/tondela/Tondela-1.png"
                alt="Tondela model"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Architectural model — Tondela</h3>
              <p className="mt-2 text-sm text-slate-700">
                Conceptual model combining clean volumes and site.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-700">
                View project →
              </p>
            </div>
          </Link>

          {/* 🔥 NEW — WATERPROOFING PROJECT */}
          <Link
            href="/projects/waterproofing"
            className="group block overflow-hidden rounded-3xl bg-white shadow-md"
          >
            <div className="relative h-56 w-full">
              <Image
                src="/projects/waterproofing/waterproofing-1.jpg"
                alt="Waterproofing renovation project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Renovation & Waterproofing Works</h3>
              <p className="mt-2 text-sm text-slate-700">
                Professional waterproofing, flooring and renovation services.
              </p>
              <p className="mt-4 text-sm font-semibold text-amber-700">
                View project →
              </p>
            </div>
          </Link>

        </div>

      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="section-shell max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Process
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight">
          A clear workflow from first files to final delivery.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1 · Brief & files",
              text: "We receive plans, sections, 3D models and references.",
            },
            {
              step: "2 · Proposal & production",
              text: "We prepare a proposal with scale, materials and timing.",
            },
            {
              step: "3 · Delivery",
              text: "Models delivered with professional packaging and installation.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-3xl bg-white p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                {item.step}
              </p>
              <p className="mt-3 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section-shell max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
              Founder & Model Maker
            </h2>

            <p className="mt-4 text-sm text-slate-700">
              ROSARQ is led by a model maker passionate about turning drawings into physical objects.
            </p>

            <p className="mt-3 text-sm text-slate-700">
              Early work began with cardboard houses and wooden miniatures — today transformed into architectural precision.
            </p>
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-md">
            <Image
              src="/founder.jpg"
              alt="Founder of ROSARQ"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section-shell max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div>
            <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
              Contact
            </h2>

            <p className="mt-3 text-3xl font-semibold tracking-tight">
              Share your project — we’ll prepare an estimate.
            </p>

            <p className="mt-4 text-sm text-slate-700">
              Send drawings (PDF/CAD), 3D models or sketches. We'll suggest the best scale and level of detail.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <p className="text-sm font-semibold text-slate-900">Direct contact</p>

            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                Email:{" "}
                <a href="mailto:contact@rosarq.lu" className="font-medium text-amber-700">
                  contact@rosarq.lu
                </a>
              </p>
              <p>Based in Luxembourg</p>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              A full contact form may be added later.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-black/10 bg-[#f9f4ef] py-6 mt-10">
        <div className="section-shell max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
          <p>
            © {currentYear} <span className="font-semibold">ROSARQ</span> — All rights reserved.
          </p>
          <p>Website built with Next.js & Vercel</p>
        </div>
      </footer>

    </main>
  );
}
