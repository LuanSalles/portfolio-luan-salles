import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luan Salles | Criação de sites profissionais",
  description:
    "Criação de sites institucionais, landing pages e soluções web para profissionais e pequenos negócios.",
  openGraph: {
    title: "Luan Salles | Criação de sites profissionais",
    description:
      "Sites institucionais e landing pages com foco em clareza, versão mobile e contato rápido.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon-ls.svg", type: "image/svg+xml" }],
    shortcut: "/favicon-ls.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
