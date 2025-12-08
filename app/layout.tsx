// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

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
      <body className="bg-[var(--background)] text-slate-900">
        <Header /> {/* HEADER NO TOPO */}
        <main className="pt-4">{children}</main>
      </body>
    </html>
  );
}
