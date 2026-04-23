// app/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#f9f4ef] py-6 mt-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
        <p>
          © {year} <span className="font-semibold">ROSARTIFEX</span> — Tous droits
          réservés.
        </p>
        <p className="mt-2 sm:mt-0">
          Isolation • Étanchéité • Pose de sol • Carrelage • Plaquiste
        </p>
      </div>
    </footer>
  );
}
