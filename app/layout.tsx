import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "PulseSight HR Consulting | Where clarity meets culture",
  description:
    "Consultora boutique de talento: reclutamiento con fit cultural, coaching, diagnóstico organizacional y asesoría legal laboral.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#050A14]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
