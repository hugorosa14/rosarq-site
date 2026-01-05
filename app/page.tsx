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

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

          <div className="relative flex h-full items-center px-6 sm:px-10 max-w-5xl">
            <div>
              <p className="text-xs font-semibold tracking-[0.35em] text-amber-300 uppercase mb-4">
                Architectural model making & services Luxembourg
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-semibold text-white">
                Architectural model making for clear and confident decisions.
              </h1>

              <p className="mt-6 max-w-lg text-slate-100/90 text-sm sm:text-base">
                High-quality physical models for competitions, presentations and client communication.
              </p>

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
      <section id="services" className="section-shell py-20">
        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Services
        </h2>

        <p className="mt-3 text-3xl font-semibold tracking-tight">
          Architectural model making and selected construction services.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold">Architectural model making</h3>
            <p className="mt-3 text-sm">
              We produce precise physical models that support design development,
              competitions and client presentations.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Study and concept models</li>
              <li>• Presentation models</li>
              <li>• Marketing models</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold">Construction services</h3>
            <p className="mt-3 text-sm">
              Selected construction and renovation services, focused on precision,
              durability and clean execution.
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

      {/* ================= MODEL TYPES ================= */}
      <section id="models" className="section-shell py-20">
        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Model types
        </h2>

        <p className="mt-3 text-3xl font-semibold tracking-tight">
          Models tailored to project type and level of detail.
        </p>

        <p className="mt-4 text-sm text-slate-700 max-w-3xl">
          From early concept models to detailed presentation pieces, each model
          is adapted to the project scale, purpose and level of detail.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
            <p>• Master planning models</p>
            <p>• Mixed-use models</p>
            <p>• Villa models</p>
            <p>• Interior models</p>
            <p>• Conceptual white models</p>
            <p>• 3D printed architectural models</p>
            <p>• Landscape models</p>
            <p>• Handcrafted architectural models</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section-shell py-20">
        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Selected projects
        </h2>

        <p className="mt-3 text-3xl font-semibold tracking-tight">
          A closer look at recent work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/projects/hamm",
              img: "/projects/Hamm/hamm-1.png",
              title: "Residential model — Hamm",
              text: "Scale model for a residential development.",
            },
            {
              href: "/projects/tondela",
              img: "/projects/tondela/Tondela-1.png",
              title: "Architectural model — Tondela",
              text: "Conceptual model combining clean volumes and site.",
            },
            {
              href: "/projects/waterproofing",
              img: "/projects/waterproofing/waterproofing-1.jpg",
              title: "Renovation & waterproofing works",
              text: "Professional waterproofing, flooring and renovation services.",
            },
          ].map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block overflow-hidden rounded-3xl bg-white shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{project.text}</p>
                <p className="mt-4 text-sm font-semibold text-amber-700">
                  View project →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="section-shell py-20">
        <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
          Process
        </h2>

        <p className="mt-3 text-3xl font-semibold tracking-tight">
          A clear workflow from first files to final delivery.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1 · Brief",
              text: "We discuss the project goals, scale, level of detail and intended use of the model.",
            },
            {
              step: "2 · Proposal",
              text: "You receive a clear proposal including scope, timeline and cost.",
            },
            {
              step: "3 · Production & delivery",
              text: "The model is carefully produced, packed and delivered ready for presentation.",
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
      <section id="about" className="section-shell py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
              About
            </h2>

            <p className="mt-4 text-sm text-slate-700">
              ROSARQ is a Luxembourg-based studio focused on architectural model making
              and selected construction services.
            </p>

            <p className="mt-3 text-sm text-slate-700">
              We work closely with architects, designers and developers to transform
              drawings and concepts into precise physical models.
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
      <section id="contact" className="section-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div>
            <h2 className="text-base md:text-lg font-semibold tracking-[0.25em] text-amber-700 uppercase">
              Contact
            </h2>

            <p className="mt-3 text-3xl font-semibold tracking-tight">
              Share your project — we’ll prepare an estimate.
            </p>

            <p className="mt-4 text-sm text-slate-700">
              Send drawings (PDF/CAD), 3D models or sketches.
              We will advise on scale, materials and level of detail.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md space-y-6">
            <div className="text-sm text-slate-700 space-y-1">
              <p className="font-semibold text-slate-900">ROSARQ</p>
              <p>Address: [15, Rue de l`Industrie], [8069] [Bertrange], Luxembourg</p>
              <p>Business permit nº: [NÚMERO DE PERMISSÃO]</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@rosarq.lu"
                  className="font-medium text-amber-700"
                >
                  contact@rosarq.lu
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
              <input type="text" name="name" placeholder="Name" required className="w-full rounded-xl border px-3 py-2 text-sm" />
              <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl border px-3 py-2 text-sm" />
              <textarea name="message" rows={4} placeholder="Message" className="w-full rounded-xl border px-3 py-2 text-sm" />
              <input type="file" name="attachment" multiple className="text-sm" />

              <button
                type="submit"
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400 transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-black/10 bg-[#f9f4ef] py-6 mt-10">
        <div className="section-shell flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
          <p>
            © {currentYear} <span className="font-semibold">ROSARQ</span> — All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
