"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#f9f4ef]/95 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-rosartifex.png"
              width={56}
              height={56}
              alt="ROSARTIFEX"
              className="rounded-full shadow-soft"
            />
            <span className="text-lg font-semibold tracking-[0.25em] uppercase text-slate-900">
              ROSARTIFEX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-800">
            <Link href="/">Accueil</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#projects">Réalisations</Link>
            <Link href="/#process">Processus</Link>
            <Link href="/#about">À propos</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden z-50"
            aria-label="Open menu"
          >
            <span className="block h-[2px] w-6 bg-slate-900 mb-1" />
            <span className="block h-[2px] w-6 bg-slate-900 mb-1" />
            <span className="block h-[2px] w-6 bg-slate-900" />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f9f4ef] flex flex-col items-center justify-center">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-3xl text-slate-900"
            aria-label="Close menu"
          >
            ×
          </button>

          <nav className="flex flex-col gap-8 text-center">
            {[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/#services" },
              { label: "Réalisations", href: "/#projects" },
              { label: "Processus", href: "/#process" },
              { label: "À propos", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-xl font-medium tracking-[0.2em] uppercase text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
