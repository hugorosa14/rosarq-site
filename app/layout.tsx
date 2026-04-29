import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title:
    "ROSARTIFEX — Isolation, Étanchéité, Plaquiste & Revêtements de Sol au Luxembourg",
  description:
    "Entreprise spécialisée en isolation thermique, étanchéité, pose de sol, carrelage et plâtrerie au Luxembourg. Interventions professionnelles, finitions impeccables et matériaux certifiés.",
  metadataBase: new URL("https://rosartifex.lu"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "ROSARTIFEX — Isolation, Étanchéité, Plaquiste & Revêtements de Sol au Luxembourg",
    description:
      "Solutions techniques durables pour vos projets : isolation, étanchéité, sols, carrelage et plâtrerie.",
    url: "https://rosartifex.lu",
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
      <body className="min-h-screen bg-[#f9f4ef] text-slate-900 overflow-x-hidden">
        <Header />
        <main className="pt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
