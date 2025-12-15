"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-40 w-full bg-[#f9f4ef]/95 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo-rosarq.png"
              width={56}
              height={56}
              alt="ROSARQ"
              className="rounded-full shadow-sm"
            />
            <span className="text-lg font-semibold tracking-[0.25em] uppercase text-slate-900">
              ROSARQ
            </span>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-800">
            <a href="#services">Services</a>
            <a href="#models">Model types</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* MOBILE BUTTON */}
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

      {/* FULLSCREEN MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f9f4ef] flex flex-col items-center justify-center">
          {/* CLOSE BUTTON */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-3xl text-slate-900"
            aria-label="Close menu"
          >
            ×
          </button>

          {/* MENU LINKS */}
          <nav className="flex flex-col gap-8 text-center">
            {[
              { label: "Services", href: "#services" },
              { label: "Model types", href: "#models" },
              { label: "Projects", href: "#projects" },
              { label: "Process", href: "#process" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-xl font-medium tracking-[0.2em] uppercase text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
