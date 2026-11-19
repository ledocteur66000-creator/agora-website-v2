import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGORA — Shadow Nova",
  description: "Le portail officiel de l'écosystème AGORA / Shadow Nova."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
