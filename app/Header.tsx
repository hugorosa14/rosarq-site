"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-slate-200 bg-white">

        {/* LOGO */}
        <div className="text-xl font-semibold text-slate-900">
          ROSARQ
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-900">
          <a href="#services" className="hover:text-amber-600">Services</a>
          <a href="#models" className="hover:text-amber-600">Model types</a>
          <a href="#physical" className="hover:text-amber-600">Services</a>
          <a href="#projects" className="hover:text-amber-600">Projects</a>
          <a href="#process" className="hover:text-amber-600">Process</a>
          <a href="#about" className="hover:text-amber-600">About</a>
          <a href="#contact" className="hover:text-amber-600">Contact</a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-slate-900 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </header>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-white shadow-xl z-40 p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg text-slate-900">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#models" onClick={() => setIsOpen(false)}>Model types</a>
          <a href="#physical" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </>
  );
}
