// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "ROSARTIFEX | Isolation, Étanchéité, Pose de Sol & Plaquiste",
  description:
    "ROSARTIFEX réalise des travaux d’isolation, d’étanchéité, de pose de sol, de carrelage et de plâtrerie au Luxembourg.",
  openGraph: {
    title: "ROSARTIFEX | Solutions Techniques au Luxembourg",
    description:
      "Isolation, étanchéité, pose de sol, carrelage et plâtrerie avec précision et garantie.",
    url: "https://www.rosartifex.lu",
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
