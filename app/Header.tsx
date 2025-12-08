"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f9f4ef]/95 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
        
        {/* LOGO + NAME */}
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
          <a href="#services" className="hover:text-slate-950 transition">Services</a>
          <a href="#models" className="hover:text-slate-950 transition">Model types</a>
          <a href="#projects" className="hover:text-slate-950 transition">Projects</a>
          <a href="#process" className="hover:text-slate-950 transition">Process</a>
          <a href="#about" className="hover:text-slate-950 transition">About</a>
          <a href="#contact" className="hover:text-slate-950 transition">Contact</a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-[6px] z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`h-[3px] w-6 bg-slate-900 rounded transition-all ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 bg-slate-900 rounded transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 bg-slate-900 rounded transition-all ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-[#f9f4ef] shadow-xl z-40 p-8 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium text-slate-900 mt-10">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#models" onClick={closeMenu}>Model types</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      {/* DARK BACKDROP WHEN MENU IS OPEN */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </header>
  );
}
