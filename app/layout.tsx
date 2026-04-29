// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title:
    "ROSARTIFEX — Isolation & Étanchéité, Plaquiste & Revêtements de Sol au Luxembourg",
  description:
    "Expertise technique en isolation thermique, étanchéité, plaques de plâtre et revêtements de sol. Interventions fiables, finitions précises et conformité aux standards luxembourgeois.",
  alternates: {
    canonical: "https://rosartifex.lu/",
  },
  openGraph: {
    title:
      "ROSARTIFEX — Isolation & Étanchéité, Plaquiste & Revêtements de Sol au Luxembourg",
    description:
      "Expertise technique en isolation thermique, étanchéité, plaques de plâtre et revêtements de sol au Luxembourg.",
    url: "https://rosartifex.lu/",
    siteName: "ROSARTIFEX",
    locale: "fr_LU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="font-sans">
      <body className="min-h-screen bg-[var(--background)] text-slate-900 overflow-x-hidden">
        <Header />
        <main className="pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
