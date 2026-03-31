import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Instituto Sarah Padovani Oliboni | Pilates & Fisioterapia",
  description: "Equilíbrio, Ciência e Bem-estar em Sorriso-MT. Especialistas em Pilates, Fisioterapia e Reabilitação.",
  keywords: ["Pilates", "Fisioterapia", "Sorriso", "Mato Grosso", "Sarah Padovani", "Reabilitação"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-off-white font-sans antialiased",
          inter.variable,
          playfair.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Navbar placeholder */}
          <main className="flex-1">{children}</main>
          {/* Footer placeholder */}
        </div>
      </body>
    </html>
  );
}
