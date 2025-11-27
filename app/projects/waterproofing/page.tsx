// app/projects/waterproofing/page.tsx
import Image from "next/image";
import Link from "next/link";

const waterproofingImages = [
  "/projects/waterproofing/waterproofing-1.JPG",
  "/projects/waterproofing/waterproofing-2.JPG",
  "/projects/waterproofing/waterproofing-3.JPG",
];

export default function WaterproofingProjectPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.25em] text-amber-500">
          PHYSICAL WORKS
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Waterproofing & small renovation works
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Waterproofing of flat roofs and small renovation works, with a
          10-year warranty when applied under our conditions.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {waterproofingImages.map((src, index) => (
            <figure
              key={src}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-slate-900/40"
            >
              <Image
                src={src}
                alt={`Waterproofing work, image ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                priority={index === 0}
              />
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/#projects"
            className="text-sm font-medium text-slate-600 underline-offset-4 hover:text-amber-600 hover:underline"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}
