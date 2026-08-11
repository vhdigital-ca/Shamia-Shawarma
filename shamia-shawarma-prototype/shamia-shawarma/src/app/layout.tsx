import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Shamia Shawarma — Cuisine syrienne à Orléans | Syrian kitchen in Orléans",
  description:
    "Shamia Shawarma : shawarma syrien grillé à la broche, marinade maison, à Orléans. / Shamia Shawarma: Syrian spit-grilled shawarma, house-made marinade, in Orléans.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-cream text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
