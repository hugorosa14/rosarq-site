import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header"; // ← IMPORTA O HEADER

export const metadata: Metadata = {
  title: "ROSARQ | Architectural Model Making & Services",
  description:
    "High-quality architectural 3D models and selected building services in Luxembourg.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />  {/* ← AGORA O HEADER ESTÁ AQUI */}
        <main className="pt-4">{children}</main>
      </body>
    </html>
  );
}
